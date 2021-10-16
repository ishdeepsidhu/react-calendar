/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useCallback, useImperativeHandle, useMemo, useState } from 'react';

import type {
  CalendarProps,
  CalendarRef,
  CalendarViewProps,
  MonthIndices,
  ViewType,
  WeekdayIndices,
} from '../../utils/types';

import {
  isValid,
  isBefore,
  toString,
  checkIfDateIsDisabledHOF,
  checkIfWeekendHOF,
  giveRangeDays,
  validateAndReturnDateFormatter,
  fromString,
  getNextMonth,
  getNextYear,
} from '../../utils/date-utils';

import './styles.css';

import { CalendarView, getInitialDateToShow } from '../calendar-view/CalendarView';

const emptyArray: Date[] = [];
const Views: Record<ViewType, 1> = {
  years: 1,
  months: 1,
  month_dates: 1,
};
const emptyFunc = () => {
  //
};
const styles = { display: 'inline-flex' };

export const DEFAULT_SIZE = 276;

function CalendarWithRef(
  {
    value,
    isMultiSelector,
    className = '',
    isRangeSelector,
    useDarkMode = false,
    weekends,
    highlights = emptyArray,
    initialViewDate,
    allowFewerDatesThanRange = false,
    startOfWeek = 1,
    maxAllowedDate,
    skipDisabledDatesInRange = false,
    minAllowedDate,
    fixedRange,
    isDisabled,
    onPartialRangeSelect,
    noPadRangeCell: noPadRangeCell = true,
    onEachMultiSelect,
    initialView,
    onChange,
    lockView = false,
    disableFuture = false,
    size = DEFAULT_SIZE,
    fontSize = 16,
    disablePast = false,
    disableToday = false,
    showDualCalendar = false,
    hideAdjacentDates = false,
  }: CalendarProps,
  forwardRef: React.Ref<CalendarRef>,
): React.ReactElement<CalendarProps> {
  const isRangeSelectorView = !!isRangeSelector;
  const isDualMode = isRangeSelectorView && !!showDualCalendar;
  const isMultiSelectorView = !isRangeSelectorView && !!isMultiSelector;
  const isFixedRangeView = isRangeSelectorView && typeof fixedRange === 'number' && fixedRange > 0 ? true : false;
  const isNormalView = !isRangeSelectorView && !isMultiSelectorView;

  const startOfTheWeek = startOfWeek;
  const fixedRangeLength = isFixedRangeView ? (fixedRange as number) : 1;

  const highlightsMap = useMemo<Record<string, 1>>(() => {
    if (Array.isArray(highlights)) {
      return highlights
        .filter((d) => isValid(d))
        .reduce((acc, curr) => {
          acc[toString(curr)] = 1;
          return acc;
        }, {} as Record<string, 1>);
    }
    return {};
  }, [highlights]);

  const weekendIndexes = useMemo<WeekdayIndices[]>(() => {
    return Array.isArray(weekends) && (weekends.every((num) => typeof num === 'number') || weekends.length === 0)
      ? weekends
      : [6, 0];
  }, [weekends]);

  const maxDate = useMemo(() => {
    return isValid(maxAllowedDate) ? toString(maxAllowedDate) : undefined;
  }, [maxAllowedDate]);

  const minDate = useMemo(() => {
    return isValid(minAllowedDate) ? toString(minAllowedDate) : undefined;
  }, [minAllowedDate]);

  const viewDate = useMemo(() => {
    return isValid(initialViewDate) ? initialViewDate : undefined;
  }, [initialViewDate]);

  const applyMaxConstraint = useMemo(() => {
    return isValid(maxAllowedDate)
      ? isValid(minAllowedDate)
        ? isBefore(maxAllowedDate, minAllowedDate)
        : true
      : false;
  }, [maxAllowedDate, minAllowedDate]);

  const applyminConstraint = useMemo(() => {
    return isValid(minAllowedDate)
      ? isValid(maxAllowedDate)
        ? isBefore(maxAllowedDate, minAllowedDate)
        : true
      : false;
  }, [maxAllowedDate, minAllowedDate]);

  const checkDisabledForADate = useMemo(
    () =>
      checkIfDateIsDisabledHOF({
        disablePast,
        disableToday,
        disableFuture,
        customDisabledCheck: isDisabled,
        maxDate: maxDate ? fromString(maxDate) : undefined,
        minDate: minDate ? fromString(minDate) : undefined,
        applyMax: applyMaxConstraint,
        applyMin: applyminConstraint,
      }),
    [applyMaxConstraint, applyminConstraint, disableFuture, disablePast, disableToday, isDisabled, maxDate, minDate],
  );

  const checkIfWeekend = useMemo(() => checkIfWeekendHOF(weekendIndexes), [weekendIndexes]);

  const weekendMap: Record<WeekdayIndices, 1> = useMemo(() => {
    return weekendIndexes.reduce((acc, curr) => {
      acc[curr] = 1;
      return acc;
    }, {} as Record<WeekdayIndices, 1>);
  }, [weekendIndexes]);

  const selectedDate = useMemo(
    () => (isNormalView && isValid(value as Date) ? (value as Date) : undefined),
    [isNormalView, value],
  );

  const selectedMultiDates = useMemo<Record<string, Date | undefined>>(() => {
    if (isMultiSelectorView && Array.isArray(value) && value.every(isValid)) {
      return value.reduce((acc, currDate) => {
        if (isValid(currDate)) {
          acc[toString(currDate)] = currDate;
        }
        return acc;
      }, {} as Record<string, Date | undefined>);
    } else {
      return {} as Record<string, Date | undefined>;
    }
  }, [isMultiSelectorView, value]);

  // selected range start date
  const selectedRangeStart = useMemo(() => {
    if (isRangeSelectorView && Array.isArray(value) && isValid(value[0])) {
      const year = value[0].getFullYear();
      const month = value[0].getMonth();
      const date = value[0].getDate();
      return new Date(year, month, date);
    } else {
      return undefined;
    }
  }, [isRangeSelectorView, value]);

  const selectedRangeEnd = useMemo(() => {
    if (
      isRangeSelectorView &&
      selectedRangeStart &&
      Array.isArray(value) &&
      isValid(value[1]) &&
      isBefore(value[1], selectedRangeStart)
    ) {
      const year = value[1].getFullYear();
      const month = value[1].getMonth();
      const date = value[1].getDate();
      return new Date(year, month, date);
    } else {
      return undefined;
    }
  }, [isRangeSelectorView, selectedRangeStart, value]);

  const [isRangeSelectModeOn, setIsRangeSelectModeOn] = useState(false);
  const [newSelectedRangeStart, setNewSelectedRangeStart] = useState<Date | undefined>(selectedRangeStart);
  const [newSelectedRangeEnd, setNewSelectedRangeEnd] = useState<Date | undefined>(selectedRangeEnd);

  // This just tries to find a month to show based on a number
  // of factors for the initial render only
  const [monthInView, setMonthInView] = useState<MonthIndices>(
    () =>
      getInitialDateToShow({
        isNormalView: isNormalView,
        isMultiSelectorView: isMultiSelectorView,
        isRangeSelectorView: isRangeSelectorView,
        selectedDate: selectedDate,
        selectedRangeStart: selectedRangeStart,
        selectedMultiDates: selectedMultiDates,
        viewDate: viewDate,
        minAllowedDate: minDate ? fromString(minDate) : undefined,
        maxAllowedDate: maxDate ? fromString(maxDate) : undefined,
      }).getMonth() as MonthIndices,
  );

  // This just tries to find a year to show based on a number
  // of factors for the initial render only
  const [yearInView, setYearInView] = useState(
    getInitialDateToShow({
      isNormalView: isNormalView,
      isMultiSelectorView: isMultiSelectorView,
      isRangeSelectorView: isRangeSelectorView,
      selectedDate: selectedDate,
      selectedRangeStart: selectedRangeStart,
      selectedMultiDates: selectedMultiDates,
      viewDate: viewDate,
      minAllowedDate: minDate ? fromString(minDate) : undefined,
      maxAllowedDate: maxDate ? fromString(maxDate) : undefined,
    }).getFullYear(),
  );

  const secondCalMonth = getNextMonth(monthInView);
  const secondCalYear = secondCalMonth === 0 ? getNextYear(yearInView) : yearInView;

  useImperativeHandle(forwardRef, () => ({
    setView: (date: Date) => {
      if (date) {
        setMonthInView(date.getMonth() as MonthIndices);
        setYearInView(date.getFullYear());
      }
    },
  }));

  // secondary can't change year
  const changeYearInView = useCallback(
    (year: number) => {
      !lockView && setYearInView(year);
    },
    [lockView],
  );

  const changeMonthInView = useCallback(
    (month: MonthIndices) => {
      !lockView && setMonthInView(month);
    },
    [lockView],
  );

  // View States
  const [view, setView] = useState<ViewType>(initialView && Views[initialView] ? initialView : 'month_dates');

  const changeView = useCallback(
    (view: ViewType) => {
      !lockView && setView(view);
    },
    [lockView, setView],
  );

  const commonProps = useMemo<Omit<CalendarViewProps, 'isSecondary'>>(
    () => ({
      noPadRangeCell: !!noPadRangeCell && isRangeSelectorView,
      showDualCalendar: isDualMode,
      viewDate: viewDate,
      useDarkMode: useDarkMode,
      className: className,
      hideAdjacentDates: !!hideAdjacentDates,
      isNormalView: isNormalView,
      size: size,
      fontSize: fontSize,
      startOfWeek: startOfTheWeek,
      weekends: weekendIndexes,
      isRangeSelectModeOn: isRangeSelectModeOn,
      onChangeRangeSelectMode: setIsRangeSelectModeOn,
      skipDisabledDatesInRange: !!skipDisabledDatesInRange,
      allowFewerDatesThanRange: !!allowFewerDatesThanRange,
      selectedDate: selectedDate,
      selectedRangeStart: selectedRangeStart,
      selectedRangeEnd: selectedRangeEnd,
      lockView: !!lockView,
      newSelectedRangeStart: newSelectedRangeStart,
      onChangeNewSelectedRangeEnd: setNewSelectedRangeEnd,
      onChangeNewSelectedRangeStart: setNewSelectedRangeStart,
      onPartialRangeSelect: onPartialRangeSelect,
      onEachMultiSelect: onEachMultiSelect,
      newSelectedRangeEnd: newSelectedRangeEnd,
      isRangeSelectorView: isRangeSelectorView,
      initialView: initialView,
      fixedRange: fixedRangeLength,
      isFixedRangeView: isFixedRangeView,
      isDisabled: checkDisabledForADate,
      checkIfWeekend: checkIfWeekend,
      selectedMultiDates: selectedMultiDates,
      isMultiSelectorView: isMultiSelectorView,
      maxAllowedDate: maxDate,
      minAllowedDate: minDate,
      onChange: onChange,
      view: view,
      setView: changeView,
      disableFuture: disableFuture,
      disablePast: disablePast,
      highlightsMap: highlightsMap,
      disableToday: disableToday,
      weekendMap: weekendMap,
      yearInView,
      monthInView,
      onChangeViewingMonth: changeMonthInView,
      onChangeViewingYear: changeYearInView,
    }),
    [
      noPadRangeCell,
      isRangeSelectorView,
      isDualMode,
      viewDate,
      useDarkMode,
      className,
      hideAdjacentDates,
      isNormalView,
      size,
      fontSize,
      startOfTheWeek,
      weekendIndexes,
      isRangeSelectModeOn,
      skipDisabledDatesInRange,
      allowFewerDatesThanRange,
      selectedDate,
      selectedRangeStart,
      selectedRangeEnd,
      lockView,
      newSelectedRangeStart,
      onPartialRangeSelect,
      onEachMultiSelect,
      newSelectedRangeEnd,
      initialView,
      fixedRangeLength,
      isFixedRangeView,
      checkDisabledForADate,
      checkIfWeekend,
      selectedMultiDates,
      isMultiSelectorView,
      maxDate,
      minDate,
      onChange,
      view,
      changeView,
      disableFuture,
      disablePast,
      highlightsMap,
      disableToday,
      weekendMap,
      yearInView,
      monthInView,
      changeMonthInView,
      changeYearInView,
    ],
  );

  const computedClass = useMemo(
    () =>
      typeof className === 'string'
        ? `rc_root${useDarkMode ? ' rc_dark' : ''}${isDualMode ? ' rc_dual' : ''}` +
          ` ${className}` +
          `${!!noPadRangeCell && isRangeSelectorView ? ' rc_no_range_padding' : ''}`
        : `rc_root${useDarkMode ? ' rc_dark' : ''}${isDualMode ? ' rc_dual' : ''}` +
          `${!!noPadRangeCell && isRangeSelectorView ? ' rc_no_range_padding' : ''}`,
    [className, useDarkMode, isDualMode, noPadRangeCell, isRangeSelectorView],
  );

  return (
    <div className={computedClass} style={styles}>
      {isDualMode ? (
        <>
          <CalendarView {...commonProps} isSecondary={false} />
          <CalendarView
            {...commonProps}
            view="month_dates"
            setView={emptyFunc}
            isSecondary={true}
            monthInView={secondCalMonth}
            yearInView={secondCalYear}
          />
        </>
      ) : (
        <CalendarView {...commonProps} isSecondary={false} />
      )}
    </div>
  );
}

const Calendar = React.forwardRef(CalendarWithRef);

export default Calendar;

export const giveDaysInRange = giveRangeDays;

/**
 * A combination of YYYY-MM-DD.
 * Eg. MM-DD-YYYY, DD-MM-YYYY etc.
 * Default is '-' i.e 'DD-MM-YYYY'
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const giveFormatter = (format: string) => validateAndReturnDateFormatter(format || 'DD-MM-YYYY');

export * from '../../utils/types';
