(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{198:function(t,e,n){t.exports=n(359)},203:function(t,e,n){},359:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(36),i=n.n(c),o=(n(203),n(25)),s=n(26),u=n(28),l=n(27),p=n(29),h=n(371),m=n(372),d=n(373),f=n(17),v=n.n(f),b=n(22),w=n(23),g=n(24),y=n(33),j=n.n(y),O=n(374),E=n(238),x=n(369),k=n(360),C=n(167);n(231);function P(){var t=Object(w.a)(["\n  &&&{\n    margin: auto;\n  }\n"]);return P=function(){return t},t}function S(){var t=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  background: #f1f1f1;\n  height: 93vh;\n"]);return S=function(){return t},t}function N(){var t=Object(w.a)(["\n  padding: 40px;\n  height: 200px;\n  align-items: center;\n  margin: auto;\n  margin-bottom: 300px;\n  text-align: center;\n"]);return N=function(){return t},t}var D=g.a.div(N()),A=g.a.div(S()),_=Object(g.a)(O.a)(P()),F=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).state={cities:[]},n.componentDidMount=Object(b.a)(v.a.mark(function t(){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.fetchCities();case 2:case"end":return t.stop()}},t,this)})),n.fetchCities=Object(b.a)(v.a.mark(function t(){var e;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get("api/cities");case 2:e=t.sent,n.setState({cities:e.data});case 4:case"end":return t.stop()}},t,this)})),n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.state.cities.map(function(t,e){return r.a.createElement(E.a,{key:e},r.a.createElement(x.a,{href:"cities/".concat(t.id)},r.a.createElement(k.a,{src:t.img}),r.a.createElement(x.a.Content,null,r.a.createElement(x.a.Header,null,t.name))))});return r.a.createElement(A,null,r.a.createElement(D,null,r.a.createElement(C.Carousel,{showThumbs:!1,width:800,autoPlay:!0,interval:5e3,infiniteLoop:!0,transitionTime:1e3},r.a.createElement("div",null,r.a.createElement("img",{src:"https://www.visitmacysusa.com/sites/default/files/styles/hero/public/macys-los-angeles-skyline-at-night-header.jpg?itok=FTikBOPJ"}),r.a.createElement("p",{className:"legend"}," Los Angeles")),r.a.createElement("div",null,r.a.createElement("img",{src:"https://xixerone.com/en/wp-content/uploads/sites/2/2017/09/Best-areas-to-stay-in-Dallas-Texas.jpg"}),r.a.createElement("p",{className:"legend"},"Dallas")),r.a.createElement("div",null,r.a.createElement("img",{src:"https://i.imgur.com/PMSkWN5.jpg"}),r.a.createElement("p",{className:"legend"},"Atlanta")))),r.a.createElement(_,{columns:"equal"},r.a.createElement(O.a.Row,null,t)))}}]),e}(a.Component);function B(){var t=Object(w.a)(["\n  font: 14px 'Noto Sans', sans-serif;\n  align-self: center;\n  padding-right: 20px;\n"]);return B=function(){return t},t}function M(){var t=Object(w.a)(["\n  font: 30px 'Noto Sans', sans-serif;\n  font-weight: bold;\n  font-style: italic;\n  align-self: flex-start;\n  padding-left: 20px;\n"]);return M=function(){return t},t}function T(){var t=Object(w.a)(["\n  display: flex;\n  justify-content: space-between;\n  /* font: 56px 'Damion', cursive; */\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid black;\n  background: grey;\n  color: #f1f1f1;\n"]);return T=function(){return t},t}var J=g.a.div(T()),W=g.a.div(M()),L=g.a.div(B()),Y=function(t){function e(){return Object(o.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement(J,null,r.a.createElement(W,null,"Vagabond"),r.a.createElement(L,null,"|Sign in|"))}}]),e}(a.Component),q=n(159),H=n.n(q),I=n(367),R=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).state={city:{},post:{}},n.fetchOneCity=Object(b.a)(v.a.mark(function t(){var e,a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.props.match.params.city_id,t.next=3,j.a.get("/api/cities/".concat(e));case 3:return a=t.sent,t.abrupt("return",a.data);case 5:case"end":return t.stop()}},t,this)})),n.fetchOnePost=Object(b.a)(v.a.mark(function t(){var e,a,r;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.props.match.params.city_id,a=n.props.match.params.id,t.next=4,j.a.get("/api/cities/".concat(e,"/posts/").concat(a));case 4:return r=t.sent,t.abrupt("return",r.data);case 6:case"end":return t.stop()}},t,this)})),n.handleDelete=function(){var t=Object(b.a)(v.a.mark(function t(e){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:H()({title:"Are You Sure You want to Delete ".concat(n.state.post.title," ?"),icon:"warning",buttons:!0,dangerMode:!0}).then(function(t){t?H()("Success!",{icon:"success"}).then(Object(b.a)(v.a.mark(function t(){var a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.props.match.params.city_id,t.next=3,j.a.delete("/api/cities/".concat(a,"/posts/").concat(e));case 3:n.props.history.push("/cities/".concat(a));case 4:case"end":return t.stop()}},t,this)}))):H()("Successfully Cancelled")});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=Object(b.a)(v.a.mark(function t(){var e,n,a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.match.params.city_id,t.next=3,this.fetchOneCity(e);case 3:return n=t.sent,t.next=6,this.fetchOnePost(e);case 6:a=t.sent,this.setState({city:n,post:a});case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state.city,n=this.state.post;return r.a.createElement("div",null,r.a.createElement("h2",null,e.name),r.a.createElement("h1",null,n.title),r.a.createElement("p",null,n.body),r.a.createElement("button",{onClick:function(){return t.handleDelete(n.id)}},"Delete"),r.a.createElement(I.a,{to:"/cities/".concat(e.id,"/posts/").concat(n.id,"/edit")},"Edit "))}}]),e}(a.Component),U=n(60),V=n(368),$=n(370);function z(){var t=Object(w.a)(["\n    &&& {\n        width: 30vw;\n    }\n"]);return z=function(){return t},t}var G=Object(g.a)(V.a)(z()),K=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).state={newPost:{title:"",body:""}},n.handleChange=function(t){var e=Object(U.a)({},n.state.newPost);e[t.target.name]=t.target.value,n.setState({newPost:e})},n.handleSubmit=function(t){t.preventDefault();var e=Object(U.a)({},n.state.newPost);n.props.addNewPost(e),n.setState({newPost:{title:"",body:""}})},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement(G,{onSubmit:this.handleSubmit},r.a.createElement("input",{onChange:this.handleChange,type:"text",name:"title",value:this.state.newPost.title,placeholder:"Title"}),r.a.createElement("input",{onChange:this.handleChange,type:"text",name:"body",value:this.state.newPost.body,placeholder:"Body"}),r.a.createElement($.a,{className:"update",type:"submit",value:"Add Post"},"Submit"))}}]),e}(a.Component);function Q(){var t=Object(w.a)(["\n    width: 100vw;\n    height: 39vh;\n    padding: 30px;\n    overflow: scroll;\n    overflow-x: hidden;\n    background: #f1f1f1;\n    /* margin: auto; */\n"]);return Q=function(){return t},t}function X(){var t=Object(w.a)(["\n    padding-left: 15px;\n    width: 100vw;\n    display: block;\n    justify-content: center;\n    align-items: baseline;\n    background: #f1f1f1;\n"]);return X=function(){return t},t}function Z(){var t=Object(w.a)(["\n    width: 100vw;\n    height: 400px;\n"]);return Z=function(){return t},t}function tt(){var t=Object(w.a)(["\n    margin: auto;\n"]);return tt=function(){return t},t}var et=g.a.div(tt()),nt=g.a.img(Z()),at=g.a.div(X()),rt=g.a.div(Q()),ct=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).state={city:{},posts:[],showNewPostForm:!1},n.fetchData=Object(b.a)(v.a.mark(function t(){var e,a,r;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.props.match.params.id,t.next=3,j.a.get("/api/cities/".concat(e));case 3:return a=t.sent,t.next=6,j.a.get("/api/cities/".concat(e,"/posts"));case 6:r=t.sent,n.setState({posts:r.data,city:a.data});case 8:case"end":return t.stop()}},t,this)})),n.toggleShowNewPostForm=function(){n.setState({showNewPostForm:!n.state.showNewPostForm})},n.addNewPost=function(){var t=Object(b.a)(v.a.mark(function t(e){var a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.props.match.params.id,t.next=3,j.a.post("/api/cities/".concat(a,"/posts"),e);case 3:n.fetchData();case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=Object(b.a)(v.a.mark(function t(){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.fetchData();case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.city,e=this.state.posts.map(function(t,e){return r.a.createElement(x.a,{key:e},r.a.createElement(x.a.Content,{href:"/cities/".concat(t.city_id,"/posts/").concat(t.id),header:t.title}),r.a.createElement(x.a.Content,{description:t.body}))});return r.a.createElement(et,null,r.a.createElement("div",null,r.a.createElement(nt,{src:t.img,alt:t.name})),r.a.createElement(at,null,r.a.createElement("h1",null,t.name),r.a.createElement($.a,{onClick:this.toggleShowNewPostForm},"Add New Post"),this.state.showNewPostForm?r.a.createElement(K,{addNewPost:this.addNewPost}):""),r.a.createElement(rt,null,e.reverse()))}}]),e}(a.Component),it=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).state={post:{title:"",body:""}},n.handleChange=function(t){var e=Object(U.a)({},n.state.post);e[t.target.name]=t.target.value,n.setState({post:e})},n.handleSubmit=function(){var t=Object(b.a)(v.a.mark(function t(e){var a,r;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.props.match.params.city_id,r=n.props.match.params.id,e.preventDefault(),t.next=5,j.a.put("/api/cities/".concat(a,"/posts/").concat(r),n.state.post);case 5:n.props.history.push("/cities/".concat(a,"/posts/").concat(r));case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"title",value:this.state.post.title,onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"body",value:this.state.post.body,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Update Post"})))}}]),e}(a.Component),ot=function(t){function e(){return Object(o.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(Y,null),r.a.createElement(m.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:F}),r.a.createElement(d.a,{exact:!0,path:"/cities/:id",component:ct}),r.a.createElement(d.a,{exact:!0,path:"/cities/:city_id/posts/:id",component:R}),r.a.createElement(d.a,{exact:!0,path:"/cities/:city_id/posts/:id/edit",component:it}))))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ot,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[198,2,1]]]);
//# sourceMappingURL=main.fc510d31.chunk.js.map