(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{64:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),r=n(43),i=n.n(r),s=(n(64),n(0)),l=n.n(s),o=n(14),u=n(2),d=n(1),m=n(3),p=n(11),b=n(12),h=n(19),j=(n(66),n(33)),g=(n(67),n(6)),f=Object(h.g)((function(e){var t=e.title,n=e.imageUrl,c=e.size,a=e.history,r=e.linkUrl,i=e.match;return Object(g.jsxs)("div",{className:"".concat(c," menu-item"),onClick:function(){return a.push("".concat(i.url).concat(r))},children:[Object(g.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(g.jsxs)("div",{className:"content",children:[Object(g.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(g.jsx)("span",{className:"subtitle",children:"Shop Now"})]})]})})),O=n(18),x=n(15),v=Object(x.a)([function(e){return e.directory}],(function(e){return e.sections})),k=(n(74),["id"]),w=Object(x.b)({sections:v}),y=Object(O.b)(w)((function(e){var t=e.sections;return Object(g.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(j.a)(e,k);return Object(g.jsx)(f,Object(o.a)({},n),t)}))})})),F=(n(75),function(){return Object(g.jsx)("div",{className:"homepage",children:Object(g.jsx)(y,{})})}),N=(n(76),{TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"}),E=function(){return{type:N.TOGGLE_CART_HIDDEN}},C=function(e){return{type:N.ADD_ITEM,payload:e}},U=(n(77),["children","isGoogleSignIn","inverted"]),I=function(e){var t=e.children,n=e.isGoogleSignIn,c=e.inverted,a=Object(j.a)(e,U);return Object(g.jsx)("button",Object(o.a)(Object(o.a)({className:"".concat(c?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},a),{},{children:t}))},A=(n(78),Object(O.b)(null,(function(e){return{addItem:function(t){return e(C(t))}}}))((function(e){var t=e.item,n=e.addItem,c=t.name,a=t.price,r=t.imageUrl;return Object(g.jsxs)("div",{className:"collection-item",children:[Object(g.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(r,")")}}),Object(g.jsxs)("div",{className:"collection-footer",children:[Object(g.jsx)("span",{className:"name",children:c}),Object(g.jsxs)("span",{className:"price",children:["$",a]})]}),Object(g.jsxs)(I,{onClick:function(){return n(t)},inverted:!0,children:[" ","Add to cart"," "]})]})}))),S=(n(79),Object(h.g)((function(e){var t=e.title,n=e.items,c=e.history,a=e.match;return Object(g.jsxs)("div",{className:"collection-preview",children:[Object(g.jsx)("h1",{className:"title",onClick:function(){return c.push("".concat(a.path,"/").concat(t.toLowerCase()))},children:t.toUpperCase()}),Object(g.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(g.jsx)(A,{item:e},e.id)}))})]})}))),D=n(56),T=n.n(D)()(Object(x.a)([function(e){return e.shop}],(function(e){return e.collections}))),R=Object(x.a)([T],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),_=["id"],P=Object(x.b)({collections:R}),B=Object(O.b)(P)((function(e){var t=e.collections;return Object(g.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(j.a)(e,_);return Object(g.jsx)(S,Object(o.a)({},n),t)}))})})),M=(n(80),Object(O.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(x.a)([T],(function(e){return e[n]})))(e)};var n}))((function(e){var t=e.collection,n=t.title,c=t.items;return Object(g.jsxs)("div",{className:"collection-page",children:[Object(g.jsx)("h2",{className:"title",children:n}),Object(g.jsx)("div",{className:"items",children:c.map((function(e){return Object(g.jsx)(A,{item:e},e.id)}))})]})}))),G=function(e){var t=e.match;return Object(g.jsxs)("div",{className:"shop-page",children:[Object(g.jsx)(h.b,{exact:!0,path:"".concat(t.path),component:B}),Object(g.jsx)(h.b,{path:"".concat(t.path,"/:collectionId"),component:M})]})},W=n(28),H=n(40),L=(n(97),n(82),function(){var e=Object(u.a)(l.a.mark((function e(t,n){var c,a,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return c=z.doc("users/".concat(t.uid)),e.next=5,c.get();case 5:if(e.sent.exists){e.next=17;break}return a=t.displayName,r=t.email,i=new Date,e.prev=9,e.next=12,c.set(Object(o.a)({displayName:a,email:r,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",c);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());H.a.initializeApp({apiKey:"AIzaSyDAel2ydYvkbPa2vm9gZmeYD1cZkziMDOU",authDomain:"crwn-db-6e06e.firebaseapp.com",projectId:"crwn-db-6e06e",storageBucket:"crwn-db-6e06e.appspot.com",messagingSenderId:"746447275217",appId:"1:746447275217:web:a55851738bbdcffa74b1f0",measurementId:"G-FFG0WJS300"});var q=H.a.auth(),z=H.a.firestore(),J=new H.a.auth.GoogleAuthProvider;J.setCustomParameters({prompt:"select_account"});var V,Y,K,X,Q,Z,$,ee,te,ne,ce,ae,re,ie,se,le=function(){q.signInWithPopup(J)},oe=(H.a,function(e){return e.cart}),ue=Object(x.a)([oe],(function(e){return e.cartItems})),de=Object(x.a)([oe],(function(e){return e.hidden})),me=Object(x.a)([ue],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),pe=Object(x.a)([ue],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),be=["title","titleId"];function he(){return he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},he.apply(this,arguments)}function je(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ge(e,t){var n=e.title,a=e.titleId,r=je(e,be);return c.createElement("svg",he({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},r),n?c.createElement("title",{id:a},n):null,c.createElement("g",null,c.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),c.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),c.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),V||(V=c.createElement("g",null)),Y||(Y=c.createElement("g",null)),K||(K=c.createElement("g",null)),X||(X=c.createElement("g",null)),Q||(Q=c.createElement("g",null)),Z||(Z=c.createElement("g",null)),$||($=c.createElement("g",null)),ee||(ee=c.createElement("g",null)),te||(te=c.createElement("g",null)),ne||(ne=c.createElement("g",null)),ce||(ce=c.createElement("g",null)),ae||(ae=c.createElement("g",null)),re||(re=c.createElement("g",null)),ie||(ie=c.createElement("g",null)),se||(se=c.createElement("g",null)))}var fe,Oe,xe=c.forwardRef(ge),ve=(n.p,n(84),Object(x.b)({itemCount:me})),ke=Object(O.b)(ve,(function(e){return{toggleCartHidden:function(){return e(E())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(g.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(g.jsx)(xe,{className:"shopping-icon"}),Object(g.jsx)("span",{className:"item-count",children:n})]})})),we=(n(85),function(e){var t=e.item,n=t.imageUrl,c=t.price,a=t.name,r=t.quantity;return Object(g.jsxs)("div",{className:"cart-item",children:[Object(g.jsx)("img",{src:n,alt:"item"}),Object(g.jsxs)("div",{className:"item-details",children:[Object(g.jsx)("span",{className:"name",children:a}),Object(g.jsxs)("span",{className:"price",children:[r," x $",c]})]})]})}),ye=(n(86),Object(x.b)({cartItems:ue})),Fe=Object(h.g)(Object(O.b)(ye)((function(e){var t=e.cartItems,n=e.history,c=e.dispatch;return Object(g.jsxs)("div",{className:"cart-dropdown",children:[Object(g.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(g.jsx)(we,{item:e},e.id)})):Object(g.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object(g.jsx)(I,{onClick:function(){n.push("/checkout"),c(E())},children:"GO TO CHECKOUT"})]})}))),Ne=Object(x.a)([function(e){return e.user}],(function(e){return e.currentUser})),Ee=["title","titleId"];function Ce(){return Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},Ce.apply(this,arguments)}function Ue(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Ie(e,t){var n=e.title,a=e.titleId,r=Ue(e,Ee);return c.createElement("svg",Ce({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":a},r),void 0===n?c.createElement("title",{id:a},"Group"):n?c.createElement("title",{id:a},n):null,fe||(fe=c.createElement("desc",null,"Created with Sketch.")),Oe||(Oe=c.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},c.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},c.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),c.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var Ae=c.forwardRef(Ie),Se=(n.p,n(87),Object(x.b)({currentUser:Ne,hidden:de})),De=Object(O.b)(Se)((function(e){var t=e.currentUser,n=e.hidden;return Object(g.jsxs)("div",{className:"header",children:[Object(g.jsx)(W.b,{className:"logo-container",to:"/",children:Object(g.jsx)(Ae,{className:"logo"})}),Object(g.jsxs)("div",{className:"options",children:[Object(g.jsx)(W.b,{className:"option",to:"/shop",children:"SHOP"}),Object(g.jsx)(W.b,{className:"option",to:"/shop",children:"CONTACT"}),t?Object(g.jsx)("div",{className:"option",onClick:function(){return q.signOut()},children:"SIGN OUT"}):Object(g.jsx)(W.b,{className:"opition",to:"/signin",children:"SIGN IN"}),Object(g.jsx)(ke,{})]}),n?null:Object(g.jsx)(Fe,{})]})})),Te=n(4),Re=(n(88),["handleChange","label"]),_e=function(e){var t=e.handleChange,n=e.label,c=Object(j.a)(e,Re);return Object(g.jsxs)("div",{className:"group",children:[Object(g.jsx)("input",Object(o.a)({className:"form-input",onChange:t},c)),n?Object(g.jsx)("label",{className:"".concat(c.value.length?"shrink":""," form-input-label "),children:n}):null]})},Pe=(n(89),function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).handleSubmit=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=c.state,a=n.email,r=n.password,e.prev=2,e.next=5,q.signInWithEmailAndPassword(a,r);case 5:c.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),c.handleChange=function(e){var t=e.target,n=t.value,a=t.name;c.setState(Object(Te.a)({},a,n))},c.state={email:"",password:""},c}return Object(m.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"sign-in",children:[Object(g.jsx)("h2",{children:"I already have an account"}),Object(g.jsx)("span",{children:" Sign in with your email and password"}),Object(g.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(g.jsx)(_e,{name:"email",value:this.state.email,handleChange:this.handleChange,label:"email",required:!0}),Object(g.jsx)(_e,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),Object(g.jsxs)("div",{className:"buttons",children:[Object(g.jsx)(I,{type:"submit",children:"Sign In"}),Object(g.jsx)(I,{type:"button",onClick:le,isGoogleSignIn:!0,children:"Sign in with Google"})]})]})]})}}]),n}(a.a.Component)),Be=Pe,Me=(n(90),function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(u.a)(l.a.mark((function t(n){var c,a,r,i,s,o,u;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),c=e.state,a=c.displayName,r=c.email,i=c.password,s=c.confirmPassword,i===s){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,q.createUserWithEmailAndPassword(r,i);case 8:return o=t.sent,u=o.user,t.next=12,L(u,{displayName:a});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,c=n.name,a=n.value;e.setState(Object(Te.a)({},c,a))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,c=e.password,a=e.confirmPassword;return Object(g.jsxs)("div",{className:"sign-up",children:[Object(g.jsx)("h2",{className:"title",children:"I do not have an account"}),Object(g.jsx)("span",{children:"Sign up with your email and password"}),Object(g.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(g.jsx)(_e,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(g.jsx)(_e,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(g.jsx)(_e,{type:"password",name:"password",value:c,onChange:this.handleChange,label:"Password",required:!0}),Object(g.jsx)(_e,{type:"password",name:"confirmPassword",value:a,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(g.jsx)(I,{type:"submit",children:"SIGN UP"})]})]})}}]),n}(a.a.Component)),Ge=Me,We=function(){return Object(g.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(g.jsx)(Be,{}),Object(g.jsx)(Ge,{})]})},He=(n(91),Object(O.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:N.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(C(t))},removeItem:function(t){return e(function(e){return{type:N.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,c=e.addItem,a=e.removeItem,r=t.name,i=t.imageUrl,s=t.price,l=t.quantity;return Object(g.jsxs)("div",{className:"checkout-item",children:[Object(g.jsx)("div",{className:"image-container",children:Object(g.jsx)("img",{src:i,alt:"item"})}),Object(g.jsx)("span",{className:"name",children:r}),Object(g.jsxs)("span",{className:"quantity",children:[Object(g.jsx)("div",{className:"arrow",onClick:function(){return a(t)},children:"\u276e"}),Object(g.jsx)("span",{className:"value",children:l}),Object(g.jsx)("div",{className:"arrow",onClick:function(){return c(t)},children:"\u276f"})]}),Object(g.jsx)("span",{className:"price",children:s}),Object(g.jsx)("div",{className:"remove-button",onClick:function(){return n(t)},children:"\u2715"})]})}))),Le=n(57),qe=n.n(Le),ze=function(e){var t=e.price,n=100*t;return Object(g.jsx)(qe.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successful")},stripeKey:"pk_test_51KEHAfJIN7cZcFCxn0HAapbmOuCv9BIEwQ2Yz2XWeLgYlenO67oR2oLtlWhLYkatADds8reSwwXxRJBBAVSvErMH00edilfMDu"})},Je=(n(92),Object(x.b)({cartItems:ue,total:pe})),Ve=Object(O.b)(Je)((function(e){var t=e.cartItems,n=e.total;return Object(g.jsxs)("div",{className:"checkout-page",children:[Object(g.jsxs)("div",{className:"checkout-header",children:[Object(g.jsx)("div",{className:"header-block",children:Object(g.jsx)("span",{children:"Product"})}),Object(g.jsx)("div",{className:"header-block",children:Object(g.jsx)("span",{children:"Description"})}),Object(g.jsx)("div",{className:"header-block",children:Object(g.jsx)("span",{children:"Quantity"})}),Object(g.jsx)("div",{className:"header-block",children:Object(g.jsx)("span",{children:"Price"})}),Object(g.jsx)("div",{className:"header-block",children:Object(g.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(g.jsx)(He,{cartItem:e},e.id)})),Object(g.jsxs)("div",{className:"total",children:["Total: $",n]}),Object(g.jsxs)("div",{className:"test-warning",children:["*Please use the following test credit card for payments* ",Object(g.jsx)("br",{}),"4242 4242 4242 4242 - Exp: any future date - CVV: 123"]}),Object(g.jsx)(ze,{price:n})]})})),Ye="SET_CURRENT_USER",Ke=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).unSubscribeFromAuth=null,e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unSubscribeFromAuth=q.onAuthStateChanged(function(){var t=Object(u.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,L(n);case 3:t.sent.onSnapshot((function(t){e(Object(o.a)({id:t.id},t.data()))}));case 5:e(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unSubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{children:[Object(g.jsx)(De,{}),Object(g.jsxs)(h.d,{children:[Object(g.jsx)(h.b,{exact:!0,path:"/",component:F}),Object(g.jsx)(h.b,{path:"/shop",component:G}),Object(g.jsx)(h.b,{exact:!0,path:"/checkout",component:Ve}),Object(g.jsx)(h.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object(g.jsx)(h.a,{to:"/"}):Object(g.jsx)(We,{})}})]})]})}}]),n}(a.a.Component),Xe=Object(x.b)({currentUser:Ne}),Qe=Object(O.b)(Xe,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:Ye,payload:e}}(t))}}}))(Ke),Ze=n(58),$e=n(31),et=n(48),tt=(n(93),n(59)),nt=n.n(tt),ct={currentUser:null},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,t=arguments.length>1?arguments[1]:void 0;return t.type===Ye?Object(o.a)(Object(o.a)({},e),{},{currentUser:t.payload}):e},rt=n(23),it=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(rt.a)(e),[Object(o.a)(Object(o.a)({},t),{},{quantity:1})])},st=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{quantity:e.quantity-1}):e}))},lt={hidden:!0,cartItems:[]},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.TOGGLE_CART_HIDDEN:return Object(o.a)(Object(o.a)({},e),{},{hidden:!e.hidden});case N.ADD_ITEM:return Object(o.a)(Object(o.a)({},e),{},{cartItems:it(e.cartItems,t.payload)});case N.REMOVE_ITEM:return Object(o.a)(Object(o.a)({},e),{},{cartItems:st(e.cartItems,t.payload)});case N.CLEAR_ITEM_FROM_CART:return Object(o.a)(Object(o.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},ut={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;return t.type,e},mt={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdnb.lystit.com%2Fphotos%2F532b-2014%2F12%2F16%2Ffree-people-green-capsule-slouchy-beanie-product-1-26477478-0-863980087-normal.jpeg&f=1&nofb=1",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F43%2Fd5%2F0b%2F43d50b7e3347c2f10b11fca81ad9f8a1.jpg&f=1&nofb=1",price:14},{id:7,name:"Red Beanie",imageUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F904947%2Fpexels-photo-904947.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26h%3D750%26w%3D1260&f=1&nofb=1",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.glacierwear.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fthumbnail%2F960x%2F17f82f742ffe127f42dca9de82fb58b1%2Fi%2Fm%2Fimage002_3_16.jpg&f=1&nofb=1",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thetrendspotter.net%2Fwp-content%2Fuploads%2F2017%2F02%2F7-Ways-to-Wear-a-Snapback.jpg&f=1&nofb=1",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Feldiariony.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2018%2F08%2Fpaul-volkmer-522844-unsplash.jpg%3Fquality%3D80%26strip%3Dall&f=1&nofb=1",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsneakerbardetroit.com%2Fwp-content%2Fuploads%2F2016%2F01%2Fkevin-hart-nike-air-force-1-rt-mid-beige.jpg&f=1&nofb=1",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1102777%2Fpexels-photo-1102777.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-arthur-ogleznev-1102777.jpg%26fm%3Djpg&f=1&nofb=1",price:190},{id:17,name:"Timberlands",imageUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1520809382381-d95e6364bbdb%3Fixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D1000%26q%3D80&f=1&nofb=1",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.lookastic.com%2Flooks%2Ftrenchcoat-suit-dress-shirt-original-6759.jpg&f=1&nofb=1",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F80%2F40%2F60%2F80406086bd75e5fe4a06293b3d9e84cd.jpg&f=1&nofb=1",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1xKUHxlmWBuNkSndVq6AsApXak%2F2-Piece-Set-for-Women-Yellow-Tracksuit-Women-Hoodies-Pullover-Sweat-Suits-Sportswear-Track-Suit-Autumn.jpg&f=1&nofb=1",price:135},{id:29,name:"White Blouse",imageUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.lifehack.org%2Fwp-content%2Fuploads%2F2014%2F12%2FWhite-blouse.jpg&f=1&nofb=1",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2Fa69e9b21-895c-48f3-8b3c-8b66ff45814d_1.6ef12104a80ed39e4e7e12614209db73.jpeg&f=1&nofb=1",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dickies.com%2Fdw%2Fimage%2Fv2%2FAAYI_PRD%2Fon%2Fdemandware.static%2F-%2FSites-master-catalog-dickies%2Fdefault%2Fdwf0e1291d%2Fimages%2Fmain%2FWL450_BY_FR.jpg%3Fsw%3D1563%26sh%3D2000%26sm%3Dfit&f=1&nofb=1",price:25}]}}},pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments.length>1?arguments[1]:void 0;return t.type,e},bt={key:"root",storage:nt.a,whitelist:["cart"]},ht=Object($e.b)({user:at,cart:ot,directory:dt,shop:pt}),jt=Object(et.a)(bt,ht);var gt=Object($e.c)(jt,$e.a.apply(void 0,[])),ft=Object(et.b)(gt);i.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(O.a,{store:gt,children:Object(g.jsx)(W.a,{children:Object(g.jsx)(Ze.a,{persistor:ft,children:Object(g.jsx)(Qe,{})})})})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.98aeb100.chunk.js.map