function _(_){return _&&_.__esModule?_.default:_}var t={};t=function(){var _=1e3,t=6e4,e=36e5,n="millisecond",r="second",i="minute",s="hour",o="day",a="week",u="month",c="quarter",h="year",q="date",d="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(_){var t=["th","st","nd","rd"],e=_%100;return"["+_+(t[(e-20)%10]||t[e]||t[0])+"]"}},m=function(_,t,e){var n=String(_);return!n||n.length>=t?_:""+Array(t+1-n.length).join(e)+_},$={s:m,z:function(_){var t=-_.utcOffset(),e=Math.abs(t),n=Math.floor(e/60),r=e%60;return(t<=0?"+":"-")+m(n,2,"0")+":"+m(r,2,"0")},m:function _(t,e){if(t.date()<e.date())return-_(e,t);var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,u),i=e-r<0,s=t.clone().add(n+(i?-1:1),u);return+(-(n+(e-r)/(i?r-s:s-r))||0)},a:function(_){return _<0?Math.ceil(_)||0:Math.floor(_)},p:function(_){return{M:u,y:h,w:a,d:o,D:q,h:s,m:i,s:r,ms:n,Q:c}[_]||String(_||"").toLowerCase().replace(/s$/,"")},u:function(_){return void 0===_}},M="en",g={};g[M]=v;var D=function(_){return _ instanceof S},y=function _(t,e,n){var r;if(!t)return M;if("string"==typeof t){var i=t.toLowerCase();g[i]&&(r=i),e&&(g[i]=e,r=i);var s=t.split("-");if(!r&&s.length>1)return _(s[0])}else{var o=t.name;g[o]=t,r=o}return!n&&r&&(M=r),r||!n&&M},p=function(_,t){if(D(_))return _.clone();var e="object"==typeof t?t:{};return e.date=_,e.args=arguments,new S(e)},Y=$;Y.l=y,Y.i=D,Y.w=function(_,t){return p(_,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function v(_){this.$L=y(_.locale,null,!0),this.parse(_)}var m=v.prototype;return m.parse=function(_){this.$d=function(_){var t=_.date,e=_.utc;if(null===t)return new Date(NaN);if(Y.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(f);if(n){var r=n[2]-1||0,i=(n[7]||"0").substring(0,3);return e?new Date(Date.UTC(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(_),this.$x=_.x||{},this.init()},m.init=function(){var _=this.$d;this.$y=_.getFullYear(),this.$M=_.getMonth(),this.$D=_.getDate(),this.$W=_.getDay(),this.$H=_.getHours(),this.$m=_.getMinutes(),this.$s=_.getSeconds(),this.$ms=_.getMilliseconds()},m.$utils=function(){return Y},m.isValid=function(){return!(this.$d.toString()===d)},m.isSame=function(_,t){var e=p(_);return this.startOf(t)<=e&&e<=this.endOf(t)},m.isAfter=function(_,t){return p(_)<this.startOf(t)},m.isBefore=function(_,t){return this.endOf(t)<p(_)},m.$g=function(_,t,e){return Y.u(_)?this[t]:this.set(e,_)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(_,t){var e=this,n=!!Y.u(t)||t,c=Y.p(_),d=function(_,t){var r=Y.w(e.$u?Date.UTC(e.$y,t,_):new Date(e.$y,t,_),e);return n?r:r.endOf(o)},f=function(_,t){return Y.w(e.toDate()[_].apply(e.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),e)},l=this.$W,v=this.$M,m=this.$D,$="set"+(this.$u?"UTC":"");switch(c){case h:return n?d(1,0):d(31,11);case u:return n?d(1,v):d(0,v+1);case a:var M=this.$locale().weekStart||0,g=(l<M?l+7:l)-M;return d(n?m-g:m+(6-g),v);case o:case q:return f($+"Hours",0);case s:return f($+"Minutes",1);case i:return f($+"Seconds",2);case r:return f($+"Milliseconds",3);default:return this.clone()}},m.endOf=function(_){return this.startOf(_,!1)},m.$set=function(_,t){var e,a=Y.p(_),c="set"+(this.$u?"UTC":""),d=(e={},e[o]=c+"Date",e[q]=c+"Date",e[u]=c+"Month",e[h]=c+"FullYear",e[s]=c+"Hours",e[i]=c+"Minutes",e[r]=c+"Seconds",e[n]=c+"Milliseconds",e)[a],f=a===o?this.$D+(t-this.$W):t;if(a===u||a===h){var l=this.clone().set(q,1);l.$d[d](f),l.init(),this.$d=l.set(q,Math.min(this.$D,l.daysInMonth())).$d}else d&&this.$d[d](f);return this.init(),this},m.set=function(_,t){return this.clone().$set(_,t)},m.get=function(_){return this[Y.p(_)]()},m.add=function(n,c){var q,d=this;n=Number(n);var f=Y.p(c),l=function(_){var t=p(d);return Y.w(t.date(t.date()+Math.round(_*n)),d)};if(f===u)return this.set(u,this.$M+n);if(f===h)return this.set(h,this.$y+n);if(f===o)return l(1);if(f===a)return l(7);var v=(q={},q[i]=t,q[s]=e,q[r]=_,q)[f]||1,m=this.$d.getTime()+n*v;return Y.w(m,this)},m.subtract=function(_,t){return this.add(-1*_,t)},m.format=function(_){var t=this,e=this.$locale();if(!this.isValid())return e.invalidDate||d;var n=_||"YYYY-MM-DDTHH:mm:ssZ",r=Y.z(this),i=this.$H,s=this.$m,o=this.$M,a=e.weekdays,u=e.months,c=function(_,e,r,i){return _&&(_[e]||_(t,n))||r[e].slice(0,i)},h=function(_){return Y.s(i%12||12,_,"0")},q=e.meridiem||function(_,t,e){var n=_<12?"AM":"PM";return e?n.toLowerCase():n},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:Y.s(o+1,2,"0"),MMM:c(e.monthsShort,o,u,3),MMMM:c(u,o),D:this.$D,DD:Y.s(this.$D,2,"0"),d:String(this.$W),dd:c(e.weekdaysMin,this.$W,a,2),ddd:c(e.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(i),HH:Y.s(i,2,"0"),h:h(1),hh:h(2),a:q(i,s,!0),A:q(i,s,!1),m:String(s),mm:Y.s(s,2,"0"),s:String(this.$s),ss:Y.s(this.$s,2,"0"),SSS:Y.s(this.$ms,3,"0"),Z:r};return n.replace(l,(function(_,t){return t||f[_]||r.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,q,d){var f,l=Y.p(q),v=p(n),m=(v.utcOffset()-this.utcOffset())*t,$=this-v,M=Y.m(this,v);return M=(f={},f[h]=M/12,f[u]=M,f[c]=M/3,f[a]=($-m)/6048e5,f[o]=($-m)/864e5,f[s]=$/e,f[i]=$/t,f[r]=$/_,f)[l]||$,d?M:Y.a(M)},m.daysInMonth=function(){return this.endOf(u).$D},m.$locale=function(){return g[this.$L]},m.locale=function(_,t){if(!_)return this.$L;var e=this.clone(),n=y(_,t,!0);return n&&(e.$L=n),e},m.clone=function(){return Y.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},v}(),w=S.prototype;return p.prototype=w,[["$ms",n],["$s",r],["$m",i],["$H",s],["$W",o],["$M",u],["$y",h],["$D",q]].forEach((function(_){w[_[1]]=function(t){return this.$g(t,_[0],_[1])}})),p.extend=function(_,t){return _.$i||(_(t,S,p),_.$i=!0),p},p.locale=y,p.isDayjs=D,p.unix=function(_){return p(1e3*_)},p.en=g[M],p.Ls=g,p.p={},p}();var e={};e=function(){var _={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,e=/\d\d/,n=/\d\d?/,r=/\d*[^-_:/,()\s\d]+/,i={},s=function(_){return(_=+_)+(_>68?1900:2e3)},o=function(_){return function(t){this[_]=+t}},a=[/[+-]\d\d:?(\d\d)?|Z/,function(_){(this.zone||(this.zone={})).offset=function(_){if(!_)return 0;if("Z"===_)return 0;var t=_.match(/([+-]|\d\d)/g),e=60*t[1]+(+t[2]||0);return 0===e?0:"+"===t[0]?-e:e}(_)}],u=function(_){var t=i[_];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(_,t){var e,n=i.meridiem;if(n){for(var r=1;r<=24;r+=1)if(_.indexOf(n(r,0,t))>-1){e=r>12;break}}else e=_===(t?"pm":"PM");return e},h={A:[r,function(_){this.afternoon=c(_,!1)}],a:[r,function(_){this.afternoon=c(_,!0)}],S:[/\d/,function(_){this.milliseconds=100*+_}],SS:[e,function(_){this.milliseconds=10*+_}],SSS:[/\d{3}/,function(_){this.milliseconds=+_}],s:[n,o("seconds")],ss:[n,o("seconds")],m:[n,o("minutes")],mm:[n,o("minutes")],H:[n,o("hours")],h:[n,o("hours")],HH:[n,o("hours")],hh:[n,o("hours")],D:[n,o("day")],DD:[e,o("day")],Do:[r,function(_){var t=i.ordinal,e=_.match(/\d+/);if(this.day=e[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===_&&(this.day=n)}],M:[n,o("month")],MM:[e,o("month")],MMM:[r,function(_){var t=u("months"),e=(u("monthsShort")||t.map((function(_){return _.slice(0,3)}))).indexOf(_)+1;if(e<1)throw new Error;this.month=e%12||e}],MMMM:[r,function(_){var t=u("months").indexOf(_)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,o("year")],YY:[e,function(_){this.year=s(_)}],YYYY:[/\d{4}/,o("year")],Z:a,ZZ:a};function q(e){var n,r;n=e,r=i&&i.formats;for(var s=(e=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,e,n){var i=n&&n.toUpperCase();return e||r[n]||_[n]||r[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(_,t,e){return t||e.slice(1)}))}))).match(t),o=s.length,a=0;a<o;a+=1){var u=s[a],c=h[u],q=c&&c[0],d=c&&c[1];s[a]=d?{regex:q,parser:d}:u.replace(/^\[|\]$/g,"")}return function(_){for(var t={},e=0,n=0;e<o;e+=1){var r=s[e];if("string"==typeof r)n+=r.length;else{var i=r.regex,a=r.parser,u=_.slice(n),c=i.exec(u)[0];a.call(t,c),_=_.replace(c,"")}}return function(_){var t=_.afternoon;if(void 0!==t){var e=_.hours;t?e<12&&(_.hours+=12):12===e&&(_.hours=0),delete _.afternoon}}(t),t}}return function(_,t,e){e.p.customParseFormat=!0,_&&_.parseTwoDigitYear&&(s=_.parseTwoDigitYear);var n=t.prototype,r=n.parse;n.parse=function(_){var t=_.date,n=_.utc,s=_.args;this.$u=n;var o=s[1];if("string"==typeof o){var a=!0===s[2],u=!0===s[3],c=a||u,h=s[2];u&&(h=s[2]),i=this.$locale(),!a&&h&&(i=e.Ls[h]),this.$d=function(_,t,e){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*_);var n=q(t)(_),r=n.year,i=n.month,s=n.day,o=n.hours,a=n.minutes,u=n.seconds,c=n.milliseconds,h=n.zone,d=new Date,f=s||(r||i?1:d.getDate()),l=r||d.getFullYear(),v=0;r&&!i||(v=i>0?i-1:d.getMonth());var m=o||0,$=a||0,M=u||0,g=c||0;return h?new Date(Date.UTC(l,v,f,m,$,M,g+60*h.offset*1e3)):e?new Date(Date.UTC(l,v,f,m,$,M,g)):new Date(l,v,f,m,$,M,g)}catch(_){return new Date("")}}(t,o,n),this.init(),h&&!0!==h&&(this.$L=this.locale(h).$L),c&&t!=this.format(o)&&(this.$d=new Date("")),i={}}else if(o instanceof Array)for(var d=o.length,f=1;f<=d;f+=1){s[1]=o[f-1];var l=e.apply(this,s);if(l.isValid()){this.$d=l.$d,this.$L=l.$L,this.init();break}f===d&&(this.$d=new Date(""))}else r.call(this,_)}}}();_(t).extend(e);const n=/(\d{2}:\d{2})[\sA-Za-zА-Яа-я]*(\d{2}:\d{2})/g,r="з 00:00 до 02:00, 04:00 до 07:00, 10:00 до 12:00, 16:00 до 18:00, 22:00 до 00:00 – черги будуть з електропостачанням";let i=0;for(;match=n.exec(r);)i+=1;const s=[];for(let e=0;e<i;e++){match=n.exec(r);const o=match[1],a=_(t)(o,"hh:mm").hour(),u=_(t)(o,"hh:mm").minute(),c=match[2],h=_(t)(c,"hh:mm").hour(),q=_(t)(c,"hh:mm").minute();console.log("houreOne = ",a,"minutesOne = ",u),console.log("houreTwo = ",h,"minutesTwo = ",q),s.push(a,h),e===i-1&&0===h?console.log("timeDifference = ",24-a):console.log("timeDifference = ",h-a)}console.log(s);let o=[{hour:"00",q_1_1__1_2:0,q_1_3__1_4:0,q_2_1__2_2:0,q_2_3__2_4:0,q_3_1__3_2:0,q_3_3__3_4:0,q_4_1:0,q_4_2:0},{hour:"01",q_1_1__1_2:0,q_1_3__1_4:0,q_2_1__2_2:0,q_2_3__2_4:0,q_3_1__3_2:0,q_3_3__3_4:0,q_4_1:0,q_4_2:0},{hour:"02",q_1_1__1_2:0,q_1_3__1_4:0,q_2_1__2_2:0,q_2_3__2_4:0,q_3_1__3_2:0,q_3_3__3_4:0,q_4_1:0,q_4_2:0},{hour:"03",q_1_1__1_2:0,q_1_3__1_4:0,q_2_1__2_2:0,q_2_3__2_4:0,q_3_1__3_2:0,q_3_3__3_4:0,q_4_1:0,q_4_2:0},{hour:"04",q_1_1__1_2:0,q_1_3__1_4:0,q_2_1__2_2:0,q_2_3__2_4:0,q_3_1__3_2:0,q_3_3__3_4:0,q_4_1:0,q_4_2:0},{hour:"05",q_1_1__1_2:0,q_1_3__1_4:0,q_2_1__2_2:0,q_2_3__2_4:0,q_3_1__3_2:0,q_3_3__3_4:0,q_4_1:0,q_4_2:0},{hour:"06",q_1_1__1_2:0,q_1_3__1_4:0,q_2_1__2_2:0,q_2_3__2_4:0,q_3_1__3_2:0,q_3_3__3_4:0,q_4_1:0,q_4_2:0},{hour:"07",q_1_1__1_2:0,q_1_3__1_4:0,q_2_1__2_2:0,q_2_3__2_4:0,q_3_1__3_2:0,q_3_3__3_4:0,q_4_1:0,q_4_2:0},{hour:"08",q_1_1__1_2:0,q_1_3__1_4:0,q_2_1__2_2:0,q_2_3__2_4:0,q_3_1__3_2:0,q_3_3__3_4:0,q_4_1:0,q_4_2:0},{hour:"09",q_1_1__1_2:0,q_1_3__1_4:0,q_2_1__2_2:0,q_2_3__2_4:0,q_3_1__3_2:0,q_3_3__3_4:0,q_4_1:0,q_4_2:0},{hour:"10",q_1_1__1_2:0,q_1_3__1_4:0,q_2_1__2_2:0,q_2_3__2_4:0,q_3_1__3_2:0,q_3_3__3_4:0,q_4_1:0,q_4_2:0},{hour:"11",q_1_1__1_2:0,q_1_3__1_4:0,q_2_1__2_2:0,q_2_3__2_4:0,q_3_1__3_2:0,q_3_3__3_4:0,q_4_1:0,q_4_2:0},{hour:"12",q_1_1__1_2:0,q_1_3__1_4:0,q_2_1__2_2:0,q_2_3__2_4:0,q_3_1__3_2:0,q_3_3__3_4:0,q_4_1:0,q_4_2:0},{hour:"13",q_1_1__1_2:0,q_1_3__1_4:0,q_2_1__2_2:0,q_2_3__2_4:0,q_3_1__3_2:0,q_3_3__3_4:0,q_4_1:0,q_4_2:0},{hour:"14",q_1_1__1_2:0,q_1_3__1_4:0,q_2_1__2_2:0,q_2_3__2_4:0,q_3_1__3_2:0,q_3_3__3_4:0,q_4_1:0,q_4_2:0},{hour:"15",q_1_1__1_2:0,q_1_3__1_4:0,q_2_1__2_2:0,q_2_3__2_4:0,q_3_1__3_2:0,q_3_3__3_4:0,q_4_1:0,q_4_2:0},{hour:"16",q_1_1__1_2:0,q_1_3__1_4:0,q_2_1__2_2:0,q_2_3__2_4:0,q_3_1__3_2:0,q_3_3__3_4:0,q_4_1:0,q_4_2:0},{hour:"17",q_1_1__1_2:0,q_1_3__1_4:0,q_2_1__2_2:0,q_2_3__2_4:0,q_3_1__3_2:0,q_3_3__3_4:0,q_4_1:0,q_4_2:0},{hour:"18",q_1_1__1_2:0,q_1_3__1_4:0,q_2_1__2_2:0,q_2_3__2_4:0,q_3_1__3_2:0,q_3_3__3_4:0,q_4_1:0,q_4_2:0},{hour:"19",q_1_1__1_2:0,q_1_3__1_4:0,q_2_1__2_2:0,q_2_3__2_4:0,q_3_1__3_2:0,q_3_3__3_4:0,q_4_1:0,q_4_2:0},{hour:"20",q_1_1__1_2:0,q_1_3__1_4:0,q_2_1__2_2:0,q_2_3__2_4:0,q_3_1__3_2:0,q_3_3__3_4:0,q_4_1:0,q_4_2:0},{hour:"21",q_1_1__1_2:0,q_1_3__1_4:0,q_2_1__2_2:0,q_2_3__2_4:0,q_3_1__3_2:0,q_3_3__3_4:0,q_4_1:0,q_4_2:0},{hour:"22",q_1_1__1_2:0,q_1_3__1_4:0,q_2_1__2_2:0,q_2_3__2_4:0,q_3_1__3_2:0,q_3_3__3_4:0,q_4_1:0,q_4_2:0},{hour:"23",q_1_1__1_2:0,q_1_3__1_4:0,q_2_1__2_2:0,q_2_3__2_4:0,q_3_1__3_2:0,q_3_3__3_4:0,q_4_1:0,q_4_2:0}];const a=document.querySelector(".blackout-table");let u="";function c(_){let t="";switch(_){case 1:t='" style="background-color: #83ff2a;"';break;case 2:t='" style="background-color: #ff1212;"';break;case 3:t='" style="background-color: #f7ff0a;"';break;default:t='" style="background-color: #000000;"'}return t}a.innerHTML='<li class="list-item item-heading">\n                <div class="block hours-heading">Година черга</div>\n                <div class="block">1.1 1.2</div>\n                <div class="block">1.3 1.4</div>\n                <div class="block">2.1 2.2</div>\n                <div class="block">2.3 2.4</div>\n                <div class="block">3.1 3.2</div>\n                <div class="block">3.3 3.4</div>\n                <div class="block">4.1</div>\n                <div class="block">4.2</div>\n            </li>',o.map((_=>{u=`<li class="list-item item-clock">\n            <div class="block hour hours-heading">${_.hour}</div>\n            <div class="block ${c(_.q_1_1__1_2)}></div>\n            <div class="block ${c(_.q_1_3__1_4)}></div>\n            <div class="block ${c(_.q_2_1__2_2)}></div>\n            <div class="block ${c(_.q_2_3__2_4)}></div>\n            <div class="block ${c(_.q_3_1__3_2)}></div>\n            <div class="block ${c(_.q_3_3__3_4)}></div>\n            <div class="block ${c(_.q_4_1)}></div>\n            <div class="block ${c(_.q_4_2)}></div>\n            </li>`,a.insertAdjacentHTML("beforeend",u)}));
//# sourceMappingURL=index.1292042a.js.map