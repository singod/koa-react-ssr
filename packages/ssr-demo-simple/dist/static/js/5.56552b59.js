(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{46:function(t,e,n){"use strict";var a=n(48),f=n.n(a),r=n(44),h=n.n(r),i=n(45),d=n.n(i),s=n(8),m=n.n(s),c=n(9),v=n.n(c),o=n(10),w=n.n(o),u=n(11),b=n.n(u),p=n(12),k=n.n(p),l=n(0),g=n.n(l);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var _=null,P=!1,I=!1,O=function O(){_&&_.getInitialProps&&(P=!0,I&&_.getInitialProps())};e.a=function(l){return function(t){function n(t){var e;return m()(this,n),(e=w()(this,b()(n).call(this,t))).state={initialData:{},canClientFetch:!1},e}var e,a,r;return k()(n,t),v()(n,[{key:"getInitialProps",value:(r=d()(h.a.mark(function s(){var e,n,a,r,i;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.props,n=e.match,a=e.location,l.getInitialProps)return t.next=4,l.getInitialProps({match:n,location:a});t.next=7;break;case 4:t.t0=t.sent,t.next=8;break;case 7:t.t0={};case 8:r=t.t0,this.setState({initialData:r,canClientFetch:!0}),(i=r.page.tdk)&&(document.title=i.title);case 13:case"end":return t.stop()}},s,this)})),function i(){return r.apply(this,arguments)})},{key:"componentDidMount",value:(a=d()(h.a.mark(function c(){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(I=!0,window.__IS__SSR__&&(_=this,window.addEventListener("popstate",O),P&&this.getInitialProps()),this.props.history&&"PUSH"===this.props.history.action||!window.__IS__SSR__)return t.next=7,this.getInitialProps();t.next=7;break;case 7:case"end":return t.stop()}},c,this)})),function o(){return a.apply(this,arguments)})},{key:"componentWillUnmount",value:function(){I=P=!1}},{key:"render",value:function(){var t=function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach(function(t){f()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({initialData:{}},this.props);return this.state.canClientFetch?t.initialData=this.state.initialData||{}:(t.initialData=window.__INITIAL_DATA__,window.__INITIAL_DATA__=null),g.a.createElement(l,t)}}],[{key:"getInitialProps",value:(e=d()(h.a.mark(function u(e){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(l.getInitialProps)return t.next=3,l.getInitialProps(e);t.next=6;break;case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0={};case 7:return t.abrupt("return",t.t0);case 8:case"end":return t.stop()}},u)})),function p(t){return e.apply(this,arguments)})}]),n}(g.a.Component)}},47:function(t,e,n){"use strict";e.a={apiHost:"http://mockssr.bigerfe.com"}},77:function(t,e,n){"use strict";n.r(e);var a=n(44),r=n.n(a),i=n(45),s=n.n(i),c=n(0),o=n.n(c),u=(n(39),n(46)),p=n(49),l=n.n(p),f=n(47),h=n(8),d=n.n(h),m=n(9),v=n.n(m),w=n(10),b=n.n(w),k=n(11),g=n.n(k),y=n(12),_=n.n(y),P=n(13),I=(n(40),function(t){function e(t){return d()(this,e),b()(this,g()(e).call(this,t))}return _()(e,t),v()(e,[{key:"render",value:function(){var t=this.props.list,e=void 0===t?[]:t;return o.a.createElement("div",{className:"book-list"},e.map(function(t){return o.a.createElement("div",{key:t.id,className:"item"},o.a.createElement("p",{className:"img"}),o.a.createElement("div",{className:"right"},o.a.createElement("p",{className:"title"},o.a.createElement(P.b,{to:"/detail/"+t.id},t.title)),o.a.createElement("p",{className:"des"},t.des)))}))}}]),e}(o.a.Component));function O(t){var e=(t.initialData||{}).fetchData;return o.a.createElement("div",{className:"page-index-box"},o.a.createElement(I,{list:e}))}O.getInitialProps=function(){var e=s()(r.a.mark(function a(t){var e,n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("".concat(f.a.apiHost,"/list")).then(function(t){return t.data})["catch"](function(t){});case 2:return e=t.sent,n=0===e.code?e.data:[],t.abrupt("return",{fetchData:n,page:{tdk:{title:"首页 - koa-react-ssr",keywords:"关键词 - koa-react-ssr",description:"描述"}}});case 5:case"end":return t.stop()}},a)}));return function(t){return e.apply(this,arguments)}}();e["default"]=Object(u.a)(O)}}]);