(this["webpackJsonpgarage-door-client"]=this["webpackJsonpgarage-door-client"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(6),c=n.n(r),l=(n(12),n(1)),i=n(2),s=n(3),u=n(4);n(13);var p=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).state={sensors:{}},setInterval((function(){return o.getUpdate()}),1e4),o}return Object(i.a)(n,[{key:"getUpdate",value:function(){var e=this;fetch("/update").then((function(t){e.state.sensors=t,console.log(e.state.sensors)}))}},{key:"render",value:function(){return a.a.createElement("div",{className:"GarageDoorController"},a.a.createElement("h1",null,"Garage Door Client"),a.a.createElement(d,{label:"Open Door 1",action:"odoor"}),a.a.createElement(d,{label:"Close Door 1",action:"cdoor"}),a.a.createElement(d,{label:"Open Door 2",action:"odoor2"}),a.a.createElement(d,{label:"Close Door 2",action:"cdoor2"}))}}]),n}(a.a.Component),d=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"handleClick",value:function(){var e=this;fetch("/".concat(this.props.action),{method:"POST"}).then((function(){return console.log("".concat(e.props.action," : SUCCESS"))}),(function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return a.a.createElement("button",{onClick:function(){return e.handleClick()}},this.props.label)}}]),n}(a.a.Component),f=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(p,null))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.a1b51b6d.chunk.js.map