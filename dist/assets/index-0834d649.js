import{m as f,f as x,s as u,w as C,r as m,n as v,b as y,j as t,_ as b,d as c,e as j,B as H,T as l,$ as w,A as R}from"./index-ec248eab.js";import{G as d}from"./Grid-5ba7b803.js";import{C as N,a as M}from"./CardContent-51441d48.js";function S(s){return x("MuiCardActionArea",s)}const V=f("MuiCardActionArea",["root","focusVisible","focusHighlight"]),a=V,$=["children","className","focusVisibleClassName"],B=s=>{const{classes:o}=s;return j({root:["root"],focusHighlight:["focusHighlight"]},S,o)},U=u(C,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(s,o)=>o.root})(({theme:s})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${a.focusHighlight}`]:{opacity:(s.vars||s).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${a.focusVisible} .${a.focusHighlight}`]:{opacity:(s.vars||s).palette.action.focusOpacity}})),_=u("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(s,o)=>o.focusHighlight})(({theme:s})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:s.transitions.create("opacity",{duration:s.transitions.duration.short})})),k=m.forwardRef(function(o,n){const r=v({props:o,name:"MuiCardActionArea"}),{children:h,className:p,focusVisibleClassName:g}=r,A=y(r,$),e=r,i=B(e);return t.jsxs(U,b({className:c(i.root,p),focusVisibleClassName:c(g,i.focusVisible),ref:n,ownerState:e},A,{children:[h,t.jsx(_,{className:i.focusHighlight,ownerState:e})]}))}),E=k,F=()=>t.jsxs(H,{component:"div",sx:{padding:"3rem",flexGrow:1},children:[t.jsx(l,{variant:"h4",align:"center",mb:4,children:"MY SKILLS"}),t.jsx("div",{children:t.jsx(d,{container:!0,justify:"center",spacing:2,children:w.map(s=>t.jsx(d,{item:!0,xs:12,sm:4,md:3,lg:2,children:t.jsx(N,{variant:"outlined",sx:{backgroundColor:"#01041b"},children:t.jsx(E,{children:t.jsx(M,{sx:{opacity:.75,"&:hover":{opacity:1}},children:t.jsx(l,{variant:"h5",gutterBottom:!0,children:t.jsxs("span",{children:[t.jsx(R,{src:s.logo}),s.title]})})})})})},s.title))})})]});export{F as default};