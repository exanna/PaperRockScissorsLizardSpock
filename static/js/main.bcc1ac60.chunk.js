(this.webpackJsonpprsls=this.webpackJsonpprsls||[]).push([[0],{36:function(e,s,c){"use strict";c.r(s);var n,t,r,i,a,o,j,p,l,x,b,d,O,h=c(0),u=c.n(h),f=c(20),k=c.n(f),z=c(4),m=c(21),g=c(2),S=c(14),y=c(1),v=g.c.nav(n||(n=Object(z.a)(["\n   box-sizing: border-box;\n   background-color: #29323C;\n   padding: 30px 50px;\n   // width: 100%;\n   font-family: 'Roboto', sans-serif;\n\n   ul {\n      display: flex;\n   }\n\n   li {\n      padding-right: 40px;\n   }\n\n   a {\n      color: white;\n      text-decoration: none;\n      transition: color .3s;\n   }\n   \n   .is-active {\n      color: #EFCE69;\n   }\n\n   a:hover {\n      color: #2E8DC5;\n   }\n"]))),R=function(){return Object(y.jsx)(v,{children:Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:Object(y.jsx)(S.b,{activeClassName:"is-active",exact:!0,to:"/",children:"Home"})}),Object(y.jsx)("li",{children:Object(y.jsx)(S.b,{activeClassName:"is-active",to:"/rules",children:"Rules"})})]})})},w=g.c.footer(t||(t=Object(z.a)(['\n  box-sizing: border-box;\n  width: 100%;\n  padding: 30px 50px; \n  font-family: "Roboto", sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #ffffff77;\n  font-size: 10px;\n']))),C=g.c.span(r||(r=Object(z.a)(["\n  color: #EFCE69;\n"]))),P=function(){return Object(y.jsx)(w,{children:Object(y.jsxs)("p",{children:["created in ",Object(y.jsx)(C,{children:"React"})," by Paulina Lubasi\u0144ska"]})})},L=c(10),E=g.c.img(i||(i=Object(z.a)(["\n   height: ",";\n   padding: 0 8px;\n"])),(function(e){return e.size})),N=function(e){var s=e.src,c=e.alt,n=e.size;return Object(y.jsx)(E,{src:s,alt:c,size:n})},I=c.p+"static/media/Lizard.524eb1dd.png",M=c.p+"static/media/Spock.0094f885.png",A=c.p+"static/media/Scissors.3285208b.png",D=c.p+"static/media/Paper.2aa5534a.png",F=c.p+"static/media/Rock.866bf6c3.png",U=g.c.main(a||(a=Object(z.a)(['\n  box-sizing: border-box;\n  font-family: "Roboto", sans-serif;\n  color: white;\n  display: flex;\n  flex-direction: column;\n']))),W=g.c.div(o||(o=Object(z.a)(["\n  padding: 40px;\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n  "]))),H=g.c.div(j||(j=Object(z.a)(["\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  p {\n    margin-bottom: 10px;\n  }\n  \n  h1 {\n    margin-bottom: 10px;\n  }\n"]))),J=g.c.button(p||(p=Object(z.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n  border: none;\n  height: 100px;\n  width: 100px;\n  border-radius: 1000px;\n  cursor: pointer;\n  transition: transform .5s;\n\n  &:hover {\n    transform: rotate(90deg);\n    \n  }\n"]))),T=function(){var e=Object(h.useState)(""),s=Object(L.a)(e,2),c=s[0],n=s[1],t=Object(h.useState)(0),r=Object(L.a)(t,2),i=r[0],a=r[1],o=Object(h.useState)(0),j=Object(L.a)(o,2),p=j[0],l=j[1],x=Object(h.useState)(0),b=Object(L.a)(x,2),d=b[0],O=b[1],u=Object(h.useState)(""),f=Object(L.a)(u,2),k=f[0],z=f[1],m=Object(h.useState)(""),g=Object(L.a)(m,2),S=g[0],v=g[1],R=function(e){z(e),w()},w=function(){var e=["rock","paper","scissors","lizard","spock"],s=e[Math.floor(Math.random()*e.length)];v(s)};return Object(h.useEffect)((function(){switch(k+S){case"scissorspaper":case"paperrock":case"rocklizard":case"lizardspock":case"spockscissors":case"scissorslizard":case"lizardpaper":case"paperspock":case"spockrock":case"rockscissors":n("YOU WIN!"),l(p+1);break;case"paperscissors":case"rockpaper":case"lizardrock":case"spocklizard":case"scissorsspock":case"lizardscissors":case"paperlizard":case"spockpaper":case"rockspock":case"scissorsrock":n("COMPUTER WIN!"),a(i+1);break;case"lizardlizard":case"rockrock":case"scissorsscissors":case"paperpaper":case"spockspock":n("IT'S A DRAW"),O(d+1);break;default:console.log("error")}}),[k,S]),Object(y.jsxs)(U,{children:[Object(y.jsxs)(W,{children:[Object(y.jsx)(J,{onClick:function(){return R("rock")},children:Object(y.jsx)(N,{src:F,alt:"Rock",size:"100px"})}),Object(y.jsx)(J,{onClick:function(){return R("paper")},children:Object(y.jsx)(N,{src:D,alt:"Paper",size:"100px"})}),Object(y.jsx)(J,{onClick:function(){return R("scissors")},children:Object(y.jsx)(N,{src:A,alt:"Scissors",size:"100px"})}),Object(y.jsx)(J,{onClick:function(){return R("lizard")},children:Object(y.jsx)(N,{src:I,alt:"Lizard",size:"100px"})}),Object(y.jsx)(J,{onClick:function(){return R("spock")},children:Object(y.jsx)(N,{src:M,alt:"Spock",size:"100px"})})]}),Object(y.jsxs)(H,{children:[Object(y.jsxs)("h1",{children:["User choice: ",k]}),Object(y.jsxs)("h1",{children:["Computer choice: ",S]}),Object(y.jsxs)("h1",{children:["Result: ",c]}),Object(y.jsxs)("p",{children:["Draw: ",d]}),Object(y.jsxs)("p",{children:["PC: ",i]}),Object(y.jsxs)("p",{children:["Human: ",p]})]})]})},B=g.c.main(l||(l=Object(z.a)(['\n   box-sizing: border-box;\n   font-family: "Roboto", sans-serif;\n   color: white;\n   display: flex;\n   flex-direction: column;\n   justify-content: center;\n   align-items: center;\n   cursor: default;\n']))),Y=g.c.p(x||(x=Object(z.a)(["\nfont-size: 24  px;\n   padding-bottom: 10px;\n   letter-spacing: 1px;\n   display: flex;\n   justify-content: center;\n   align-items: center;\n"]))),q=function(){return Object(y.jsxs)(B,{children:[Object(y.jsxs)(Y,{children:["1. ",Object(y.jsx)(N,{src:A,alt:"Scissors",size:"50px"}),"Scissors cuts Paper",Object(y.jsx)(N,{src:D,alt:"Paper",size:"50px"})]}),Object(y.jsxs)(Y,{children:["2. ",Object(y.jsx)(N,{src:D,alt:"Paper",size:"50px"}),"Paper covers Rock",Object(y.jsx)(N,{src:F,alt:"Rock",size:"50px"})]}),Object(y.jsxs)(Y,{children:["3. ",Object(y.jsx)(N,{src:F,alt:"Rock",size:"50px"}),"Rock crushes Lizard",Object(y.jsx)(N,{src:I,alt:"Lizard",size:"50px"})]}),Object(y.jsxs)(Y,{children:["4. ",Object(y.jsx)(N,{src:I,alt:"Lizard",size:"50px"}),"Lizard poisons Spock",Object(y.jsx)(N,{src:M,alt:"Spock",size:"50px"})]}),Object(y.jsxs)(Y,{children:["5. ",Object(y.jsx)(N,{src:M,alt:"Spock",size:"50px"}),"Spock smashes Scissors",Object(y.jsx)(N,{src:A,alt:"Scissors",size:"50px"})]}),Object(y.jsxs)(Y,{children:["6. ",Object(y.jsx)(N,{src:A,alt:"Scissors",size:"50px"}),"Scissors decapitates Lizard",Object(y.jsx)(N,{src:I,alt:"Lizard",size:"50px"})]}),Object(y.jsxs)(Y,{children:["7. ",Object(y.jsx)(N,{src:I,alt:"Lizard",size:"50px"}),"Lizard eats Paper",Object(y.jsx)(N,{src:D,alt:"Paper",size:"50px"})]}),Object(y.jsxs)(Y,{children:["8. ",Object(y.jsx)(N,{src:D,alt:"Paper",size:"50px"}),"Paper disproves Spock",Object(y.jsx)(N,{src:M,alt:"Spock",size:"50px"})]}),Object(y.jsxs)(Y,{children:["9. ",Object(y.jsx)(N,{src:M,alt:"Spock",size:"50px"}),"Spock vaporizes Rock",Object(y.jsx)(N,{src:F,alt:"Rock",size:"50px"})]}),Object(y.jsxs)(Y,{children:["10. ",Object(y.jsx)(N,{src:F,alt:"Rock",size:"50px"}),"Rock crushes Scissors",Object(y.jsx)(N,{src:A,alt:"Scissors",size:"50px"})]})]})},G=c(3),K=Object(g.a)(b||(b=Object(z.a)(["\n  ","\n"])),m.a),Q=g.c.div(d||(d=Object(z.a)(["\n  box-sizing: border-box;\n  background-image: linear-gradient(to right, #29323C, #485563);\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  cursor: default;\n"]))),V=g.c.div(O||(O=Object(z.a)(["\n  box-sizing: border-box;\n  width: 100%;\n  padding: 30px 50px; \n"]))),X=function(){return Object(y.jsxs)(u.a.Fragment,{children:[Object(y.jsx)(K,{}),Object(y.jsx)(Q,{className:"App",children:Object(y.jsxs)(S.a,{basename:"/PaperRockScissorsLizardSpock",children:[Object(y.jsx)(R,{}),Object(y.jsx)(V,{children:Object(y.jsxs)(G.c,{children:[Object(y.jsx)(G.a,{exact:!0,path:"/",component:T}),Object(y.jsx)(G.a,{path:"/rules",component:q})]})}),Object(y.jsx)(P,{})]})})]})};k.a.render(Object(y.jsx)(u.a.StrictMode,{children:Object(y.jsx)(X,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.bcc1ac60.chunk.js.map