(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={label:"Filter_label__1SuWb",input:"Filter_input__1AhsD"}},14:function(e,t,n){e.exports={container:"Container_container__3iNhB"}},3:function(e,t,n){e.exports={form:"ContactForm_form__2oSu7",label:"ContactForm_label__2TpmU",input:"ContactForm_input__2R6sr",btn:"ContactForm_btn__1p6h7"}},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),l=n(2),o=n.n(l),i=n(15),s=n(4),u=n(13),b=n.n(u),m=n(5),j=(n(29),n(14)),f=n.n(j);var p=function(e){var t=e.children;return Object(a.jsx)("div",{className:f.a.container,children:t})},h=n(3),d=n.n(h);var O=function(e){var t=e.onSubmit,n=Object(r.useState)(""),c=Object(s.a)(n,2),l=c[0],o=c[1],i=Object(r.useState)(""),u=Object(s.a)(i,2),b=u[0],m=u[1],j=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":m(a);break;default:return}},f=function(){o(""),m("")};return Object(a.jsxs)("form",{className:d.a.form,onSubmit:function(e){e.preventDefault(),t({name:l,number:b}),f()},children:[Object(a.jsxs)("label",{className:d.a.label,children:["Name",Object(a.jsx)("input",{className:d.a.input,type:"text",name:"name",value:l,onChange:j,placeholder:"Ivan Ivanov"})]}),Object(a.jsxs)("label",{className:d.a.label,children:["Number",Object(a.jsx)("input",{className:d.a.input,type:"tel",name:"number",value:b,onChange:j,placeholder:"111-11-11"})]}),Object(a.jsx)("button",{className:d.a.btn,type:"submit",children:"Add contact"})]})},g=n(11),v=n.n(g);var x=function(e){var t=e.value,n=e.onChange;return Object(a.jsxs)("label",{className:v.a.label,children:["Find contacts by name",Object(a.jsx)("input",{className:v.a.input,type:"text",value:t,onChange:n})]})};function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var C=r.createElement("g",null),y=r.createElement("g",null),E=r.createElement("g",null),N=r.createElement("g",null),S=r.createElement("g",null),k=r.createElement("g",null),F=r.createElement("g",null),L=r.createElement("g",null),I=r.createElement("g",null),B=r.createElement("g",null),D=r.createElement("g",null),P=r.createElement("g",null),J=r.createElement("g",null),M=r.createElement("g",null),R=r.createElement("g",null);function z(e,t){var n=e.title,a=e.titleId,c=w(e,["title","titleId"]);return r.createElement("svg",_({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 455.111 455.111",style:{enableBackground:"new 0 0 455.111 455.111"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,r.createElement("circle",{style:{fill:"#E24C4B"},cx:227.556,cy:227.556,r:227.556}),r.createElement("path",{style:{fill:"#D1403F"},d:"M455.111,227.556c0,125.156-102.4,227.556-227.556,227.556c-72.533,0-136.533-32.711-177.778-85.333 c38.4,31.289,88.178,49.778,142.222,49.778c125.156,0,227.556-102.4,227.556-227.556c0-54.044-18.489-103.822-49.778-142.222 C422.4,91.022,455.111,155.022,455.111,227.556z"}),r.createElement("path",{style:{fill:"#FFFFFF"},d:"M331.378,331.378c-8.533,8.533-22.756,8.533-31.289,0l-72.533-72.533l-72.533,72.533 c-8.533,8.533-22.756,8.533-31.289,0c-8.533-8.533-8.533-22.756,0-31.289l72.533-72.533l-72.533-72.533 c-8.533-8.533-8.533-22.756,0-31.289c8.533-8.533,22.756-8.533,31.289,0l72.533,72.533l72.533-72.533 c8.533-8.533,22.756-8.533,31.289,0c8.533,8.533,8.533,22.756,0,31.289l-72.533,72.533l72.533,72.533 C339.911,308.622,339.911,322.844,331.378,331.378z"}),C,y,E,N,S,k,F,L,I,B,D,P,J,M,R)}var A=r.forwardRef(z),T=(n.p,n(7)),V=n.n(T);var U=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(a.jsx)("ul",{className:V.a.list,children:t.map((function(e){var t=e.id,r=e.name,c=e.number;return Object(a.jsxs)("li",{className:V.a.item,children:[Object(a.jsxs)("p",{className:V.a.info,children:[r,": ",c]}),Object(a.jsx)("button",{className:V.a.btn,type:"button",onClick:function(){return n(t)},children:Object(a.jsx)(A,{width:"26",height:"26"})})]},t)}))})};var W=function(){var e=Object(r.useState)((function(){var e;return null!==(e=JSON.parse(localStorage.getItem("contacts")))&&void 0!==e?e:[]})),t=Object(s.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var l=Object(r.useState)(""),o=Object(s.a)(l,2),u=o[0],j=o[1];return Object(a.jsxs)(p,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(O,{onSubmit:function(e){var t=e.name,a=e.number,r={id:b.a.generate(),name:t,number:a};n.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))?Object(m.b)("\ud83e\udd14 ".concat(t," is already in contacts.")):n.find((function(e){return e.number===a}))?Object(m.b)("\ud83e\udd14 ".concat(a," is already in contacts.")):""===t.trim()||""===a.trim()?m.b.info("\ud83d\ude31 Enter the contact's name and number phone!"):/\d{3}[-]\d{2}[-]\d{2}/g.test(a)?c([r].concat(Object(i.a)(n)).sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:e.name.toLowerCase()<t.name.toLowerCase()?-1:0}))):m.b.error("\ud83d\udca9 Enter the correct number phone!")}}),Object(a.jsx)("h2",{children:"Contacts"}),n.length>1&&Object(a.jsx)(x,{value:u,onChange:function(e){j(e.currentTarget.value)}}),n.length>0?Object(a.jsx)(U,{contacts:function(){var e=u.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),onDeleteContact:function(e){c(n.filter((function(t){return t.id!==e})))}}):Object(a.jsx)("p",{children:"Your phonebook is empty. Please add contact."}),Object(a.jsx)(m.a,{autoClose:3700})]})};n(32);o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(W,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={list:"ContactList_list__3opVf",item:"ContactList_item__3d7V2",btn:"ContactList_btn__3xbbR"}}},[[33,1,2]]]);
//# sourceMappingURL=main.dbc9b78b.chunk.js.map