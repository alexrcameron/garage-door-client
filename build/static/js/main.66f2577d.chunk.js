(this["webpackJsonpgarage-door-client"]=this["webpackJsonpgarage-door-client"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),i=n.n(o),l=(n(12),n(1)),u=n(2),c=n(3),s=n(4),p=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"door_isOpen",value:function(){return!0===this.props.value}},{key:"setClosing",value:function(){}},{key:"setOpening",value:function(){}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,"Door ",this.props.doorNumber,": ",this.door_isOpen()?"Opened":"Closed",this.door_isOpen()?a.a.createElement(d,{label:"Close Door ".concat(this.props.doorNumber),action:"cdoor".concat(this.props.doorNumber),onClick:function(){return e.setClosing()}}):null,this.door_isOpen()?null:a.a.createElement(d,{label:"Open Door ".concat(this.props.doorNumber),action:"odoor".concat(this.props.doorNumber),onClick:function(){return e.setOpening()}}))}}]),n}(a.a.Component),d=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"handleClick",value:function(){var e=this;fetch("/".concat(this.props.action),{method:"POST"}).then((function(){return console.log("".concat(e.props.action," : SUCCESS"))}),(function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return a.a.createElement("button",{onClick:function(){return e.handleClick()}},this.props.label)}}]),n}(a.a.Component),m=p,h=(n(13),null);var f=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={initialized:!1,door1_isOpen:null,door2_isOpen:null,building_temp:null,fridge_temp:null,freezer_temp:null,lights_areOn:null},h&&clearInterval(h),h=r.updateFn=setInterval((function(){return r.getUpdate()}),5e3),r}return Object(u.a)(n,[{key:"getUpdate",value:function(){var e=this;fetch("/update").then((function(e){return console.debug(e),e.json()})).then((function(t){console.debug(t),e.setState({initialized:!0,door1_isOpen:t.door1_isOpen,door2_isOpen:t.door2_isOpen,building_temp:t.building_temp,fridge_temp:t.fridge_temp,freezer_temp:t.freezer_temp,lights_areOn:t.lights_areOn})}))}},{key:"door1_isOpen",value:function(){return!0===this.state.door1_isOpen}},{key:"door2_isOpen",value:function(){return!0===this.state.door2_isOpen}},{key:"render",value:function(){return a.a.createElement("div",{className:"GarageDoorController"},a.a.createElement("h1",null,"Garage Control Panel"),a.a.createElement("div",{className:"status-section"},this.state.initialized?a.a.createElement("div",{className:"controls"},a.a.createElement(m,{doorNumber:1,value:this.door1_isOpen()}),a.a.createElement(m,{doorNumber:2,value:this.door2_isOpen()}),a.a.createElement(O,{name:"building temp",temperature:this.state.building_temp}),a.a.createElement(O,{name:"fridge temp",temperature:this.state.fridge_temp}),a.a.createElement(O,{name:"freezer temp",temperature:this.state.freezer_temp}),a.a.createElement("div",null,"Lights: ",this.state.lights_areOn?"On":"Off")):a.a.createElement("div",null,"Getting Data...")))}}]),n}(a.a.Component);function O(e){return a.a.createElement("div",null,e.name,": ",e.temperature,"\xb0F")}var v=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(f,null))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.66f2577d.chunk.js.map