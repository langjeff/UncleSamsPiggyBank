(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{113:function(e,t,a){},114:function(e,t,a){e.exports=a.p+"static/media/PiggyBankBtn.5157e40c.png"},115:function(e,t,a){e.exports=a.p+"static/media/Guy.69aef6bf.png"},146:function(e,t,a){e.exports=a(177)},151:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},177:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(12),r=a.n(o),l=(a(151),a(121)),i=a(15),s=a(33),m=a.n(s),u=a(114),g=a.n(u),f=a(115),d=a.n(f),p=(a(68),a(22)),E=Object(p.a)();var h=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:m.a,alt:"Uncle Sam's Piggy Bank Logo"})),c.a.createElement("div",{className:"message"},c.a.createElement("h2",{align:"center"},"Uncle Sam's Piggy Bank is broken!"),c.a.createElement("h2",null,"Open the piggy bank below to fix it!"),c.a.createElement("div",{className:"guy"},c.a.createElement("img",{src:d.a,alt:"Monopoly Guy"}))),c.a.createElement("button",{id:"play"},c.a.createElement("img",{src:g.a,onClick:function(){E.push("/questions"),window.location.reload(!1)}})))},v=a(6),b=a(19),y=a(235),N=a(131),w=a(71),k=a(44),j=a.n(k),x=function(){return j.a.get("/api/tax")},O=function(e){return j.a.post("/api/answers",e)},S=function(){return j.a.get("/api/answers")},B=function(e){return j.a.put("/api/answers",e)},C=function(){return j.a.get("/api/results")};var L=function(e){var t=e.id,a=Object(n.useState)([]),o=Object(v.a)(a,2),r=o[0],l=o[1];return console.log(t),c.a.createElement(w.GoogleLogin,{clientId:"899511652234-cls2folp54noje6mq3njs0c6f8ubqg9s.apps.googleusercontent.com",buttonText:"Login",onSuccess:function(e){l(e.profileObj.email),B({_id:t,userName:r}).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)}))},onFailure:function(e){console.log("Login failed: res:",e),alert("Failed to login.")},cookiePolicy:"single_host_origin",style:{marginTop:"100px"},isSignedIn:!0})},$=(a(169),a(20)),T=a.n($),I=a(236);var q=function(e){var t=e.question,a=Object(n.useState)([]),o=Object(v.a)(a,2),r=o[0],l=o[1],i=Object(n.useState)(),s=Object(v.a)(i,2),m=s[0],u=s[1],g=Object(n.useState)(0),f=Object(v.a)(g,2),d=f[0],p=f[1],h=Object(n.useState)({}),w=Object(v.a)(h,2),k=w[0],j=w[1];Object(n.useEffect)((function(){j(t&&t[d])}),[t,d]);var x=function(){"income"===k.type?l([].concat(Object(b.a)(r),[{category:k.category,type:k.type,base:k.base,rate:m/100,amount:k.base*m/100}])):l([].concat(Object(b.a)(r),[{category:k.category,type:k.type,amount:12*m*1e9}]))},S=function(e,t){e.preventDefault(),t=e.currentTarget.value,u(t)};return c.a.createElement(c.a.Fragment,null,d<=15?c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"question",align:"center"},k&&"income"===k.type?c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"category"},"Tax Bracket: ",k&&k.category),k&&0!==k.returns?c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"returns"},"# of Tax Returns:"," ",T()(k&&k.returns).format("0a"))):c.a.createElement(c.a.Fragment,null," "),c.a.createElement("p",{className:"returns"},"Tax Rate:"," ",k&&k.rate?"".concat(parseInt(Math.floor(100*k.rate)),"%"):console.log("not available")),c.a.createElement("p",{className:"returns"},"Amount of taxes:"," ",T()(k&&k.amount).format("($ 0.0a)")),c.a.createElement("p",{className:"taxes-paid"},"What should their tax rate be?"),c.a.createElement("form",{noValidate:!0,autoComplete:"off"},c.a.createElement(N.a,{id:"outlined-basic",variant:"outlined",InputProps:{startAdornment:c.a.createElement(y.a,{position:"start"},"%")},onChange:S}))):c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"category"},"Gov't Spending:"," ",k&&k.category),c.a.createElement("p",{className:"returns"},"Annual Budget:"," ",T()(k&&k.amount).format("($ 0.0a)")),c.a.createElement("p",{className:"returns"},"Monthly Budget:"," ",T()(k&&k.amount/12).format("($ 0.0a)")),c.a.createElement("p",{className:"taxes-paid"},"What should the monthly budget be?",c.a.createElement("br",null),"(in billions)"),c.a.createElement("form",{noValidate:!0,autoComplete:"off"},c.a.createElement(N.a,{id:"outlined-basic",variant:"outlined",InputProps:{startAdornment:c.a.createElement(y.a,{position:"start"},"$")},onChange:S}))),c.a.createElement("button",{id:"next",onClick:function(e){j(k),d<=15?(x(k),p(d+1)):x(k)},rate:m},"Next Question"))),c.a.createElement(I.a,{light:!0}),c.a.createElement("h3",{style:{width:"500px",color:"white",textAlign:"center",backgroundColor:"#3e58b6",font:"roboto",margin:"12px",padding:"14px"}},k&&k.caption)):c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"question",align:"center"},c.a.createElement("p",null,"You completed your plan!"),c.a.createElement("button",{id:"next",onClick:function(){O({answers:[r]}),E.push("/answers"),window.location.reload(!1)}},"Go to results!")))))};var P=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)((function(){r()}),[]);var r=function(){x().then((function(e){o(e.data)})).catch((function(e){return console.log(e)}))};return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:m.a,className:"Qlogo",alt:"Uncle Sam's Piggy Bank Logo",align:"center"})),c.a.createElement("div",null,c.a.createElement(q,{question:a})))},A=a(87),U=(a(113),[{field:"user",headerName:"User",width:240},{field:"sumIncome",headerName:"Total Income",width:240},{field:"sumExpense",headerName:"Total Spending",width:240},{field:"deficit",headerName:"Deficit",width:240}]);function F(e){var t=e.results,a=[];return t.map((function(e){var t=0,n=0;e.answers[0].map((function(e){"income"===e.type?t+=e.amount:n+=e.amount}));var c=t-n;t=T()(t).format("($ 0.0a)"),n=T()(n).format("($ 0.0a)"),c=T()(c).format("($ 0.0a)"),a.push({id:e._id,user:e.userName,sumIncome:t,sumExpense:n,deficit:c})})),n.createElement("div",{style:{height:500,width:1e3,background:"white"}},n.createElement(A.a,{autoHeight:!0,style:{color:"black"},rows:a,columns:U,pageSize:20}))}var G=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){C().then((function(e){o(e.data),console.log(e.data)})).catch((function(e){return console.log(e)}))}),[]),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:m.a,alt:"Uncle Sam's Piggy Bank Logo",className:"Qlogo"})),c.a.createElement("div",{className:"data-container"},c.a.createElement(F,{results:a})))};var _=function(){return c.a.createElement(w.GoogleLogout,{clientId:"899511652234-cls2folp54noje6mq3njs0c6f8ubqg9s.apps.googleusercontent.com",buttonText:"Logout",onLogoutSuccess:function(e){console.log("Logged out")}})};var R=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:m.a,alt:"Uncle Sam's Piggy Bank Logo"})),c.a.createElement(L,null),c.a.createElement(_,null))},W=a(240),Q=a(243),D=a(237),M=a(239),J=a(241),V=a(242),z=a(124),H=a(238);function Y(e){var t=e.answer,a=0,c=0;t.map((function(e){"income"===e.type?a+=e.amount:c+=e.amount}));var o=a-c,r=[];t.map((function(e){"income"===e.type&&r.push({id:e.category,category:e.category,amount:e.amount})}));var l=[];return t.map((function(e){"expense"===e.type&&l.push({id:e.category,category:e.category,amount:e.amount})})),n.createElement("div",{className:"container"},o>0?n.createElement("h1",null,"Total Surplus: ",T()(o).format("($ 0.0a)")):n.createElement("h1",null,"Total Deficit: ",T()(o).format("($ 0.0a)")),n.createElement(H.a,{container:!0,spacing:2},n.createElement(H.a,{item:!0,xs:!0},n.createElement("h2",null,"Total Income: ",T()(a).format("($ 0.0a)")),n.createElement(M.a,{component:z.a},n.createElement(W.a,{"aria-label":"simple table"},n.createElement(J.a,null,n.createElement(V.a,null,n.createElement(D.a,null,"Category"),n.createElement(D.a,{align:"right"},"Amount"))),n.createElement(Q.a,null,r.map((function(e){return n.createElement(V.a,{key:e.id},n.createElement(D.a,{component:"th",scope:"row"},e.category),n.createElement(D.a,{align:"right"},T()(e.amount).format("($ 0.0a)")))})))))),n.createElement(H.a,{item:!0},n.createElement("h2",null,"Total Expense: ",T()(c).format("($ 0.0a)")),n.createElement(M.a,{component:z.a},n.createElement(W.a,{"aria-label":"simple table"},n.createElement(J.a,null,n.createElement(V.a,null,n.createElement(D.a,null,"Category"),n.createElement(D.a,{align:"right"},"Amount"))),n.createElement(Q.a,null,l.map((function(e){return n.createElement(V.a,{key:e.id},n.createElement(D.a,{component:"th",scope:"row"},e.category),n.createElement(D.a,{align:"right"},T()(e.amount).format("($ 0.0a)")))}))))))))}var K=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(),l=Object(v.a)(r,2),i=l[0],s=l[1];return Object(n.useEffect)((function(){S().then((function(e){o(e.data[0].answers[0]),s(e.data[0]._id),console.log(e.data[0]._id)})).catch((function(e){return console.log(e)}))}),[]),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:m.a,alt:"Uncle Sam's Piggy Bank Logo",className:"Qlogo"})),c.a.createElement("div",null,c.a.createElement(Y,{answer:a}),c.a.createElement(L,{id:i}),c.a.createElement(_,null)))},X=a(62),Z=a(63),ee=a(82),te=a(81),ae=[{title:"Balance the Budget",url:"/questions",cName:"nav-links"},{title:"See the Results",url:"/results",cName:"nav-links"},{title:"Login",url:"/save",cName:"nav-links"}],ne=(a(174),function(e){Object(ee.a)(a,e);var t=Object(te.a)(a);function a(){var e;Object(X.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={clicked:!1},e.reRoute=function(){E.push("/"),window.location.reload(!1)},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(Z.a)(a,[{key:"render",value:function(){return c.a.createElement("nav",{className:"NavbarItems"},c.a.createElement("h1",{className:"navbar-logo"},c.a.createElement("i",{className:"fas fa-piggy-bank",onClick:this.reRoute})),c.a.createElement("div",{className:"menu-icon",onClick:this.handleClick},c.a.createElement("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})),c.a.createElement("ul",{className:this.state.clicked?"nav-menu active":"nav-menu"},ae.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("a",{className:e.cName,href:e.url},e.title))}))))}}]),a}(n.Component));a(175);var ce=function(){return c.a.createElement(l.a,null,c.a.createElement("div",null,c.a.createElement(ne,null),c.a.createElement(i.a,{exact:!0,path:"/",component:h}),c.a.createElement(i.a,{exact:!0,path:"/questions",component:P}),c.a.createElement(i.a,{exact:!0,path:"/answer",component:K}),c.a.createElement(i.a,{exact:!0,path:"/results",component:G}),c.a.createElement(i.a,{exact:!0,path:"/save",component:R}),c.a.createElement(i.a,{exact:!0,path:"/login",component:L}),c.a.createElement(i.a,{exact:!0,path:"/answers",component:K})))},oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function re(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(c.a.createElement(ce,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");oe?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):re(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):re(e)}))}}()},33:function(e,t,a){e.exports=a.p+"static/media/USPB_LOGO.b589406e.png"},68:function(e,t,a){}},[[146,1,2]]]);
//# sourceMappingURL=main.18d11818.chunk.js.map