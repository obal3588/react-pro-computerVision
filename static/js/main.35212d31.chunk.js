(window.webpackJsonppro2=window.webpackJsonppro2||[]).push([[0],{150:function(e,t,a){e.exports=a(325)},155:function(e,t,a){},156:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},157:function(e,t,a){},167:function(e,t){},168:function(e,t){},169:function(e,t){},170:function(e,t){},171:function(e,t){},172:function(e,t){},325:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(29),r=a.n(o),i=(a(155),a(46)),l=a(11),s=a(12),m=a(14),u=a(13),d=a(15),p=(a(156),a(157),a(17)),f=a.n(p),b=a(27),h=a(32),v=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return f()("#AboutMe").removeClass("active"),f()("#ComputerVision").removeClass("active"),f()("#Home").addClass("active"),c.a.createElement("h1",null,"Home")}}]),t}(c.a.Component),g=a(332),E=a(333),x=a(139),O=a(334),j=a(138),y=a(337),C=a(330),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(e){e.preventDefault(),a.props.newComment(a.state)},a.handleChange=function(e){a.setState(Object(j.a)({},e.target.name,e.target.value))},a.state={name:"",comment:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(x.a,null,c.a.createElement(y.a,null,c.a.createElement(y.a.Group,{controlId:"nameId"},c.a.createElement(y.a.Label,null,"Name"),c.a.createElement(y.a.Control,{type:"text",placeholder:"name",onChange:this.handleChange,name:"name"})),c.a.createElement(y.a.Group,{controlId:"commentId"},c.a.createElement(y.a.Label,null,"Comments"),c.a.createElement(y.a.Control,{as:"textarea",rows:"3",onChange:this.handleChange,name:"comment"})),c.a.createElement(C.a,{onClick:this.handleClick,variant:"primary"},"Done ")))}}]),t}(n.Component),w=a(331),I=a(338),A=function(e){return c.a.createElement(w.a,null,c.a.createElement(I.a,{style:{width:"18rem"}},c.a.createElement(I.a.Body,null,c.a.createElement(I.a.Title,null,e.card.name),c.a.createElement(I.a.Text,null,e.card.comment))))},N=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){f()("#Home").removeClass("active"),f()("#ComputerVision").removeClass("active"),f()("#AboutMe").addClass("active");var e=this.props.commentsArr.map((function(e,t){return c.a.createElement(A,{card:e,key:t})}));return c.a.createElement(g.a,null,c.a.createElement(E.a,null,c.a.createElement(x.a,null),c.a.createElement(x.a,{md:{span:4,offset:8}},"write comment")),c.a.createElement(E.a,null,c.a.createElement(x.a,null),c.a.createElement(x.a,null),c.a.createElement(k,{newComment:this.props.newComment})),c.a.createElement(E.a,null,c.a.createElement(x.a,{md:{span:4,offset:8}},c.a.createElement(O.a,null,e))))}}]),t}(c.a.Component),F=a(47),B=a.n(F),H=a(89),W=(a(67),a(162),a(141)),R=a(48),L="/models";function _(e){var t=null,a=null,n=[],c=[];function o(e){n=e}function r(e){c=e}e.setup=Object(H.a)(B.a.mark((function n(){var c;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R.d(L);case 2:return n.next=4,R.b(L);case 4:return n.next=6,R.c(L);case 6:e.createCanvas(640,360),c={video:{mandatory:{minWidth:640,minHeight:360},optional:[{maxFrameRate:80}]},audio:!1},(t=e.createCapture(c,(function(){}))).id("video_element"),t.size(640,360),t.hide(),W.a().then((function(e){try{a=e}catch(t){console.log(t)}})).catch((function(e){console.log("Error occured : ",e)}));case 13:case"end":return n.stop()}}),n)}))),e.draw=Object(H.a)(B.a.mark((function l(){return B.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(t){l.next=2;break}return l.abrupt("return");case 2:e.background(255),e.image(t,0,0),e.fill(0,0,0,0),n.map((function(t){if(t){e.textSize(10),e.strokeWeight(1);var a=t.bbox[0]+t.bbox[2],n=t.bbox[1]+t.bbox[3],c="Confidence: "+t.score.toFixed(1),o=e.textWidth(c),r=e.textWidth(t.class);e.text(t.class,a-r-5,n-40),e.text(c,a-o-5,n-5),e.strokeWeight(4),e.stroke("rgb(100%,100%,100%)"),e.rect(t.bbox[0]/1.5,t.bbox[1]/1.5,t.bbox[2],t.bbox[3])}})),c.map((function(t){if(t){e.textSize(15),e.strokeWeight(1);var a=t.detection.box._x+t.detection.box._width,n=t.detection.box._y+t.detection.box._height,c="Gender: "+t.gender,o=e.textWidth(c);e.text(c,a-o-10,n-60);var r="Age: "+t.age.toFixed(0),l=e.textWidth(r);e.text(r,a-l-10,n-30);var s=t.expressions,m=Object.keys(s).map((function(e){return s[e]})),u=Math.max.apply(Math,Object(i.a)(m)),d="Mood: "+Object.keys(s).filter((function(e){return s[e]===u}))[0],p=e.textWidth(d);e.text(d,a-p-10,n-10),e.strokeWeight(4),e.stroke("rgb(100%,100%,100%)"),e.rect(t.detection.box._x,t.detection.box._y,t.detection.box._width,t.detection.box._height)}})),R.a(t.id()).withAgeAndGender().withFaceExpressions().then((function(e){r(e)})),t.loadedmetadata&&a&&a.detect(document.getElementById("video_element")).then(o).catch((function(e){console.log("Exception : ",e)}));case 9:case"end":return l.stop()}}),l)})))}var M=a(143),S=a.n(M),V=function(e){function t(e){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(S.a,{sketch:_})}}]),t}(c.a.Component),G=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={stopVideo:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return f()("#Home").removeClass("active"),f()("#AboutMe").removeClass("active"),f()("#ComputerVision").addClass("active"),c.a.createElement(g.a,null,c.a.createElement("h1",null,"ComputerVision")," ",c.a.createElement(E.a,null,c.a.createElement(x.a,null," ")),c.a.createElement(E.a,null,c.a.createElement(x.a,null,c.a.createElement(V,{stopVideo:this.state.stopVideo}))))}}]),t}(c.a.Component),T=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("h1",null,"Errors404")}}]),t}(c.a.Component),z=a(59),D=(a(174),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(e){var t,n=Object(z.a)(a),c=e.target.files[0],o=new FileReader,r={returnFaceId:"true",returnFaceLandmarks:"true",returnFaceAttributes:"age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise"};o.onload=function(e){console.log("ss",e),document.getElementById("imgx").src=e.target.result;var a=new XMLHttpRequest,n="https://reconface.cognitiveservices.azure.com/face/v1.0/detect?"+f.a.param(r);a.open("POST",n,!0),a.setRequestHeader("Content-Type","application/octet-stream"),a.setRequestHeader("Ocp-Apim-Subscription-Key","d56a00a55f9c44c9a0372880cfa969da"),a.send(c),a.onreadystatechange=function(e){if(4==this.readyState&&200==this.status){t=JSON.parse(this.responseText);var a=document.getElementById("imgx").offsetLeft,n=document.getElementById("imgx").offsetTop,c=(document.createElement("div"),document.getElementById("face")),o=document.getElementById("features");console.log(t),t.forEach((function(e){var t=document.createElement("div"),r=document.createElement("span");t.style.left=a+e.faceRectangle.left+"px",t.style.top=n+e.faceRectangle.top+"px",t.style.width=e.faceRectangle.width+"px",t.style.height=e.faceRectangle.height+"px",t.style.border="2px solid purple",t.style.position="absolute",t.id="faceRec",c.append(t),r.style.left=a+e.faceLandmarks.eyeLeftBottom.x+"px",r.style.top=n+e.faceLandmarks.eyeLeftBottom.x+"px",t.append(r),o.style.color="black"}))}}},o.readAsDataURL(e.target.files[0]),n.props.newImage(t)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"input-group "},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text",id:"inputGroupFileAddon01"},"Upload")),c.a.createElement("div",{className:"custom-file"},c.a.createElement("input",{type:"file",className:"custom-file-input",id:"inputGroupFile01","aria-describedby":"inputGroupFileAddon01",onChange:this.handleClick}),c.a.createElement("label",{className:"custom-file-label",htmlFor:"inputGroupFile01"},"Choose file")))}}]),t}(n.Component)),K=a(336),P=a(335),q=(a(326),function(e){function t(e){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(K.a,{defaultActiveKey:"profile",id:"uncontrolled-tab-example"},c.a.createElement(P.a,{eventKey:"upload",title:"Upload"},c.a.createElement(g.a,{className:"justify-content-right"},c.a.createElement(E.a,null,c.a.createElement("div",{id:"upload"},c.a.createElement(D,{newImage:this.props.newImage,images:this.props.images}))),c.a.createElement(E.a,null,c.a.createElement("div",{id:"getFaceDetails"},c.a.createElement("img",{id:"imgx",class:"img-fluid"}),c.a.createElement("div",{id:"face"}),c.a.createElement("ul",{id:"features",class:"collection"}))))),c.a.createElement(P.a,{eventKey:"profile",title:"History"},"a"))}}]),t}(n.Component)),J=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).newComment=function(e){console.log(e),a.setState({comments:[e].concat(Object(i.a)(a.state.comments))})},a.newImage=function(e){console.log(e),a.setState({images:[e].concat(Object(i.a)(a.state.images))}),console.log("newimag",a.state.images)},a.state={comments:[],images:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(b.a,null,c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},c.a.createElement("div",{className:"navbar-nav",id:"mainBar"},c.a.createElement(b.b,{to:"/",className:"nav-item nav-link ",id:"Home"},"Home"," "),c.a.createElement(b.b,{to:"/aboutme",className:"nav-item nav-link",id:"AboutMe"},"About"," "),c.a.createElement(b.b,{to:"/computervision",className:"nav-item nav-link ",id:"ComputerVision"},"Computer Vsion"," "),c.a.createElement(b.b,{to:"/faceapi",className:"nav-item nav-link ",id:"FaceAPI"},"FaceAPI"," ")))),c.a.createElement(h.c,null,c.a.createElement(h.a,{exact:!0,path:"/",component:v}),c.a.createElement(h.a,{path:"/aboutme",component:function(){return c.a.createElement(N,{newComment:e.newComment,commentsArr:e.state.comments})}}),c.a.createElement(h.a,{path:"/computervision",component:G}),c.a.createElement(h.a,{path:"/faceapi",component:function(){return c.a.createElement(q,{newImage:e.newImage,images:e.state.images})}}),c.a.createElement(h.a,{component:T})))}}]),t}(n.Component);a(321),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(322),a(323),a(324);r.a.render(c.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[150,1,2]]]);
//# sourceMappingURL=main.35212d31.chunk.js.map