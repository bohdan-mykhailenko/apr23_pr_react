(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(8),s=c.n(n),r=(c(14),c(15),c(9)),i=c(3),l=c(7),o=c(2),d=c.n(o),j=(c(16),[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}]),u=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],h=c(0),b=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){var t,c=function(e){return u.find((function(t){return t.id===e}))||null}(e.categoryId),a=(t=c.ownerId,j.find((function(e){return e.id===t}))||null);return Object(l.a)(Object(l.a)({},e),{},{category:c,user:a})})),m=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([]),l=Object(i.a)(s,2),o=l[0],m=l[1],f=Object(a.useState)(""),x=Object(i.a)(f,2),O=x[0],p=x[1],g=Object(a.useState)("id"),y=Object(i.a)(g,2),N=y[0],w=y[1],C=Object(a.useState)("ASC"),I=Object(i.a)(C,2),k=I[0],S=I[1],v=function(e,t,c,a,n){var s=b;if(e&&(s=s.filter((function(t){return t.user.id===e}))),t.length>0&&(s=s.filter((function(e){return t.includes(e.categoryId)}))),c){var r=c.toLowerCase().trim();s=s.filter((function(e){return e.name.toLowerCase().includes(r)}))}return function(e,t){switch(e){case"id":return t.sort((function(e,t){return e.id-t.id}));case"name":return t.sort((function(e,t){return e.name.localeCompare(t.name)}));case"category":return t.sort((function(e,t){return e.category.title.localeCompare(t.category.title)}));case"user":t.sort((function(e,t){return e.user.name.localeCompare(t.user.name)}))}}(a,s),"DESC"===n&&s.reverse(),s}(c,o,O,N,k),A=function(e){n(e)},P=function(e){m(e?function(t){return t.includes(e)?t.filter((function(t){return t!==e})):[].concat(Object(r.a)(t),[e])}:[])},B=function(e){"ASC"===k&&S("DESC"),"DESC"===k&&S("ASC"),w(e)},E=u.length;return Object(h.jsx)("div",{className:"section",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"title",children:"Product Categories"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsxs)("nav",{className:"panel",children:[Object(h.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(h.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(h.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",onClick:function(){return A(null)},className:d()({"is-active":!c}),children:"All"}),j.map((function(e){return Object(h.jsx)("a",{"data-cy":"FilterUser",href:"#/",onClick:function(){return A(e.id)},className:d()({"is-active":c===e.id}),children:e.name},e.id)}))]}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(h.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:O,onChange:function(e){p(e.target.value)}}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),Object(h.jsx)("span",{className:"icon is-right",children:Object(h.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete"})})]})}),Object(h.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(h.jsx)("a",{href:"#/","data-cy":"AllCategories",onClick:function(){return P(null)},className:d()("button mr-2 my-1",{"is-info":0===o.length||o.length===E},{"is-otlined":o.length===E}),children:"All"}),u.map((function(e){return Object(h.jsx)("a",{"data-cy":"Category",className:d()("button mr-2 my-1",{"is-info":o.includes(e.id)}),href:"#/",onClick:function(){return P(e.id)},children:e.title},e.id)}))]}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",children:"Reset all filters"})})]})}),Object(h.jsxs)("div",{className:"box table-container",children:[0===v.length&&Object(h.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"}),Object(h.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(h.jsx)("a",{href:"#/",onClick:function(){return B("id")},children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(h.jsx)("a",{href:"#/",onClick:function(){return B("name")},children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(h.jsx)("a",{href:"#/",onClick:function(){return B("category")},children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(h.jsx)("a",{href:"#/",onClick:function(){return B("user")},children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(h.jsx)("tbody",{children:v.map((function(e){return Object(h.jsxs)("tr",{"data-cy":"Product",children:[Object(h.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:e.id}),Object(h.jsx)("td",{"data-cy":"ProductName",children:e.name}),Object(h.jsx)("td",{"data-cy":"ProductCategory",children:"".concat(e.category.icon," - ").concat(e.category.title)}),Object(h.jsx)("td",{"data-cy":"ProductUser",className:d()("has-text-link",{"has-text-danger":"f"===e.user.sex}),children:e.user.name})]},e.id)}))})]})]})]})})};s.a.render(Object(h.jsx)(m,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.821a8126.chunk.js.map