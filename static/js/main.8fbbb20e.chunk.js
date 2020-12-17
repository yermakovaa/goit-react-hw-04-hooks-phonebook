(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={label:"Filter_label__1GSS_",input:"Filter_input__2lxAd"}},14:function(e,t,n){e.exports={container:"Container_container__w9FQm"}},3:function(e,t,n){e.exports={form:"ContactForm_form__JqAtl",label:"ContactForm_label__1mrBZ",input:"ContactForm_input__fd9OM",btn:"ContactForm_btn__3qvhM"}},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),l=n(2),o=n.n(l),i=n(15),s=n(4),u=n(13),b=n.n(u),m=n(5),j=(n(29),n(14)),f=n.n(j);var d=function(e){var t=e.children;return Object(a.jsx)("div",{className:f.a.container,children:t})},p=n(3),h=n.n(p);var O=function(e){var t=e.onSubmit,n=Object(c.useState)(""),r=Object(s.a)(n,2),l=r[0],o=r[1],i=Object(c.useState)(""),u=Object(s.a)(i,2),b=u[0],m=u[1],j=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":m(a);break;default:return}},f=function(){o(""),m("")};return Object(a.jsxs)("form",{className:h.a.form,onSubmit:function(e){e.preventDefault(),t(l,b),f()},children:[Object(a.jsxs)("label",{className:h.a.label,children:["Name",Object(a.jsx)("input",{className:h.a.input,type:"text",name:"name",value:l,onChange:j,placeholder:"Ivan Ivanov"})]}),Object(a.jsxs)("label",{className:h.a.label,children:["Number",Object(a.jsx)("input",{className:h.a.input,type:"tel",name:"number",value:b,onChange:j,placeholder:"111-11-11"})]}),Object(a.jsx)("button",{className:h.a.btn,type:"submit",children:"Add contact"})]})},g=n(11),v=n.n(g);var x=function(e){var t=e.value,n=e.onChange;return Object(a.jsxs)("label",{className:v.a.label,children:["Find contacts by name",Object(a.jsx)("input",{className:v.a.input,type:"text",value:t,onChange:n})]})};function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var C=c.createElement("g",null),y=c.createElement("g",null),E=c.createElement("g",null),N=c.createElement("g",null),S=c.createElement("g",null),k=c.createElement("g",null),F=c.createElement("g",null),L=c.createElement("g",null),I=c.createElement("g",null),J=c.createElement("g",null),B=c.createElement("g",null),D=c.createElement("g",null),M=c.createElement("g",null),P=c.createElement("g",null),A=c.createElement("g",null);function q(e,t){var n=e.title,a=e.titleId,r=w(e,["title","titleId"]);return c.createElement("svg",_({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 455.111 455.111",style:{enableBackground:"new 0 0 455.111 455.111"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},r),n?c.createElement("title",{id:a},n):null,c.createElement("circle",{style:{fill:"#E24C4B"},cx:227.556,cy:227.556,r:227.556}),c.createElement("path",{style:{fill:"#D1403F"},d:"M455.111,227.556c0,125.156-102.4,227.556-227.556,227.556c-72.533,0-136.533-32.711-177.778-85.333 c38.4,31.289,88.178,49.778,142.222,49.778c125.156,0,227.556-102.4,227.556-227.556c0-54.044-18.489-103.822-49.778-142.222 C422.4,91.022,455.111,155.022,455.111,227.556z"}),c.createElement("path",{style:{fill:"#FFFFFF"},d:"M331.378,331.378c-8.533,8.533-22.756,8.533-31.289,0l-72.533-72.533l-72.533,72.533 c-8.533,8.533-22.756,8.533-31.289,0c-8.533-8.533-8.533-22.756,0-31.289l72.533-72.533l-72.533-72.533 c-8.533-8.533-8.533-22.756,0-31.289c8.533-8.533,22.756-8.533,31.289,0l72.533,72.533l72.533-72.533 c8.533-8.533,22.756-8.533,31.289,0c8.533,8.533,8.533,22.756,0,31.289l-72.533,72.533l72.533,72.533 C339.911,308.622,339.911,322.844,331.378,331.378z"}),C,y,E,N,S,k,F,L,I,J,B,D,M,P,A)}var z=c.forwardRef(q),G=(n.p,n(7)),R=n.n(G);var T=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(a.jsx)("ul",{className:R.a.list,children:t.map((function(e){var t=e.id,c=e.name,r=e.number;return Object(a.jsxs)("li",{className:R.a.item,children:[Object(a.jsxs)("p",{className:R.a.info,children:[Object(a.jsx)("b",{children:c}),Object(a.jsx)("em",{children:r})]}),Object(a.jsx)("button",{className:R.a.btn,type:"button",onClick:function(){return n(t)},children:Object(a.jsx)(z,{width:"26",height:"26"})})]},t)}))})};var X=function(){var e=Object(c.useState)((function(){var e;return null!==(e=JSON.parse(localStorage.getItem("contacts")))&&void 0!==e?e:[]})),t=Object(s.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var l=Object(c.useState)(""),o=Object(s.a)(l,2),u=o[0],j=o[1];return Object(a.jsxs)(d,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(O,{onSubmit:function(e,t){var a={id:b.a.generate(),name:e,number:t};n.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))?Object(m.b)("\ud83e\udd14 ".concat(e," is already in contacts.")):n.find((function(e){return e.number===t}))?Object(m.b)("\ud83e\udd14 ".concat(t," is already in contacts.")):""===e.trim()||""===t.trim()?m.b.info("\ud83d\ude31 Enter the contact's name and number phone!"):/\d{3}[-]\d{2}[-]\d{2}/g.test(t)?r((function(e){return[a].concat(Object(i.a)(e)).sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:e.name.toLowerCase()<t.name.toLowerCase()?-1:0}))})):m.b.error("\ud83d\udca9 Enter the correct number phone!")}}),Object(a.jsx)("h2",{children:"Contacts"}),n.length>1&&Object(a.jsx)(x,{value:u,onChange:function(e){j(e.currentTarget.value)}}),n.length>0?Object(a.jsx)(T,{contacts:function(){var e=u.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),onDeleteContact:function(e){r(n.filter((function(t){return t.id!==e})))}}):Object(a.jsx)("p",{children:"Your phonebook is empty. Please add contact."}),Object(a.jsx)(m.a,{autoClose:3700})]})};n(32);o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(X,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={list:"ContactList_list__1R0XW",item:"ContactList_item__1TfD2",info:"ContactList_info__Lpv4l",btn:"ContactList_btn__22G_J"}}},[[33,1,2]]]);
//# sourceMappingURL=main.8fbbb20e.chunk.js.map