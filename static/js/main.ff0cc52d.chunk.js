(this.webpackJsonprobofriends2=this.webpackJsonprobofriends2||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),s=n.n(c),o=(n(12),n(13),n(2)),a=n(3),i=n(5),h=n(4),l=n(0),u=function(e){e.searchfield;var t=e.searchChange;return Object(l.jsx)("div",{className:"pa2",children:Object(l.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},b=function(e){var t=e.id,n=e.name,r=e.email;return Object(l.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow",children:[Object(l.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(t,"?200x200")}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:n}),Object(l.jsx)("p",{children:r})]})]})},d=function(e){var t=e.robots;return Object(l.jsx)("div",{children:t.map((function(e,n){return Object(l.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email},t[n].id)}))})},j=function(e){return Object(l.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"500px"},children:e.children})},f=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(a.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{children:"Oops. This is no good!"}):this.props.children}}]),n}(r.Component),O=(n(15),function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(l.jsx)(u,{searchChange:this.onSearchChange}),Object(l.jsx)(j,{children:Object(l.jsx)(f,{children:Object(l.jsx)(d,{robots:r})})})]}):Object(l.jsx)("h2",{children:"LOADING ..."})}}]),n}(r.Component)),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};s.a.render(Object(l.jsx)(O,{}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.ff0cc52d.chunk.js.map