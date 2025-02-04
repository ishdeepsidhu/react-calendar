import e, {
    memo as t,
    useMemo as n,
    useCallback as r,
    useEffect as a,
    useState as i,
    useRef as l,
    useImperativeHandle as c
} from "react";
var o = function() {
        return o = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e
        }, o.apply(this, arguments)
    },
    s = {
        0: "Su",
        1: "Mo",
        2: "Tu",
        3: "We",
        4: "Th",
        5: "Fr",
        6: "Sa"
    },
    u = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December"
    };

function d(e) {
    return "".concat(e.getFullYear() < 10 ? "0" + e.getFullYear() : e.getFullYear(), "_").concat(e.getMonth() < 10 ? "0" + e.getMonth() : e.getMonth(), "_").concat(e.getDate() < 10 ? "0" + e.getDate() : e.getDate())
}

function g(e, t) {
    if (t.getFullYear() < e.getFullYear()) return !0;
    if (t.getFullYear() === e.getFullYear()) {
        if (t.getMonth() < e.getMonth()) return !0;
        if (t.getMonth() === e.getMonth() && t.getDate() < e.getDate()) return !0
    }
    return !1
}

function h(e) {
    return null != e && e.getTime && !isNaN(e.getTime())
}

function f(e, t) {
    return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()
}

function y(e, t, n) {
    var r = e.getFullYear(),
        a = e.getMonth(),
        i = e.getDate(),
        l = t.getFullYear(),
        c = t.getMonth(),
        o = t.getDate(),
        s = n.getFullYear(),
        u = n.getMonth(),
        d = n.getDate();
    return r <= s && s <= l && (r < s && s < l || (r === l ? a <= u && u <= c && (a < u && u < c || (a === c ? i <= d && d <= o && u === c : a === u ? i <= d : c === u && d <= o)) : r === s ? u > a || u === a && d >= i : l === s && (u < c || u === c && d <= o)))
}

function w(e) {
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
}

function m(e, t) {
    return {
        0: 31,
        1: w(e) ? 29 : 28,
        2: 31,
        3: 30,
        4: 31,
        5: 30,
        6: 31,
        7: 31,
        8: 30,
        9: 31,
        10: 30,
        11: 31
    } [t]
}

function v(e) {
    return m(e.getFullYear(), e.getMonth()) === e.getDate()
}

function D(e) {
    return 0 === e ? 11 : e - 1
}

function _(e) {
    return 11 === e ? 0 : e + 1
}

function b(e) {
    return 1 === e ? 1 : e - 1
}

function S(e) {
    return e + 1
}

function k(e) {
    return function(e) {
        return 11 === e.getMonth() && v(e)
    }(e) ? new Date(e.getFullYear() + 1, 0, 1) : v(e) ? new Date(e.getFullYear(), e.getMonth() + 1, 1) : new Date(e.getFullYear(), e.getMonth(), e.getDate() + 1)
}

function M(e, t) {
    var n = 6 - t;
    return e <= n ? e + t : e - n - 1
}

function R(e) {
    return e % 20 == 0 ? 20 * (e / 20 - 1) + 1 : 20 * Number(Math.floor(e / 20)) + 1
}

function E(e) {
    for (var t = e.isRangeSelectModeOn, n = e.isRangeView, r = e.selectedDate, a = e.selectedRangeStart, i = e.selectedRangeEnd, l = e.isHighlight, c = e.newSelectedRangeStart, o = e.newSelectedRangeEnd, s = e.isSelectMultiDate, u = e.selectedMultiDates, d = e.yearInView, g = e.monthInView, h = e.startOfTheWeek, f = e.isDisabled, y = e.checkIfWeekend, w = [
            [],
            [],
            [],
            [],
            [],
            []
        ], v = function(e, t, n) {
            var r = new Date;
            return r.setDate(1), r.setMonth(t), r.setFullYear(e),
                function(e, t) {
                    return void 0 === t && (t = 0), e >= t ? e - t : 6 - t + 1 + e
                }(r.getDay(), n)
        }(d, g, h), S = new Date, k = m(d, g), M = 0 === g, R = 11 === g, E = m(M ? b(d) : d, D(g)), C = 0, V = 0, x = E - (v - 1); x <= E; x++) 7 === V && (V = 0, C++), w[C].push(p({
        currDate: new Date(M ? b(d) : d, D(g), x),
        activeMonthInView: !1,
        isHighlight: l,
        newSelectedRangeEnd: o,
        newSelectedRangeStart: c,
        selectedDate: r,
        selectedRangeEnd: i,
        selectedRangeStart: a,
        isDisabled: f,
        isRangeSelectModeOn: t,
        isRangeView: n,
        isSelectMultiDate: s,
        row: C,
        weekColumn: V,
        checkIfWeekend: y,
        today: S,
        selectedMultiDates: u,
        startOfTheWeek: h
    })), V++;
    for (var Y = 1; Y <= k; Y++) 7 === V && (V = 0, C++), w[C].push(p({
        currDate: new Date(d, g, Y),
        activeMonthInView: !0,
        isHighlight: l,
        newSelectedRangeEnd: o,
        newSelectedRangeStart: c,
        selectedDate: r,
        selectedRangeEnd: i,
        selectedRangeStart: a,
        isDisabled: f,
        isRangeSelectModeOn: t,
        isRangeView: n,
        isSelectMultiDate: s,
        row: C,
        weekColumn: V,
        checkIfWeekend: y,
        today: S,
        selectedMultiDates: u,
        startOfTheWeek: h
    })), V++;
    for (var I = 1; w[5].length < 7;) 7 === V && (V = 0, C++), w[C].push(p({
        currDate: new Date(R ? d + 1 : d, _(g), I),
        activeMonthInView: !1,
        isHighlight: l,
        newSelectedRangeEnd: o,
        newSelectedRangeStart: c,
        selectedDate: r,
        selectedRangeEnd: i,
        selectedRangeStart: a,
        isDisabled: f,
        isRangeSelectModeOn: t,
        isRangeView: n,
        isSelectMultiDate: s,
        row: C,
        weekColumn: V,
        checkIfWeekend: y,
        today: S,
        selectedMultiDates: u,
        startOfTheWeek: h
    })), V++, I++;
    return w
}

function p(e) {
    var t = e.currDate,
        n = e.activeMonthInView,
        r = e.isHighlight,
        a = e.newSelectedRangeEnd,
        i = e.newSelectedRangeStart,
        l = e.selectedDate,
        c = e.selectedRangeEnd,
        o = e.selectedRangeStart,
        s = e.isDisabled,
        u = e.isRangeSelectModeOn,
        w = e.isRangeView,
        m = e.isSelectMultiDate,
        v = e.row,
        D = e.weekColumn,
        _ = e.checkIfWeekend,
        b = e.today,
        S = e.selectedMultiDates,
        k = e.startOfTheWeek;
    return {
        date: t,
        dayOfMonth: t.getDate(),
        month: t.getMonth(),
        activeMonthInView: n,
        isHighlight: "function" == typeof r && r(t),
        isInRange: !!w && (u ? !(!h(i) || !h(a)) && (g(a, i) ? y(i, a, t) : y(a, i, t)) : !!o && !!c && y(o, c, t)),
        isRangeStart: !!w && (u ? !!h(i) && f(i, t) : !!o && f(o, t)),
        isRangeEnd: !!w && (!u && (!!c && f(c, t))),
        year: t.getFullYear(),
        dayOfWeek: M(D, k),
        isWeekend: _(t),
        isToday: f(t, b),
        isFirstRow: 0 === v,
        isLastRow: 5 === v,
        isFirsColumn: 0 === D,
        isLastColumn: 6 === D,
        isSelected: m ? !!S[d(t)] : !w && (!!l && (t.getMonth() === l.getMonth() && t.getFullYear() === l.getFullYear() && t.getDate() === l.getDate())),
        isDisabled: s(t)
    }
}
var C = {
    root: {
        height: "12%",
        padding: "1% 2%",
        display: "flex",
        alignTtems: "center",
        width: "100%"
    },
    rc_header_nav: {
        width: "10.14%",
        height: "100%",
        flex: "0 0 auto"
    },
    rch_header_label: {
        width: "65.21%",
        height: "100%",
        margin: "0 4.34%",
        flex: "1 1 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
};
var V = t((function(t) {
        var n = t.onClickPrev,
            r = t.onChangeViewType,
            a = t.monthsLabel,
            i = t.showDualCalendar,
            l = t.isSecondary,
            c = t.onClickNext,
            o = t.viewType,
            s = t.monthInView,
            u = t.yearInView,
            d = t.yearMatrixEnd,
            g = t.yearMatrixStart;
        return e.createElement("header", {
            style: C.root,
            className: "rc_header"
        }, i && l ? null : e.createElement("button", {
            type: "button",
            style: C.rc_header_nav,
            className: "rc_header_nav rc_header_nav-prev",
            onClick: n
        }, e.createElement("span", null, "←")), "month_dates" === o ? e.createElement("button", {
            type: "button",
            style: C.rch_header_label,
            className: "rc_header_label rc_header_label-days-of-month",
            onClick: function() {
                return !l && r("years")
            }
        }, e.createElement("div", null, e.createElement("span", null, a[s])), e.createElement("div", null, e.createElement("span", null, u))) : "months" === o ? e.createElement("button", {
            type: "button",
            style: C.rch_header_label,
            className: "rc_header_label rc_header_label-months"
        }, e.createElement("div", {
            onClick: function() {
                return !l && r("years")
            }
        }, e.createElement("span", null, u))) : e.createElement("button", {
            type: "button",
            style: C.rch_header_label,
            className: "rc_header_label rc_header_label-years",
            onClick: function() {
                return !l && r("month_dates")
            }
        }, e.createElement("div", null, e.createElement("span", null, g, "-", d))), i && !l && "month_dates" === o ? null : e.createElement("button", {
            type: "button",
            style: C.rc_header_nav,
            className: "rc_header_nav rc_header_nav-next",
            onClick: c
        }, e.createElement("span", null, "→")))
    })),
    x = {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    Y = {
        width: "95%",
        height: "45%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };
var I = t((function(t) {
        var n = t.cell,
            r = t.onMonthClicked,
            a = t.monthsLabel;
        return e.createElement("div", {
            style: x
        }, e.createElement("button", {
            type: "button",
            style: Y,
            onClick: function() {
                r(n)
            }
        }, a[n.month]))
    })),
    N = {
        root: {
            height: "100%"
        },
        "rc_body-row": {
            height: "24.9%",
            display: "flex",
            width: "100%"
        },
        "rc_body-cell": {
            flexBasis: "33.33%",
            maxWidth: "33.33%",
            height: "100%"
        }
    };
var F = t((function(t) {
        var r = t.onChangeViewingMonth,
            a = t.onChangeViewType,
            i = t.monthsLabel,
            l = n((function() {
                return function(e) {
                    var t = Array.from({
                        length: 12
                    }, (function(t, n) {
                        return {
                            month: n,
                            isCurrentMonth: (new Date).getMonth() === n,
                            isSelectedMonth: 1 === e[n]
                        }
                    }));
                    return [t.slice(0, 3), t.slice(3, 6), t.slice(6, 9), t.slice(9, 12)]
                }({})
            }), []);
        return e.createElement("div", {
            role: "grid",
            style: N.root,
            className: "rc_body-months"
        }, l.map((function(t, n) {
            return e.createElement("div", {
                style: N["rc_body-row"],
                className: "rc_body-row",
                key: n
            }, t.map((function(t) {
                return e.createElement("div", {
                    style: N["rc_body-cell"],
                    className: "rc_body-cell".concat(t.isCurrentMonth ? " rc_this_month" : ""),
                    key: t.month
                }, e.createElement(I, {
                    monthsLabel: i,
                    cell: t,
                    onMonthClicked: function(e) {
                        r(e.month), a("month_dates")
                    }
                }))
            })))
        })))
    })),
    O = {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    W = {
        width: "95%",
        height: "45%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };
var A = t((function(t) {
        var n = t.cell,
            r = t.onYearClicked;
        return e.createElement("div", {
            style: O
        }, e.createElement("button", {
            type: "button",
            style: W,
            onClick: function() {
                r(n)
            }
        }, n.year))
    })),
    T = {
        root: {
            height: "100%"
        },
        "rc_body-row": {
            height: "24.9%",
            display: "flex",
            width: "100%"
        },
        "rc_body-cell": {
            width: "20%",
            height: "100%"
        }
    };
var L = t((function(t) {
        var r = t.onChangeViewType,
            a = t.onChangeViewingYear,
            i = t.yearMatrixStart,
            l = n((function() {
                return function(e, t) {
                    var n = Array.from({
                        length: 20
                    }, (function(n, r) {
                        return {
                            year: e + r,
                            isCurrentYear: (new Date).getFullYear() === e + r,
                            isSelectedYear: 1 === t[e + r]
                        }
                    }));
                    return [n.slice(0, 5), n.slice(5, 10), n.slice(10, 15), n.slice(15, 20)]
                }(i, {})
            }), [i]);
        return e.createElement("div", {
            role: "grid",
            style: T.root,
            className: "rc_body-years"
        }, l.map((function(t, n) {
            return e.createElement("div", {
                style: T["rc_body-row"],
                className: "rc_body-row",
                key: n
            }, t.map((function(t) {
                return e.createElement("div", {
                    style: T["rc_body-cell"],
                    className: "rc_body-cell".concat(t.isCurrentYear ? " rc_this_year" : ""),
                    key: t.year
                }, e.createElement(A, {
                    cell: t,
                    onYearClicked: function(e) {
                        a(e.year), r("months")
                    }
                }))
            })))
        })))
    })),
    j = {
        "rc_body-weekdays": {
            height: "15%",
            margin: "0",
            padding: 0,
            display: "flex",
            width: "100%",
            listStyle: "none"
        },
        "rc_body-weekdays_cell": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            flexBasis: "14.286%",
            maxWidth: "14.286%"
        },
        "rc_body-weekdays_cell_value": {
            width: "65.95%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }
    };
var P = t((function(t) {
        var r = t.startOfWeek,
            a = t.weekendMap,
            i = t.weekDaysLabel,
            l = n((function() {
                return function(e) {
                    void 0 === e && (e = 0);
                    var t = Object.keys(s).slice(e, 7).concat(Object.keys(s).slice(0, e));
                    return {
                        map: t.reduce((function(e, t) {
                            return e[Number(t)] = s[Number(t)], e
                        }), {}),
                        order: t
                    }
                }(r)
            }), [r]).order;
        return e.createElement("ul", {
            style: j["rc_body-weekdays"],
            className: "rc_body-weekdays"
        }, l.map((function(t) {
            return e.createElement("li", {
                style: j["rc_body-weekdays_cell"],
                key: t,
                className: "rc_body-weekdays_cell".concat(a[t] ? " rc_wknd" : "")
            }, e.createElement("div", {
                style: j["rc_body-weekdays_cell_value"]
            }, e.createElement("span", null, i[t])))
        })))
    })),
    H = {
        width: "100%",
        height: "99%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };
var z = t((function(t) {
        var r = t.cell,
            a = t.onDateClicked,
            i = t.noPadRangeCell,
            l = n((function() {
                return function(e) {
                    return {
                        width: e ? "100%" : "69.80%",
                        height: e ? "90%" : "80%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }
                }(i)
            }), [i]),
            c = n((function() {
                return function(e) {
                    return {
                        width: e ? "69.8%" : "100%",
                        height: "92%"
                    }
                }(i)
            }), [i]);
        return e.createElement("div", {
            style: H
        }, e.createElement("div", {
            style: l,
            className: "rc_body-cell_value"
        }, e.createElement("button", {
            type: "button",
            style: c,
            disabled: r.isDisabled,
            tabIndex: r.isDisabled ? -1 : 0,
            onClick: function() {
                return a(r)
            }
        }, r.dayOfMonth)))
    })),
    q = {
        "rc_body-days-of-month": {
            height: "85%"
        },
        "rc_body-row": {
            height: "16.664%",
            display: "flex",
            width: "100%",
            alignItems: "center"
        },
        "rc_body-cell": {
            flexBasis: "14.286%",
            maxWidth: "14.286%",
            height: "100%",
            display: "flex",
            aligntems: "center"
        }
    };
var B = t((function(t) {
        var a = t.selectedDate,
            i = t.selectedRangeStart,
            l = t.selectedRangeEnd,
            c = t.newSelectedRangeStart,
            s = t.startOfWeek,
            u = t.newSelectedRangeEnd,
            h = t.isRangeSelectorView,
            f = t.onChangeRangeSelectMode,
            y = t.fixedRange,
            w = t.isFixedRangeView,
            m = t.isRangeSelectModeOn,
            v = t.isDisabled,
            D = t.selectedMultiDates,
            _ = t.isMultiSelectorView,
            b = t.monthInView,
            S = t.hideAdjacentDates,
            M = t.onChangeNewSelectedRangeEnd,
            R = t.onChangeNewSelectedRangeStart,
            p = t.weekends,
            C = t.onChange,
            V = t.yearInView,
            x = t.noPadRangeCell,
            Y = t.lockView,
            I = t.checkIfWeekend,
            N = t.onPartialRangeSelect,
            F = t.isHighlight,
            O = t.onEachMultiSelect,
            W = n((function() {
                return E({
                    selectedDate: a,
                    selectedRangeStart: i,
                    selectedRangeEnd: l,
                    newSelectedRangeStart: c,
                    newSelectedRangeEnd: u,
                    checkIfWeekend: I,
                    isRangeView: h || w,
                    isRangeSelectModeOn: m,
                    weekendIndexes: p,
                    selectedMultiDates: D,
                    isSelectMultiDate: _,
                    yearInView: V,
                    monthInView: b,
                    startOfTheWeek: s,
                    isHighlight: F,
                    isDisabled: v
                })
            }), [a, F, i, l, c, u, h, w, m, I, p, D, _, V, b, s, v]),
            A = r((function(e) {
                var t = e.date;
                if (!(Y && t.getMonth() !== b))
                    if (h && !w)
                        if (m && c) {
                            var n = new Date(c.getFullYear(), c.getMonth(), c.getDate());
                            if (g(n, t)) {
                                var r = t,
                                    a = n;
                                "function" == typeof C && C([r, a])
                            } else {
                                r = n, a = t;
                                "function" == typeof C && C([r, a])
                            }
                            M(void 0), f(!1)
                        } else R(t), M(void 0), f(!0), N && N(t);
                else if (h && w) {
                    a = function(e, t) {
                        for (var n = t, r = e, a = 0; n > 0 && 1500 !== a;) r = k(r), n--, a++;
                        return {
                            endDate: r
                        }
                    }(t, y).endDate;
                    "function" == typeof C && C([t, a])
                } else if (_) {
                    var i = d(t),
                        l = o({}, D);
                    D[i] ? l[i] = void 0 : l[i] = t, O && O(t), C && C(Object.keys(l).filter((function(e) {
                        return !!l[e]
                    })).map((function(e) {
                        return l[e]
                    })))
                } else "function" == typeof C && C(t)
            }), [Y, b, h, w, _, m, c, M, f, C, R, N, y, D, O]);
        return e.createElement("div", {
            style: q["rc_body-days-of-month"],
            className: "rc_body-days-of-month",
            role: "grid"
        }, W.map((function(t, n) {
            return e.createElement("div", {
                style: q["rc_body-row"],
                className: "rc_body-row",
                key: n
            }, t.map((function(t) {
                return e.createElement("div", {
                    style: q["rc_body-cell"],
                    onMouseEnter: function() {
                        h && m && M(new Date(t.year, t.month, t.dayOfMonth))
                    },
                    key: d(t.date),
                    className: "rc_body-cell".concat(t.activeMonthInView ? " rc_active" : "").concat(t.isWeekend ? " rc_wknd" : "").concat(t.isToday ? " rc_today" : "").concat(t.isFirstRow ? " rc_fr" : "").concat(t.isToday ? " rc_today" : "").concat(t.isHighlight ? " rc_highlight" : "").concat(t.isLastRow ? " rc_lr" : "").concat(t.isFirsColumn ? " rc_fc" : "").concat(t.isLastColumn ? " rc_lc" : "").concat(t.isSelected && !h ? " rc_selected" : "").concat(t.isDisabled ? " rc_disabled" : "").concat(t.isInRange ? " rc_in_range" : "").concat(t.isRangeStart ? " rc_range_start" : "").concat(t.isRangeEnd ? " rc_range_end" : "").concat(m ? " rc_range_mode" : "")
                }, !t.activeMonthInView && S ? null : e.createElement(z, {
                    noPadRangeCell: x,
                    cell: t,
                    onDateClicked: A
                }))
            })))
        })))
    })),
    J = {
        height: "88%",
        width: "100%"
    };
var U = t((function(t) {
    var c = t.size,
        o = t.fontSize,
        s = t.isMultiSelectorView,
        u = t.isRangeSelectorView,
        d = t.monthInView,
        g = t.yearInView,
        f = t.showDualCalendar,
        y = t.onChangeViewingMonth,
        w = t.onChangeViewingYear,
        m = t.selectedDate,
        v = t.selectedRangeStart,
        k = t.view,
        M = t.setView,
        E = t.isSecondary,
        p = t.monthsLabel,
        C = t.weekDaysLabel,
        x = t.selectedMultiDates,
        Y = t.lockView,
        I = t.startOfWeek,
        N = t.noPadRangeCell,
        O = t.weekends,
        W = t.isRangeSelectModeOn,
        A = t.onChangeRangeSelectMode,
        T = t.hideAdjacentDates,
        j = t.selectedRangeEnd,
        H = t.newSelectedRangeStart,
        z = t.onChangeNewSelectedRangeEnd,
        q = t.onChangeNewSelectedRangeStart,
        U = t.onPartialRangeSelect,
        G = t.onEachMultiSelect,
        K = t.newSelectedRangeEnd,
        Q = t.fixedRange,
        X = t.isFixedRangeView,
        Z = t.isDisabled,
        $ = t.checkIfWeekend,
        ee = t.onChange,
        te = t.onChangeMonth,
        ne = t.onChangeYear,
        re = t.onPrevClickCallback,
        ae = t.onNextClickCallback,
        ie = t.weekendMap,
        le = t.isHighlight,
        ce = n((function() {
            return function(e, t) {
                return {
                    root: {
                        rc: {
                            width: "".concat(e, "px"),
                            height: "".concat(e, "px"),
                            fontSize: "".concat(t, "px"),
                            display: "flex",
                            alignItems: "flex-start",
                            flexDirection: "column",
                            boxSizing: "border-box"
                        }
                    }
                }
            }(c, o)
        }), [c, o]);
    a((function() {
        h(m) && (y(m.getMonth()), w(m.getFullYear()))
    }), [E, y, w, m]), a((function() {
        var e = Object.keys(x).map((function(e) {
            return x[e]
        })).filter((function(e) {
            return h(e)
        }));
        1 === e.length && e[0] && (y(e[0].getMonth()), w(e[0].getFullYear()))
    }), [E, y, w, x]);
    var oe = i(R(g)),
        se = oe[0],
        ue = oe[1];
    a((function() {
        ue(R(g))
    }), [g, ue]);
    var de = n((function() {
            return [e = se, e + 19];
            var e
        }), [se]),
        ge = de[0],
        he = de[1],
        fe = r((function() {
            var e;
            "month_dates" === k && (0 === d && w(b(g)), y(D(d)));
            "years" === k && ue(1 === (e = se) ? 1 : R(e - 1)), "months" === k && w(1 !== g ? g - 1 : 1), re && re(k)
        }), [k, d, y, w, g, se, re]),
        ye = r((function() {
            "month_dates" === k && (E ? (0 === d && w(g), y(d)) : (11 === d && w(S(g)), y(_(d))));
            "years" === k && ue(R(se + 20)), "months" === k && w(S(g)), ae && ae(k)
        }), [k, E, d, y, w, g, se, ae]),
        we = l(null),
        me = l([]),
        ve = i(!1),
        De = ve[0],
        _e = ve[1];
    return a((function() {
        if (De) {
            var e = we.current;
            if (e) {
                me.current = e ? Array.from(e.querySelectorAll('[role="grid"] button:not([disabled])')) : [];
                var t = me.current[0],
                    n = me.current[me.current.length - 1],
                    r = e.querySelector('[role="grid"] .rc_selected button') || e.querySelector('[role="grid"] .rc_range_end button') || e.querySelector('[role="grid"] .rc_range_start button'),
                    a = e.querySelector('[role="grid"] .rc_active button'),
                    i = e.querySelector(".rc_header");
                if (i) {
                    var l = i.querySelector(".rc_header_nav-prev"),
                        c = i.querySelector(".rc_header_nav-next"),
                        o = i.querySelector(".rc_header_label");
                    e && !e.contains(document.activeElement) && (r ? r.focus() : a ? a.focus() : t.focus());
                    var s = function(e, n) {
                        var r, a, i = n === t;
                        return e ? (r = e, a = me.current.indexOf(r), i ? a < me.current.length - 1 ? me.current[a + 1] : n : a - 1 > -1 ? me.current[a - 1] : n) : null
                    };
                    return e.addEventListener("keydown", u, {
                            capture: !0
                        }),
                        function() {
                            e.removeEventListener("keydown", u, {
                                capture: !0
                            })
                        }
                }
            }
        }

        function u(e) {
            var r = e.target,
                a = me.current && me.current.find((function(e) {
                    return e === r
                }));
            if ("Tab" === e.key && (e.preventDefault(), (null == i ? void 0 : i.contains(document.activeElement)) ? t.focus() : null == l || l.focus()), "ArrowDown" === e.key) {
                e.preventDefault();
                var u = "month_dates" === k ? 7 : "months" === k ? 3 : 5;
                if (!a) return;
                for (var d = a; u > 0;) d = s(d, t), u--;
                null == d || d.focus()
            }
            if ("ArrowUp" === e.key) {
                e.preventDefault();
                u = "month_dates" === k ? 7 : "months" === k ? 3 : 5;
                if (!a) return;
                for (d = a; u > 0;) d = s(d, n), u--;
                null == d || d.focus()
            }
            if ("ArrowLeft" === e.key)
                if (e.preventDefault(), document.activeElement === l) null == c || c.focus();
                else if (document.activeElement === o) null == l || l.focus();
            else if (document.activeElement === c) null == o || o.focus();
            else {
                if (!a) return;
                null == (d = s(a, n)) || d.focus()
            }
            if ("ArrowRight" === e.key)
                if (e.preventDefault(), document.activeElement === l) null == o || o.focus();
                else if (document.activeElement === o) null == c || c.focus();
            else if (document.activeElement === c) null == l || l.focus();
            else {
                if (!a) return;
                null == (d = s(a, t)) || d.focus()
            }
            "Home" === e.key && (e.preventDefault(), t.focus()), "End" === e.key && (e.preventDefault(), n.focus()), "Escape" === e.key && (e.preventDefault(), n.focus(), n.blur())
        }
    }), [we, k, De, d, g, se]), e.createElement("div", {
        onFocus: function() {
            !De && _e(!0)
        },
        onBlur: function(e) {
            e.currentTarget.contains(e.target) || _e(!1)
        },
        style: ce.root.rc,
        className: "rc",
        ref: we
    }, e.createElement(V, {
        monthsLabel: p,
        isSecondary: E,
        showDualCalendar: f,
        onClickPrev: fe,
        onClickNext: ye,
        onChangeViewType: M,
        viewType: k,
        monthInView: d,
        yearInView: g,
        yearMatrixStart: ge,
        yearMatrixEnd: he
    }), e.createElement("div", {
        style: J,
        className: "rc_body"
    }, "months" === k && e.createElement(F, {
        monthsLabel: p,
        onChangeViewType: M,
        onChangeViewingMonth: y
    }), "years" === k && e.createElement(L, {
        onChangeViewType: M,
        onChangeViewingYear: w,
        yearMatrixStart: ge,
        yearMatrixEnd: he
    }), "month_dates" === k && e.createElement(e.Fragment, null, e.createElement(P, {
        weekDaysLabel: C,
        startOfWeek: I,
        weekendMap: ie
    }), e.createElement(B, {
        noPadRangeCell: N,
        isRangeSelectModeOn: W,
        onChangeRangeSelectMode: A,
        hideAdjacentDates: T,
        selectedDate: m,
        selectedRangeStart: v,
        selectedRangeEnd: j,
        lockView: Y,
        newSelectedRangeStart: H,
        startOfWeek: I,
        onChangeNewSelectedRangeEnd: z,
        onChangeNewSelectedRangeStart: q,
        onPartialRangeSelect: U,
        onEachMultiSelect: G,
        newSelectedRangeEnd: K,
        isRangeSelectorView: u,
        fixedRange: Q,
        isFixedRangeView: X,
        isDisabled: Z,
        checkIfWeekend: $,
        selectedMultiDates: x,
        isMultiSelectorView: s,
        monthInView: d,
        weekends: O,
        onChange: ee,
        onChangeMonth: te,
        onChangeYear: ne,
        yearInView: g,
        isHighlight: le
    }))))
}));

function G(e) {
    var t = e.isMultiSelectorView && e.selectedMultiDates && e.selectedMultiDates[Object.keys(e.selectedMultiDates)[0]];
    return h(e.viewDate) ? e.viewDate : e.isNormalView && h(e.selectedDate) ? e.selectedDate : e.isRangeSelectorView && e.selectedRangeStart ? e.selectedRangeStart : t && h(t) ? t : new Date
}
var K = {
        years: 1,
        months: 1,
        month_dates: 1
    },
    Q = function() {},
    X = {
        display: "inline-flex"
    };
var Z = e.forwardRef((function(t, a) {
        var l = t.value,
            f = t.isMultiSelector,
            y = t.className,
            w = void 0 === y ? "" : y,
            m = t.isRangeSelector,
            v = t.useDarkMode,
            D = void 0 !== v && v,
            b = t.weekends,
            M = t.initialViewDate,
            R = t.startOfWeek,
            E = void 0 === R ? 1 : R,
            p = t.fixedRange,
            C = t.isDisabled,
            V = t.onPartialRangeSelect,
            x = t.noPadRangeCell,
            Y = void 0 !== x && x,
            I = t.onEachMultiSelect,
            N = t.initialView,
            F = t.onChange,
            O = t.onChangeMonth,
            W = t.onChangeYear,
            A = t.onNextClickCallback,
            T = t.onPrevClickCallback,
            L = t.isHighlight,
            j = t.monthsLabel,
            P = void 0 === j ? u : j,
            H = t.weekDaysLabel,
            z = void 0 === H ? s : H,
            q = t.lockView,
            B = void 0 !== q && q,
            J = t.size,
            Z = void 0 === J ? 276 : J,
            $ = t.fontSize,
            ee = void 0 === $ ? 16 : $,
            te = t.showDualCalendar,
            ne = void 0 !== te && te,
            re = t.hideAdjacentDates,
            ae = void 0 !== re && re,
            ie = !!m,
            le = ie && !!ne,
            ce = !ie && !!f,
            oe = !!(ie && "number" == typeof p && p > 0),
            se = !ie && !ce,
            ue = E,
            de = oe ? p : 1,
            ge = n((function() {
                return Array.isArray(b) && (b.every((function(e) {
                    return "number" == typeof e
                })) || 0 === b.length) ? b : [6, 0]
            }), [b]),
            he = n((function() {
                return h(M) ? M : void 0
            }), [M]),
            fe = n((function() {
                return e = {
                        customDisabledCheck: C
                    }.customDisabledCheck,
                    function(t) {
                        return "function" == typeof e && e(t)
                    };
                var e
            }), [C]),
            ye = n((function() {
                return function(e) {
                    var t = e.reduce((function(e, t) {
                        return e[t] = 1, e
                    }), {});
                    return function(e) {
                        return 1 === t[e.getDay()]
                    }
                }(ge)
            }), [ge]),
            we = n((function() {
                return ge.reduce((function(e, t) {
                    return e[t] = 1, e
                }), {})
            }), [ge]),
            me = n((function() {
                return se && h(l) ? l : void 0
            }), [se, l]),
            ve = n((function() {
                return ce && Array.isArray(l) && l.every(h) ? l.reduce((function(e, t) {
                    return h(t) && (e[d(t)] = t), e
                }), {}) : {}
            }), [ce, l]),
            De = n((function() {
                if (!oe || Array.isArray(l) && function(e) {
                        if (!Array.isArray(e)) return 0;
                        var t = e[0],
                            n = e[1];
                        if (!h(t) || !h(n)) return 0;
                        for (var r = t, a = 0; g(n, r);) a++, r = k(r);
                        return a
                    }(l) === p) {
                    if (ie && Array.isArray(l) && h(l[0])) {
                        var e = l[0].getFullYear(),
                            t = l[0].getMonth(),
                            n = l[0].getDate();
                        return new Date(e, t, n)
                    }
                } else;
            }), [p, oe, ie, l]),
            _e = n((function() {
                if (ie && De && Array.isArray(l) && h(l[1]) && g(l[1], De)) {
                    var e = l[1].getFullYear(),
                        t = l[1].getMonth(),
                        n = l[1].getDate();
                    return new Date(e, t, n)
                }
            }), [ie, De, l]),
            be = i(!1),
            Se = be[0],
            ke = be[1],
            Me = i(De),
            Re = Me[0],
            Ee = Me[1],
            pe = i(_e),
            Ce = pe[0],
            Ve = pe[1],
            xe = i((function() {
                return G({
                    isNormalView: se,
                    isMultiSelectorView: ce,
                    isRangeSelectorView: ie,
                    selectedDate: me,
                    selectedRangeStart: De,
                    selectedMultiDates: ve,
                    viewDate: he
                }).getMonth()
            })),
            Ye = xe[0],
            Ie = xe[1],
            Ne = i(G({
                isNormalView: se,
                isMultiSelectorView: ce,
                isRangeSelectorView: ie,
                selectedDate: me,
                selectedRangeStart: De,
                selectedMultiDates: ve,
                viewDate: he
            }).getFullYear()),
            Fe = Ne[0],
            Oe = Ne[1],
            We = _(Ye),
            Ae = 0 === We ? S(Fe) : Fe;
        c(a, (function() {
            return {
                setView: function(e) {
                    e && (Ie(e.getMonth()), Oe(e.getFullYear()))
                }
            }
        }));
        var Te = r((function(e) {
                !B && Oe(e), !B && W && W(e)
            }), [B]),
            Le = r((function(e) {
                !B && Ie(e), !B && O && O(e, Fe)
            }), [B, Fe]),
            je = i(N && K[N] ? N : "month_dates"),
            Pe = je[0],
            He = je[1],
            ze = r((function(e) {
                !B && He(e)
            }), [B, He]),
            qe = n((function() {
                return {
                    monthsLabel: P,
                    weekDaysLabel: z,
                    noPadRangeCell: !!Y && ie,
                    showDualCalendar: le,
                    viewDate: he,
                    useDarkMode: D,
                    className: w,
                    hideAdjacentDates: !!ae,
                    isNormalView: se,
                    size: Z,
                    isHighlight: L,
                    fontSize: ee,
                    startOfWeek: ue,
                    weekends: ge,
                    isRangeSelectModeOn: Se,
                    onChangeRangeSelectMode: ke,
                    selectedDate: me,
                    selectedRangeStart: De,
                    selectedRangeEnd: _e,
                    lockView: !!B,
                    newSelectedRangeStart: Re,
                    onChangeNewSelectedRangeEnd: Ve,
                    onChangeNewSelectedRangeStart: Ee,
                    onPartialRangeSelect: V,
                    onEachMultiSelect: I,
                    newSelectedRangeEnd: Ce,
                    isRangeSelectorView: ie,
                    initialView: N,
                    fixedRange: de,
                    isFixedRangeView: oe,
                    isDisabled: fe,
                    checkIfWeekend: ye,
                    selectedMultiDates: ve,
                    isMultiSelectorView: ce,
                    onChange: F,
                    onChangeMonth: O,
                    onChangeYear: W,
                    onNextClickCallback: A,
                    onPrevClickCallback: T,
                    view: Pe,
                    setView: ze,
                    weekendMap: we,
                    yearInView: Fe,
                    monthInView: Ye,
                    onChangeViewingMonth: Le,
                    onChangeViewingYear: Te
                }
            }), [Y, P, z, ie, le, he, D, w, ae, se, Z, ee, ue, ge, Se, me, De, _e, B, Re, V, I, Ce, N, de, oe, fe, ye, ve, ce, L, F, O, W, T, A, Pe, ze, we, Fe, Ye, Le, Te]),
            Be = n((function() {
                return "string" == typeof w ? "rc_root".concat(D ? " rc_dark" : "").concat(le ? " rc_dual" : "") + " ".concat(w) + "".concat(Y && ie ? " rc_no_range_padding" : "") : "rc_root".concat(D ? " rc_dark" : "").concat(le ? " rc_dual" : "") + "".concat(Y && ie ? " rc_no_range_padding" : "")
            }), [w, D, le, Y, ie]);
        return e.createElement("div", {
            className: Be,
            style: X
        }, le ? e.createElement(e.Fragment, null, e.createElement(U, o({}, qe, {
            isSecondary: !1
        })), e.createElement(U, o({}, qe, {
            view: "month_dates",
            setView: Q,
            isSecondary: !0,
            monthInView: We,
            yearInView: Ae
        }))) : e.createElement(U, o({}, qe, {
            isSecondary: !1
        })))
    })),
    $ = function(e) {
        if (!Array.isArray(e)) return [];
        var t = e[0],
            n = e[1];
        if (!h(t) || !h(n)) return [];
        for (var r = t, a = []; g(n, r);) a.push(r), r = k(r);
        return a.push(n), a
    },
    ee = function(e) {
        return function(e) {
            var t = {
                    YYYY: !0,
                    MM: !0,
                    DD: !0
                },
                n = e.split("-");
            if (3 !== n.length) throw new Error("Date format is invalid.");
            if (!n.every((function(e) {
                    return t[e]
                }))) throw new Error("Date format uses unknown parts.");
            return function(e, t) {
                if (h(e)) {
                    var r = "";
                    return n.forEach((function(n, a) {
                        "YYYY" === n && (r += e.getFullYear()), "MM" === n && (r += e.getMonth()), "DD" === n && (r += e.getDate()), 2 !== a && (r += t)
                    })), r
                }
            }
        }(e || "DD-MM-YYYY")
    },
    te = {};

function ne(t) {
    var r = t.shortcutButtons,
        a = t.direction,
        i = t.isDual,
        l = n((function() {
            return function(e, t) {
                var n;
                return {
                    root: {
                        display: "flex",
                        padding: "bottom" === e ? t ? "2%" : "4%" : t ? "1.5%" : "2%",
                        alignItems: "center",
                        flexDirection: "bottom" === e ? "row" : "column",
                        overflow: "auto",
                        width: "bottom" === e ? "100%" : "".concat(130, "px")
                    },
                    notFirst: (n = {}, n["bottom" === e ? "marginLeft" : "marginTop"] = "bottom" === e ? t ? "3%" : "6%" : "12%", n)
                }
            }(a, i)
        }), [a, i]);
    return e.createElement("div", {
        style: l.root,
        className: "rc_shortcuts_view"
    }, r.map((function(t, n) {
        return e.createElement("div", {
            style: 0 !== n ? l.notFirst : te,
            key: t.id
        }, t.render())
    })))
}
var re = e.forwardRef((function(t, r) {
    var a = l(null),
        i = n((function() {
            return e = (t.size || 276) * (t.showDualCalendar ? 2 : 1), {
                root: {
                    display: "inline-flex",
                    flexDirection: "bottom" === (n = t.direction) ? "column-reverse" : "right" === n ? "row-reverse" : "row",
                    width: "".concat(e + ("bottom" === n ? 0 : 130), "px")
                }
            };
            var e, n
        }), [t.direction, t.showDualCalendar, t.size]),
        s = n((function() {
            return "rc_shortcut_cal_root " + (t.useDarkMode ? " rc_dark" : "") + " rc_dir-" + (t.direction || "left")
        }), [t.useDarkMode, t.direction]);
    if (!t.shortcutButtons.length) throw new Error("Provide a list of shortcut buttons");
    return c(r, (function() {
        return {
            setView: function(e) {
                a.current && e && a.current.setView(e)
            }
        }
    })), e.createElement("div", {
        style: i.root,
        className: s
    }, e.createElement(ne, {
        isDual: !!t.showDualCalendar,
        direction: t.direction || "left",
        shortcutButtons: t.shortcutButtons
    }), e.createElement(Z, o({
        ref: a
    }, t)))
}));
export {
    Z as Calendar, re as CalendarWithShortcuts, $ as giveDaysInRange, ee as giveFormatter
};