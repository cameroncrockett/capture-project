(this["webpackJsonpcapture-project"]=this["webpackJsonpcapture-project"]||[]).push([[0],{37:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n(0),c=n.n(r),a=n(21),s=n.n(a),o=n(3),d=n(4);function l(){var e=Object(o.a)(["\n\n*{\n    margin:0;\n    padding:0;\n    box-sizing:border-box\n}\n\nhtml{\n    @media (max-width: 1700px){\n        font-size: 75%;\n    }\n}\n\nbody{\n    background: #1b1b1b;\n    font-family: 'Inter', sans-serif;\n    overflow-x: hidden;\n}\nbutton{\n    font-weight: bold;\n    font-size: 1.1rem;\n    cursor:pointer;\n    padding: 1rem 2rem;\n    border: 3px solid #23d997;\n    background:transparent;\n    color:white;\n    transition: all 0.5s ease;\n    font-family: 'Inter', sans-serif;\n    &:hover{\n        background-color: #23d997;\n        color:white;\n    }\n}\n    h2{\n        font-weight: lighter;\n        font-size: 4rem;\n    }\n    h3{\n        color:white;\n    }\n    a{\n        font-size: 1.1rem;\n    }\n    h4{\n        font-weight:bold;\n        font-size: 2rem;\n    }\n    span{\n        font-weight:bold;\n        color:#23d997;\n    }\n    p{\n        padding: 3rem 0rem;\n        color: #ccc;\n        font-size: 1.4rem;\n        line-height: 150%;\n    }\n"]);return l=function(){return e},e}var u=Object(d.a)(l()),j=n(7),m=n(2),h=n(5);function b(){var e=Object(o.a)(["\nheight: 0.3rem;\nbackground-color: #23d997;\nwidth: 0%;\nposition: absolute;\nbottom: -80%;\nleft: 60%;\n@media (max-width: 1300px) {\n    left:0%;\n}\n"]);return b=function(){return e},e}function p(){var e=Object(o.a)(['\nmin-height:10vh;\ndisplay: flex;\nmargin:auto;\njustify-content:space-between;\nalign-items:center;\npadding: 1rem 10rem;\nbackground-color:#282828;\nposition: sticky;\ntop: 0;\nz-index:10;\na{\n    color:white;\n    text-decoration:none;\n}\nul{\n    display:flex;\n    list-style:none;\n}\n#logo{\n    font-size:1.5rem;\n    font-family: "Lobster", cursive;\n    font-weight:lighter;\n}\nli{\n    padding-left:10rem;\n    position:relative;\n}\n@media (max-width: 1300px){\n    flex-direction: column;\n    padding: 2rem 1rem;\n    #logo{\n        display: inline-block;\n        margin: 1rem;\n    }\n    ul{\n        padding: 2rem;\n        justify-content:space-around;\n        width: 100%;\n        li {\n        padding: 0rem;\n        }\n    }\n}\n']);return p=function(){return e},e}var x=d.b.nav(p()),O=Object(d.b)(m.c.div)(b()),f=function(){var e=Object(h.g)().pathname;return Object(i.jsxs)(x,{children:[Object(i.jsx)("h1",{children:Object(i.jsx)(j.b,{id:"logo",to:"/capture-project/",children:"Capture"})}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[Object(i.jsx)(j.b,{to:"/capture-project/",children:"1. About Us"}),Object(i.jsx)(O,{transition:{duration:.75},initial:{width:"0%"},animate:{width:"/capture-project/"===e?"50%":"0%"}})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(j.b,{to:"/capture-project/work",children:"2. Our Work"}),Object(i.jsx)(O,{transition:{duration:.75},initial:{width:"0%"},animate:{width:"/capture-project/work"===e?"50%":"0%"}})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(j.b,{to:"/capture-project/contact",children:"3. Contact Us"}),Object(i.jsx)(O,{transition:{duration:.75},initial:{width:"0%"},animate:{width:"/capture-project/contact"===e?"50%":"0%"}})]})]})]})},g=n.p+"static/media/home1.9836de69.png";function v(){var e=Object(o.a)(["\noverflow:hidden;\n"]);return v=function(){return e},e}function w(){var e=Object(o.a)(["\nz-index: 2;\nflex: 1;\noverflow:hidden;\n    img{\n        width:100%;\n        height:80vh;\n        object-fit:cover;\n    }\n"]);return w=function(){return e},e}function y(){var e=Object(o.a)(["\n    flex: 1;\n    padding-right: 5rem;\n    z-index: 2;\n    h2{\n        font-weight: lighter;\n    }\n    @media (max-width: 1300px){\n        padding: 0;\n        button {\n            margin: 2rem 0rem 5rem 0rem;\n        }\n    }\n"]);return y=function(){return e},e}function k(){var e=Object(o.a)(["\n  min-height: 90vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5rem 10rem;\n  color: white;\n  @media (max-width: 1300px){\n      display:block;\n      padding: 2rem 2rem;\n      text-align:center;\n    }\n"]);return k=function(){return e},e}var q=Object(d.b)(m.c.div)(k()),I=d.b.div(y()),C=d.b.div(w()),L=d.b.div(v()),z={hidden:{opacity:0,y:300},show:{opacity:1,y:0,transition:{duration:.5,when:"beforeChildren",staggerChildren:.25}},exit:{opacity:0,transition:{duration:.5}}},A={hidden:{y:200},show:{y:0,transition:{duration:.75,ease:"easeOut"}}},N={hidden:{opacity:0},show:{opacity:1,transition:{ease:"easeOut",duration:.75}}},T={hidden:{scale:1.5,opacity:0},show:{scale:1,opacity:1,transition:{ease:"easeOut",duration:.75}}},M={hidden:{width:"0%"},show:{width:"100%",transition:{duration:1}}},S={hidden:{x:"-130%",skew:"45deg"},show:{x:"100%",skew:"0deg",transition:{ease:"easeOut",duration:1}}},B={hidden:{opacity:1},show:{opacity:1,transition:{staggerChildren:.15,ease:"easeOut"}}},E={hidden:{opacity:0,scale:1.2,transition:{duration:.5}},show:{opacity:1,scale:1,transition:{duration:.5}}};function F(){var e=Object(o.a)(["\n    position: absolute;\n    left: 0;\n    z-index: 1;\n"]);return F=function(){return e},e}var D=d.b.svg(F()),G=function(){return Object(i.jsx)(D,{viewBox:"0 0 1440 363",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)(m.c.path,{initial:{pathLength:0,pathOffset:1},animate:{pathLength:1,pathOffset:0},transition:{duration:1},d:"M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5",stroke:"#D96ED4",strokeOpacity:"0.5",strokeWidth:"10"})})},W=function(){return Object(i.jsxs)(q,{children:[Object(i.jsxs)(I,{children:[Object(i.jsxs)(m.c.div,{children:[Object(i.jsx)(L,{children:Object(i.jsx)(m.c.h2,{variants:A,children:"We work to make"})}),Object(i.jsx)(L,{children:Object(i.jsxs)(m.c.h2,{variants:A,children:["your ",Object(i.jsx)("span",{children:"dreams"})," come"]})}),Object(i.jsx)(L,{children:Object(i.jsx)(m.c.h2,{variants:A,children:"true."})})]}),Object(i.jsx)(m.c.p,{variants:N,children:"Contact us for any photography or videography ideas that you have. We have professionals with amazing skills."}),Object(i.jsx)(m.c.button,{variants:N,children:"Contact Us"})]}),Object(i.jsx)(C,{children:Object(i.jsx)(m.c.img,{variants:T,src:g,alt:"Man with a camera"})}),Object(i.jsx)(G,{})]})},U=n(8),P=n.p+"static/media/clock.4b7cde7e.svg",R=n.p+"static/media/diaphragm.db801491.svg",H=n.p+"static/media/money.72da7c48.svg",J=n.p+"static/media/teamwork.aa71db2e.svg",Q=n.p+"static/media/home2.a65a4256.png",Y=n(25),K=function(){var e=Object(m.d)(),t=Object(Y.a)({threshold:.3}),n=Object(U.a)(t,2),i=n[0];return n[1]?e.start("show"):e.start("hidden"),[i,e]};function V(){var e=Object(o.a)(["\nflex-basis:20rem;\n.icon {\n    display:flex;\n    align-items:center;\n    h3{\n        margin-left: 1rem;\n        background: white;\n        color:black;\n        padding: 1rem;\n    }\n}"]);return V=function(){return e},e}function X(){var e=Object(o.a)(["\ndisplay:flex;\nflex-wrap: wrap;\n@media (max-width: 1300px){\n    justify-content:center;\n}\n"]);return X=function(){return e},e}function Z(){var e=Object(o.a)(["\nh2 {\n    padding-bottom: 5rem;\n}\np{\n    width: 70%;\n    padding: 2rem 0rem 4rem 0rem;\n}\n"]);return Z=function(){return e},e}var $=Object(d.b)(q)(Z()),_=d.b.div(X()),ee=d.b.div(V()),te=function(){var e=K(),t=Object(U.a)(e,2),n=t[0],r=t[1];return Object(i.jsxs)($,{variants:E,animate:r,initial:"hidden",ref:n,children:[Object(i.jsxs)(I,{children:[Object(i.jsxs)("h2",{children:["High ",Object(i.jsx)("span",{children:"quality"})," services."]}),Object(i.jsxs)(_,{children:[Object(i.jsxs)(ee,{children:[Object(i.jsxs)("div",{className:"icon",children:[Object(i.jsx)("img",{src:P,alt:"icon"}),Object(i.jsx)("h3",{children:"Efficient"})]}),Object(i.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima assumenda reiciendis ducimus qui eos facilis soluta cupiditate. Consequatur dolor provident, voluptatem ad nihil, est reiciendis totam eveniet maiores tempore omnis."})]}),Object(i.jsxs)(ee,{children:[Object(i.jsxs)("div",{className:"icon",children:[Object(i.jsx)("img",{src:J,alt:"icon"}),Object(i.jsx)("h3",{children:"Teamwork"})]}),Object(i.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima assumenda reiciendis ducimus qui eos facilis soluta cupiditate. Consequatur dolor provident, voluptatem ad nihil, est reiciendis totam eveniet maiores tempore omnis."})]}),Object(i.jsxs)(ee,{children:[Object(i.jsxs)("div",{className:"icon",children:[Object(i.jsx)("img",{src:R,alt:"icon"}),Object(i.jsx)("h3",{children:"Diaphragm"})]}),Object(i.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima assumenda reiciendis ducimus qui eos facilis soluta cupiditate. Consequatur dolor provident, voluptatem ad nihil, est reiciendis totam eveniet maiores tempore omnis."})]}),Object(i.jsxs)(ee,{children:[Object(i.jsxs)("div",{className:"icon",children:[Object(i.jsx)("img",{src:H,alt:"icon"}),Object(i.jsx)("h3",{children:"Affordable"})]}),Object(i.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima assumenda reiciendis ducimus qui eos facilis soluta cupiditate. Consequatur dolor provident, voluptatem ad nihil, est reiciendis totam eveniet maiores tempore omnis."})]})]})]}),Object(i.jsx)(C,{children:Object(i.jsx)("img",{src:Q,alt:"camera"})})]})},ne=function(e){var t=e.children,n=e.title,c=Object(r.useState)(!1),a=Object(U.a)(c,2),s=a[0],o=a[1];return Object(i.jsxs)(m.c.div,{layout:!0,className:"question",onClick:function(){return o(!s)},children:[Object(i.jsx)(m.c.h4,{layout:!0,children:n}),s?t:"",Object(i.jsx)("div",{className:"faq-line"})]})};function ie(){var e=Object(o.a)(["\ndisplay:block;\nspan{\n    display:block;\n}\nh2{\n    padding-bottom:2rem;\n    font-weight:lighter;\n}\n.faq-line{\n    background:#cccccc;\n    height:0.2rem;\n    margin: 2rem 0rem;\n    width: 100%;\n}\n.question{\n    padding:3rem 0rem;\n    cursor:pointer;\n}\n.answer{\n    padding:2rem 0rem;\n}\np{\n    padding:1rem 0rem;\n}\n"]);return ie=function(){return e},e}var re=Object(d.b)(q)(ie()),ce=function(){var e=K(),t=Object(U.a)(e,2),n=t[0],r=t[1];return Object(i.jsxs)(re,{variants:E,ref:n,animate:r,initial:"hidden",children:[Object(i.jsxs)("h2",{children:["Any Questions ",Object(i.jsx)("span",{children:"FAQ"})]}),Object(i.jsxs)(m.b,{children:[Object(i.jsx)(ne,{title:"How Do I Start?",children:Object(i.jsx)("div",{className:"answer",children:Object(i.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos mollitia, molestiae error rem voluptatum quo praesentium quidem voluptates voluptatibus non beatae iste. Aut quis, dolor dolores labore perspiciatis expedita!"})})}),Object(i.jsx)(ne,{title:"Daily Schedule",children:Object(i.jsx)("div",{className:"answer",children:Object(i.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos mollitia, molestiae error rem voluptatum quo praesentium quidem voluptates voluptatibus non beatae iste. Aut quis, dolor dolores labore perspiciatis expedita!"})})}),Object(i.jsx)(ne,{title:"Payment Methods",children:Object(i.jsx)("div",{className:"answer",children:Object(i.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos mollitia, molestiae error rem voluptatum quo praesentium quidem voluptates voluptatibus non beatae iste. Aut quis, dolor dolores labore perspiciatis expedita!"})})}),Object(i.jsx)(ne,{title:"What products do you offer?",children:Object(i.jsx)("div",{className:"answer",children:Object(i.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos mollitia, molestiae error rem voluptatum quo praesentium quidem voluptates voluptatibus non beatae iste. Aut quis, dolor dolores labore perspiciatis expedita!"})})})]})]})},ae=function(){var e=Object(h.g)().pathname;return Object(r.useEffect)((function(){window.scroll({top:0,left:0})}),[e]),null},se=function(){return Object(i.jsxs)(m.c.div,{variants:z,initial:"hidden",animate:"show",exit:"exit",children:[Object(i.jsx)(W,{exit:"exit"}),Object(i.jsx)(te,{exit:"exit"}),Object(i.jsx)(ce,{exit:"exit"}),Object(i.jsx)(ae,{})]})};function oe(){var e=Object(o.a)(["\ndisplay: flex;\nalign-items: center;\nh2 {\n    margin: 2rem;\n}\n"]);return oe=function(){return e},e}function de(){var e=Object(o.a)(["\nborder-radius: 50%;\nwidth: 3rem;\nheight: 3rem;\nbackground: #353535;\n"]);return de=function(){return e},e}function le(){var e=Object(o.a)(["\noverflow:hidden;\n"]);return le=function(){return e},e}function ue(){var e=Object(o.a)(["\nmargin-bottom: 4rem;\ncolor:black;\n@media (max-width: 1300px){\n    margin-top: 5rem;\n}\n"]);return ue=function(){return e},e}function je(){var e=Object(o.a)(["\npadding: 5rem 10rem;\ncolor: #353535;\nmin-height: 90vh;\n@media (max-width: 1300px){\n    padding: 2rem;\n    font-size: 1rem;\n}\n"]);return je=function(){return e},e}var me=Object(d.b)(m.c.div)(je()),he=d.b.div(ue()),be=d.b.div(le()),pe=d.b.div(de()),xe=Object(d.b)(m.c.div)(oe()),Oe=function(){return Object(i.jsxs)(me,{variants:z,initial:"hidden",animate:"show",exit:"exit",style:{background:"#fff"},children:[Object(i.jsx)(he,{children:Object(i.jsx)(be,{children:Object(i.jsx)(m.c.h2,{variants:A,children:"Get In Touch"})})}),Object(i.jsxs)("div",{children:[Object(i.jsx)(be,{children:Object(i.jsxs)(xe,{variants:A,children:[Object(i.jsx)(pe,{}),Object(i.jsx)("h2",{children:"Send Us A Message"})]})}),Object(i.jsx)(be,{children:Object(i.jsxs)(xe,{variants:A,children:[Object(i.jsx)(pe,{}),Object(i.jsx)("h2",{children:"Send An Email"})]})}),Object(i.jsx)(be,{children:Object(i.jsxs)(xe,{variants:A,children:[Object(i.jsx)(pe,{}),Object(i.jsx)("h2",{children:"Social Media"})]})})]})]})},fe=n.p+"static/media/athlete-small.9c7a85d4.png",ge=n.p+"static/media/theracer-small.51874213.png",ve=n.p+"static/media/goodtimes-small.94ab060d.png";function we(){var e=Object(o.a)(["\nbackground: #8effa0;\n"]);return we=function(){return e},e}function ye(){var e=Object(o.a)(["\nbackground: #8ed2ff;\n"]);return ye=function(){return e},e}function ke(){var e=Object(o.a)(["\nbackground: #ff8efb;\n"]);return ke=function(){return e},e}function qe(){var e=Object(o.a)(["\n    position: fixed;\n    left: 0;\n    top: 10%;\n    width: 100%;\n    height: 100vh;\n    background: #fffebf;\n    z-index: 2;\n"]);return qe=function(){return e},e}function Ie(){var e=Object(o.a)(["\noverflow: hidden;\n"]);return Ie=function(){return e},e}function Ce(){var e=Object(o.a)(["\npadding-bottom:10rem;\n.line{\n    height:0.5rem;\n    background: #23d997;\n    margin-bottom:3rem;\n}\nimg{\n        width:100%;\n        height:70vh;\n        object-fit:cover;\n    }\n"]);return Ce=function(){return e},e}function Le(){var e=Object(o.a)(["\nmin-height:100vh;\noverflow:hidden;\npadding:5rem 10rem;\n@media (max-width: 1300px){\n    padding: 2rem 2rem;\n}\nh2{\n    padding:1rem 0rem;\n}\n"]);return Le=function(){return e},e}var ze=Object(d.b)(m.c.div)(Le()),Ae=Object(d.b)(m.c.div)(Ce()),Ne=d.b.div(Ie()),Te=Object(d.b)(m.c.div)(qe()),Me=Object(d.b)(Te)(ke()),Se=Object(d.b)(Te)(ye()),Be=Object(d.b)(Te)(we()),Ee=function(){var e=K(),t=Object(U.a)(e,2),n=t[0],r=t[1],c=K(),a=Object(U.a)(c,2),s=a[0],o=a[1];return Object(i.jsxs)(ze,{variants:z,initial:"hidden",animate:"show",exit:"exit",style:{background:"#fff"},children:[Object(i.jsxs)(m.c.div,{variants:B,children:[Object(i.jsx)(Te,{variants:S}),Object(i.jsx)(Me,{variants:S}),Object(i.jsx)(Se,{variants:S}),Object(i.jsx)(Be,{variants:S})]}),Object(i.jsxs)(Ae,{children:[Object(i.jsx)(m.c.h2,{variants:N,children:"The Athlete"}),Object(i.jsx)(m.c.div,{variants:M,className:"line"}),Object(i.jsx)(j.b,{to:"/capture-project/work/the-athlete",children:Object(i.jsx)(Ne,{children:Object(i.jsx)(m.c.img,{variants:T,src:fe,alt:"The Athlete"})})})]}),Object(i.jsxs)(Ae,{ref:n,variants:N,animate:r,initial:"hidden",children:[Object(i.jsx)("h2",{children:"The Racer"}),Object(i.jsx)(m.c.div,{variants:M,className:"line"}),Object(i.jsx)(j.b,{to:"/capture-project/work/the-racer",children:Object(i.jsx)("img",{src:ge,alt:"The Racer"})})]}),Object(i.jsxs)(Ae,{ref:s,variants:N,animate:o,initial:"hidden",children:[Object(i.jsx)("h2",{children:"Good Times"}),Object(i.jsx)(m.c.div,{variants:M,className:"line"}),Object(i.jsx)(j.b,{to:"/capture-project/work/good-times",children:Object(i.jsx)("img",{src:ve,alt:"Good Times"})})]}),Object(i.jsx)(ae,{})]})},Fe=n.p+"static/media/athlete2.b216a5ad.png",De=n.p+"static/media/good-times2.4ea1be17.jpg",Ge=n.p+"static/media/the-racer2.580f15cd.jpg",We=function(){return[{title:"The Athlete",mainImg:fe,secondaryImg:Fe,url:"/capture-project/work/the-athlete",awards:[{title:"Truly A Masterpiece",description:"\u201cLorem Ipsum is simply dummy text of the printing and typesetting industry.\u201d"},{title:"Fresh look on a brutal sport",description:"\u201cLorem Ipsum is simply dummy text of the printing and typesetting industry.\u201d"},{title:"Best movie of the season",description:"\u201cLorem Ipsum is simply dummy text of the printing and typesetting industry.\u201d"}]},{title:"Good Times",mainImg:ve,url:"/capture-project/work/good-times",secondaryImg:De,awards:[{title:"Good Times is a great movie!",description:"\u201cLorem Ipsum is simply dummy text of the printing and typesetting industry.\u201d"},{title:"Best romance movie this summer",description:"\u201cLorem Ipsum is simply dummy text of the printing and typesetting industry.\u201d"},{title:"Bring your tissues",description:"\u201cLorem Ipsum is simply dummy text of the printing and typesetting industry.\u201d"}]},{title:"The Racer",mainImg:ge,url:"/capture-project/work/the-racer",secondaryImg:Ge,awards:[{title:"You won't wanna miss this one",description:"\u201cLorem Ipsum is simply dummy text of the printing and typesetting industry.\u201d"},{title:"On the edge of your seat!",description:"\u201cLorem Ipsum is simply dummy text of the printing and typesetting industry.\u201d"},{title:"Best action movie this year",description:"\u201cLorem Ipsum is simply dummy text of the printing and typesetting industry.\u201d"}]}]};function Ue(){var e=Object(o.a)(["\nmin-height:50vh;\nimg{\n    width:100%;\n    height:100vh;\n    object-fit:cover;\n}\n"]);return Ue=function(){return e},e}function Pe(){var e=Object(o.a)(["\npadding:5rem;\nh3{\n    font-size:2rem;\n}\n.line{\n    width:100%;\n    background:#23d997;\n    height:0.5rem;\n    margin: 1rem 0rem;\n}\np{\n    padding:2rem 0rem;\n}\n"]);return Pe=function(){return e},e}function Re(){var e=Object(o.a)(["\nmin-height:80vh;\ndisplay:flex;\nmargin: 5rem 10rem;\nalign-items:center;\njustify-content:space-around;\n@media (max-width: 1300px){\n    display: block;\n    margin: 2rem 2rem;\n}\n"]);return Re=function(){return e},e}function He(){var e=Object(o.a)(["\nmin-height:90vh;\npadding-top:20vh;\nposition:relative;\nh2{\n    position:absolute;\n    top:10%;\n    left:45%;\n    transform: translate(-50%)(-10%);\n}\nimg{\n    width:100%;\n    height:70vh;\n    object-fit:cover;\n}\n"]);return He=function(){return e},e}function Je(){var e=Object(o.a)(["\ncolor:white;\n"]);return Je=function(){return e},e}var Qe=Object(d.b)(m.c.div)(Je()),Ye=d.b.div(He()),Ke=d.b.div(Re()),Ve=d.b.div(Pe()),Xe=d.b.div(Ue()),Ze=function(e){var t=e.title,n=e.description;return Object(i.jsxs)(Ve,{children:[Object(i.jsx)("h3",{children:t}),Object(i.jsx)("div",{className:"line"}),Object(i.jsx)("p",{children:n})]})},$e=function(){var e=Object(h.f)().location.pathname,t=Object(r.useState)(We),n=Object(U.a)(t,2),c=n[0],a=(n[1],Object(r.useState)(null)),s=Object(U.a)(a,2),o=s[0],d=s[1];return Object(r.useEffect)((function(){var t=c.filter((function(t){return t.url===e}));d(t[0])}),[c,e]),Object(i.jsx)(i.Fragment,{children:o&&Object(i.jsxs)(Qe,{variants:z,initial:"hidden",animate:"show",exit:"exit",children:[Object(i.jsxs)(Ye,{children:[Object(i.jsx)("h2",{children:o.title}),Object(i.jsx)("img",{src:o.mainImg,alt:"movie"})]}),Object(i.jsxs)(Ke,{children:[o.awards.map((function(e){return Object(i.jsx)(Ze,{title:e.title,description:e.description},e.title)})),";"]}),Object(i.jsx)(Xe,{children:Object(i.jsx)("img",{src:o.secondaryImg,alt:"movie"})})]})})};var _e=function(){var e=Object(h.g)();return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(u,{}),Object(i.jsx)(f,{}),Object(i.jsx)(m.a,{exitBeforeEnter:!0,children:Object(i.jsxs)(h.c,{location:e,children:[Object(i.jsx)(h.a,{path:"/capture-project/",exact:!0,children:Object(i.jsx)(se,{})}),Object(i.jsx)(h.a,{path:"/capture-project//work",exact:!0,children:Object(i.jsx)(Ee,{})}),Object(i.jsx)(h.a,{path:"/capture-project/work/:id",children:Object(i.jsx)($e,{})}),Object(i.jsx)(h.a,{path:"/capture-project/contact",children:Object(i.jsx)(Oe,{})})]},e.pathname)})]})},et=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),r(e),c(e),a(e)}))};s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(j.a,{children:Object(i.jsx)(_e,{})})}),document.getElementById("root")),et()}},[[37,1,2]]]);
//# sourceMappingURL=main.727ea619.chunk.js.map