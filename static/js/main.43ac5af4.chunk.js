(this.webpackJsonpcrowdfunding=this.webpackJsonpcrowdfunding||[]).push([[0],[,,,,function(e,a,t){e.exports=t.p+"static/media/logo.213a6fb9.svg"},function(e,a,t){e.exports=t.p+"static/media/hero-desktop.7f6e2a17.jpg"},function(e,a,t){e.exports=t.p+"static/media/icon-hamburger.f8b2673b.svg"},function(e,a,t){e.exports=t.p+"static/media/icon-close-menu.7b0ab1a3.svg"},function(e,a,t){e.exports=t.p+"static/media/icon-bookmark.5b077727.svg"},function(e,a,t){e.exports=t.p+"static/media/logo-mastercraft.17fbdfc2.svg"},function(e,a,t){e.exports=t.p+"static/media/close-modal.a942b4d8.svg"},function(e,a,t){e.exports=t.p+"static/media/icon-check.b2fbba35.svg"},function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(3),c=t.n(r),o=(t(17),t(1)),s=t(4),m=t.n(s),i=t(5),d=t.n(i),u=t(6),p=t.n(u),E=t(7),b=t.n(E),g=function(){var e=l.a.useContext(j),a=e.navModal,t=e.setNavModal,n=e.isModalOpen,r=e.setIsModalOpen;return l.a.createElement("header",{className:"header"},l.a.createElement("img",{src:d.a,alt:"hero",className:"hero-img"}),l.a.createElement("nav",{className:"nav"},l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:m.a,alt:"logo"})),l.a.createElement("ul",{className:"nav-links"},l.a.createElement("li",null,"About"),l.a.createElement("li",null,"Discover"),l.a.createElement("li",null,"Get Started")),l.a.createElement("button",{className:"btn-hamburger",onClick:function(){r(!0),t(!a),n&&r(!1)}},!1===a&&l.a.createElement("img",{src:p.a,alt:"hamburger menu"}),a&&l.a.createElement("img",{src:b.a,alt:"close menu"}))))},f=t(8),h=t.n(f),v=t(9),k=t.n(v),N=function(e){var a=e.name,t=e.id,n=e.pledge,r=e.info,c=e.left,o=l.a.useContext(j),s=o.setIsModalOpen,m=o.setSelected;return l.a.createElement("article",{className:0===c?"card sold-out":"card"},l.a.createElement("div",{className:"card-heading"},l.a.createElement("h4",null,a),l.a.createElement("span",{className:"pledge"},"Pledge ",n,"$ or more")),l.a.createElement("p",null,r),l.a.createElement("div",{className:"card-select"},l.a.createElement("div",{className:"card-left-count"},l.a.createElement("h3",null,c),l.a.createElement("span",null,"left")),l.a.createElement("button",{disabled:!c,onClick:function(){return function(e){s(!0),m(e)}(t)},className:0===c?"btn btn-sold-out":"btn btn-primary"},0===c?"Out of stock":"Select Reward")))},y=[{name:"Bamboo Stand",id:1,pledge:25,left:101,info:"You get an ergonomic stand made of natural bamboo. You\u2019ve helped us launch our promotional campaign, and you\u2019ll be added to a special Backer member list."},{name:"Black Edition Stand",id:2,pledge:75,left:64,info:"You get a Black Special Edition computer stand and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included."},{name:"Mahogany Special Edition",id:3,pledge:200,left:0,info:"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included."}],M=function(){var e=l.a.useContext(j),a=e.setIsModalOpen,t=e.setSelected,n=l.a.useState(!1),r=Object(o.a)(n,2),c=r[0],s=r[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"card-container"},l.a.createElement("img",{src:k.a,alt:"mastercraft",className:"mastercraft"}),l.a.createElement("div",{className:"card-container-heading"},l.a.createElement("h1",null,"Mastercraft Bamboo Monitor Riser"),l.a.createElement("p",null,"A beautiful & handcrafted monitor stand to reduce neck and eye strain.")),l.a.createElement("div",{className:"card-btns"},l.a.createElement("button",{className:"btn btn-primary",onClick:function(){a(!0),t(null)}},"Back this project"),l.a.createElement("button",{className:c?"btn btn-bookmark bookmarked":"btn btn-bookmark",onClick:function(){return s(!0)}},l.a.createElement("img",{src:h.a,alt:"bookmark"}),l.a.createElement("span",null,c?"Bookmarked":"Bookmark")))),l.a.createElement("section",{className:"card-container"},l.a.createElement("div",{className:"progress-container"},l.a.createElement("div",{className:"progress"},l.a.createElement("h2",null,"$89,914"),l.a.createElement("p",{className:"progress-info"},"of $100,000 backed")),l.a.createElement("div",{className:"progress"},l.a.createElement("h2",null,"5,007"),l.a.createElement("p",{className:"progress-info"},"total backers")),l.a.createElement("div",{className:"progress"},l.a.createElement("h2",null,"56"),l.a.createElement("p",{className:"progress-info"},"days left"))),l.a.createElement("div",{className:"progress-meter"})),l.a.createElement("section",{className:"card-container about-section"},l.a.createElement("h4",null,"About this project"),l.a.createElement("p",{className:"about"},"The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand."),l.a.createElement("p",null,"Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand."),y.map((function(e){return l.a.createElement(N,Object.assign({},e,{key:e.id}))}))))},S=t(10),C=t.n(S),w=t(11),O=t.n(w),x=(t(18),function(e){var a=e.id,t=e.name,n=e.pledge,r=e.info,c=e.left,s=l.a.useContext(j),m=s.selected,i=s.setSelected,d=s.setThanksModal,u=l.a.useState(n),p=Object(o.a)(u,2),E=p[0],b=p[1],g="card card-modal-item",f="modal-card-heading";return a===m&&(g="card card-modal-item selected-card",f="modal-card-heading border-bottom"),0===c&&(g="card card-modal-item sold-out",f="modal-card-heading modal-card-disabled"),l.a.createElement("article",{className:g},l.a.createElement("div",{className:f,onClick:function(){return i(a)}},l.a.createElement("div",{className:"card-heading"},l.a.createElement("h4",null,t),l.a.createElement("span",{className:"pledge"},"Pledge ",n,"$ or more"),l.a.createElement("div",{className:"card-left-count"},l.a.createElement("h3",null,c),l.a.createElement("span",null,"left"))),l.a.createElement("p",null,r)),a===m?l.a.createElement("div",{className:"card-enter-pledge"},l.a.createElement("p",null,"Enter your pledge"),l.a.createElement("div",{className:"card-enter-btns"},l.a.createElement("div",{className:"card-enter-input"},l.a.createElement("input",{type:"number",className:"btn",min:n,value:E,onChange:function(e){return b(e.target.value)}}),l.a.createElement("span",null,"$")),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){return d(!0)}},"Continue"))):null)}),B=function(){var e=l.a.useContext(j),a=e.setIsModalOpen,t=e.thanksModal,n=e.setThanksModal,r=e.selected,c=e.setSelected,s=e.navModal,m=l.a.useState(1),i=Object(o.a)(m,2),d=i[0],u=i[1];return s?l.a.createElement("section",{className:"modal nav-modal"},l.a.createElement("div",{className:"card-container nav-card"},l.a.createElement("ul",{className:"modal__nav-links"},l.a.createElement("li",null,"About"),l.a.createElement("li",null,"Discover"),l.a.createElement("li",null,"Get Started")))):t?l.a.createElement("section",{className:"modal"},l.a.createElement("div",{className:"card-container modal__thanks"},l.a.createElement("img",{src:O.a,alt:"check"}),l.a.createElement("h2",{className:"modal__heading"},"Thanks for your support"),l.a.createElement("p",{className:"modal__subtext"},"Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed."),l.a.createElement("button",{className:"btn btn-thanks",onClick:function(){a(!1),n(!1)}},"Got it!"))):l.a.createElement("section",{className:"modal"},l.a.createElement("div",{className:"card-container modal-container"},l.a.createElement("button",{className:"close-modal",onClick:function(){return a(!1)}},l.a.createElement("img",{src:C.a,alt:"close"})),l.a.createElement("h2",null,"Back this project"),l.a.createElement("p",null,"Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?"),l.a.createElement("article",{className:0===r?"card card-modal selected-card":"card card-modal",onClick:function(){return c(0)}},l.a.createElement("div",{className:0===r?"card-heading border-bottom":"card-heading"},l.a.createElement("h4",null,"Pledge with no reward"),l.a.createElement("p",null,"Choose to support us without a reward if you simply believe in our project.As a backer, you will be signed up to receive product updates via email.")),0===r?l.a.createElement("div",{className:"card-enter-pledge"},l.a.createElement("p",null,"Enter your pledge"),l.a.createElement("div",{className:"card-enter-btns"},l.a.createElement("div",{className:"card-enter-input"},l.a.createElement("input",{type:"number",className:"btn",min:1,value:d,onChange:function(e){return u(e.target.value)}}),l.a.createElement("span",null,"$")),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){return n(!0)}},"Continue"))):null),y.map((function(e){return l.a.createElement(x,Object.assign({},e,{key:e.id}))}))))},j=l.a.createContext();var Y=function(){var e=l.a.useState(!1),a=Object(o.a)(e,2),t=a[0],n=a[1],r=l.a.useState(null),c=Object(o.a)(r,2),s=c[0],m=c[1],i=l.a.useState(!1),d=Object(o.a)(i,2),u=d[0],p=d[1],E=l.a.useState(!1),b=Object(o.a)(E,2),f=b[0],h=b[1];return l.a.createElement(j.Provider,{value:{isModalOpen:t,setIsModalOpen:n,selected:s,setSelected:m,thanksModal:u,setThanksModal:p,navModal:f,setNavModal:h}},l.a.createElement(g,null),l.a.createElement(M,{isModalOpen:t}),t?l.a.createElement(B,null):null)};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Y,null)),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.43ac5af4.chunk.js.map