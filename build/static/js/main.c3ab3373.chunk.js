(this["webpackJsonpgarage-door-client"]=this["webpackJsonpgarage-door-client"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(6),c=n.n(a),i=(n(12),n(1)),l=n(2),s=n(3),u=n(4);n(13);var d=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).state={Door1_isOpen:!0,Door2_isOpen:!0},setInterval((function(){return o.getUpdate()}),1e4),o}return Object(l.a)(n,[{key:"getUpdate",value:function(){var e=this;fetch("/update").then((function(e){return console.debug(e),e.json()})).then((function(t){console.debug(t),e.setState({door1_isOpen:t.door1_isOpen,door2_isOpen:t.door2_isOpen})}))}},{key:"door1_isOpen",value:function(){return!0===this.state.door1_isOpen}},{key:"door2_isOpen",value:function(){return!0===this.state.door2_isOpen}},{key:"render",value:function(){return r.a.createElement("div",{className:"GarageDoorController"},r.a.createElement("h1",null,"Garage Door Client"),r.a.createElement("div",null,"Door 1: ",this.door1_isOpen()?"Opened":"Closed"),r.a.createElement("div",null,"Door 2: ",this.door2_isOpen()?"Opened":"Closed"),this.door1_isOpen()?r.a.createElement(p,{label:"Close Door 1",action:"cdoor"}):r.a.createElement(p,{label:"Open Door 1",action:"odoor"}),this.door1_isOpen()?r.a.createElement(p,{label:"Close Door 2",action:"cdoor2"}):r.a.createElement(p,{label:"Open Door 2",action:"odoor2"}))}}]),n}(r.a.Component),p=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"handleClick",value:function(){var e=this;fetch("/".concat(this.props.action),{method:"POST"}).then((function(){return console.log("".concat(e.props.action," : SUCCESS"))}),(function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("button",{onClick:function(){return e.handleClick()}},this.props.label)}}]),n}(r.a.Component),h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.c3ab3373.chunk.js.map