(window["webpackJsonpplogo-vadis"]=window["webpackJsonpplogo-vadis"]||[]).push([[0],{112:function(e,t,a){e.exports=a.p+"static/media/Clean-Fit.3bd2e62c.png"},155:function(e,t,a){e.exports=a.p+"static/media/Clean-Fit (1).2d461fe6.png"},156:function(e,t,a){e.exports=a.p+"static/media/Clean-Fit (2).0dd685ec.png"},157:function(e,t,a){e.exports=a.p+"static/media/Clean-Fit (3).68627cda.png"},158:function(e,t,a){e.exports=a.p+"static/media/Clean-Fit (4).ba02f7e6.png"},164:function(e,t,a){e.exports=a.p+"static/media/Calender.95b56f23.png"},168:function(e,t,a){e.exports=a.p+"static/media/Clean-Fit (6)-cutout.d1edf2c2.png"},179:function(e,t,a){e.exports=a(293)},184:function(e,t,a){},189:function(e,t,a){},196:function(e,t,a){},242:function(e,t,a){},275:function(e,t,a){},276:function(e,t,a){},289:function(e,t,a){},292:function(e,t,a){},293:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),l=a.n(r),i=(a(184),a(27)),c=a(40),s=a(15),m=a(21),u=a(18),d=a(22),h=a(23),g=a(24),p=Object(n.createContext)(),E=function(e){var t=Object(n.useState)({name:"",id:"",isAuth:!1}),a=Object(s.a)(t,2),r=a[0],l=a[1];return o.a.createElement(p.Provider,{value:[r,l]},e.children)},f=a(149),b=a.n(f),v=a(313),A=(a(122),a(189),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.distance,a=void 0===t?1:t,n=e.onDistanceChange,r=void 0===n?function(){}:n;return o.a.createElement("div",{className:"distance-slider",style:{marginLeft:"18vw"}},o.a.createElement(v.a,{id:"discrete-slider-always",gutterBottom:!0},o.a.createElement("h3",null,o.a.createElement("strong",null,"Distance"))),o.a.createElement(b.a,{min:1,max:25,value:a,onChange:function(e){return r(e)}}),o.a.createElement(v.a,{id:"discrete-slider-always",gutterBottom:!0},o.a.createElement("h3",null,o.a.createElement("strong",null,a," Km"))))}}]),t}(n.PureComponent)),y=a(323),w=a(86),x=a.n(w),C=a(70),j=a.n(C),O=a(325),D=a(14),k=(a(196),[47.389274,8.51553]),B=[28.67,77.22],M=12;var N=function(e){var t=e.mapState,a=t.width,n=t.height,r=e.latLngToPixel,l=e.centerCoords,i=e.radius,c=e.style,s=void 0===c?{stroke:"rgb(255,0,0)",strokeWidth:2,fill:"none"}:c;if(2!==l.length)return null;var m=r(l);return o.a.createElement("svg",{width:a,height:n,style:{top:0,left:0,position:"absolute"}},o.a.createElement("circle",{cx:m[0],cy:m[1],r:""+i,style:s}))},I=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={zoomLevel:M,acquiredLocation:!1,coordinates:a.props.coordinates},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"findLocation",value:function(){var e=this;this.props.onCoordsChange;navigator.geolocation.getCurrentPosition((function(t){console.log("Check coordinates : ",e.props),console.log("Position : ",t);var a=[t.coords.latitude,t.coords.longitude];e.setState({acquiredLocation:!0,coordinates:a}),console.log("New Coordinates : ",e.state.coordinates)}))}},{key:"onMapEvent",value:function(e){var t=e.zoom;if(e.initial)return!1;var a=Math.min(Math.max(t,1),18);this.setState({zoomLevel:a})}},{key:"changeZoom",value:function(e){this.setState({zoomLevel:this.state.zoomLevel+e})}},{key:"calcRadius",value:function(){var e=this.props.distance,t=void 0===e?1:e,a=this.state.zoomLevel;return t/2*(1/(40075.016686*Math.cos(k[0]*(180/Math.PI))/Math.pow(2,a)/256))}},{key:"render",value:function(){var e=this,t=this.state.coordinates,a=this.state,n=a.acquiredLocation,r=a.zoomLevel;return o.a.createElement("div",{className:"map-container"},o.a.createElement(x.a,{center:t,zoom:r,height:400,width:600,style:{alignItems:"center"},onBoundsChanged:function(t){return e.onMapEvent(t)},minZoom:1,maxZoom:18,onClick:function(t){return e.props.onCoordsChange(t.latLng)}},o.a.createElement(N,{centerCoords:t,radius:this.calcRadius()}),o.a.createElement(j.a,{anchor:t,payload:1})),o.a.createElement("div",{className:"map__buttons"},"geolocation"in navigator&&o.a.createElement(O.a,{type:"primary",size:"large",onClick:function(){return e.findLocation()}},o.a.createElement(D.a,{type:"environment"}),n?"Find me again":"Find my location"),o.a.createElement(O.a.Group,{size:"large",style:{marginRight:"4vw"}},o.a.createElement(O.a,{onClick:function(){return e.changeZoom(-1)}},o.a.createElement(D.a,{type:"zoom-out"}),"Zoom out"),o.a.createElement(O.a,{onClick:function(){return e.changeZoom(1)}},o.a.createElement(D.a,{type:"zoom-in"}),"Zoom in"))))}}]),t}(n.PureComponent),P=a(71),Q=a.n(P),U=a(72),S=a.n(U),G=a(88),z=a.n(G),F=a(316),L=a(318),R=a(317),T=a(326),Y=(a(242),a(324)),H=a(44),K=a.n(H),q={marginBottom:"24px"},W={marginBottom:"50px"},X={fontSize:"24px",lineHeight:"1",textAlign:"center",margin:"20px"},J=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={unverifiedRoutes:[],previousRoutes:[],distance:1,coordinates:B,UID:a.props.uid},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.distance,n=t.coordinates,r=this.props.uid;return r=parseInt(r)/1e4,console.log("State at Dashboard : ",r),o.a.createElement("div",null,o.a.createElement(y.a,{style:W,headStyle:X,title:"Where are you?"},o.a.createElement(I,{coordinates:n,distance:a,onCoordsChange:function(t){return e.setState({coordinates:t})}})),o.a.createElement(y.a,{style:q,headStyle:X,title:"How far would you like to run today?"},o.a.createElement(A,{distance:a,onDistanceChange:function(t){return e.setState({distance:t})}})),o.a.createElement("div",{className:"box"},o.a.createElement("h1",null,o.a.createElement(i.b,{to:{pathname:"/go",state:{distance:a,latitude:n[0],longitude:n[1],UID:r}}},o.a.createElement(Y.a,{variant:"contained",color:"primary",style:{marginLeft:"45vw",marginBottom:"50px"}},"Let's Go!")))))}}]),t}(n.PureComponent),Z=Object(F.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1),width:"100%",height:e.spacing(16)}},large:{width:e.spacing(9),height:e.spacing(9),margin:"5px"}}}));function V(e){var t=Z(),a=Object(n.useContext)(p),r=Object(s.a)(a,2),l=r[0],i=(r[1],Object(n.useState)(0)),c=Object(s.a)(i,2),m=c[0],u=c[1],d=Object(n.useState)(0),h=Object(s.a)(d,2),g=h[0],E=h[1];console.log("Helo Hello : ",l),console.log("iD1 : ",l.id);var f=parseInt(l.id);return console.log("iD2 : ",f),f/=1e4,console.log("iD3 : ",f),K.a.post("backend/totalrun",{uid:f}).then((function(e){console.log("yya",e.data),e.data[0].total_distance>0&&(u(e.data[0].total_distance),E(e.data[0].total_calories))})).catch((function(e){return console.log("ERROR : ",e)})),o.a.createElement("div",{className:"dashboard"},o.a.createElement("h2",{style:{fontWeight:"400",color:"white",textAlign:"center",marginBottom:"5vh"}}," Hey ",l.name,"! "),o.a.createElement(R.a,{container:!0,spacing:2},o.a.createElement(R.a,{item:!0,xs:4},o.a.createElement(L.a,{style:{margin:"5px",padding:"10px",display:"flex",flexDirection:"row",alignItems:"center"},elevation:3},o.a.createElement(T.a,{alt:"Remy Sharp",src:Q.a,className:t.large}),o.a.createElement("div",{className:"history-card-text"},o.a.createElement("h6",null,"Distance Covered"),o.a.createElement("h4",null," ",m," Km ")))),o.a.createElement(R.a,{item:!0,xs:4},o.a.createElement(L.a,{style:{margin:"5px",padding:"10px",display:"flex",flexDirection:"row",alignItems:"center"},elevation:3},o.a.createElement(T.a,{alt:"Remy Sharp",src:S.a,className:t.large}),o.a.createElement("div",{className:"history-card-text"},o.a.createElement("h6",null,"Calories Burnt"),o.a.createElement("h4",null," ",g," Kcal ")))),o.a.createElement(R.a,{item:!0,xs:4},o.a.createElement(L.a,{style:{margin:"5px",padding:"10px",display:"flex",flexDirection:"row",alignItems:"center"},elevation:3},o.a.createElement(T.a,{alt:"Remy Sharp",src:z.a,className:t.large}),o.a.createElement("div",{className:"history-card-text"},o.a.createElement("h6",null,"Streak"),o.a.createElement("h4",null," 0 days "))))),o.a.createElement(J,{uid:l.id}))}var _=a(328),$=a(327),ee=a(319),te=(a(275),["very dirty","quite dirty","somewhat dirty","quite clean","spotless"]),ae=["Bring a wheelbarrow!","Bring a bigger bag!","Optimal conditions!","Concentrate on your run!","\u2728"],ne=function(e){for(var t=function(e,t){return e*(1+(a=-10,n=11,(Math.random()*(n-a+1)+a)/t));var a,n},a=Math.floor(4*Math.random()+3),n=[e],o=0;o<a;o++)n.push([t(e[0],15e4),t(e[1],3e4)]);return n.push(e),n},oe=function(e){var t=e.mapState,a=t.width,n=t.height,r=e.latLngToPixel,l=e.coordsArray,i=e.style,c=void 0===i?{stroke:"rgb(255,0,0)",strokeWidth:2,fill:"none"}:i;if(l.length<2)return null;for(var s=function(e){return r([e[0],e[1]])},m=[],u=s(l[0]),d=1;d<l.length;d++){var h=s(l[d]);m.push(o.a.createElement("line",{key:d,x1:u[0],y1:u[1],x2:h[0],y2:h[1],style:c})),u=h}return o.a.createElement("svg",{width:a,height:n,style:{top:0,left:0}},m)},re=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={isLoadingRoute:!0,routeAccepted:!1,route:[],expectedCleanliness:0,showingHint:!1},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.getParameters(),a=t.distance,n=t.latitude,o={distance:a,longitude:t.longitude,latitude:n,uid:t.UID};console.log("hhh",o),K.a.post("backend/cleanrun",{userInputs:o}).then((function(t){console.log("yyy",t.data);for(var a=[],n=0;n<t.data.coordinates.length;n++)a.push([t.data.coordinates[n].lat,t.data.coordinates[n].long]);console.log("Coor: ",a),e.setState({route:a,expectedCleanliness:2.5844512145240515,isLoadingRoute:!1}),console.log("Pokemon : ",e.state),e.getRoute()})).catch((function(e){return console.log("ERROR : ",e)}))}},{key:"getRoute",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]&&arguments[0],this.getParameters()),a=(t.distance,t.latitude),n=t.longitude;this.setState({isLoadingRoute:!0,routeAccepted:!1},(function(){e.setState({route:ne([a,n]),expectedCleanliness:5*Math.random(),isLoadingRoute:!1}),console.log("Pikachu I choose You!",e.state)}))}},{key:"getParameters",value:function(){var e={distance:1,latitude:B[0],longitude:B[1],UID:0};if(this.props&&this.props.location&&this.props.location.state){var t=this.props.location.state,a=t.distance,n=t.latitude,o=void 0===n?e.latitude:n,r=t.longitude;e={distance:a,latitude:o,longitude:void 0===r?e.longitude:r,UID:t.UID}}return e}},{key:"confirmRoute",value:function(){[].push({confirmed:Date.now(),route:this.state.route}),this.setState({routeAccepted:!0})}},{key:"render",value:function(){var e=this,t=this.getParameters(),a=t.latitude,r=t.longitude,l=this.state,i=l.isLoadingRoute,c=l.route,s=l.expectedCleanliness,m=l.routeAccepted,u=l.showingHint,d=s>3?s-.6:s,h=[];console.log("size",c.length);for(var g=1;g<c.length;g++)h.push(o.a.createElement(j.a,{anchor:c[g],payload:0}));return o.a.createElement(n.Fragment,null,o.a.createElement($.a,{style:{zIndex:"10",color:"#fff"},open:i},o.a.createElement(ee.a,{color:"inherit"})),!i&&o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"final-route-map"},o.a.createElement(y.a,{style:q,headStyle:X,title:"Get ready!"},o.a.createElement("p",null,"How about this route?"),o.a.createElement(x.a,{center:[a,r],height:400,width:600,style:{alignItems:"center"},zoom:15},o.a.createElement(j.a,{anchor:[a,r],payload:1}),h,o.a.createElement(oe,{coordsArray:c})),o.a.createElement("p",{style:{marginTop:"8px",marginBottom:"16px"}},"We expect the route to be ",o.a.createElement("span",{style:{fontWeight:"bold"}},te[Math.floor(d)]),". ",ae[Math.floor(d)]),!m&&o.a.createElement("div",{className:"map__buttons1"},o.a.createElement(O.a,{onClick:function(){return e.getRoute({refresh:!0})}},o.a.createElement(D.a,{type:"sync-outlined,"}),"Change Route"),o.a.createElement(O.a,{onClick:function(){return e.confirmRoute()},style:{marginRight:"4vw"}},o.a.createElement(D.a,{type:"check-outlined"}),"Let's Go!")),m&&o.a.createElement(n.Fragment,null,o.a.createElement("p",{style:{fontWeight:"bold"}},"Now go forth and clean this wretched place!"),o.a.createElement("div",{className:"map__buttons"},o.a.createElement(O.a,{type:"default",onClick:function(){return e.setState({showingHint:!0})},style:{marginLeft:"23vw"}},"Share")),u&&o.a.createElement(_.a,{style:{marginTop:"16px",marginLeft:"17vw"},message:"Sorry, that's a post-hackday feature :)       ",type:"info",onClose:function(){return e.setState({showingHint:!1})}}))))))}}]),t}(n.PureComponent),le=Object(c.g)(re),ie=a(43),ce=(a(276),a(155)),se=a.n(ce),me=a(156),ue=a.n(me),de=a(157),he=a.n(de),ge=a(158),pe=a.n(ge),Ee=(a(277),a(159)),fe=a.n(Ee);function be(e){var t=Object(n.useContext)(p),a=Object(s.a)(t,2),r=a[0];return(0,a[1])({name:e.name,id:e.id,isAuth:!0}),console.log("Excuse me, User : ",r),console.log("Excuse me, User Pt2 : ",e),o.a.createElement(c.a,{to:"/dashboard"})}var ve=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).responseGoogle=function(e){console.log("Google : ",e),a.setState({name:e.profileObj.name,email:e.profileObj.email,UID:e.googleId,isLoggedIn:!0}),console.log("State: ",a.state);var t=parseInt(a.state.UID);t/=1e4,K.a.post("backend/login",{uid:t,name:a.state.name,email:a.state.email}).then((function(e){console.log(e)})).catch((function(e){return console.log("ERROR : ",e)}));var n={name:a.state.name,id:a.state.UID,isAuth:!0};a.state.setUser(n)},a.state={name:"",email:"",UID:"",isLoggedIn:!1,setUser:e.setUser},a.responseGoogle=a.responseGoogle.bind(Object(ie.a)(a)),a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.state.isLoggedIn?o.a.createElement(be,{name:this.state.name,id:this.state.id}):o.a.createElement("div",{className:"home-page"},o.a.createElement("img",{className:"background-image",src:ue.a,style:{height:"80vh",width:"80vw",zIndex:"1",marginTop:"-7vh",marginLeft:"12vw"},alt:"background Image"}),o.a.createElement("img",{className:"side-image",src:se.a,style:{height:"130%",width:"85%",zIndex:"2",left:"-15vw",top:"-13vh",position:"absolute"},alt:"Side Image"}),o.a.createElement("span",{className:"buttons-container"},o.a.createElement(i.b,{to:"/about"},o.a.createElement("button",{style:{display:"flex",flexDirection:"row",alignItems:"center",padding:"10px 20px",backgroundColor:"white",border:"none",width:"205px"}},o.a.createElement("img",{src:he.a,style:{height:"30px",width:"65px",position:"relative",float:"left",backgroundColor:"white"},alt:"About Image"}),o.a.createElement("strong",{style:{whiteSpace:"nowrap"}},"ABOUT US"))),o.a.createElement(fe.a,{clientId:"806421049214-n6r6nfevkchfgpkourn4q5nqeo2i8ntv.apps.googleusercontent.com",buttonText:"Login",onSuccess:this.responseGoogle,onFailure:this.responseGoogle,render:function(e){return o.a.createElement("button",{className:"login-page",onClick:e.onClick,disabled:e.disabled,style:{display:"flex",flexDirection:"row",alignItems:"center",padding:"10px 20px",backgroundColor:"white",border:"none",width:"205px"}},o.a.createElement("img",{src:pe.a,style:{height:"30px",width:"65px",position:"relative",float:"left",backgroundColor:"white"},alt:"About Image"}),o.a.createElement("strong",{style:{whiteSpace:"nowrap"}},"GET STARTED"))},cookiePolicy:"single_host_origin"})))}}]),t}(o.a.Component);var Ae=function(){var e=Object(n.useContext)(p),t=Object(s.a)(e,2),a=(t[0],t[1]);return o.a.createElement(ve,{setUser:a})},ye=a(322),we=a(320),xe="plogo-vadis.unverified-routes",Ce=["A nice route","Cleanup extravaganza","Plogging galore","Prelude to a relaxing session","A short hike","A route so nice you should take it twice","The one with the flowers on the side of the street","Hopefully cleaner now","The best one yet"],je=(n.PureComponent,function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.route,a=e.onDismissRoute,n=void 0===a?function(){}:a,r=e.onVerifyRoute,l=void 0===r?function(){}:r,i=new Date(+new Date-Math.floor(1e10*Math.random())).toLocaleDateString("de-CH");return o.a.createElement(ye.a.Item,null,o.a.createElement(ye.a.Item.Meta,{title:Ce[Math.floor(Math.random()*Ce.length-1)],avatar:o.a.createElement(we.a,{src:"https://picsum.photos/100/100"}),description:"How was it? (".concat(i,")")}),o.a.createElement("div",null,o.a.createElement(O.a,{type:"link",onClick:function(){return l(t)}},"Tell us about it"),o.a.createElement(O.a,{type:"link",onClick:function(){return n(t)}},"Dismiss")))}}]),t}(n.PureComponent)),Oe=(a(148),a(112)),De=a.n(Oe),ke=a(164),Be=a.n(ke),Me=(a(289),[{date:"2021-03-23",distance:"2",calories:"250"},{date:"2021-03-23",distance:"2",calories:"250"},{date:"2021-03-23",distance:"2",calories:"250"},{date:"2021-03-23",distance:"2",calories:"250"}]),Ne=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={data:Me},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("History ComponentDidMount ",this.props.uid),K.a.post("backend/history",{uid:this.props.uid}).then((function(t){console.log("History Call",t.data),e.setState({data:t.data})}))}},{key:"render",value:function(){var e=this.state.data.map((function(e){return o.a.createElement(R.a,{container:!0,xs:12},o.a.createElement(L.a,{style:{margin:"5px",padding:"10px",display:"flex",flexDirection:"row",alignItems:"center",width:"90vw"},elevation:3},o.a.createElement(R.a,{item:!0,xs:4},o.a.createElement(L.a,{style:{margin:"5px",padding:"10px",display:"flex",flexDirection:"row",alignItems:"center"},elevation:3},o.a.createElement(T.a,{alt:"Remy Sharp",src:Be.a,className:"avatar-large"}),o.a.createElement("div",{className:"history-card-text"},o.a.createElement("h6",null,"Date"),o.a.createElement("h4",null," ",e.date," ")))),o.a.createElement(R.a,{item:!0,xs:4},o.a.createElement(L.a,{style:{margin:"5px",padding:"10px",display:"flex",flexDirection:"row",alignItems:"center"},elevation:3},o.a.createElement(T.a,{alt:"Remy Sharp",src:Q.a,className:"avatar-large"}),o.a.createElement("div",{className:"history-card-text"},o.a.createElement("h6",null,"Distance Covered"),o.a.createElement("h4",null," ",e.distance," Km ")))),o.a.createElement(R.a,{item:!0,xs:4},o.a.createElement(L.a,{style:{margin:"5px",padding:"10px",display:"flex",flexDirection:"row",alignItems:"center"},elevation:3},o.a.createElement(T.a,{alt:"Remy Sharp",src:S.a,className:"avatar-large"}),o.a.createElement("div",{className:"history-card-text"},o.a.createElement("h6",null,"Calories Burnt"),o.a.createElement("h4",null," ",e.calories," Kcal "))))))}));return o.a.createElement("div",null,o.a.createElement(R.a,{container:!0,xs:12},e))}}]),t}(n.Component),Ie=Object(F.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1),width:"100%",height:e.spacing(16)}},large:{width:e.spacing(9),height:e.spacing(9),margin:"5px"}}}));function Pe(e){var t=Ie(),a=Object(n.useContext)(p),r=Object(s.a)(a,2),l=r[0],i=(r[1],Object(n.useState)(0)),c=Object(s.a)(i,2),m=c[0],u=c[1],d=Object(n.useState)(0),h=Object(s.a)(d,2),g=h[0],E=h[1],f=parseInt(l.id);return f/=1e4,K.a.post("backend/totalrun",{uid:f}).then((function(e){console.log("yya",e.data),e.data[0].total_distance>0&&(u(e.data[0].total_distance),E(e.data[0].total_calories))})).catch((function(e){return console.log("ERROR : ",e)})),o.a.createElement("div",{className:"dashboard"},o.a.createElement("h2",{style:{fontWeight:"400",color:"white",textAlign:"center",marginBottom:"5vh"}},"/ History /"),o.a.createElement(R.a,{container:!0,spacing:2},o.a.createElement(R.a,{item:!0,xs:4},o.a.createElement(L.a,{style:{margin:"5px",padding:"10px",display:"flex",flexDirection:"row",alignItems:"center"},elevation:3},o.a.createElement(T.a,{alt:"Remy Sharp",src:Q.a,className:t.large}),o.a.createElement("div",{className:"history-card-text"},o.a.createElement("h6",null,"Total Distance Covered"),o.a.createElement("h4",null," ",m," Km ")))),o.a.createElement(R.a,{item:!0,xs:4},o.a.createElement(L.a,{style:{margin:"5px",padding:"10px",display:"flex",flexDirection:"row",alignItems:"center"},elevation:3},o.a.createElement(T.a,{alt:"Remy Sharp",src:S.a,className:t.large}),o.a.createElement("div",{className:"history-card-text"},o.a.createElement("h6",null,"Total Calories Burnt"),o.a.createElement("h4",null," ",g," Kcal ")))),o.a.createElement(R.a,{item:!0,xs:4},o.a.createElement(L.a,{style:{margin:"5px",padding:"10px",display:"flex",flexDirection:"row",alignItems:"center"},elevation:3},o.a.createElement(T.a,{alt:"Remy Sharp",src:z.a,className:t.large}),o.a.createElement("div",{className:"history-card-text"},o.a.createElement("h6",null,"Streak"),o.a.createElement("h4",null," 0 days "))))),o.a.createElement("div",{style:{marginLeft:"5vw",marginTop:"2vh"}},o.a.createElement(Ne,{uid:f})))}var Qe=a(120),Ue=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),i=Object(s.a)(l,2),c=i[0],m=i[1],u=Object(n.useState)(null),d=Object(s.a)(u,2),h=d[0],g=(d[1],function(e){var t=e.currentTarget,a=t.name,n=t.value;"userEmail"===a?r(n):"userPassword"===a&&m(n)});return o.a.createElement("div",{className:"mt-8"},o.a.createElement("h1",{className:"text-3xl mb-2 text-center font-bold"},"Sign In"),o.a.createElement("div",{className:"border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8"},null!==h&&o.a.createElement("div",{className:"py-4 bg-red-600 w-full text-white text-center mb-3"},h),o.a.createElement("form",{className:""},o.a.createElement("label",{htmlFor:"userEmail",className:"block"},"Email:"),o.a.createElement("input",{type:"email",className:"my-1 p-1 w-full",name:"userEmail",value:a,placeholder:"E.g: faruq123@gmail.com",id:"userEmail",onChange:function(e){return g(e)}}),o.a.createElement("label",{htmlFor:"userPassword",className:"block"},"Password:"),o.a.createElement("input",{type:"password",className:"mt-1 mb-3 p-1 w-full",name:"userPassword",value:c,placeholder:"Your Password",id:"userPassword",onChange:function(e){return g(e)}}),o.a.createElement("button",{className:"bg-green-400 hover:bg-green-500 w-full py-2 text-white",onClick:function(e){!function(e,t,a){e.preventDefault()}(e)}},"Sign in")),o.a.createElement("p",{className:"text-center my-3"},"or"),o.a.createElement("p",{className:"text-center my-3"},"Don't have an account?"," ",o.a.createElement(Qe.a,{to:"signUp",className:"text-blue-500 hover:text-blue-600"},"Sign up here")," ",o.a.createElement("br",null)," ",o.a.createElement(Qe.a,{to:"passwordReset",className:"text-blue-500 hover:text-blue-600"},"Forgot Password?"))))},Se=a(321);function Ge(){var e=Object(n.useContext)(p),t=Object(s.a)(e,2),a=t[0],r=t[1];return o.a.createElement(Se.a,{bg:"none",style:{zIndex:"10"}},o.a.createElement(Se.a.Brand,{href:"/"},o.a.createElement("img",{alt:"",src:De.a,width:"180",height:"90",className:"d-inline-block align-top"})),a.isAuth&&o.a.createElement(Se.a.Collapse,{className:"justify-content-end"},o.a.createElement(i.b,{to:"/dashboard"},o.a.createElement(Y.a,null,o.a.createElement("span",{style:{color:"white"}},"Dashboard"))),o.a.createElement(i.b,{to:"/history"},o.a.createElement(Y.a,null,o.a.createElement("span",{style:{color:"white"}},"History"))),o.a.createElement(Y.a,{onClick:function(){r({name:"",id:"",isAuth:!1}),window.location.href="/"}},o.a.createElement("span",{style:{color:"white"}},"Log Out"))))}var ze=a(168),Fe=a.n(ze),Le=(a(292),function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).state={},e}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"about"},o.a.createElement("img",{src:Fe.a,className:"about-image"}),o.a.createElement("p",null,o.a.createElement("h5",{style:{fontWeight:"bold"}},"Plogging is a combination of jogging with picking up litter (Swedish: plocka upp). It started as an organised activity in Sweden around 2016 and spread to other countries in 2018, following increased concern about plastic pollution. As a workout, it provides variation in body movements by adding bending, squatting and stretching to the main action of running, hiking, or walking.")),o.a.createElement("p",null,o.a.createElement("h4",{style:{fontWeight:"bold"}},"And now you can do it, too!")),o.a.createElement("h6",null,o.a.createElement("p",null,"Made By:"),o.a.createElement("div",{className:"made-by"},o.a.createElement("a",{href:"https://github.com/Daksh-404",target:"_blank",style:{textDecoration:"none"}},o.a.createElement("p",{style:{padding:"10px"}},"Daksh Gupta")),o.a.createElement("a",{href:"https://www.linkedin.com/in/dhruv-atreja",target:"_blank",style:{textDecoration:"none"}},o.a.createElement("p",{style:{padding:"10px"}},"Dhruv Atreja")),o.a.createElement("a",{href:"https://www.linkedin.com/in/pranay-kothari-423158190/",target:"_blank",style:{textDecoration:"none"}},o.a.createElement("p",{style:{padding:"10px"}},"Pranay Kothari")),o.a.createElement("a",{href:"https://github.com/yash-sethia",target:"_blank",style:{textDecoration:"none"}},o.a.createElement("p",{style:{padding:"10px"}},"Yash Sethia")))),o.a.createElement("div",{className:"CTA-btn"},o.a.createElement(i.b,{to:"/"},o.a.createElement(Y.a,null,o.a.createElement("h6",null,"Go Back")))))}}]),t}(o.a.Component));var Re=function(e){return o.a.createElement(E,null,o.a.createElement(i.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(Ge,null),o.a.createElement("main",{className:"main-container"},o.a.createElement(c.d,null,o.a.createElement(c.b,{path:"/go"},o.a.createElement(le,null)),o.a.createElement(c.b,{path:"/dashboard"},o.a.createElement(V,null)),o.a.createElement(c.b,{path:"/history"},o.a.createElement(Pe,null)),o.a.createElement(c.b,{path:"/about"},o.a.createElement(Le,null)),o.a.createElement(c.b,{path:"/signin"},o.a.createElement(Ue,null)),o.a.createElement(c.b,{path:"/"},o.a.createElement(Ae,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(i.a,null,o.a.createElement(Re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},71:function(e,t,a){e.exports=a.p+"static/media/distance.ac5b572c.jpg"},72:function(e,t){e.exports="data:image/png;base64,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"},88:function(e,t,a){e.exports=a.p+"static/media/streak.e4488e92.png"}},[[179,1,2]]]);
//# sourceMappingURL=main.2fcf3ca3.chunk.js.map