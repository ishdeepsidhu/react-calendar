import type { CSSProperties } from 'react';
export type MonthIndices = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export type WeekdayIndices = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type ViewType = 'years' | 'months' | 'month_dates';
export interface DayOfMonthCell {
    date: Date;
    dayOfMonth: number;
    month: MonthIndices;
    year: number;
    dayOfWeek: number;
    activeMonthInView: boolean;
    isInRange: boolean;
    isRangeStart: boolean;
    isRangeEnd: boolean;
    isWeekend: boolean;
    isToday: boolean;
    isHighlight: boolean;
    isGrey: boolean;
    isFirstRow: boolean;
    isLastRow: boolean;
    isFirsColumn: boolean;
    isSelected: boolean;
    isLastColumn: boolean;
    isDisabled: boolean;
}
export interface YearCell {
    year: number;
    isCurrentYear: boolean;
    isSelectedYear: boolean;
}
export interface MonthCell {
    month: MonthIndices;
    isCurrentMonth: boolean;
    isSelectedMonth: boolean;
}
export interface GetDaysOfMonthViewMetrixParams {
    isHighlight?: (date: Date) => boolean;
    isGrey?: (date: Date) => boolean;
    isSelectMultiDate: boolean;
    selectedMultiDates: Record<string, Date | undefined>;
    isRangeView: boolean;
    isRangeSelectModeOn: boolean;
    yearInView: number;
    monthInView: MonthIndices;
    weekendIndexes: WeekdayIndices[];
    startOfTheWeek: WeekdayIndices;
    selectedDate: Date | undefined;
    selectedRangeStart: Date | undefined;
    selectedRangeEnd: Date | undefined;
    newSelectedRangeStart: undefined | Date;
    newSelectedRangeEnd: undefined | Date;
    isDisabled: (date: Date) => boolean;
    checkIfWeekend: (date: Date) => boolean;
}
export interface CheckIfDateIsDisabledHOFParams {
    customDisabledCheck?: (date: Date) => boolean;
}
export type CalendarRef = {
    setView: (date: Date) => void;
};
export interface CSSProps {
    root: {
        rc: CSSProperties;
    };
}
export type Value = Date | Date[] | [Date, Date];
export interface CalendarProps {
    /**
     * Labels for month
     */
    monthsLabel?: Record<MonthIndices, string>;
    /**
     * Labels for weekdays
     */
    weekDaysLabel?: Record<WeekdayIndices, string>;
    /**
     * Hides the prev and next month dates
     */
    hideAdjacentDates?: boolean;
    /**
     * Dark mode
     */
    useDarkMode?: boolean;
    /**
     * Custom classname
     */
    className?: string;
    /**
     * By default it is month_dates
     */
    initialView?: ViewType;
    /**
     * Width & Height of the calendar.
     * Default is 276
     */
    size?: number;
    /**
     * Base font-size of calendar.
     * Default is 16
     */
    fontSize?: number;
    /**
     * In Range Cells have padding between them
     * Default is true
     */
    noPadRangeCell?: boolean;
    /**
     * The initial month and year that will be shown to the user.
     * By default it shows today's date month and year. If a date is selected it shows the selected
     * date's month and year.
     */
    initialViewDate?: Date;
    /**
     * User can not change month/year
     */
    lockView?: boolean;
    /**
     * Value of a single date or an array of dates in ISO format.
     * Only applicable if selectRange is false
     */
    value?: Value;
    /**
     * Renders dual calendars
     */
    showDualCalendar?: boolean;
    /**
     * Renders a multiple dates selector view
     */
    isMultiSelector?: boolean;
    /**
     * Renders a range selector UI for the calendar
     */
    isRangeSelector?: boolean;
    /**
     * Always select n number of days starting from the user's selected date
     */
    fixedRange?: number;
    /**
     * Array of weekday number that are part of weekend.
     * The weekday number depends on the start of the week if provided one.
     * By default this is [6, 0] which Saturday, Sunday respectively as per the 0 based start of the week.
     */
    weekends?: WeekdayIndices[];
    /**
     * By default the calendar starts from Sun which is represented in JS as 0 index.
     * You can provide the index for any other day that you want as start of the week.
     */
    startOfWeek?: WeekdayIndices;
    /**
     * A callback function that can be used to disable specific dates on the calendar.
     */
    isDisabled?: (date: Date) => boolean;
    /**
     * These dates will be highlighted
     */
    isHighlight?: (date: Date) => boolean;
    isGrey?: (date: Date) => boolean;
    /**
     * OnChange callback functionn.
     */
    onChange?: (value: Value) => any | Promise<any> | void;
    /**
     * OnChangeMonth callback functionn.
     */
    onChangeMonth?: (month: number | any) => any | Promise<any> | void;
    /**
     * OnChangeYear callback functionn.
     */
    onChangeYear?: (year: number | any) => any | Promise<any> | void;
    onNextClickCallback?: (value: number | any) => any | Promise<any> | void;
    onPrevClickCallback?: (value: number | any) => any | Promise<any> | void;
    /**
     * This callback will be called when user selects the start range
     */
    onPartialRangeSelect?: (value: Value) => any | Promise<any> | void;
    /**
     * This callback will be called for each date in a multiselect calendar
     */
    onEachMultiSelect?: (value: Value) => any | Promise<any> | void;
}
export interface CalendarWithShortcutProps extends CalendarProps {
    /**
     * Array of custom shortcut buttons based on the ShortcutButtonModel model.
     */
    shortcutButtons: Array<ShortcutButtonModel>;
    /**
     * Position to place the shorcuts. Default is 'left'
     */
    direction?: 'left' | 'right' | 'bottom';
}
type CommonProps = Required<Pick<CalendarProps, 'monthsLabel' | 'weekDaysLabel' | 'lockView' | 'isDisabled' | 'noPadRangeCell' | 'weekends' | 'fixedRange' | 'startOfWeek' | 'fontSize' | 'size' | 'hideAdjacentDates' | 'useDarkMode' | 'showDualCalendar' | 'className'>> & Pick<CalendarProps, 'isHighlight' | 'isGrey' | 'onEachMultiSelect' | 'onPartialRangeSelect' | 'onChange' | 'initialView' | 'onChangeMonth' | 'onChangeYear' | 'onNextClickCallback' | 'onPrevClickCallback'>;
export interface CalendarViewProps extends CommonProps {
    onChangeNewSelectedRangeEnd: (date: Date | undefined) => unknown;
    onChangeNewSelectedRangeStart: (date: Date | undefined) => unknown;
    onChangeRangeSelectMode: (on: boolean) => void;
    checkIfWeekend: (date: Date) => boolean;
    isSecondary: boolean;
    view: ViewType;
    setView: (view: ViewType) => void;
    showDualCalendar: boolean;
    isRangeSelectorView: boolean;
    isFixedRangeView: boolean;
    isMultiSelectorView: boolean;
    isRangeSelectModeOn: boolean;
    isNormalView: boolean;
    selectedDate: Date | undefined;
    selectedRangeStart: Date | undefined;
    selectedRangeEnd: Date | undefined;
    newSelectedRangeStart: Date | undefined;
    newSelectedRangeEnd: Date | undefined;
    selectedMultiDates: Record<string, Date | undefined>;
    viewDate: Date | undefined;
    weekendMap: Record<WeekdayIndices, 1>;
    monthInView: MonthIndices;
    yearInView: number;
    onChangeViewingYear: (year: number) => unknown;
    onChangeViewingMonth: (month: MonthIndices) => unknown;
}
export type DayOfMonthSelectorProps = Pick<CalendarViewProps, 'isHighlight' | 'isGrey' | 'onChangeNewSelectedRangeEnd' | 'onChangeNewSelectedRangeStart' | 'noPadRangeCell' | 'startOfWeek' | 'fixedRange' | 'selectedDate' | 'selectedRangeStart' | 'monthInView' | 'yearInView' | 'selectedRangeEnd' | 'newSelectedRangeStart' | 'newSelectedRangeEnd' | 'isRangeSelectorView' | 'isFixedRangeView' | 'weekends' | 'selectedMultiDates' | 'isMultiSelectorView' | 'isRangeSelectModeOn' | 'onChangeRangeSelectMode' | 'hideAdjacentDates' | 'lockView' | 'isDisabled' | 'checkIfWeekend' | 'onChange' | 'onChangeMonth' | 'onChangeYear' | 'onPartialRangeSelect' | 'onEachMultiSelect'>;
export interface MonthSelectorProps extends Pick<CalendarViewProps, 'monthsLabel'> {
    onChangeViewType: (view: 'month_dates' | 'months' | 'years') => unknown;
    onChangeViewingMonth: (month: MonthIndices) => unknown;
}
export interface YearSelectorProps {
    onChangeViewType: (view: 'month_dates' | 'months' | 'years') => unknown;
    onChangeViewingYear: (year: number) => unknown;
    yearMatrixStart: number;
    yearMatrixEnd: number;
}
export interface WeekdayRowProps extends Pick<CalendarViewProps, 'weekDaysLabel'> {
    startOfWeek: WeekdayIndices;
    weekendMap: Record<WeekdayIndices, 1>;
}
export interface HeaderProps extends Pick<CalendarViewProps, 'monthsLabel'> {
    onClickPrev: () => any;
    onClickNext: () => any;
    onChangeViewType: (view: ViewType) => any;
    viewType: ViewType;
    showDualCalendar: boolean;
    isSecondary: boolean;
    monthInView: MonthIndices;
    yearInView: number;
    yearMatrixStart: number;
    yearMatrixEnd: number;
}
export interface DayOfMonthCellProps {
    noPadRangeCell: boolean;
    cell: DayOfMonthCell;
    onDateClicked: (cell: DayOfMonthCell) => unknown;
}
export interface MonthCellProps extends Pick<CalendarViewProps, 'monthsLabel'> {
    cell: MonthCell;
    onMonthClicked: (cell: MonthCell) => unknown;
}
export interface YearCellProps {
    cell: YearCell;
    onYearClicked: (cell: YearCell) => unknown;
}
export interface ShortcutButtonModel {
    id: string;
    render: () => React.ReactElement<unknown>;
}
export {};
