(this["webpackJsonpproject-app"]=this["webpackJsonpproject-app"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},17:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var c=t(1),n=t.n(c),r=t(8),s=t.n(r),l=(t(13),t(7)),i=t(5),j=t(3),o=(t(14),t(15),t(0)),b=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:Object(o.jsx)("img",{src:"logo.png",alt:"",style:{width:"60px"}})}),Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Men"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active",href:"#",children:"Women"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active",href:"#",children:"Kids"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active",href:"#",children:"Home & Living"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active",href:"#",children:"Beauty"})})]}),Object(o.jsx)("form",{className:"d-flex",children:Object(o.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:e.onChange})})]})]})})})},d=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"card",style:{width:"300px"},children:[Object(o.jsx)("img",{className:"card-img-top",src:e.img,alt:"Card image cap"}),Object(o.jsxs)("div",{className:"card-body",children:[e.brand,Object(o.jsx)("h5",{className:"card-title",children:e.product}),Object(o.jsx)("p",{className:"card-text",children:e.mrp}),Object(o.jsxs)("a",{href:"#",className:"btn btn-primary",children:["Buy Now",e.discount]})]})]})})},u=function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{type:"radio",name:"radio",value:e.value,onClick:e.onClick}),Object(o.jsx)("label",{children:e.gender}),Object(o.jsx)("br",{})]})};var h=function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{type:"checkbox",value:e.value,onClick:e.onClick}),Object(o.jsx)("label",{children:e.value}),Object(o.jsx)("br",{})]})},v=(t(17),function(){var e=Object(c.useState)([]),a=Object(j.a)(e,2),t=a[0],n=a[1],r=Object(c.useState)(""),s=Object(j.a)(r,2),v=s[0],m=s[1],O=Object(c.useState)([]),g=Object(j.a)(O,2),f=g[0],x=g[1],p=Object(c.useState)([]),N=Object(j.a)(p,2),y=N[0],k=N[1],C=Object(c.useState)([]),S=Object(j.a)(C,2),w=S[0],F=S[1];Object(c.useEffect)((function(){fetch("https://run.mocky.io/v3/bf175661-5e9f-4112-8580-d587759ff72e").then((function(e){return e.json()})).then((function(e){return e.products})).then((function(e){return n(e)}))}),[]);var E=[];t.forEach((function(e){E.push(e.gender)}));var T,B=new Set(E),L=[],D=Object(i.a)(B);try{for(D.s();!(T=D.n()).done;){var I=T.value;L.push(I)}}catch(Y){D.e(Y)}finally{D.f()}var J=[];t.forEach((function(e){J.push(e.category)}));var M,H=new Set(J),K=[],R=Object(i.a)(H);try{for(R.s();!(M=R.n()).done;){var W=M.value;K.push(W)}}catch(Y){R.e(Y)}finally{R.f()}var q=[];t.forEach((function(e){q.push(e.brand)}));var z,A=new Set(q),G=[],P=Object(i.a)(A);try{for(P.s();!(z=P.n()).done;){var Q=z.value;G.push(Q)}}catch(Y){P.e(Y)}finally{P.f()}var U=function(e){F(e.target.value)};console.log(w);var V=function(e){e.target.value?k([].concat(Object(l.a)(y),[e.target.value])):k(y.filter((function(a){return a!==e.target.value})))},X=function(e){e.target.checked?x([].concat(Object(l.a)(f),[e.target.value])):x(f.filter((function(a){return a!==e.target.value})))};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b,{onChange:function(e){m(e.target.value)}}),Object(o.jsx)("div",{className:"parent",children:Object(o.jsxs)("div",{className:"main",children:[Object(o.jsxs)("div",{className:"genderclass",children:[Object(o.jsx)("h4",{children:"FILTERS"}),L.map((function(e){return Object(o.jsx)(u,{gender:e,value:e,onClick:U})})),Object(o.jsx)("hr",{}),Object(o.jsx)("h4",{children:"Categories"}),K.map((function(e){return Object(o.jsx)(h,{value:e,onClick:X})})),Object(o.jsx)("hr",{}),Object(o.jsx)("h4",{children:"Brand"}),G.map((function(e){return Object(o.jsx)(h,{value:e,onClick:V})}))]}),Object(o.jsx)("div",{className:"cards",children:Object(o.jsx)("div",{className:"cardclass",children:(0===w.length&&0===f.length&&0===y.length&&""==v?t:0!==w.length||0!==f.length||0!==y.length||""==v?t.filter((function(e){return w.includes(e.gender)||f.includes(e.category)||y.includes(e.brand)})):""!==v?t.filter((function(e){return e.product.toLowerCase().includes(v.toLowerCase())})):void 0).map((function(e,a){return Object(o.jsx)(d,{img:e.searchImage,brand:e.brand,product:e.product,price:e.price,mrp:e.mrp},a)}))})})]})})]})});s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(v,{})})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.aa1546d3.chunk.js.map