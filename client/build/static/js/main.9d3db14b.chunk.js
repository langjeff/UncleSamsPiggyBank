(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{111:function(e,t,a){},112:function(e,t,a){e.exports=a.p+"static/media/PiggyBankBtn.5157e40c.png"},113:function(e,t,a){e.exports=a.p+"static/media/Guy.69aef6bf.png"},143:function(e,t,a){e.exports=a(174)},148:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},174:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(12),c=a.n(r),l=(a(148),a(119)),i=a(15),s=a(32),m=a.n(s),u=a(112),g=a.n(u),d=a(113),f=a.n(d),p=(a(67),a(21)),h=Object(p.a)();var E=function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"logo"},o.a.createElement("img",{src:m.a,alt:"Uncle Sam's Piggy Bank Logo"})),o.a.createElement("div",{className:"message"},o.a.createElement("h2",{align:"center"},"Uncle Sam's Piggy Bank is Broken!"),o.a.createElement("h2",null,"Open the Piggy Bank below to fix it!"),o.a.createElement("div",{className:"guy"},o.a.createElement("img",{src:f.a,alt:"Monopoly Guy"}))),o.a.createElement("button",{id:"play"},o.a.createElement("img",{src:g.a,onClick:function(){h.push("/questions"),window.location.reload(!1)}})))},v=a(6),N=a(19),b=a(225),y=a(129),w=a(70),k=a(47),j=a.n(k),x=function(){return j.a.get("/api/tax")},O=function(e){return j.a.post("/api/answers",e)},S=function(){return j.a.get("/api/answers")},L=function(e){return j.a.put("/api/answers",e)};var B=function(e){var t=e.id,a=Object(n.useState)([]),r=Object(v.a)(a,2),c=r[0],l=r[1];return o.a.createElement(w.GoogleLogin,{clientId:"899511652234-cls2folp54noje6mq3njs0c6f8ubqg9s.apps.googleusercontent.com",buttonText:"Login",onSuccess:function(e){l(e.profileObj.email),L({_id:t,userName:c}).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)}))},onFailure:function(e){console.log("Login failed: res:",e),alert("Failed to login.")},cookiePolicy:"single_host_origin",style:{marginTop:"100px"},isSignedIn:!0})},C=(a(166),a(63)),P=a.n(C),A=a(226);var q=function(e){var t=e.question,a=Object(n.useState)([]),r=Object(v.a)(a,2),c=r[0],l=r[1],i=Object(n.useState)(),s=Object(v.a)(i,2),m=s[0],u=s[1],g=Object(n.useState)(0),d=Object(v.a)(g,2),f=d[0],p=d[1],E=Object(n.useState)({}),w=Object(v.a)(E,2),k=w[0],j=w[1],x=function(e,t){e.preventDefault(),t=e.currentTarget.value,u(t)};return Object(n.useEffect)((function(){j(t[f])}),[t,f]),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"question",align:"center"},k&&"income"===k.type?o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"category"},"Tax Bracket: ",k&&k.category),k&&0!==k.return?o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"returns"},"# of Tax Returns:"," ",P()(k&&k.returns).format("0a"))):o.a.createElement(o.a.Fragment,null," "),o.a.createElement("p",{className:"returns"},"Average Tax Paid:"," ",k&&k.rate?"".concat(parseInt(Math.floor(100*k.rate)),"%"):console.log("not available")),o.a.createElement("p",{className:"returns"},"Amount of taxes:"," ",P()(k&&k.amount).format("($ 0.0a)")),o.a.createElement("p",{className:"taxes-paid"},"What should their tax rate be?"),o.a.createElement("form",{noValidate:!0,autoComplete:"off"},o.a.createElement(y.a,{id:"outlined-basic",variant:"outlined",InputProps:{startAdornment:o.a.createElement(b.a,{position:"start"},"%")},onChange:x}))):o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"category"},"Gov't Spending: ",k&&k.category),o.a.createElement("p",{className:"returns"},"Annual Budget:"," ",P()(k&&k.amount).format("($ 0.0a)")),o.a.createElement("p",{className:"returns"},"Monthly Budget:"," ",P()(k&&k.amount/12).format("$0,0")),o.a.createElement("p",{className:"taxes-paid"},"What should the monthly budget be?"),o.a.createElement("form",{noValidate:!0,autoComplete:"off"},o.a.createElement(y.a,{id:"outlined-basic",variant:"outlined",InputProps:{startAdornment:o.a.createElement(b.a,{position:"start"},"$")},onChange:x}))),o.a.createElement("button",{id:"next",onClick:function(e){e.preventDefault(),f<=14?(p(f+1),"income"===k.type?l([].concat(Object(N.a)(c),[{category:k.category,type:k.type,base:k.base,rate:m/100,amount:k.base*m/100}])):l([].concat(Object(N.a)(c),[{category:k.category,type:k.type,amount:12*m}]))):(O({answers:[c]}),h.push("/answers"),window.location.reload(!1))},rate:m},"Next Question"))),o.a.createElement(A.a,{light:!0}),o.a.createElement("h3",{style:{width:"500px",color:"white",textAlign:"center",backgroundColor:"#3e58b6",font:"roboto",margin:"12px",padding:"14px"}},k&&k.caption))};var F=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){c()}),[]);var c=function(){x().then((function(e){r(e.data)})).catch((function(e){return console.log(e)}))};return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"logo"},o.a.createElement("img",{src:m.a,className:"Qlogo",alt:"Uncle Sam's Piggy Bank Logo",align:"center"})),o.a.createElement("div",null,o.a.createElement(q,{question:a})))},I=a(77),T=(a(111),[{field:"id",headerName:"ID",width:70},{field:"firstName",headerName:"First name",width:130},{field:"lastName",headerName:"Last name",width:130},{field:"age",headerName:"Age",type:"number",width:90},{field:"fullName",headerName:"Full name",description:"This column has a value getter and is not sortable.",sortable:!1,width:160,valueGetter:function(e){return"".concat(e.getValue("firstName")||""," ").concat(e.getValue("lastName")||"")}}]),U=[{id:1,lastName:"Snow",firstName:"Jon",age:35},{id:2,lastName:"Lannister",firstName:"Cersei",age:42},{id:3,lastName:"Lannister",firstName:"Jaime",age:45},{id:4,lastName:"Stark",firstName:"Arya",age:16},{id:5,lastName:"Targaryen",firstName:"Daenerys",age:null},{id:6,lastName:"Melisandre",firstName:null,age:150},{id:7,lastName:"Clifford",firstName:"Ferrara",age:44},{id:8,lastName:"Frances",firstName:"Rossini",age:36},{id:9,lastName:"Roxie",firstName:"Harvey",age:65}];function G(){return n.createElement("div",{style:{height:500,width:"50%"}},n.createElement(I.a,{rows:U,columns:T,pageSize:8}))}var R=function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"logo"},o.a.createElement("img",{src:m.a,alt:"Uncle Sam's Piggy Bank Logo",className:"Qlogo"})),o.a.createElement("div",{className:"data-container"},o.a.createElement("h4",{align:"center"},"Compare your results to others"),o.a.createElement(G,null)))};var W=function(){return o.a.createElement(w.GoogleLogout,{clientId:"899511652234-cls2folp54noje6mq3njs0c6f8ubqg9s.apps.googleusercontent.com",buttonText:"Logout",onLogoutSuccess:function(e){console.log("Logged out")}})};var $=function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"logo"},o.a.createElement("img",{src:m.a,alt:"Uncle Sam's Piggy Bank Logo"})),o.a.createElement(B,null),o.a.createElement(W,null))},_=[{field:"category",headerName:"Category",width:400},{field:"amount",headerName:"Amount",width:300}];function D(e){var t=e.answer,a=e.id,o=0,r=0;t.map((function(e){"income"===e.type?o+=e.amount:r+=e.amount}));var c=o-r,l=[];return t.map((function(e){return l.push({id:e.category,category:e.category,amount:e.amount})})),n.createElement("div",{style:{height:550,width:740}},n.createElement("h2",null,t&&c),n.createElement(I.a,{rows:l,columns:_,pageSize:15}),n.createElement(B,{id:a}),n.createElement(W,null))}var J=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(),l=Object(v.a)(c,2),i=l[0],s=l[1];return Object(n.useEffect)((function(){S().then((function(e){r(e.data[0].answers[0]),s(e.data[0]._id)})).catch((function(e){return console.log(e)}))}),[]),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"logo"},o.a.createElement("img",{src:m.a,alt:"Uncle Sam's Piggy Bank Logo",className:"Qlogo"})),o.a.createElement("div",null,o.a.createElement(D,{answer:a,id:i})))},M=a(60),Q=a(61),V=a(81),z=a(80),H=[{title:"Balance the Budget",url:"/questions",cName:"nav-links"},{title:"See the Results",url:"/results",cName:"nav-links"},{title:"Login",url:"/save",cName:"nav-links"}],K=(a(171),function(e){Object(V.a)(a,e);var t=Object(z.a)(a);function a(){var e;Object(M.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={clicked:!1},e.reRoute=function(){h.push("/"),window.location.reload(!1)},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(Q.a)(a,[{key:"render",value:function(){return o.a.createElement("nav",{className:"NavbarItems"},o.a.createElement("h1",{className:"navbar-logo"},o.a.createElement("i",{className:"fas fa-piggy-bank",onClick:this.reRoute})),o.a.createElement("div",{className:"menu-icon",onClick:this.handleClick},o.a.createElement("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})),o.a.createElement("ul",{className:this.state.clicked?"nav-menu active":"nav-menu"},H.map((function(e,t){return o.a.createElement("li",{key:t},o.a.createElement("a",{className:e.cName,href:e.url},e.title))}))))}}]),a}(n.Component));a(172);var X=function(){return o.a.createElement(l.a,null,o.a.createElement("div",null,o.a.createElement(K,null),o.a.createElement(i.a,{exact:!0,path:"/",component:E}),o.a.createElement(i.a,{exact:!0,path:"/questions",component:F}),o.a.createElement(i.a,{exact:!0,path:"/answer",component:J}),o.a.createElement(i.a,{exact:!0,path:"/results",component:R}),o.a.createElement(i.a,{exact:!0,path:"/save",component:$}),o.a.createElement(i.a,{exact:!0,path:"/login",component:B}),o.a.createElement(i.a,{exact:!0,path:"/answers",component:J})))},Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Z(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(X,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");Y?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Z(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):Z(e)}))}}()},32:function(e,t,a){e.exports=a.p+"static/media/USPB_LOGO.b589406e.png"},67:function(e,t,a){}},[[143,1,2]]]);
//# sourceMappingURL=main.9d3db14b.chunk.js.map