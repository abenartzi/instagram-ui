(this["webpackJsonpinstagram-ui"]=this["webpackJsonpinstagram-ui"]||[]).push([[0],{26:function(e,a,t){e.exports=t(43)},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(23),l=t.n(c),s=(t(31),t(32),t(5)),o=t(6),i=t(8),m=t(7),u=t(9),p=(t(33),t(13)),d=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Instagram"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(p.b,{className:"nav-link",to:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/profile",className:"nav-link"},"Profile")))))}}]),a}(n.Component),v=(t(38),t(39),function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.tags.map((function(e){return r.a.createElement("div",{className:"tag"},r.a.createElement("a",{href:"#"},"#",e))})))}}]),a}(n.Component)),b=t(15),h=t(16),E=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("span",{className:"cardDate"},r.a.createElement(b.a,{className:"calIcon",icon:h.a}),r.a.createElement("span",{className:"card-text"},this.props.created)),r.a.createElement("a",{href:"#",className:"card-title"},r.a.createElement(b.a,{className:"userCircleIcon",icon:h.c,size:"2x"}))),r.a.createElement("div",{className:"userImage"},r.a.createElement("img",{src:this.props.image,alt:this.props.imageId})),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",null,r.a.createElement("h5",{className:"card-title"},this.props.title)),r.a.createElement("footer",{className:"cardFooter"},r.a.createElement(v,{tags:this.props.tags}),r.a.createElement("div",{className:"card-text"},r.a.createElement(b.a,{className:"heartIcon",icon:h.b}),this.props.likes)))))}}]),a}(n.Component),f=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={posts:[]},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://my-json-server.typicode.com/evyros/fake-api/posts").then((function(e){return e.json()})).then((function(a){e.setState({posts:a}),console.log(a)}))}},{key:"render",value:function(){function e(e){var a=new Date(1e3*e),t=a.getFullYear(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a.getMonth()],r=a.getDate();return"".concat(r," ").concat(n," ").concat(t)}return r.a.createElement("div",{className:"container"},this.state.posts.map((function(a){return r.a.createElement(E,{key:a.id,created:e(a.created),image:a.image,title:a.title,likes:a.likes,tags:a.tags})})))}}]),a}(n.Component),g=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Profile")}}]),a}(n.Component),N=t(11);var j=function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement("main",null,r.a.createElement(N.c,null,r.a.createElement(N.a,{path:"/profile"},r.a.createElement(g,null)),r.a.createElement(N.a,{path:"/"},r.a.createElement(f,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.8047db16.chunk.js.map