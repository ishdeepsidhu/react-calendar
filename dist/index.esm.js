import e,{memo as t,useMemo as n,useCallback as r,useEffect as a,useState as i,useRef as l,useImperativeHandle as c}from"react";var o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)},s={0:"Su",1:"Mo",2:"Tu",3:"We",4:"Th",5:"Fr",6:"Sa"},u={0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"};function d(e){return"".concat(e.getFullYear()<10?"0"+e.getFullYear():e.getFullYear(),"_").concat(e.getMonth()<10?"0"+e.getMonth():e.getMonth(),"_").concat(e.getDate()<10?"0"+e.getDate():e.getDate())}function g(e,t){if(t.getFullYear()<e.getFullYear())return!0;if(t.getFullYear()===e.getFullYear()){if(t.getMonth()<e.getMonth())return!0;if(t.getMonth()===e.getMonth()&&t.getDate()<e.getDate())return!0}return!1}function h(e){return null!=e&&e.getTime&&!isNaN(e.getTime())}function f(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function y(e,t,n){var r=e.getFullYear(),a=e.getMonth(),i=e.getDate(),l=t.getFullYear(),c=t.getMonth(),o=t.getDate(),s=n.getFullYear(),u=n.getMonth(),d=n.getDate();return r<=s&&s<=l&&(r<s&&s<l||(r===l?a<=u&&u<=c&&(a<u&&u<c||(a===c?i<=d&&d<=o&&u===c:a===u?i<=d:c===u&&d<=o)):r===s?u>a||u===a&&d>=i:l===s&&(u<c||u===c&&d<=o)))}function w(e){return e%4==0&&e%100!=0||e%400==0}function m(e,t){return{0:31,1:w(e)?29:28,2:31,3:30,4:31,5:30,6:31,7:31,8:30,9:31,10:30,11:31}[t]}function v(e){return m(e.getFullYear(),e.getMonth())===e.getDate()}function D(e){return 0===e?11:e-1}function _(e){return 11===e?0:e+1}function b(e){return 1===e?1:e-1}function S(e){return e+1}function k(e){return function(e){return 11===e.getMonth()&&v(e)}(e)?new Date(e.getFullYear()+1,0,1):v(e)?new Date(e.getFullYear(),e.getMonth()+1,1):new Date(e.getFullYear(),e.getMonth(),e.getDate()+1)}function M(e,t){var n=6-t;return e<=n?e+t:e-n-1}function R(e){return e%20==0?20*(e/20-1)+1:20*Number(Math.floor(e/20))+1}function p(e){for(var t=e.isRangeSelectModeOn,n=e.isRangeView,r=e.selectedDate,a=e.selectedRangeStart,i=e.selectedRangeEnd,l=e.isHighlight,c=e.isGrey,o=e.newSelectedRangeStart,s=e.newSelectedRangeEnd,u=e.isSelectMultiDate,d=e.selectedMultiDates,g=e.yearInView,h=e.monthInView,f=e.startOfTheWeek,y=e.isDisabled,w=e.checkIfWeekend,v=[[],[],[],[],[],[]],S=function(e,t,n){var r=new Date;return r.setDate(1),r.setMonth(t),r.setFullYear(e),function(e,t){return void 0===t&&(t=0),e>=t?e-t:6-t+1+e}(r.getDay(),n)}(g,h,f),k=new Date,M=m(g,h),R=0===h,p=11===h,C=m(R?b(g):g,D(h)),V=0,x=0,Y=C-(S-1);Y<=C;Y++)7===x&&(x=0,V++),v[V].push(E({currDate:new Date(R?b(g):g,D(h),Y),activeMonthInView:!1,isHighlight:l,isGrey:c,newSelectedRangeEnd:s,newSelectedRangeStart:o,selectedDate:r,selectedRangeEnd:i,selectedRangeStart:a,isDisabled:y,isRangeSelectModeOn:t,isRangeView:n,isSelectMultiDate:u,row:V,weekColumn:x,checkIfWeekend:w,today:k,selectedMultiDates:d,startOfTheWeek:f})),x++;for(var I=1;I<=M;I++)7===x&&(x=0,V++),v[V].push(E({currDate:new Date(g,h,I),activeMonthInView:!0,isHighlight:l,isGrey:c,newSelectedRangeEnd:s,newSelectedRangeStart:o,selectedDate:r,selectedRangeEnd:i,selectedRangeStart:a,isDisabled:y,isRangeSelectModeOn:t,isRangeView:n,isSelectMultiDate:u,row:V,weekColumn:x,checkIfWeekend:w,today:k,selectedMultiDates:d,startOfTheWeek:f})),x++;for(var N=1;v[5].length<7;)7===x&&(x=0,V++),v[V].push(E({currDate:new Date(p?g+1:g,_(h),N),activeMonthInView:!1,isHighlight:l,isGrey:c,newSelectedRangeEnd:s,newSelectedRangeStart:o,selectedDate:r,selectedRangeEnd:i,selectedRangeStart:a,isDisabled:y,isRangeSelectModeOn:t,isRangeView:n,isSelectMultiDate:u,row:V,weekColumn:x,checkIfWeekend:w,today:k,selectedMultiDates:d,startOfTheWeek:f})),x++,N++;return v}function E(e){var t=e.currDate,n=e.activeMonthInView,r=e.isHighlight,a=e.isGrey,i=e.newSelectedRangeEnd,l=e.newSelectedRangeStart,c=e.selectedDate,o=e.selectedRangeEnd,s=e.selectedRangeStart,u=e.isDisabled,w=e.isRangeSelectModeOn,m=e.isRangeView,v=e.isSelectMultiDate,D=e.row,_=e.weekColumn,b=e.checkIfWeekend,S=e.today,k=e.selectedMultiDates,R=e.startOfTheWeek;return{date:t,dayOfMonth:t.getDate(),month:t.getMonth(),activeMonthInView:n,isHighlight:"function"==typeof r&&r(t),isGrey:"function"==typeof a&&a(t),isInRange:!!m&&(w?!(!h(l)||!h(i))&&(g(i,l)?y(l,i,t):y(i,l,t)):!!s&&!!o&&y(s,o,t)),isRangeStart:!!m&&(w?!!h(l)&&f(l,t):!!s&&f(s,t)),isRangeEnd:!!m&&(!w&&(!!o&&f(o,t))),year:t.getFullYear(),dayOfWeek:M(_,R),isWeekend:b(t),isToday:f(t,S),isFirstRow:0===D,isLastRow:5===D,isFirsColumn:0===_,isLastColumn:6===_,isSelected:v?!!k[d(t)]:!m&&(!!c&&(t.getMonth()===c.getMonth()&&t.getFullYear()===c.getFullYear()&&t.getDate()===c.getDate())),isDisabled:u(t)}}var C={root:{height:"12%",padding:"1% 2%",display:"flex",alignTtems:"center",width:"100%"},rc_header_nav:{width:"10.14%",height:"100%",flex:"0 0 auto"},rch_header_label:{width:"65.21%",height:"100%",margin:"0 4.34%",flex:"1 1 auto",display:"flex",justifyContent:"center",alignItems:"center"}};var V=t((function(t){var n=t.onClickPrev,r=t.onChangeViewType,a=t.monthsLabel,i=t.showDualCalendar,l=t.isSecondary,c=t.onClickNext,o=t.viewType,s=t.monthInView,u=t.yearInView,d=t.yearMatrixEnd,g=t.yearMatrixStart;return e.createElement("header",{style:C.root,className:"rc_header"},i&&l?null:e.createElement("button",{type:"button",style:C.rc_header_nav,className:"rc_header_nav rc_header_nav-prev",onClick:n},e.createElement("span",null,"←")),"month_dates"===o?e.createElement("button",{type:"button",style:C.rch_header_label,className:"rc_header_label rc_header_label-days-of-month",onClick:function(){return!l&&r("years")}},e.createElement("div",null,e.createElement("span",null,a[s])),e.createElement("div",null,e.createElement("span",null,u))):"months"===o?e.createElement("button",{type:"button",style:C.rch_header_label,className:"rc_header_label rc_header_label-months"},e.createElement("div",{onClick:function(){return!l&&r("years")}},e.createElement("span",null,u))):e.createElement("button",{type:"button",style:C.rch_header_label,className:"rc_header_label rc_header_label-years",onClick:function(){return!l&&r("month_dates")}},e.createElement("div",null,e.createElement("span",null,g,"-",d))),i&&!l&&"month_dates"===o?null:e.createElement("button",{type:"button",style:C.rc_header_nav,className:"rc_header_nav rc_header_nav-next",onClick:c},e.createElement("span",null,"→")))})),x={width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},Y={width:"95%",height:"45%",display:"flex",alignItems:"center",justifyContent:"center"};var I=t((function(t){var n=t.cell,r=t.onMonthClicked,a=t.monthsLabel;return e.createElement("div",{style:x},e.createElement("button",{type:"button",style:Y,onClick:function(){r(n)}},a[n.month]))})),N={root:{height:"100%"},"rc_body-row":{height:"24.9%",display:"flex",width:"100%"},"rc_body-cell":{flexBasis:"33.33%",maxWidth:"33.33%",height:"100%"}};var F=t((function(t){var r=t.onChangeViewingMonth,a=t.onChangeViewType,i=t.monthsLabel,l=n((function(){return function(e){var t=Array.from({length:12},(function(t,n){return{month:n,isCurrentMonth:(new Date).getMonth()===n,isSelectedMonth:1===e[n]}}));return[t.slice(0,3),t.slice(3,6),t.slice(6,9),t.slice(9,12)]}({})}),[]);return e.createElement("div",{role:"grid",style:N.root,className:"rc_body-months"},l.map((function(t,n){return e.createElement("div",{style:N["rc_body-row"],className:"rc_body-row",key:n},t.map((function(t){return e.createElement("div",{style:N["rc_body-cell"],className:"rc_body-cell".concat(t.isCurrentMonth?" rc_this_month":""),key:t.month},e.createElement(I,{monthsLabel:i,cell:t,onMonthClicked:function(e){r(e.month),a("month_dates")}}))})))})))})),O={width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},W={width:"95%",height:"45%",display:"flex",alignItems:"center",justifyContent:"center"};var A=t((function(t){var n=t.cell,r=t.onYearClicked;return e.createElement("div",{style:O},e.createElement("button",{type:"button",style:W,onClick:function(){r(n)}},n.year))})),T={root:{height:"100%"},"rc_body-row":{height:"24.9%",display:"flex",width:"100%"},"rc_body-cell":{width:"20%",height:"100%"}};var L=t((function(t){var r=t.onChangeViewType,a=t.onChangeViewingYear,i=t.yearMatrixStart,l=n((function(){return function(e,t){var n=Array.from({length:20},(function(n,r){return{year:e+r,isCurrentYear:(new Date).getFullYear()===e+r,isSelectedYear:1===t[e+r]}}));return[n.slice(0,5),n.slice(5,10),n.slice(10,15),n.slice(15,20)]}(i,{})}),[i]);return e.createElement("div",{role:"grid",style:T.root,className:"rc_body-years"},l.map((function(t,n){return e.createElement("div",{style:T["rc_body-row"],className:"rc_body-row",key:n},t.map((function(t){return e.createElement("div",{style:T["rc_body-cell"],className:"rc_body-cell".concat(t.isCurrentYear?" rc_this_year":""),key:t.year},e.createElement(A,{cell:t,onYearClicked:function(e){a(e.year),r("months")}}))})))})))})),j={"rc_body-weekdays":{height:"15%",margin:"0",padding:0,display:"flex",width:"100%",listStyle:"none"},"rc_body-weekdays_cell":{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",flexBasis:"14.286%",maxWidth:"14.286%"},"rc_body-weekdays_cell_value":{width:"65.95%",display:"flex",alignItems:"center",justifyContent:"center"}};var P=t((function(t){var r=t.startOfWeek,a=t.weekendMap,i=t.weekDaysLabel,l=n((function(){return function(e){void 0===e&&(e=0);var t=Object.keys(s).slice(e,7).concat(Object.keys(s).slice(0,e));return{map:t.reduce((function(e,t){return e[Number(t)]=s[Number(t)],e}),{}),order:t}}(r)}),[r]).order;return e.createElement("ul",{style:j["rc_body-weekdays"],className:"rc_body-weekdays"},l.map((function(t){return e.createElement("li",{style:j["rc_body-weekdays_cell"],key:t,className:"rc_body-weekdays_cell".concat(a[t]?" rc_wknd":"")},e.createElement("div",{style:j["rc_body-weekdays_cell_value"]},e.createElement("span",null,i[t])))})))})),H={width:"100%",height:"99%",display:"flex",alignItems:"center",justifyContent:"center"};var G=t((function(t){var r=t.cell,a=t.onDateClicked,i=t.noPadRangeCell,l=n((function(){return function(e){return{width:e?"100%":"69.80%",height:e?"90%":"80%",display:"flex",alignItems:"center",justifyContent:"center"}}(i)}),[i]),c=n((function(){return function(e){return{width:e?"69.8%":"100%",height:"92%"}}(i)}),[i]);return e.createElement("div",{style:H},e.createElement("div",{style:l,className:"rc_body-cell_value"},e.createElement("button",{type:"button",style:c,disabled:r.isDisabled,tabIndex:r.isDisabled?-1:0,onClick:function(){return a(r)}},r.dayOfMonth)))})),z={"rc_body-days-of-month":{height:"85%"},"rc_body-row":{height:"16.664%",display:"flex",width:"100%",alignItems:"center"},"rc_body-cell":{flexBasis:"14.286%",maxWidth:"14.286%",height:"100%",display:"flex",aligntems:"center"}};var q=t((function(t){var a=t.selectedDate,i=t.selectedRangeStart,l=t.selectedRangeEnd,c=t.newSelectedRangeStart,s=t.startOfWeek,u=t.newSelectedRangeEnd,h=t.isRangeSelectorView,f=t.onChangeRangeSelectMode,y=t.fixedRange,w=t.isFixedRangeView,m=t.isRangeSelectModeOn,v=t.isDisabled,D=t.selectedMultiDates,_=t.isMultiSelectorView,b=t.monthInView,S=t.hideAdjacentDates,M=t.onChangeNewSelectedRangeEnd,R=t.onChangeNewSelectedRangeStart,E=t.weekends,C=t.onChange,V=t.yearInView,x=t.noPadRangeCell,Y=t.lockView,I=t.checkIfWeekend,N=t.onPartialRangeSelect,F=t.isHighlight,O=t.isGrey,W=t.onEachMultiSelect,A=n((function(){return p({selectedDate:a,selectedRangeStart:i,selectedRangeEnd:l,newSelectedRangeStart:c,newSelectedRangeEnd:u,checkIfWeekend:I,isRangeView:h||w,isRangeSelectModeOn:m,weekendIndexes:E,selectedMultiDates:D,isSelectMultiDate:_,yearInView:V,monthInView:b,startOfTheWeek:s,isHighlight:F,isGrey:O,isDisabled:v})}),[a,F,O,i,l,c,u,h,w,m,I,E,D,_,V,b,s,v]),T=r((function(e){var t=e.date;if(!(Y&&t.getMonth()!==b))if(h&&!w)if(m&&c){var n=new Date(c.getFullYear(),c.getMonth(),c.getDate());if(g(n,t)){var r=t,a=n;"function"==typeof C&&C([r,a])}else{r=n,a=t;"function"==typeof C&&C([r,a])}M(void 0),f(!1)}else R(t),M(void 0),f(!0),N&&N(t);else if(h&&w){a=function(e,t){for(var n=t,r=e,a=0;n>0&&1500!==a;)r=k(r),n--,a++;return{endDate:r}}(t,y).endDate;"function"==typeof C&&C([t,a])}else if(_){var i=d(t),l=o({},D);D[i]?l[i]=void 0:l[i]=t,W&&W(t),C&&C(Object.keys(l).filter((function(e){return!!l[e]})).map((function(e){return l[e]})))}else"function"==typeof C&&C(t)}),[Y,b,h,w,_,m,c,M,f,C,R,N,y,D,W]);return e.createElement("div",{style:z["rc_body-days-of-month"],className:"rc_body-days-of-month",role:"grid"},A.map((function(t,n){return e.createElement("div",{style:z["rc_body-row"],className:"rc_body-row",key:n},t.map((function(t){return e.createElement("div",{style:z["rc_body-cell"],onMouseEnter:function(){h&&m&&M(new Date(t.year,t.month,t.dayOfMonth))},key:d(t.date),className:"rc_body-cell".concat(t.activeMonthInView?" rc_active":"").concat(t.isWeekend?" rc_wknd":"").concat(t.isToday?" rc_today":"").concat(t.isFirstRow?" rc_fr":"").concat(t.isToday?" rc_today":"").concat(t.isHighlight?" rc_highlight":"").concat(t.isGrey?" rc_grey":"").concat(t.isLastRow?" rc_lr":"").concat(t.isFirsColumn?" rc_fc":"").concat(t.isLastColumn?" rc_lc":"").concat(t.isSelected&&!h?" rc_selected":"").concat(t.isDisabled?" rc_disabled":"").concat(t.isInRange?" rc_in_range":"").concat(t.isRangeStart?" rc_range_start":"").concat(t.isRangeEnd?" rc_range_end":"").concat(m?" rc_range_mode":"")},!t.activeMonthInView&&S?null:e.createElement(G,{noPadRangeCell:x,cell:t,onDateClicked:T}))})))})))})),B={height:"88%",width:"100%"};var J=t((function(t){var c=t.size,o=t.fontSize,s=t.isMultiSelectorView,u=t.isRangeSelectorView,d=t.monthInView,g=t.yearInView,f=t.showDualCalendar,y=t.onChangeViewingMonth,w=t.onChangeViewingYear,m=t.selectedDate,v=t.selectedRangeStart,k=t.view,M=t.setView,p=t.isSecondary,E=t.monthsLabel,C=t.weekDaysLabel,x=t.selectedMultiDates,Y=t.lockView,I=t.startOfWeek,N=t.noPadRangeCell,O=t.weekends,W=t.isRangeSelectModeOn,A=t.onChangeRangeSelectMode,T=t.hideAdjacentDates,j=t.selectedRangeEnd,H=t.newSelectedRangeStart,G=t.onChangeNewSelectedRangeEnd,z=t.onChangeNewSelectedRangeStart,J=t.onPartialRangeSelect,U=t.onEachMultiSelect,K=t.newSelectedRangeEnd,Q=t.fixedRange,X=t.isFixedRangeView,Z=t.isDisabled,$=t.checkIfWeekend,ee=t.onChange,te=t.onChangeMonth,ne=t.onChangeYear,re=t.onPrevClickCallback,ae=t.onNextClickCallback,ie=t.weekendMap,le=t.isHighlight,ce=t.isGrey,oe=n((function(){return function(e,t){return{root:{rc:{width:"".concat(e,"px"),height:"".concat(e,"px"),fontSize:"".concat(t,"px"),display:"flex",alignItems:"flex-start",flexDirection:"column",boxSizing:"border-box"}}}}(c,o)}),[c,o]);a((function(){h(m)&&(y(m.getMonth()),w(m.getFullYear()))}),[p,y,w,m]),a((function(){var e=Object.keys(x).map((function(e){return x[e]})).filter((function(e){return h(e)}));1===e.length&&e[0]&&(y(e[0].getMonth()),w(e[0].getFullYear()))}),[p,y,w,x]);var se=i(R(g)),ue=se[0],de=se[1];a((function(){de(R(g))}),[g,de]);var ge=n((function(){return[e=ue,e+19];var e}),[ue]),he=ge[0],fe=ge[1],ye=r((function(){var e;"month_dates"===k&&(0===d&&w(b(g)),y(D(d)));"years"===k&&de(1===(e=ue)?1:R(e-1)),"months"===k&&w(1!==g?g-1:1),re&&re(k)}),[k,d,y,w,g,ue,re]),we=r((function(){"month_dates"===k&&(p?(0===d&&w(g),y(d)):(11===d&&w(S(g)),y(_(d))));"years"===k&&de(R(ue+20)),"months"===k&&w(S(g)),ae&&ae(k)}),[k,p,d,y,w,g,ue,ae]),me=l(null),ve=l([]),De=i(!1),_e=De[0],be=De[1];return a((function(){if(_e){var e=me.current;if(e){ve.current=e?Array.from(e.querySelectorAll('[role="grid"] button:not([disabled])')):[];var t=ve.current[0],n=ve.current[ve.current.length-1],r=e.querySelector('[role="grid"] .rc_selected button')||e.querySelector('[role="grid"] .rc_range_end button')||e.querySelector('[role="grid"] .rc_range_start button'),a=e.querySelector('[role="grid"] .rc_active button'),i=e.querySelector(".rc_header");if(i){var l=i.querySelector(".rc_header_nav-prev"),c=i.querySelector(".rc_header_nav-next"),o=i.querySelector(".rc_header_label");e&&!e.contains(document.activeElement)&&(r?r.focus():a?a.focus():t.focus());var s=function(e,n){var r,a,i=n===t;return e?(r=e,a=ve.current.indexOf(r),i?a<ve.current.length-1?ve.current[a+1]:n:a-1>-1?ve.current[a-1]:n):null};return e.addEventListener("keydown",u,{capture:!0}),function(){e.removeEventListener("keydown",u,{capture:!0})}}}}function u(e){var r=e.target,a=ve.current&&ve.current.find((function(e){return e===r}));if("Tab"===e.key&&(e.preventDefault(),(null==i?void 0:i.contains(document.activeElement))?t.focus():null==l||l.focus()),"ArrowDown"===e.key){e.preventDefault();var u="month_dates"===k?7:"months"===k?3:5;if(!a)return;for(var d=a;u>0;)d=s(d,t),u--;null==d||d.focus()}if("ArrowUp"===e.key){e.preventDefault();u="month_dates"===k?7:"months"===k?3:5;if(!a)return;for(d=a;u>0;)d=s(d,n),u--;null==d||d.focus()}if("ArrowLeft"===e.key)if(e.preventDefault(),document.activeElement===l)null==c||c.focus();else if(document.activeElement===o)null==l||l.focus();else if(document.activeElement===c)null==o||o.focus();else{if(!a)return;null==(d=s(a,n))||d.focus()}if("ArrowRight"===e.key)if(e.preventDefault(),document.activeElement===l)null==o||o.focus();else if(document.activeElement===o)null==c||c.focus();else if(document.activeElement===c)null==l||l.focus();else{if(!a)return;null==(d=s(a,t))||d.focus()}"Home"===e.key&&(e.preventDefault(),t.focus()),"End"===e.key&&(e.preventDefault(),n.focus()),"Escape"===e.key&&(e.preventDefault(),n.focus(),n.blur())}}),[me,k,_e,d,g,ue]),e.createElement("div",{onFocus:function(){!_e&&be(!0)},onBlur:function(e){e.currentTarget.contains(e.target)||be(!1)},style:oe.root.rc,className:"rc",ref:me},e.createElement(V,{monthsLabel:E,isSecondary:p,showDualCalendar:f,onClickPrev:ye,onClickNext:we,onChangeViewType:M,viewType:k,monthInView:d,yearInView:g,yearMatrixStart:he,yearMatrixEnd:fe}),e.createElement("div",{style:B,className:"rc_body"},"months"===k&&e.createElement(F,{monthsLabel:E,onChangeViewType:M,onChangeViewingMonth:y}),"years"===k&&e.createElement(L,{onChangeViewType:M,onChangeViewingYear:w,yearMatrixStart:he,yearMatrixEnd:fe}),"month_dates"===k&&e.createElement(e.Fragment,null,e.createElement(P,{weekDaysLabel:C,startOfWeek:I,weekendMap:ie}),e.createElement(q,{noPadRangeCell:N,isRangeSelectModeOn:W,onChangeRangeSelectMode:A,hideAdjacentDates:T,selectedDate:m,selectedRangeStart:v,selectedRangeEnd:j,lockView:Y,newSelectedRangeStart:H,startOfWeek:I,onChangeNewSelectedRangeEnd:G,onChangeNewSelectedRangeStart:z,onPartialRangeSelect:J,onEachMultiSelect:U,newSelectedRangeEnd:K,isRangeSelectorView:u,fixedRange:Q,isFixedRangeView:X,isDisabled:Z,checkIfWeekend:$,selectedMultiDates:x,isMultiSelectorView:s,monthInView:d,weekends:O,onChange:ee,onChangeMonth:te,onChangeYear:ne,yearInView:g,isHighlight:le,isGrey:ce}))))}));function U(e){var t=e.isMultiSelectorView&&e.selectedMultiDates&&e.selectedMultiDates[Object.keys(e.selectedMultiDates)[0]];return h(e.viewDate)?e.viewDate:e.isNormalView&&h(e.selectedDate)?e.selectedDate:e.isRangeSelectorView&&e.selectedRangeStart?e.selectedRangeStart:t&&h(t)?t:new Date}var K={years:1,months:1,month_dates:1},Q=function(){},X={display:"inline-flex"};var Z=e.forwardRef((function(t,a){var l=t.value,f=t.isMultiSelector,y=t.className,w=void 0===y?"":y,m=t.isRangeSelector,v=t.useDarkMode,D=void 0!==v&&v,b=t.weekends,M=t.initialViewDate,R=t.startOfWeek,p=void 0===R?1:R,E=t.fixedRange,C=t.isDisabled,V=t.onPartialRangeSelect,x=t.noPadRangeCell,Y=void 0!==x&&x,I=t.onEachMultiSelect,N=t.initialView,F=t.onChange,O=t.onChangeMonth,W=t.onChangeYear,A=t.onNextClickCallback,T=t.onPrevClickCallback,L=t.isHighlight,j=t.isGrey,P=t.monthsLabel,H=void 0===P?u:P,G=t.weekDaysLabel,z=void 0===G?s:G,q=t.lockView,B=void 0!==q&&q,Z=t.size,$=void 0===Z?276:Z,ee=t.fontSize,te=void 0===ee?16:ee,ne=t.showDualCalendar,re=void 0!==ne&&ne,ae=t.hideAdjacentDates,ie=void 0!==ae&&ae,le=!!m,ce=le&&!!re,oe=!le&&!!f,se=!!(le&&"number"==typeof E&&E>0),ue=!le&&!oe,de=p,ge=se?E:1,he=n((function(){return Array.isArray(b)&&(b.every((function(e){return"number"==typeof e}))||0===b.length)?b:[6,0]}),[b]),fe=n((function(){return h(M)?M:void 0}),[M]),ye=n((function(){return e={customDisabledCheck:C}.customDisabledCheck,function(t){return"function"==typeof e&&e(t)};var e}),[C]),we=n((function(){return function(e){var t=e.reduce((function(e,t){return e[t]=1,e}),{});return function(e){return 1===t[e.getDay()]}}(he)}),[he]),me=n((function(){return he.reduce((function(e,t){return e[t]=1,e}),{})}),[he]),ve=n((function(){return ue&&h(l)?l:void 0}),[ue,l]),De=n((function(){return oe&&Array.isArray(l)&&l.every(h)?l.reduce((function(e,t){return h(t)&&(e[d(t)]=t),e}),{}):{}}),[oe,l]),_e=n((function(){if(!se||Array.isArray(l)&&function(e){if(!Array.isArray(e))return 0;var t=e[0],n=e[1];if(!h(t)||!h(n))return 0;for(var r=t,a=0;g(n,r);)a++,r=k(r);return a}(l)===E){if(le&&Array.isArray(l)&&h(l[0])){var e=l[0].getFullYear(),t=l[0].getMonth(),n=l[0].getDate();return new Date(e,t,n)}}else;}),[E,se,le,l]),be=n((function(){if(le&&_e&&Array.isArray(l)&&h(l[1])&&g(l[1],_e)){var e=l[1].getFullYear(),t=l[1].getMonth(),n=l[1].getDate();return new Date(e,t,n)}}),[le,_e,l]),Se=i(!1),ke=Se[0],Me=Se[1],Re=i(_e),pe=Re[0],Ee=Re[1],Ce=i(be),Ve=Ce[0],xe=Ce[1],Ye=i((function(){return U({isNormalView:ue,isMultiSelectorView:oe,isRangeSelectorView:le,selectedDate:ve,selectedRangeStart:_e,selectedMultiDates:De,viewDate:fe}).getMonth()})),Ie=Ye[0],Ne=Ye[1],Fe=i(U({isNormalView:ue,isMultiSelectorView:oe,isRangeSelectorView:le,selectedDate:ve,selectedRangeStart:_e,selectedMultiDates:De,viewDate:fe}).getFullYear()),Oe=Fe[0],We=Fe[1],Ae=_(Ie),Te=0===Ae?S(Oe):Oe;c(a,(function(){return{setView:function(e){e&&(Ne(e.getMonth()),We(e.getFullYear()))}}}));var Le=r((function(e){!B&&We(e),!B&&W&&W(e)}),[B]),je=r((function(e){!B&&Ne(e),!B&&O&&O(e)}),[B]),Pe=i(N&&K[N]?N:"month_dates"),He=Pe[0],Ge=Pe[1],ze=r((function(e){!B&&Ge(e)}),[B,Ge]),qe=n((function(){return{monthsLabel:H,weekDaysLabel:z,noPadRangeCell:!!Y&&le,showDualCalendar:ce,viewDate:fe,useDarkMode:D,className:w,hideAdjacentDates:!!ie,isNormalView:ue,size:$,isHighlight:L,isGrey:j,fontSize:te,startOfWeek:de,weekends:he,isRangeSelectModeOn:ke,onChangeRangeSelectMode:Me,selectedDate:ve,selectedRangeStart:_e,selectedRangeEnd:be,lockView:!!B,newSelectedRangeStart:pe,onChangeNewSelectedRangeEnd:xe,onChangeNewSelectedRangeStart:Ee,onPartialRangeSelect:V,onEachMultiSelect:I,newSelectedRangeEnd:Ve,isRangeSelectorView:le,initialView:N,fixedRange:ge,isFixedRangeView:se,isDisabled:ye,checkIfWeekend:we,selectedMultiDates:De,isMultiSelectorView:oe,onChange:F,onChangeMonth:O,onChangeYear:W,onNextClickCallback:A,onPrevClickCallback:T,view:He,setView:ze,weekendMap:me,yearInView:Oe,monthInView:Ie,onChangeViewingMonth:je,onChangeViewingYear:Le}}),[Y,H,z,le,ce,fe,D,w,ie,ue,$,te,de,he,ke,ve,_e,be,B,pe,V,I,Ve,N,ge,se,ye,we,De,oe,L,j,F,O,W,T,A,He,ze,me,Oe,Ie,je,Le]),Be=n((function(){return"string"==typeof w?"rc_root".concat(D?" rc_dark":"").concat(ce?" rc_dual":"")+" ".concat(w)+"".concat(Y&&le?" rc_no_range_padding":""):"rc_root".concat(D?" rc_dark":"").concat(ce?" rc_dual":"")+"".concat(Y&&le?" rc_no_range_padding":"")}),[w,D,ce,Y,le]);return e.createElement("div",{className:Be,style:X},ce?e.createElement(e.Fragment,null,e.createElement(J,o({},qe,{isSecondary:!1})),e.createElement(J,o({},qe,{view:"month_dates",setView:Q,isSecondary:!0,monthInView:Ae,yearInView:Te}))):e.createElement(J,o({},qe,{isSecondary:!1})))})),$=function(e){if(!Array.isArray(e))return[];var t=e[0],n=e[1];if(!h(t)||!h(n))return[];for(var r=t,a=[];g(n,r);)a.push(r),r=k(r);return a.push(n),a},ee=function(e){return function(e){var t={YYYY:!0,MM:!0,DD:!0},n=e.split("-");if(3!==n.length)throw new Error("Date format is invalid.");if(!n.every((function(e){return t[e]})))throw new Error("Date format uses unknown parts.");return function(e,t){if(h(e)){var r="";return n.forEach((function(n,a){"YYYY"===n&&(r+=e.getFullYear()),"MM"===n&&(r+=e.getMonth()),"DD"===n&&(r+=e.getDate()),2!==a&&(r+=t)})),r}}}(e||"DD-MM-YYYY")},te={};function ne(t){var r=t.shortcutButtons,a=t.direction,i=t.isDual,l=n((function(){return function(e,t){var n;return{root:{display:"flex",padding:"bottom"===e?t?"2%":"4%":t?"1.5%":"2%",alignItems:"center",flexDirection:"bottom"===e?"row":"column",overflow:"auto",width:"bottom"===e?"100%":"".concat(130,"px")},notFirst:(n={},n["bottom"===e?"marginLeft":"marginTop"]="bottom"===e?t?"3%":"6%":"12%",n)}}(a,i)}),[a,i]);return e.createElement("div",{style:l.root,className:"rc_shortcuts_view"},r.map((function(t,n){return e.createElement("div",{style:0!==n?l.notFirst:te,key:t.id},t.render())})))}var re=e.forwardRef((function(t,r){var a=l(null),i=n((function(){return e=(t.size||276)*(t.showDualCalendar?2:1),{root:{display:"inline-flex",flexDirection:"bottom"===(n=t.direction)?"column-reverse":"right"===n?"row-reverse":"row",width:"".concat(e+("bottom"===n?0:130),"px")}};var e,n}),[t.direction,t.showDualCalendar,t.size]),s=n((function(){return"rc_shortcut_cal_root "+(t.useDarkMode?" rc_dark":"")+" rc_dir-"+(t.direction||"left")}),[t.useDarkMode,t.direction]);if(!t.shortcutButtons.length)throw new Error("Provide a list of shortcut buttons");return c(r,(function(){return{setView:function(e){a.current&&e&&a.current.setView(e)}}})),e.createElement("div",{style:i.root,className:s},e.createElement(ne,{isDual:!!t.showDualCalendar,direction:t.direction||"left",shortcutButtons:t.shortcutButtons}),e.createElement(Z,o({ref:a},t)))}));export{Z as Calendar,re as CalendarWithShortcuts,$ as giveDaysInRange,ee as giveFormatter};