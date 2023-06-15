"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[990],{7990:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r=t(9439),i=t(2791),a=t(9434),o=t(9732),c=t(4554),s=t(3039),u=t(6151),l=t(6934),d=t(1614),x=t(1686),h=t.n(x),m=t(184),f=function(){var n=(0,a.I0)(),e=(0,a.v9)((function(n){return n.contacts.contacts.items})),t=(0,i.useState)(""),x=(0,r.Z)(t,2),f=x[0],p=x[1],b=(0,i.useState)(""),j=(0,r.Z)(b,2),g=j[0],v=j[1],Z=function(n){var e=n.target,t=e.name,r=e.value;"name"===t?p(r):v(r)},w=(0,l.ZP)(u.Z)({margin:"1rem 0 0",background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",borderRadius:"3px",border:0,color:"white",height:"48px",padding:"0 30px",width:"180px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)"});return(0,m.jsx)(d.Z,{component:"main",maxWidth:"xs",children:(0,m.jsx)("form",{onSubmit:function(t){t.preventDefault(),e.some((function(n){return n.name===f}))?h().Notify.info("".concat(f," is already in contacts.")):(n((0,o.uK)({name:f,number:g})),p(""),v(""))},children:(0,m.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center","& > :not(style)":{m:2}},children:[(0,m.jsx)(s.Z,{fullWidth:!0,required:!0,id:"outlined-basic",label:"Name",variant:"outlined",name:"name",value:f,onChange:Z}),(0,m.jsx)(s.Z,{fullWidth:!0,required:!0,id:"outlined-basic",label:"Phone",variant:"outlined",name:"phone",value:g,onChange:Z}),(0,m.jsx)(w,{type:"submit",children:"Add contact"})]})})})},p=t(4852),b=t(653),j=t(6259),g=t(9952),v=t(7247),Z=function(n){var e=n.id,t=n.name,r=n.number,i=(0,a.I0)(),c=(0,l.ZP)(u.Z)({color:"#FE6B8B",outline:"#FE6B8B",borderColor:"#FE6B8B","&:hover":{borderColor:"#FE6B8B",boxShadow:"4px 8px 19px -3px rgba(0,0,0,0.27)"}});return(0,m.jsxs)(p.ZP,{alignItems:"flex-start",children:[(0,m.jsx)(b.Z,{children:(0,m.jsx)(g.Z,{})}),(0,m.jsx)(j.Z,{primary:t,secondary:r}),(0,m.jsx)(c,{variant:"outlined",startIcon:(0,m.jsx)(v.Z,{}),onClick:function(){return function(n){i((0,o.GK)(n))}(e)},children:"Delete"})]})},w=t(493),C=function(){var n=(0,a.I0)(),e=(0,a.v9)((function(n){return n.contacts.contacts.items})),t=(0,a.v9)((function(n){return n.contacts.filter})),r=e.filter((function(n){return n.name&&n.name.toLowerCase().includes(t)}));return(0,i.useEffect)((function(){n((0,o.yF)())}),[n]),(0,m.jsx)(d.Z,{component:"main",maxWidth:"xs",children:(0,m.jsx)(w.Z,{sx:{width:"100%",maxWidth:400},children:r.map((function(n){return(0,m.jsx)(Z,{id:n.id,name:n.name,number:n.number},n.id)}))})})},F=function(){var n=(0,a.I0)();return(0,m.jsx)(d.Z,{component:"main",maxWidth:"xs",children:(0,m.jsx)(s.Z,{fullWidth:!0,id:"input-with-icon-textfield",label:"Find contacts by name",variant:"standard",onChange:function(e){n((0,o.pY)(e.target.value.toLowerCase()))},size:"large"})})},B=function(n){var e=n.title,t=n.children;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h2",{children:e}),t]})},k=function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(B,{title:"Phonebook",children:(0,m.jsx)(f,{})}),(0,m.jsxs)(B,{title:"Contacts",children:[(0,m.jsx)(F,{}),(0,m.jsx)(C,{})]})]})}}}]);
//# sourceMappingURL=990.36a877f0.chunk.js.map