exports.ids=[1],exports.modules={26:function(t,a,n){"use strict";var i=n(0),e=n.n(i);let s=null,o=!1,r=!1;const c=()=>{s&&s.getInitialProps&&(console.log("popStateFn"),o=!0,r&&s.getInitialProps())};a.a=t=>(class extends e.a.Component{constructor(t){super(t),this.state={initialData:{},canClientFetch:!1}}static async getInitialProps(a){return t.getInitialProps?await t.getInitialProps(a):{}}async getInitialProps(){const{match:a,location:n}=this.props,i=t.getInitialProps?await t.getInitialProps({match:a,location:n}):{};this.setState({initialData:i,canClientFetch:!0}),console.log("getInitialProps");let{tdk:e}=i.page;e&&(document.title=e.title)}async componentDidMount(){r=!0,window.__IS__SSR__&&(s=this,window.addEventListener("popstate",c),o&&this.getInitialProps());const t=this.props.history&&"PUSH"===this.props.history.action;console.log("canClientFetch",t),!t&&window.__IS__SSR__||await this.getInitialProps()}componentWillUnmount(){console.log("unmount"),o=!1,r=!1}render(){const a={initialData:{},...this.props};return a.initialData=this.props.staticContext.initialData||{},e.a.createElement(t,a)}})},27:function(t,a,n){"use strict";a.a={apiHost:"http://mockssr.bigerfe.com"}},29:function(t,a,n){"use strict";n.r(a);var i=n(0),e=n.n(i),s=(n(4),n(25)),o=n.n(s),r=n(27),c=t=>o.a.get(`${r.a.apiHost}/detail/${t}`).then((function(t){return t.data})).catch((function(t){console.log(t)})),l=n(26);class p extends e.a.Component{constructor(t){super(t)}static async getInitialProps(t){return{fetchData:(await c(t.match.params.id)).data||{},page:{tdk:{title:"小册详情 - koa-react-ssr demo",keywords:"koa-react-ssr",description:"koa-react-ssr"}}}}render(){const{fetchData:t={}}=this.props.initialData||{},{html:a}=t||null;return a?e.a.createElement("div",{className:"detail-box",dangerouslySetInnerHTML:{__html:a}}):null}}a.default=Object(l.a)(p)}};