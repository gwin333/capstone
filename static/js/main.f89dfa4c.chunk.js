(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{220:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(86),c=t.n(r),s=(t(95),t(21)),i=t(22),o=t(25),m=t(23),u=t(26);t(96);var h=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-danger"},l.a.createElement("b",null,"EXERCISE TRACKER ",l.a.createElement("i",{class:"fas fa-running"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},l.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link",href:"#"},"History.",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link",href:"#"},"Last Month.",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link",href:"#"},"Monthly Goal Setter.",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link",href:"#"},"Log In/Log Out.",l.a.createElement("span",{className:"sr-only"},"(current)"))))))},d=t(87),v=t.n(d),b=t(39),E=t(5),y=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).state={exercisedThisDay:"",notes:""},e.handleChange=e.handleChange.bind(Object(E.a)(Object(E.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(E.a)(Object(E.a)(e))),e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"handleChange",value:function(e){var a=e.target,t=a.name,n=a.value,l=a.type,r=a.checked;"checkbox"===l?this.setState(Object(b.a)({},t,r)):this.setState(Object(b.a)({},t,n))}},{key:"handleSubmit",value:function(e){e.preventDefault();var a=this.props.value;localStorage.setItem(a,JSON.stringify(this.state))}},{key:"componentWillReceiveProps",value:function(e){console.log(this.props,e);var a=JSON.parse(localStorage.getItem(e.value));a||(a={notes:"",exercisedThisDay:""}),this.setState(a)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("b",null,"Date:")," ",this.props.value,l.a.createElement("br",null)),l.a.createElement("div",{className:"form-group"},l.a.createElement("b",null,"Notes:"),l.a.createElement("br",null),l.a.createElement("textarea",{type:"text",name:"notes",placeholder:"Any notes about your exercises this day",value:this.state.notes,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("div",{className:"form-group"},l.a.createElement("b",null,"Exercised this day?"),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("input",{type:"radio",name:"exercisedThisDay",value:"yes",checked:"yes"===this.state.exercisedThisDay,onChange:this.handleChange})," Yes, I did!"),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("input",{type:"radio",name:"exercisedThisDay",value:"no",checked:"no"===this.state.exercisedThisDay,onChange:this.handleChange})," No, I did not")),l.a.createElement("input",{type:"submit",value:"Submit",className:"btn btn-danger"})))}}]),a}(n.Component),g=t(40),p=Object(g.format)(new Date,"yyyy-MM-dd");console.log(p);var f=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).onChange=function(a){return e.setState({selectedDay:a})},e.state={selectedDay:new Date},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,null),l.a.createElement("br",null),l.a.createElement("h1",null,"Have you been exercising?"),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement(v.a,{onChange:this.onChange,value:this.state.selectedDay})),l.a.createElement("div",{className:"col"},l.a.createElement(y,{value:Object(g.format)(this.state.selectedDay,"yyyy-MM-dd")}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N={},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N;arguments.length>1&&arguments[1];return e},j=t(24),k=t(89),C=Object(j.b)(O);c.a.render(l.a.createElement(k.a,{store:C},l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},90:function(e,a,t){e.exports=t(220)},95:function(e,a,t){},96:function(e,a,t){}},[[90,1,2]]]);
//# sourceMappingURL=main.f89dfa4c.chunk.js.map