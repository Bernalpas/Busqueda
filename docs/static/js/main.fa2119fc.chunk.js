(this.webpackJsonpcomunicacion=this.webpackJsonpcomunicacion||[]).push([[0],{11:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(1),r=c.n(n),s=c(5),i=c.n(s),o=(c(11),c(0));var u=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("hr",{}),Object(o.jsx)("h1",{children:"Productos"}),Object(o.jsx)("hr",{})]})},a=c(2),j=function(t){var e=t.setProductos,c=Object(n.useState)("Introduzca un Nuevo Producto"),r=Object(a.a)(c,2),s=r[0],i=r[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Agregar Productos"}),Object(o.jsx)("form",{onSubmit:function(t){t.preventDefault(),s.trim().length>=2&&(e(s),i("")),console.log("Producto Guardado")},children:Object(o.jsx)("input",{type:"text",value:s,onChange:function(t){i(t.target.value),console.log(s)}})}),Object(o.jsx)("button",{type:"button",className:"btn btn-danger w-50",children:"Agregar Producto"})]})},d=c(4),l=c.n(d),b=c(6),O=function(t){t.id;var e=t.title,c=t.url;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{src:c,alt:e}),Object(o.jsx)("p",{children:e})]})},h=function(t){var e=t.productos,c=Object(n.useState)([]),r=Object(a.a)(c,2),s=r[0],i=r[1];Object(n.useEffect)((function(){u()}));var u=function(){var t=Object(b.a)(l.a.mark((function t(){var c,n,r,s,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=XfTrLeRLQnMp091kQoOLQXHzHrMs0Cb2"),t.next=3,fetch(c);case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,s=r.data,o=s.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),console.log(o),i(o);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Im\xe1genes"}),Object(o.jsx)("ol",{children:s.map((function(t){var e=t.id,c=t.title;return Object(o.jsx)("li",{children:c},e)}))}),s.map((function(t){var e=t.id,c=t.title,n=t.url;return Object(o.jsx)(O,{title:c,url:n},e)}))]})},x=function(){var t=Object(n.useState)([]),e=Object(a.a)(t,2),c=e[0],r=e[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("ol",{}),Object(o.jsx)(j,{setProductos:r}),Object(o.jsx)(h,{productos:c})]})};var v=function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(u,{}),Object(o.jsx)(x,{})]})};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.fa2119fc.chunk.js.map