(function(){"use strict";var e={5568:function(e,t,r){var a=r(5328),o=r(6760),n=r(8752);const l=(0,o.QD)("i",{"data-feather":"chevron-up"},null,-1);function i(e,t,r,i,s,d){const c=(0,o.E1)("AppHeader"),m=(0,o.E1)("router-view"),u=(0,o.E1)("back-to-top"),p=(0,o.E1)("AppFooter");return(0,o.Wz)(),(0,o.An)("div",{class:(0,n.WN)([e.appTheme,"pt-0.5"])},[(0,o.K2)(c),(0,o.K2)(a.Ox,{name:"fade",mode:"out-in"},{default:(0,o.Ql)((()=>[(0,o.K2)(m,{theme:e.appTheme},null,8,["theme"])])),_:1}),(0,o.K2)(u,{visibleoffset:"500",right:"30px",bottom:"20px",class:"shadow-lg"},{default:(0,o.Ql)((()=>[l])),_:1}),(0,o.K2)(p)],2)}var s=r(9584),d=r.n(s),c=r.p+"img/logo-dark.16f2dbe4.svg",m=r.p+"img/logo-light.fd7e6f79.svg";const u={id:"nav",class:"sm:container sm:mx-auto"},p={class:"z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6"},g={class:"flex justify-between items-center px-4 sm:px-0"},h={key:0,src:c,class:"w-36",alt:"Dark Logo"},f={key:1,src:m,class:"w-36",alt:"Light Logo"},y={class:"sm:hidden"},x={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"},b={key:0,"fill-rule":"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z","clip-rule":"evenodd"},v={key:1,"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"},k={class:"hidden sm:flex justify-between items-center flex-col md:flex-row"},w={class:"hidden md:block"};function j(e,t,r,a,n,l){const i=(0,o.E1)("router-link"),s=(0,o.E1)("theme-switcher"),d=(0,o.E1)("AppHeaderLinks"),c=(0,o.E1)("Button");return(0,o.Wz)(),(0,o.An)("nav",u,[(0,o.QD)("div",p,[(0,o.QD)("div",g,[(0,o.QD)("div",null,[(0,o.K2)(i,{to:"/"},{default:(0,o.Ql)((()=>["light"===n.theme?((0,o.Wz)(),(0,o.An)("img",h)):((0,o.Wz)(),(0,o.An)("img",f))])),_:1})]),(0,o.K2)(s,{theme:n.theme,onThemeChanged:l.updateTheme,class:"block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg"},null,8,["theme","onThemeChanged"]),(0,o.QD)("div",y,[(0,o.QD)("button",{onClick:t[0]||(t[0]=e=>n.isOpen=!n.isOpen),type:"button",class:"focus:outline-none","aria-label":"Hamburger Menu"},[((0,o.Wz)(),(0,o.An)("svg",x,[n.isOpen?((0,o.Wz)(),(0,o.An)("path",b)):(0,o.g1)("",!0),n.isOpen?(0,o.g1)("",!0):((0,o.Wz)(),(0,o.An)("path",v))]))])])]),(0,o.K2)(d,{showModal:l.showModal,isOpen:n.isOpen},null,8,["showModal","isOpen"]),(0,o.QD)("div",k,[(0,o.QD)("div",w,[(0,o.K2)(c,{title:"Hire Me",class:"text-md font-general-medium bg-red-500 hover:bg-red-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300",onClick:t[1]||(t[1]=e=>l.showModal()),"aria-label":"Hire Me Button"})]),(0,o.K2)(s,{theme:n.theme,onThemeChanged:l.updateTheme,class:"ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"},null,8,["theme","onThemeChanged"])])])])}const D={key:0,"data-feather":"moon",class:"text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"},Q={key:1,"data-feather":"sun",class:"text-gray-200 hover:text-gray-50 w-5"};function A(e,t,r,n,l,i){return(0,o.Wz)(),(0,o.An)("a",{href:"#",onClick:t[0]||(t[0]=(0,a.Y7)(((...e)=>i.toggleTheme&&i.toggleTheme(...e)),["prevent"])),"aria-label":"Theme Switcher"},["light"===r.theme?((0,o.Wz)(),(0,o.An)("i",D)):((0,o.Wz)(),(0,o.An)("i",Q))])}var P={props:{theme:{type:String,required:!0}},methods:{toggleTheme(){const e="light"===this.theme?"dark":"light";localStorage.setItem("theme",e),this.$emit("themeChanged",e),this.$router.go()}}},C=r(8152);const E=(0,C.c)(P,[["render",A]]);var S=E;const W={class:"border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark"};function F(e,t,r,a,l,i){const s=(0,o.E1)("router-link");return(0,o.Wz)(),(0,o.An)("div",{class:(0,n.WN)([r.isOpen?"block":"hidden","m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"])},[(0,o.K2)(s,{to:"/",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-red-600 dark:hover:text-red-300 sm:mx-4 mb-2 sm:py-2","aria-label":"Projects"},{default:(0,o.Ql)((()=>[(0,o.mY)("Home")])),_:1}),(0,o.K2)(s,{to:"/projects",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-red-600 dark:hover:text-red-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"Projects"},{default:(0,o.Ql)((()=>[(0,o.mY)("Projects")])),_:1}),(0,o.K2)(s,{to:"/about",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-red-600 dark:hover:text-red-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"About Me"},{default:(0,o.Ql)((()=>[(0,o.mY)("About Me")])),_:1}),(0,o.K2)(s,{to:"/contact",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-red-600 dark:hover:text-red-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"Contact"},{default:(0,o.Ql)((()=>[(0,o.mY)("Contact")])),_:1}),(0,o.QD)("div",W,[(0,o.QD)("button",{class:"font-general-medium sm:hidden block text-left text-md font-medium bg-red-500 hover:bg-red-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-500",onClick:t[0]||(t[0]=e=>r.showModal()),"aria-label":"Hire Me Button"}," Hire Me ")])],2)}var M={props:["showModal","isOpen"]};const T=(0,C.c)(M,[["render",F]]);var _=T,z=r(8436),B={components:{ThemeSwitcher:S,AppHeaderLinks:_,Button:z.c},data(){return{isOpen:!1,theme:"",modal:!1,categories:[{id:1,value:"web",name:"Web Design"},{id:2,value:"mobile",name:"Mobile Application Design"},{id:3,value:"ui-ux",name:"UI/UX Design"},{id:4,value:"branding",name:"Photo"}]}},created(){this.theme=localStorage.getItem("theme")||"light"},mounted(){d().replace(),this.theme=localStorage.getItem("theme")||"light"},methods:{updateTheme(e){this.theme=e},showModal(){this.$router.replace("/contact")}},updated(){d().replace()}};const K=(0,C.c)(B,[["render",j],["__scopeId","data-v-3bb71ccc"]]);var O=K;const I={class:"container mx-auto"},H={class:"pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"},L={class:"flex flex-col justify-center items-center mb-12 sm:mb-20"},V=(0,o.QD)("p",{class:"font-general-semibold text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5"}," Follow me ",-1),N={class:"flex gap-4 sm:gap-8"},Y=["href"],q=["data-feather"];function U(e,t,r,a,n,l){const i=(0,o.E1)("FooterCopyright");return(0,o.Wz)(),(0,o.An)("div",I,[(0,o.QD)("div",H,[(0,o.QD)("div",L,[V,(0,o.QD)("ul",N,[((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(n.socials,(e=>((0,o.Wz)(),(0,o.An)("a",{key:e.id,href:e.url,target:"__blank",class:"text-gray-400 hover:text-red-500 dark:hover:text-red-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500"},[(0,o.QD)("i",{"data-feather":e.icon,class:"w-5 sm:w-8 h-5 sm:h-8"},null,8,q)],8,Y)))),128))])]),(0,o.K2)(i)])])}const G={class:"flex justify-center items-center text-center"},R={class:"font-general-regular text-lg text-ternary-dark dark:text-ternary-light"},$={class:"font-general-medium"},X={target:"__blank",href:"https://github.com/vythaor",class:"font-general-medium text-secondary-dark dark:text-secondary-light hover:underline hover:text-red-600 dark:hover:text-red-300 duration-500"};function J(e,t,r,a,l,i){return(0,o.Wz)(),(0,o.An)("div",G,[(0,o.QD)("div",R,[(0,o.mY)(" © "+(0,n.WA)(e.copyrightDate)+". ",1),(0,o.QD)("span",$,(0,n.WA)(e.projectName),1),(0,o.mY)(" . Developed by "),(0,o.QD)("a",X,(0,n.WA)(e.author),1)])])}var Z={data:()=>({copyrightDate:"2022",projectName:"Sherry's Portfolio",author:"vythaor"})};const ee=(0,C.c)(Z,[["render",J]]);var te=ee,re={components:{FooterCopyright:te},data(){return{socials:[{id:1,name:"Linkedin",icon:"linkedin",url:"https://linkedin.com/in/vythaor"},{id:2,name:"Github",icon:"github",url:"https://github.com/vythaor"},{id:3,name:"Instagram",icon:"instagram",url:"https://www.instagram.com/2amstudio.vn"}]}},mounted(){d().replace()},updated(){d().replace()}};const ae=(0,C.c)(re,[["render",U]]);var oe=ae,ne={components:{AppHeader:O,AppFooter:oe},data:()=>({appTheme:localStorage.getItem("theme")}),mounted(){d().replace()},updated(){d().replace()}};const le=(0,C.c)(ne,[["render",i]]);var ie=le,se=r(5216);const de={class:"container mx-auto"},ce={class:"mt-10 sm:mt-20 flex justify-center"};function me(e,t,r,a,n,l){const i=(0,o.E1)("AppBanner"),s=(0,o.E1)("ProjectsGrid"),d=(0,o.E1)("Button"),c=(0,o.E1)("router-link");return(0,o.Wz)(),(0,o.An)("div",de,[(0,o.K2)(i,{class:"mb-5 sm:mb-8"}),(0,o.K2)(s,{onlyFeature:!0}),(0,o.QD)("div",ce,[(0,o.K2)(c,{to:"/projects",class:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-red-500 hover:bg-red-600 focus:ring-1 focus:ring-red-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects"},{default:(0,o.Ql)((()=>[(0,o.K2)(d,{title:"More Projects"})])),_:1})])])}var ue=r.p+"img/1.0d4634a3.png",pe=r.p+"img/2.8f67ccf6.jpg",ge=r.p+"img/3.55b90ad8.jpg",he=r.p+"img/4.3fda595e.jpeg",fe=r.p+"img/5.9a7fd9dd.png",ye=r.p+"media/6.f7cae9f1.mp4";const xe=e=>((0,o.ED)("data-v-75014b5c"),e=e(),(0,o.ii)(),e),be={class:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"},ve={class:"w-full md:w-1/3 text-left"},ke=xe((()=>(0,o.QD)("h1",{class:"font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"}," Hi, I'm Sherry ",-1))),we=xe((()=>(0,o.QD)("p",{class:"font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400"}," An UX/UI Designer ",-1))),je=xe((()=>(0,o.QD)("a",{class:"flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-red-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-red-50 focus:ring-1 focus:ring-red-900 hover:bg-red-500 text-gray-500 hover:text-white duration-500","aria-label":"Download Resume",target:"_blank"},[(0,o.QD)("i",{"data-feather":"paperclip",class:"ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"}),(0,o.QD)("span",{class:"text-sm sm:text-lg font-general-medium duration-100"},"View CV")],-1))),De=[je],Qe={class:"w-full md:w-2/3 text-right float-right rounded-md"},Ae=xe((()=>(0,o.QD)("div",null,[(0,o.QD)("img",{src:ue,alt:"Developer",class:"rounded-xl"}),(0,o.QD)("div",{class:"pt-4 text-sm dark:text-ternary-light text-ternary-dark"}," It's me, multitasking by doing creative work and listening to music :D Taken with Sony A7iii, ISO 2000, 28mm, f2.8 ")],-1))),Pe=xe((()=>(0,o.QD)("div",null,[(0,o.QD)("img",{src:pe,alt:"Developer",class:"rounded-xl"}),(0,o.QD)("div",{class:"pt-4 text-sm dark:text-ternary-light text-ternary-dark"}," Retouch with Adobe Photoshop Beta ")],-1))),Ce=xe((()=>(0,o.QD)("div",null,[(0,o.QD)("img",{src:ge,alt:"Developer",class:"rounded-xl"}),(0,o.QD)("div",{class:"pt-4 text-sm dark:text-ternary-light text-ternary-dark"}," Film effect with Adobe Lightroom ")],-1))),Ee=xe((()=>(0,o.QD)("div",null,[(0,o.QD)("img",{src:he,alt:"Developer",class:"rounded-xl"}),(0,o.QD)("div",{class:"pt-4 text-sm dark:text-ternary-light text-ternary-dark"},[(0,o.mY)(" Painting effect with "),(0,o.QD)("a",{href:"https://prisma-ai.com/prisma",target:"_blank",class:"underline text-blue-500"},"Prisma")])],-1))),Se=xe((()=>(0,o.QD)("div",null,[(0,o.QD)("img",{src:fe,alt:"Developer",class:"rounded-xl"}),(0,o.QD)("div",{class:"pt-4 text-sm dark:text-ternary-light text-ternary-dark"},[(0,o.mY)(" Amime effect with "),(0,o.QD)("a",{href:"https://www.krnl.ai/",target:"_blank",class:"underline text-blue-500"},"Loopsie")])],-1))),We=xe((()=>(0,o.QD)("div",null,[(0,o.QD)("video",{controls:"",class:"rounded-md shadow-md"},[(0,o.QD)("source",{src:ye,type:"video/mp4"}),(0,o.mY)(" Your browser does not support the video tag ")]),(0,o.QD)("div",{class:"pt-4 text-sm dark:text-ternary-light text-ternary-dark"},[(0,o.mY)(" Photo to Video with "),(0,o.QD)("a",{href:"https://runwayml.com/",target:"_blank",class:"underline text-blue-500"},"Runwayml"),(0,o.mY)(". It looks like I'm getting mad because of the deadline LOL. "),(0,o.QD)("br"),(0,o.QD)("br"),(0,o.QD)("br")])],-1)));function Fe(e,t,r,n,l,i){const s=(0,o.E1)("swiper-slide"),d=(0,o.E1)("swiper"),c=(0,o.E1)("ViewCVModal");return(0,o.Wz)(),(0,o.An)("section",be,[(0,o.QD)("div",ve,[ke,we,(0,o.QD)("div",{class:"flex justify-center sm:block cursor-pointer",onClick:t[0]||(t[0]=e=>i.showModal())},De)]),(0,o.QD)("div",Qe,[(0,o.K2)(d,{loop:!0,pagination:{clickable:!0},autoplay:{delay:4e3,disableOnInteraction:!0},navigation:!0,modules:n.modules},{default:(0,o.Ql)((()=>[(0,o.K2)(s,{class:"dark:bg-primary-dark bg-primary-light"},{default:(0,o.Ql)((()=>[Ae])),_:1}),(0,o.K2)(s,{class:"dark:bg-primary-dark bg-primary-light"},{default:(0,o.Ql)((()=>[Pe])),_:1}),(0,o.K2)(s,{class:"dark:bg-primary-dark bg-primary-light"},{default:(0,o.Ql)((()=>[Ce])),_:1}),(0,o.K2)(s,{class:"dark:bg-primary-dark bg-primary-light"},{default:(0,o.Ql)((()=>[Ee])),_:1}),(0,o.K2)(s,{class:"dark:bg-primary-dark bg-primary-light"},{default:(0,o.Ql)((()=>[Se])),_:1}),(0,o.K2)(s,{class:"dark:bg-primary-dark bg-primary-light"},{default:(0,o.Ql)((()=>[We])),_:1})])),_:1},8,["modules"])]),(0,o.K2)(c,{showModal:i.showModal,modal:e.modal,"aria-modal":"View CV Modal",onKeyup:t[1]||(t[1]=(0,a.jj)((t=>e.$emit("close")),["esc"]))},null,8,["showModal","modal"])])}const Me=e=>((0,o.ED)("data-v-39e0ee6a"),e=e(),(0,o.ii)(),e),Te={class:"font-general-regular fixed inset-0 z-30"},_e={class:"bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"},ze={class:"flex flex-col items-center justify-center h-full w-full"},Be={class:"modal-wrapper flex items-center z-30"},Ke={class:"modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative"},Oe={class:"modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"},Ie=Me((()=>(0,o.QD)("h5",{class:"text-primary-dark dark:text-primary-light text-xl"}," Please enter password to view my CV ",-1))),He=Me((()=>(0,o.QD)("i",{"data-feather":"x"},null,-1))),Le=[He],Ve={class:"modal-body p-5 w-full h-full"},Ne={class:"max-w-xl m-4 text-left",onsubmit:"return false;"},Ye=Me((()=>(0,o.QD)("div",{class:"mt-0"},[(0,o.QD)("input",{class:"w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"key",name:"key",type:"password",required:"true",placeholder:"Password","aria-label":"Password"})],-1))),qe={ref:"error",id:"error",class:"text-red-500 text-sm mt-2"},Ue={class:"mt-6 pb-4 sm:pb-1"};function Ge(e,t,r,n,l,i){const s=(0,o.E1)("Button");return(0,o.Wz)(),(0,o.Az)(a.Ox,{name:"fade"},{default:(0,o.Ql)((()=>[(0,o.wt)((0,o.QD)("div",Te,[(0,o.wt)((0,o.QD)("div",_e,null,512),[[a.Ub,r.modal]]),(0,o.QD)("main",ze,[(0,o.K2)(a.Ox,{name:"fade-up-down"},{default:(0,o.Ql)((()=>[(0,o.wt)((0,o.QD)("div",Be,[(0,o.QD)("div",Ke,[(0,o.QD)("div",Oe,[Ie,(0,o.QD)("button",{class:"px-4 text-primary-dark dark:text-primary-light",onClick:t[0]||(t[0]=e=>r.showModal())},Le)]),(0,o.QD)("div",Ve,[(0,o.QD)("form",Ne,[Ye,(0,o.QD)("span",qe,"Wrong password",512),(0,o.QD)("div",Ue,[(0,o.K2)(s,{title:"Submit",class:"px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-red-500 hover:bg-red-600 rounded-md focus:ring-1 focus:ring-red-900 duration-500","aria-label":"Submit Request",type:"submit",onClick:t[1]||(t[1]=e=>i.openCV())})])])])])],512),[[a.Ub,r.modal]])])),_:1})])],512),[[a.Ub,r.modal]])])),_:1})}var Re={props:["showModal","modal"],components:{Button:z.c},data(){return{}},mounted(){this.$el.querySelector("#error").innerHTML="",d().replace()},updated(){d().replace()},methods:{openCV(){var e=document.getElementById("key").value;"thankyou"==e?(window.open("../vythaor-portfolio/files/UX-UI-Designer-Phan-Hoang-Vy-Thao.pdf"),this.showModal()):(document.getElementById("error").innerHTML="Wrong password",document.querySelector("#error").style.display="block")}}};const $e=(0,C.c)(Re,[["render",Ge],["__scopeId","data-v-39e0ee6a"]]);var Xe=$e,Je=r(4320),Ze=r(4852),et={components:{ViewCVModal:Xe,Swiper:Je.wx,SwiperSlide:Je.Ky},setup(){return{modules:[Ze.Ko,Ze.eM,Ze._2]}},name:"Home",data:()=>({theme:"",modal:!1}),created(){this.theme=localStorage.getItem("theme")||"light"},mounted(){d().replace(),this.theme=localStorage.getItem("theme")||"light"},updated(){d().replace()},methods:{showModal(){this.modal?(document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden"),document.getElementById("key").value="",document.getElementById("error").innerHTML="",this.modal=!1):(document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden"),document.getElementById("key").value="",document.getElementById("error").innerHTML="",this.modal=!0)}}};const tt=(0,C.c)(et,[["render",Fe],["__scopeId","data-v-75014b5c"]]);var rt=tt,at=r(8100),ot={name:"Home",components:{AppBanner:rt,ProjectsGrid:at.c,Button:z.c}};const nt=(0,C.c)(ot,[["render",me]]);var lt=nt,it=r.p+"img/not-found.1f94dc04.svg";const st=(0,o.QD)("div",{class:"flex justify-center"},[(0,o.QD)("img",{src:it,alt:"Developer",class:"w-2/4 mt-10"})],-1),dt=(0,o.QD)("p",{class:"font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light text-center mb-5 mt-10"}," 404 Not found ",-1),ct={class:"flex justify-center mt-20"};function mt(e,t,r,a,n,l){const i=(0,o.E1)("Button"),s=(0,o.E1)("router-link");return(0,o.Wz)(),(0,o.An)(o.ae,null,[st,dt,(0,o.QD)("div",ct,[(0,o.K2)(s,{to:"/",class:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-red-500 hover:bg-red-600 focus:ring-1 focus:ring-red-900 text-white text-lg sm:text-xl duration-300","aria-label":"Home"},{default:(0,o.Ql)((()=>[(0,o.K2)(i,{title:"Back to Home"})])),_:1})])],64)}var ut={name:"Home",components:{Button:z.c}};const pt=(0,C.c)(ut,[["render",mt]]);var gt=pt;const ht=[{path:"/",name:"Home",component:lt,meta:{title:"Sherry - Home"}},{path:"/about",name:"About",component:()=>r.e(152).then(r.bind(r,8948)),meta:{title:"Sherry - About"}},{path:"/projects",name:"Projects",component:()=>r.e(672).then(r.bind(r,9216)),meta:{title:"Sherry - Projects"}},{path:"/projects/:id",name:"project",component:()=>r.e(672).then(r.bind(r,7514)),meta:{title:"Sherry - Single Project"}},{path:"/contact",name:"Contact",component:()=>r.e(672).then(r.bind(r,1648)),meta:{title:"Sherry - Contact"}},{path:"/:catchAll(.*)",name:"NotFound",component:gt}],ft=(0,se.gv)({history:(0,se.Ow)("/vythaor-portfolio/"),routes:ht,scrollBehavior(){document.getElementById("app").scrollIntoView()}});var yt=ft;ft.beforeEach(((e,t,r)=>{const a=e.matched.slice().reverse().find((e=>e.meta&&e.meta.title)),o=e.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags)),n=t.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags));if(a?document.title=a.meta.title:n&&(document.title=n.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((e=>e.parentNode.removeChild(e))),!o)return r();o.meta.metaTags.map((e=>{const t=document.createElement("meta");return Object.keys(e).forEach((r=>{t.setAttribute(r,e[r])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((e=>document.head.appendChild(e))),r()}));var xt=r(2512);const bt=r(9584);bt.replace(),(0,a.W0)(ie).use(yt).use(xt.c).mount("#app");const vt=localStorage.getItem("theme");"dark"===vt&&document.querySelector("body").classList.contains("app-theme")?document.querySelector("body").classList.add("bg-primary-dark"):document.querySelector("body").classList.add("bg-secondary-light")},8100:function(e,t,r){r.d(t,{c:function(){return z}});var a=r(6760),o=r(8752);const n={class:"pt-10 sm:pt-14"},l={class:"text-center"},i={class:"font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"},s={class:"mt-10 sm:mt-10"},d=(0,a.QD)("h3",{class:"font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4"}," Filter projects by category ",-1),c={class:"md:flex md:justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2"},m=(0,a.QD)("div",{class:"pt-4 text-sm dark:text-ternary-light text-ternary-dark"},"There are 10 other projects that I cannot share publicly. Please contact me to discuss them privately.",-1),u={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"};function p(e,t,r,p,g,h){const f=(0,a.E1)("ProjectsFilter"),y=(0,a.E1)("ProjectSingle");return(0,a.Wz)(),(0,a.An)("section",n,[(0,a.QD)("div",l,[(0,a.QD)("p",i,(0,o.WA)(e.projectsHeading),1)]),(0,a.QD)("div",s,[d,(0,a.QD)("div",c,[(0,a.K2)(f,{onFilter:t[0]||(t[0]=t=>e.selectedCategory=t)}),m])]),(0,a.QD)("div",u,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(h.filteredProjects,(e=>((0,a.Wz)(),(0,a.Az)(y,{key:e.id,project:e},null,8,["project"])))),128))])])}var g=r(9584),h=r.n(g);const f=["name","id"],y=(0,a.QD)("option",{value:"",class:"text-sm sm:text-md"},"All Projects",-1),x=["value"];function b(e,t,r,n,l,i){return(0,a.Wz)(),(0,a.An)("select",{onChange:t[0]||(t[0]=t=>e.$emit("filter",t.target.value)),name:r.select,id:r.select,class:"font-general-medium px-8 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"},[y,((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(r.selectOptions,(e=>((0,a.Wz)(),(0,a.An)("option",{key:e,value:e,class:"sm:text-md"},(0,o.WA)(e),9,x)))),128))],40,f)}var v={props:{select:{type:String,default:"projects",required:!1},selectOptions:{type:Array,default:()=>["Business Product","Freelance Project","Personal Project"]}}},k=r(8152);const w=(0,k.c)(v,[["render",b]]);var j=w;const D=["src","alt"],Q={class:"text-center px-4 py-6"},A={class:"font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"},P={class:"font-general-medium text-lg text-ternary-dark dark:text-ternary-light"};function C(e,t,r,n,l,i){const s=(0,a.E1)("router-link");return(0,a.Wz)(),(0,a.Az)(s,{to:{name:"project",params:{id:r.project.id}},class:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark","aria-label":"Single Project"},{default:(0,a.Ql)((()=>[(0,a.QD)("div",null,[(0,a.QD)("img",{src:r.project.img,alt:r.project.title,class:"rounded-t-xl border-none"},null,8,D)]),(0,a.QD)("div",Q,[(0,a.QD)("p",A,(0,o.WA)(r.project.title),1),(0,a.QD)("span",P,(0,o.WA)(r.project.category),1)])])),_:1},8,["to"])}var E={props:["project"]};const S=(0,k.c)(E,[["render",C]]);var W=S;const F=[{id:15,title:"Hoa Tieu Tan Cang Website",category:"Freelance Project",img:r(6812),isFeature:!0},{id:14,title:"AI Chat Application",category:"Freelance Project",img:r(7032),isFeature:!0},{id:13,title:"Mastweet - Social Media Application",category:"Freelance Project",img:r(7536),isFeature:!0},{id:12,title:"Car Control Application",category:"Freelance Project",img:r(4132),isFeature:!0},{id:11,title:"5 Phut Thuoc Bai - Landing Page",category:"Freelance Project",img:r(5812),isFeature:!1},{id:10,title:"Vacuum Robot Control Application",category:"Freelance Project",img:r(5080),isFeature:!0},{id:9,title:"NFT Marketplace Web/App",category:"Freelance Project",img:r(2180),isFeature:!0},{id:8,title:"Luar - Plant Social Club",category:"Personal Project",img:r(3656),isFeature:!1},{id:7,title:"Clean Up - Clean Phone Storage Application",category:"Freelance Project",img:r(7076),isFeature:!1},{id:6,title:"Behap Website",category:"Freelance Project",img:r(9612),isFeature:!1},{id:5,title:"GoxGreen Web/App",category:"Freelance Project",img:r(6252),isFeature:!1},{id:4,title:"Prudential Internal Projects",category:"Business Product",img:r(6796),isFeature:!1},{id:3,title:"Ethereum Web/App",category:"Business Product",img:r(6892),isFeature:!1},{id:2,title:"T-shirt",category:"Business Product",img:r(2604),isFeature:!1},{id:1,title:"SKG Landing Page",category:"Business Product",img:r(7548),isFeature:!1}];var M=F,T={components:{ProjectSingle:W,ProjectsFilter:j},props:{onlyFeature:{require:!1}},data:()=>({projects:M,projectsHeading:"Projects Portfolio",selectedCategory:"",searchProject:""}),computed:{filteredProjects(){return this.selectedCategory?this.filterProjectsByCategory():this.searchProject?this.filterProjectsBySearch():this.onlyFeature?this.projects.filter((e=>e.isFeature==this.onlyFeature)):this.projects}},methods:{filterProjectsByCategory(){return this.projects.filter((e=>{let t=e.category.charAt(0).toUpperCase()+e.category.slice(1);return console.log(t),t.includes(this.selectedCategory)}))},filterProjectsBySearch(){let e=new RegExp(this.searchProject,"i");return this.projects.filter((t=>t.title.match(e)))}},mounted(){h().replace()}};const _=(0,k.c)(T,[["render",p]]);var z=_},8436:function(e,t,r){r.d(t,{c:function(){return d}});var a=r(6760),o=r(8752);function n(e,t,r,n,l,i){return(0,a.Wz)(),(0,a.An)("button",null,(0,o.WA)(r.title),1)}var l={props:["title"],data:()=>({})},i=r(8152);const s=(0,i.c)(l,[["render",n]]);var d=s},7548:function(e,t,r){e.exports=r.p+"img/project-1.abb60be9.png"},5080:function(e,t,r){e.exports=r.p+"img/project-10.edd0f0c4.png"},5812:function(e,t,r){e.exports=r.p+"img/project-11.66a70c30.png"},4132:function(e,t,r){e.exports=r.p+"img/project-12.77ed5ab6.png"},7536:function(e,t,r){e.exports=r.p+"img/project-13.2ddf8749.png"},7032:function(e,t,r){e.exports=r.p+"img/project-14.2f49f41c.png"},6812:function(e,t,r){e.exports=r.p+"img/project-15.87b1aed7.png"},2604:function(e,t,r){e.exports=r.p+"img/project-2.0f25f1d0.png"},6892:function(e,t,r){e.exports=r.p+"img/project-3.0f9a8fad.png"},6796:function(e,t,r){e.exports=r.p+"img/project-4.f34d1364.png"},6252:function(e,t,r){e.exports=r.p+"img/project-5.a99f1a38.png"},9612:function(e,t,r){e.exports=r.p+"img/project-6.f2c5b835.png"},7076:function(e,t,r){e.exports=r.p+"img/project-7.38bd1beb.png"},3656:function(e,t,r){e.exports=r.p+"img/project-8.a7304659.png"},2180:function(e,t,r){e.exports=r.p+"img/project-9.5543098c.png"}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,r),n.exports}r.m=e,function(){var e=[];r.O=function(t,a,o,n){if(!a){var l=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],n=e[c][2];for(var i=!0,s=0;s<a.length;s++)(!1&n||l>=n)&&Object.keys(r.O).every((function(e){return r.O[e](a[s])}))?a.splice(s--,1):(i=!1,n<l&&(l=n));if(i){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,o,n]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,a){return r.f[a](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+{152:"about",672:"projects"}[e]+"."+{152:"fe652ed8",672:"90134cfa"}[e]+".js"}}(),function(){r.miniCssF=function(e){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vythaor-portolio:";r.l=function(a,o,n,l){if(e[a])e[a].push(o);else{var i,s;if(void 0!==n)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var m=d[c];if(m.getAttribute("src")==a||m.getAttribute("data-webpack")==t+n){i=m;break}}i||(s=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+n),i.src=a),e[a]=[o];var u=function(t,r){i.onerror=i.onload=null,clearTimeout(p);var o=e[a];if(delete e[a],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),s&&document.head.appendChild(i)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/vythaor-portfolio/"}(),function(){var e={524:0};r.f.j=function(t,a){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var n=new Promise((function(r,a){o=e[t]=[r,a]}));a.push(o[2]=n);var l=r.p+r.u(t),i=new Error,s=function(a){if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var n=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+l+")",i.name="ChunkLoadError",i.type=n,i.request=l,o[1](i)}};r.l(l,s,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,n,l=a[0],i=a[1],s=a[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(s)var c=s(r)}for(t&&t(a);d<l.length;d++)n=l[d],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(c)},a=self["webpackChunkvythaor_portolio"]=self["webpackChunkvythaor_portolio"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[999],(function(){return r(5568)}));a=r.O(a)})();
//# sourceMappingURL=app.2a46b4f9.js.map