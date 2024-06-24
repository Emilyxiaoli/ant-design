"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[5683],{33156:function(h,i,t){t.r(i);var c=t(805574),_=t.n(c),r=t(667294),s=t(75529),e=t(811834),n=t(879587),d=t(941346),l=t(785893),o=(0,l.jsx)("span",{children:"prompt text"}),E=80,a=function(){var j=(0,r.useState)("Show"),m=_()(j,2),x=m[0],D=m[1],u=(0,r.useMemo)(function(){return x==="Hide"?!1:x==="Show"?!0:{pointAtCenter:!0}},[x]);return(0,l.jsxs)(s.ZP,{button:{style:{width:E,margin:4}},children:[(0,l.jsx)(e.Z,{value:x,options:["Show","Hide","Center"],onChange:function(O){return D(O)},style:{marginBottom:24}}),(0,l.jsxs)("div",{className:"demo",children:[(0,l.jsxs)("div",{style:{marginInlineStart:E,whiteSpace:"nowrap"},children:[(0,l.jsx)(n.Z,{placement:"topLeft",title:o,arrow:u,children:(0,l.jsx)(d.ZP,{children:"TL"})}),(0,l.jsx)(n.Z,{placement:"top",title:o,arrow:u,children:(0,l.jsx)(d.ZP,{children:"Top"})}),(0,l.jsx)(n.Z,{placement:"topRight",title:o,arrow:u,children:(0,l.jsx)(d.ZP,{children:"TR"})})]}),(0,l.jsxs)("div",{style:{width:E,float:"inline-start"},children:[(0,l.jsx)(n.Z,{placement:"leftTop",title:o,arrow:u,children:(0,l.jsx)(d.ZP,{children:"LT"})}),(0,l.jsx)(n.Z,{placement:"left",title:o,arrow:u,children:(0,l.jsx)(d.ZP,{children:"Left"})}),(0,l.jsx)(n.Z,{placement:"leftBottom",title:o,arrow:u,children:(0,l.jsx)(d.ZP,{children:"LB"})})]}),(0,l.jsxs)("div",{style:{width:E,marginInlineStart:E*4+24},children:[(0,l.jsx)(n.Z,{placement:"rightTop",title:o,arrow:u,children:(0,l.jsx)(d.ZP,{children:"RT"})}),(0,l.jsx)(n.Z,{placement:"right",title:o,arrow:u,children:(0,l.jsx)(d.ZP,{children:"Right"})}),(0,l.jsx)(n.Z,{placement:"rightBottom",title:o,arrow:u,children:(0,l.jsx)(d.ZP,{children:"RB"})})]}),(0,l.jsxs)("div",{style:{marginInlineStart:E,clear:"both",whiteSpace:"nowrap"},children:[(0,l.jsx)(n.Z,{placement:"bottomLeft",title:o,arrow:u,children:(0,l.jsx)(d.ZP,{children:"BL"})}),(0,l.jsx)(n.Z,{placement:"bottom",title:o,arrow:u,children:(0,l.jsx)(d.ZP,{children:"Bottom"})}),(0,l.jsx)(n.Z,{placement:"bottomRight",title:o,arrow:u,children:(0,l.jsx)(d.ZP,{children:"BR"})})]})]})]})};i.default=a},463492:function(h,i,t){t.r(i);var c=t(97857),_=t.n(c),r=t(667294),s=t(879587),e=t(941346),n=t(259696),d=t(785893),l=r.forwardRef(function(E,a){return(0,d.jsx)("div",{style:{overflow:"auto",position:"relative",padding:"24px",border:"1px solid #e9e9e9"},ref:a,children:(0,d.jsxs)("div",{style:{width:"200%",display:"flex",flexDirection:"column",alignItems:"center",rowGap:16},children:[(0,d.jsx)(s.Z,_()(_()({},E),{},{placement:"left",title:"Prompt Text",children:(0,d.jsx)(e.ZP,{children:"Adjust automatically / \u81EA\u52A8\u8C03\u6574"})})),(0,d.jsx)(s.Z,_()(_()({},E),{},{placement:"left",title:"Prompt Text",autoAdjustOverflow:!1,children:(0,d.jsx)(e.ZP,{children:"Ignore / \u4E0D\u5904\u7406"})}))]})})}),o=function(){var a=r.useRef(null),P=r.useRef(null);return r.useEffect(function(){a.current.scrollLeft=a.current.clientWidth*.5,P.current.scrollLeft=P.current.clientWidth*.5},[]),(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",rowGap:16},children:[(0,d.jsx)(n.Z.Title,{level:5,children:"With `getPopupContainer`"}),(0,d.jsx)(l,{ref:a,getPopupContainer:function(m){return m.parentElement}}),(0,d.jsx)(n.Z.Title,{level:5,children:"Without `getPopupContainer`"}),(0,d.jsx)(l,{ref:P})]})};i.default=o},291621:function(h,i,t){t.r(i);var c=t(667294),_=t(879587),r=t(785893),s=function(){return(0,r.jsx)(_.Z,{title:"prompt text",children:(0,r.jsx)("span",{children:"Tooltip will show on mouse enter."})})};i.default=s},990405:function(h,i,t){t.r(i);var c=t(667294),_=t(315816),r=t(945016),s=t(879587),e=t(941346),n=t(785893),d=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"],l=["#f50","#2db7f5","#87d068","#108ee9"],o=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(_.Z,{orientation:"left",children:"Presets"}),(0,n.jsx)(r.Z,{wrap:!0,children:d.map(function(a){return(0,n.jsx)(s.Z,{title:"prompt text",color:a,children:(0,n.jsx)(e.ZP,{children:a})},a)})}),(0,n.jsx)(_.Z,{orientation:"left",children:"Custom"}),(0,n.jsx)(r.Z,{wrap:!0,children:l.map(function(a){return(0,n.jsx)(s.Z,{title:"prompt text",color:a,children:(0,n.jsx)(e.ZP,{children:a})},a)})})]})};i.default=o},333810:function(h,i,t){t.r(i);var c=t(667294),_=t(879587),r=t(941346),s=t(785893),e=function(){return(0,s.jsx)(_.Z,{open:!0,title:"Thanks for using antd. Have a nice day!",arrow:{pointAtCenter:!0},placement:"topLeft",children:(0,s.jsx)(r.ZP,{children:"Point at center"})})};i.default=e},809995:function(h,i,t){t.r(i);var c=t(667294),_=t(879587),r=t(785893),s=function(){return(0,r.jsx)(_.Z,{destroyTooltipOnHide:!0,title:"prompt text",children:(0,r.jsx)("span",{children:"Tooltip will destroy when hidden."})})};i.default=s},193451:function(h,i,t){t.r(i);var c=t(97857),_=t.n(c),r=t(667294),s=t(879587),e=t(945016),n=t(941346),d=t(534826),l=t(877266),o=t(7575),E=t(469181),a=t(785893),P=function(x){return(0,a.jsx)(s.Z,_()({title:"Thanks for using antd. Have a nice day!"},x))},j=function(){return(0,a.jsxs)(e.Z,{children:[(0,a.jsx)(P,{children:(0,a.jsx)(n.ZP,{disabled:!0,children:"Disabled"})}),(0,a.jsx)(P,{children:(0,a.jsx)(d.Z,{disabled:!0,placeholder:"disabled"})}),(0,a.jsx)(P,{children:(0,a.jsx)(l.Z,{disabled:!0})}),(0,a.jsx)(P,{children:(0,a.jsx)(o.Z,{disabled:!0})}),(0,a.jsx)(P,{children:(0,a.jsx)(E.Z,{disabled:!0})})]})};i.default=j},415505:function(h,i,t){t.r(i);var c=t(805574),_=t.n(c),r=t(667294),s=t(945016),e=t(941346),n=t(879587),d=t(785893),l=function(){var E=(0,r.useState)(!0),a=_()(E,2),P=a[0],j=a[1];return(0,d.jsxs)(s.Z,{children:[(0,d.jsx)(e.ZP,{onClick:function(){return j(!P)},children:P?"Enable":"Disable"}),(0,d.jsx)(n.Z,{title:P?"":"prompt text",children:(0,d.jsx)("span",{children:"Tooltip will show on mouse enter."})})]})};i.default=l},581222:function(h,i,t){t.r(i);var c=t(667294),_=t(75529),r=t(879587),s=t(941346),e=t(785893),n=(0,e.jsx)("span",{children:"prompt text"}),d=80,l=function(){return(0,e.jsx)(_.ZP,{button:{style:{width:d,margin:4}},children:(0,e.jsxs)("div",{className:"demo",children:[(0,e.jsxs)("div",{style:{marginInlineStart:d,whiteSpace:"nowrap"},children:[(0,e.jsx)(r.Z,{placement:"topLeft",title:n,children:(0,e.jsx)(s.ZP,{children:"TL"})}),(0,e.jsx)(r.Z,{placement:"top",title:n,children:(0,e.jsx)(s.ZP,{children:"Top"})}),(0,e.jsx)(r.Z,{placement:"topRight",title:n,children:(0,e.jsx)(s.ZP,{children:"TR"})})]}),(0,e.jsxs)("div",{style:{width:d,float:"inline-start"},children:[(0,e.jsx)(r.Z,{placement:"leftTop",title:n,children:(0,e.jsx)(s.ZP,{children:"LT"})}),(0,e.jsx)(r.Z,{placement:"left",title:n,children:(0,e.jsx)(s.ZP,{children:"Left"})}),(0,e.jsx)(r.Z,{placement:"leftBottom",title:n,children:(0,e.jsx)(s.ZP,{children:"LB"})})]}),(0,e.jsxs)("div",{style:{width:d,marginInlineStart:d*4+24},children:[(0,e.jsx)(r.Z,{placement:"rightTop",title:n,children:(0,e.jsx)(s.ZP,{children:"RT"})}),(0,e.jsx)(r.Z,{placement:"right",title:n,children:(0,e.jsx)(s.ZP,{children:"Right"})}),(0,e.jsx)(r.Z,{placement:"rightBottom",title:n,children:(0,e.jsx)(s.ZP,{children:"RB"})})]}),(0,e.jsxs)("div",{style:{marginInlineStart:d,clear:"both",whiteSpace:"nowrap"},children:[(0,e.jsx)(r.Z,{placement:"bottomLeft",title:n,children:(0,e.jsx)(s.ZP,{children:"BL"})}),(0,e.jsx)(r.Z,{placement:"bottom",title:n,children:(0,e.jsx)(s.ZP,{children:"Bottom"})}),(0,e.jsx)(r.Z,{placement:"bottomRight",title:n,children:(0,e.jsx)(s.ZP,{children:"BR"})})]})]})})};i.default=l},590229:function(h,i,t){t.r(i);var c=t(667294),_=t(879587),r=t(785893),s=_.Z._InternalPanelDoNotUseOrYouWillBeFired,e=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{title:"Hello, Pink Pure Panel!",color:"pink"}),(0,r.jsx)(s,{title:"Hello, Customize Color Pure Panel!",color:"#f50"}),(0,r.jsx)(s,{title:"Hello, Pure Panel!",placement:"bottomLeft",style:{width:200}})]})};i.default=e},511308:function(h,i,t){t.r(i);var c=t(667294),_=t(879587),r=t(941346),s=t(785893),e=function(){return c.useEffect(function(){document.documentElement.scrollTop=document.documentElement.clientHeight,document.documentElement.scrollLeft=document.documentElement.clientWidth},[]),(0,s.jsx)("div",{children:(0,s.jsx)("div",{style:{width:"300vw",height:"300vh",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,s.jsx)(_.Z,{title:"Thanks for using antd. Have a nice day!",trigger:"click",open:!0,children:(0,s.jsx)(r.ZP,{children:"Scroll The Window"})})})})};i.default=e}}]);
