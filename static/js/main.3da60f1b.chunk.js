(this["webpackJsonpusername-age-validation"]=this["webpackJsonpusername-age-validation"]||[]).push([[0],[,,function(e,t,a){e.exports={backdrop:"ErrorModal_backdrop__3SZ6y",modal:"ErrorModal_modal__3ZW04",header:"ErrorModal_header__2rKIm",content:"ErrorModal_content__zye2B",actions:"ErrorModal_actions__1yaPM"}},,,function(e,t,a){e.exports={input:"AddUser_input__12kiK"}},function(e,t,a){e.exports={card:"Card_card__1m44e"}},function(e,t,a){e.exports={button:"Button_button__6-R6B"}},function(e,t,a){e.exports={users:"UsersList_users__2x9_Q"}},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(4),r=a.n(s),c=(a(13),a(5)),i=a.n(c),l=a(6),o=a.n(l),d=a(0);var j=e=>Object(d.jsx)("div",{className:"".concat(o.a.card," ").concat(e.className),children:e.children}),u=a(7),b=a.n(u);var m=e=>Object(d.jsx)("button",{className:b.a.button,type:e.type||"button",onClick:e.onClick,children:e.children}),h=a(2),x=a.n(h);var O=e=>Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:x.a.backdrop,onClick:e.onConfirm}),Object(d.jsxs)(j,{className:x.a.modal,children:[Object(d.jsx)("header",{className:x.a.header,children:Object(d.jsx)("h2",{children:e.title})}),Object(d.jsx)("div",{className:x.a.content,children:Object(d.jsx)("p",{children:e.message})}),Object(d.jsx)("footer",{className:x.a.actions,children:Object(d.jsx)(m,{onClick:e.onConfirm,children:"Okay"})})]})]});var p=e=>{const[t,a]=Object(n.useState)(""),[s,r]=Object(n.useState)(""),[c,l]=Object(n.useState)();return Object(d.jsxs)("div",{children:[c&&Object(d.jsx)(O,{title:c.title,message:c.message,onConfirm:()=>{l(null)}}),Object(d.jsx)(j,{className:i.a.input,children:Object(d.jsxs)("form",{onSubmit:n=>{n.preventDefault(),+s<1?l({title:"Invalid age",message:"Please enter a valid age (> 0)."}):0!==t.trim().length&&0!==s.trim().length?(e.onAddUser(t,s),a(""),r("")):l({title:"Invalid Input",message:"Please enter a valid name and age (non-empty values)."})},children:[Object(d.jsx)("label",{htmlFor:"username",children:"Username"}),Object(d.jsx)("input",{id:"username",type:"text",value:t,onChange:e=>{a(e.target.value)}}),Object(d.jsx)("label",{htmlFor:"age",children:"Age (Years)"}),Object(d.jsx)("input",{id:"age",type:"number",value:s,onChange:e=>{r(e.target.value)}}),Object(d.jsx)(m,{type:"submit",children:"Add User"})]})})]})},_=a(8),v=a.n(_);var g=e=>Object(d.jsx)(j,{className:v.a.users,children:Object(d.jsx)("ul",{children:e.users.map((e=>Object(d.jsxs)("li",{children:[e.name," (",e.age," years old)"]},e.id)))})});var f=function(){const[e,t]=Object(n.useState)([]);return Object(d.jsxs)("div",{children:[Object(d.jsx)(p,{onAddUser:(e,a)=>{t((t=>[...t,{name:e,age:a,id:Math.random.toString()}]))}}),Object(d.jsx)(g,{users:e})]})};r.a.render(Object(d.jsx)(f,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.3da60f1b.chunk.js.map