(function(){"use strict";var e={205:function(e,t,r){var a=r(9963),o=r(6252),n=r(3577);const l=(0,o._)("i",{"data-feather":"chevron-up"},null,-1);function i(e,t,r,i,s,d){const c=(0,o.up)("AppHeader"),m=(0,o.up)("router-view"),u=(0,o.up)("back-to-top"),p=(0,o.up)("AppFooter");return(0,o.wg)(),(0,o.iD)("div",{class:(0,n.C_)([e.appTheme,"pt-0.5"])},[(0,o.Wm)(c),(0,o.Wm)(a.uT,{name:"fade",mode:"out-in"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{theme:e.appTheme},null,8,["theme"])])),_:1}),(0,o.Wm)(u,{visibleoffset:"500",right:"30px",bottom:"20px",class:"shadow-lg"},{default:(0,o.w5)((()=>[l])),_:1}),(0,o.Wm)(p)],2)}var s=r(8508),d=r.n(s),c=r.p+"img/logo-dark.16f2dbe4.svg",m=r.p+"img/logo-light.fd7e6f79.svg";const u={id:"nav",class:"sm:container sm:mx-auto"},p={class:"z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6"},g={class:"flex justify-between items-center px-4 sm:px-0"},h={key:0,src:c,class:"w-36",alt:"Dark Logo"},f={key:1,src:m,class:"w-36",alt:"Light Logo"},y={class:"sm:hidden"},x={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"},b={key:0,"fill-rule":"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z","clip-rule":"evenodd"},v={key:1,"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"},w={class:"hidden sm:flex justify-between items-center flex-col md:flex-row"},k={class:"hidden md:block"};function j(e,t,r,a,n,l){const i=(0,o.up)("router-link"),s=(0,o.up)("theme-switcher"),d=(0,o.up)("AppHeaderLinks"),c=(0,o.up)("Button");return(0,o.wg)(),(0,o.iD)("nav",u,[(0,o._)("div",p,[(0,o._)("div",g,[(0,o._)("div",null,[(0,o.Wm)(i,{to:"/"},{default:(0,o.w5)((()=>["light"===n.theme?((0,o.wg)(),(0,o.iD)("img",h)):((0,o.wg)(),(0,o.iD)("img",f))])),_:1})]),(0,o.Wm)(s,{theme:n.theme,onThemeChanged:l.updateTheme,class:"block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg"},null,8,["theme","onThemeChanged"]),(0,o._)("div",y,[(0,o._)("button",{onClick:t[0]||(t[0]=e=>n.isOpen=!n.isOpen),type:"button",class:"focus:outline-none","aria-label":"Hamburger Menu"},[((0,o.wg)(),(0,o.iD)("svg",x,[n.isOpen?((0,o.wg)(),(0,o.iD)("path",b)):(0,o.kq)("",!0),n.isOpen?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("path",v))]))])])]),(0,o.Wm)(d,{showModal:l.showModal,isOpen:n.isOpen},null,8,["showModal","isOpen"]),(0,o._)("div",w,[(0,o._)("div",k,[(0,o.Wm)(c,{title:"Hire Me",class:"text-md font-general-medium bg-red-500 hover:bg-red-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300",onClick:t[1]||(t[1]=e=>l.showModal()),"aria-label":"Hire Me Button"})]),(0,o.Wm)(s,{theme:n.theme,onThemeChanged:l.updateTheme,class:"ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"},null,8,["theme","onThemeChanged"])])])])}const _={key:0,"data-feather":"moon",class:"text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"},P={key:1,"data-feather":"sun",class:"text-gray-200 hover:text-gray-50 w-5"};function C(e,t,r,n,l,i){return(0,o.wg)(),(0,o.iD)("a",{href:"#",onClick:t[0]||(t[0]=(0,a.iM)(((...e)=>i.toggleTheme&&i.toggleTheme(...e)),["prevent"])),"aria-label":"Theme Switcher"},["light"===r.theme?((0,o.wg)(),(0,o.iD)("i",_)):((0,o.wg)(),(0,o.iD)("i",P))])}var F={props:{theme:{type:String,required:!0}},methods:{toggleTheme(){const e="light"===this.theme?"dark":"light";localStorage.setItem("theme",e),this.$emit("themeChanged",e),this.$router.go()}}},S=r(3744);const T=(0,S.Z)(F,[["render",C]]);var D=T;const M={class:"border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark"};function B(e,t,r,a,l,i){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",{class:(0,n.C_)([r.isOpen?"block":"hidden","m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"])},[(0,o.Wm)(s,{to:"/",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-red-600 dark:hover:text-red-300 sm:mx-4 mb-2 sm:py-2","aria-label":"Projects"},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1}),(0,o.Wm)(s,{to:"/projects",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-red-600 dark:hover:text-red-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"Projects"},{default:(0,o.w5)((()=>[(0,o.Uk)("Projects")])),_:1}),(0,o.Wm)(s,{to:"/about",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-red-600 dark:hover:text-red-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"About Me"},{default:(0,o.w5)((()=>[(0,o.Uk)("About Me")])),_:1}),(0,o.Wm)(s,{to:"/contact",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-red-600 dark:hover:text-red-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"Contact"},{default:(0,o.w5)((()=>[(0,o.Uk)("Contact")])),_:1}),(0,o._)("div",M,[(0,o._)("button",{class:"font-general-medium sm:hidden block text-left text-md font-medium bg-red-500 hover:bg-red-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-500",onClick:t[0]||(t[0]=e=>r.showModal()),"aria-label":"Hire Me Button"}," Hire Me ")])],2)}var A={props:["showModal","isOpen"]};const H=(0,S.Z)(A,[["render",B]]);var W=H,O=r(4595),I={components:{ThemeSwitcher:D,AppHeaderLinks:W,Button:O.Z},data(){return{isOpen:!1,theme:"",modal:!1,categories:[{id:1,value:"web",name:"Web Design"},{id:2,value:"mobile",name:"Mobile Application Design"},{id:3,value:"ui-ux",name:"UI/UX Design"},{id:4,value:"branding",name:"Photo"}]}},created(){this.theme=localStorage.getItem("theme")||"light"},mounted(){d().replace(),this.theme=localStorage.getItem("theme")||"light"},methods:{updateTheme(e){this.theme=e},showModal(){this.$router.replace("/contact")}},updated(){d().replace()}};const Z=(0,S.Z)(I,[["render",j],["__scopeId","data-v-3bb71ccc"]]);var E=Z;const L={class:"container mx-auto"},z={class:"pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"},q={class:"flex flex-col justify-center items-center mb-12 sm:mb-20"},U=(0,o._)("p",{class:"font-general-semibold text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5"}," Follow me ",-1),V={class:"flex gap-4 sm:gap-8"},N=["href"],G=["data-feather"];function $(e,t,r,a,n,l){const i=(0,o.up)("FooterCopyright");return(0,o.wg)(),(0,o.iD)("div",L,[(0,o._)("div",z,[(0,o._)("div",q,[U,(0,o._)("ul",V,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.socials,(e=>((0,o.wg)(),(0,o.iD)("a",{key:e.id,href:e.url,target:"__blank",class:"text-gray-400 hover:text-red-500 dark:hover:text-red-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500"},[(0,o._)("i",{"data-feather":e.icon,class:"w-5 sm:w-8 h-5 sm:h-8"},null,8,G)],8,N)))),128))])]),(0,o.Wm)(i)])])}const K={class:"flex justify-center items-center text-center"},R={class:"font-general-regular text-lg text-ternary-dark dark:text-ternary-light"},Y={class:"font-general-medium"},X={target:"__blank",href:"https://github.com/vythaor",class:"font-general-medium text-secondary-dark dark:text-secondary-light hover:underline hover:text-red-600 dark:hover:text-red-300 duration-500"};function J(e,t,r,a,l,i){return(0,o.wg)(),(0,o.iD)("div",K,[(0,o._)("div",R,[(0,o.Uk)(" © "+(0,n.zw)(e.copyrightDate)+". ",1),(0,o._)("span",Y,(0,n.zw)(e.projectName),1),(0,o.Uk)(" . Developed by "),(0,o._)("a",X,(0,n.zw)(e.author),1)])])}var Q={data:()=>({copyrightDate:"2022",projectName:"Sherry's Portfolio",author:"vythaor"})};const ee=(0,S.Z)(Q,[["render",J]]);var te=ee,re={components:{FooterCopyright:te},data(){return{socials:[{id:1,name:"Linkedin",icon:"linkedin",url:"https://linkedin.com/in/vythaor"},{id:2,name:"Behance",icon:"bold",url:"https://behance.com/vythaor"},{id:3,name:"Github",icon:"github",url:"https://github.com/vythaor"},{id:4,name:"Instagram",icon:"instagram",url:"https://www.instagram.com/2amstudio.vn"}]}},mounted(){d().replace()},updated(){d().replace()}};const ae=(0,S.Z)(re,[["render",$]]);var oe=ae,ne={components:{AppHeader:E,AppFooter:oe},data:()=>({appTheme:localStorage.getItem("theme")}),mounted(){d().replace()},updated(){d().replace()}};const le=(0,S.Z)(ne,[["render",i]]);var ie=le,se=r(2201);const de={class:"container mx-auto"},ce={class:"mt-10 sm:mt-20 flex justify-center"};function me(e,t,r,a,n,l){const i=(0,o.up)("AppBanner"),s=(0,o.up)("ProjectsGrid"),d=(0,o.up)("Button"),c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",de,[(0,o.Wm)(i,{class:"mb-5 sm:mb-8"}),(0,o.Wm)(s,{onlyFeature:!0}),(0,o._)("div",ce,[(0,o.Wm)(c,{to:"/projects",class:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-red-500 hover:bg-red-600 focus:ring-1 focus:ring-red-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{title:"More Projects"})])),_:1})])])}var ue=r.p+"img/sapiens.a7ec9102.svg";const pe={class:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"},ge={class:"w-full md:w-1/3 text-left"},he=(0,o._)("h1",{class:"font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"}," Hi, I'm Sherry ",-1),fe=(0,o._)("p",{class:"font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400"}," An UX/UI Designer ",-1),ye=(0,o._)("a",{class:"flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-red-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-red-50 focus:ring-1 focus:ring-red-900 hover:bg-red-500 text-gray-500 hover:text-white duration-500","aria-label":"Download Resume",target:"_blank"},[(0,o._)("i",{"data-feather":"paperclip",class:"ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"}),(0,o._)("span",{class:"text-sm sm:text-lg font-general-medium duration-100"},"View CV")],-1),xe=[ye],be=(0,o._)("div",{class:"w-full md:w-2/3 text-right float-right"},[(0,o._)("img",{src:ue,alt:"Developer"})],-1);function ve(e,t,r,n,l,i){const s=(0,o.up)("ViewCVModal");return(0,o.wg)(),(0,o.iD)("section",pe,[(0,o._)("div",ge,[he,fe,(0,o._)("div",{class:"flex justify-center sm:block cursor-pointer",onClick:t[0]||(t[0]=e=>i.showModal())},xe)]),be,(0,o.Wm)(s,{showModal:i.showModal,modal:e.modal,"aria-modal":"View CV Modal",onKeyup:t[1]||(t[1]=(0,a.D2)((t=>e.$emit("close")),["esc"]))},null,8,["showModal","modal"])])}const we=e=>((0,o.dD)("data-v-10fdfa1c"),e=e(),(0,o.Cn)(),e),ke={class:"font-general-regular fixed inset-0 z-30"},je={class:"bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"},_e={class:"flex flex-col items-center justify-center h-full w-full"},Pe={class:"modal-wrapper flex items-center z-30"},Ce={class:"modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative"},Fe={class:"modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"},Se=we((()=>(0,o._)("h5",{class:"text-primary-dark dark:text-primary-light text-xl"}," Please enter password to view my CV ",-1))),Te=we((()=>(0,o._)("i",{"data-feather":"x"},null,-1))),De=[Te],Me={class:"modal-body p-5 w-full h-full"},Be={class:"max-w-xl m-4 text-left",onsubmit:"return false;"},Ae=we((()=>(0,o._)("div",{class:"mt-0"},[(0,o._)("input",{class:"w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"key",name:"key",type:"password",required:"true",placeholder:"Password","aria-label":"Password"})],-1))),He={ref:"error",id:"error",class:"text-red-500 text-sm mt-2"},We={class:"mt-6 pb-4 sm:pb-1"};function Oe(e,t,r,n,l,i){const s=(0,o.up)("Button");return(0,o.wg)(),(0,o.j4)(a.uT,{name:"fade"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",ke,[(0,o.wy)((0,o._)("div",je,null,512),[[a.F8,r.modal]]),(0,o._)("main",_e,[(0,o.Wm)(a.uT,{name:"fade-up-down"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",Pe,[(0,o._)("div",Ce,[(0,o._)("div",Fe,[Se,(0,o._)("button",{class:"px-4 text-primary-dark dark:text-primary-light",onClick:t[0]||(t[0]=e=>r.showModal())},De)]),(0,o._)("div",Me,[(0,o._)("form",Be,[Ae,(0,o._)("span",He,"Wrong password",512),(0,o._)("div",We,[(0,o.Wm)(s,{title:"Submit",class:"px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-red-500 hover:bg-red-600 rounded-md focus:ring-1 focus:ring-red-900 duration-500","aria-label":"Submit Request",type:"submit",onClick:t[1]||(t[1]=e=>i.openCV())})])])])])],512),[[a.F8,r.modal]])])),_:1})])],512),[[a.F8,r.modal]])])),_:1})}var Ie={props:["showModal","modal"],components:{Button:O.Z},data(){return{}},mounted(){this.$el.querySelector("#error").innerHTML="",d().replace()},updated(){d().replace()},methods:{openCV(){var e=document.getElementById("key").value;"thankyou"==e?(window.open("../files/UX-UI-Designer-Phan-Hoang-Vy-Thao.pdf"),this.showModal()):(document.getElementById("error").innerHTML="Wrong password",document.querySelector("#error").style.display="block")}}};const Ze=(0,S.Z)(Ie,[["render",Oe],["__scopeId","data-v-10fdfa1c"]]);var Ee=Ze,Le={components:{ViewCVModal:Ee},name:"Home",data:()=>({theme:"",modal:!1}),created(){this.theme=localStorage.getItem("theme")||"light"},mounted(){d().replace(),this.theme=localStorage.getItem("theme")||"light"},updated(){d().replace()},methods:{showModal(){this.modal?(document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden"),document.getElementById("key").value="",document.getElementById("error").innerHTML="",this.modal=!1):(document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden"),document.getElementById("key").value="",document.getElementById("error").innerHTML="",this.modal=!0)}}};const ze=(0,S.Z)(Le,[["render",ve]]);var qe=ze,Ue=r(3641),Ve={name:"Home",components:{AppBanner:qe,ProjectsGrid:Ue.Z,Button:O.Z}};const Ne=(0,S.Z)(Ve,[["render",me]]);var Ge=Ne,$e=r.p+"img/not-found.1f94dc04.svg";const Ke=(0,o._)("div",{class:"flex justify-center"},[(0,o._)("img",{src:$e,alt:"Developer",class:"w-2/4 mt-10"})],-1),Re=(0,o._)("p",{class:"font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light text-center mb-5 mt-10"}," 404 Not found ",-1),Ye={class:"flex justify-center mt-20"};function Xe(e,t,r,a,n,l){const i=(0,o.up)("Button"),s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[Ke,Re,(0,o._)("div",Ye,[(0,o.Wm)(s,{to:"/",class:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-red-500 hover:bg-red-600 focus:ring-1 focus:ring-red-900 text-white text-lg sm:text-xl duration-300","aria-label":"Home"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{title:"Back to Home"})])),_:1})])],64)}var Je={name:"Home",components:{Button:O.Z}};const Qe=(0,S.Z)(Je,[["render",Xe]]);var et=Qe;const tt=[{path:"/",name:"Home",component:Ge,meta:{title:"Sherry - Home"}},{path:"/about",name:"About",component:()=>r.e(443).then(r.bind(r,1727)),meta:{title:"Sherry - About"}},{path:"/projects",name:"Projects",component:()=>r.e(176).then(r.bind(r,5707)),meta:{title:"Sherry - Projects"}},{path:"/projects/:id",name:"project",component:()=>r.e(176).then(r.bind(r,6427)),meta:{title:"Sherry - Single Project"}},{path:"/contact",name:"Contact",component:()=>r.e(176).then(r.bind(r,7625)),meta:{title:"Sherry - Contact"}},{path:"/:catchAll(.*)",name:"NotFound",component:et}],rt=(0,se.p7)({history:(0,se.r5)("/vythaor-portfolio/"),routes:tt,scrollBehavior(){document.getElementById("app").scrollIntoView()}});var at=rt;rt.beforeEach(((e,t,r)=>{const a=e.matched.slice().reverse().find((e=>e.meta&&e.meta.title)),o=e.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags)),n=t.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags));if(a?document.title=a.meta.title:n&&(document.title=n.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((e=>e.parentNode.removeChild(e))),!o)return r();o.meta.metaTags.map((e=>{const t=document.createElement("meta");return Object.keys(e).forEach((r=>{t.setAttribute(r,e[r])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((e=>document.head.appendChild(e))),r()}));var ot=r(2739);const nt=r(8508);nt.replace(),(0,a.ri)(ie).use(at).use(ot.Z).mount("#app");const lt=localStorage.getItem("theme");"dark"===lt&&document.querySelector("body").classList.contains("app-theme")?document.querySelector("body").classList.add("bg-primary-dark"):document.querySelector("body").classList.add("bg-secondary-light")},3641:function(e,t,r){r.d(t,{Z:function(){return Z}});var a=r(6252),o=r(3577),n=r(9963);const l={class:"pt-10 sm:pt-14"},i={class:"text-center"},s={class:"font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"},d={class:"mt-10 sm:mt-10"},c=(0,a._)("h3",{class:"font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4"}," Search projects by title or filter by category ",-1),m={class:"flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2"},u={class:"flex justify-between gap-2"},p=(0,a._)("span",{class:"hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer"},[(0,a._)("i",{"data-feather":"search",class:"text-ternary-dark dark:text-ternary-light"})],-1),g={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"};function h(e,t,r,h,f,y){const x=(0,a.up)("ProjectsFilter"),b=(0,a.up)("ProjectSingle");return(0,a.wg)(),(0,a.iD)("section",l,[(0,a._)("div",i,[(0,a._)("p",s,(0,o.zw)(e.projectsHeading),1)]),(0,a._)("div",d,[c,(0,a._)("div",m,[(0,a._)("div",u,[p,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.searchProject=t),class:"font-general-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"},null,512),[[n.nr,e.searchProject]])]),(0,a.Wm)(x,{onFilter:t[1]||(t[1]=t=>e.selectedCategory=t)})])]),(0,a._)("div",g,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(y.filteredProjects,(e=>((0,a.wg)(),(0,a.j4)(b,{key:e.id,project:e},null,8,["project"])))),128))])])}var f=r(8508),y=r.n(f);const x=["name","id"],b=(0,a._)("option",{value:"",class:"text-sm sm:text-md"},"All Projects",-1),v=["value"];function w(e,t,r,n,l,i){return(0,a.wg)(),(0,a.iD)("select",{onChange:t[0]||(t[0]=t=>e.$emit("filter",t.target.value)),name:r.select,id:r.select,class:"font-general-medium px-8 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"},[b,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.selectOptions,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e,value:e,class:"sm:text-md"},(0,o.zw)(e),9,v)))),128))],40,x)}var k={props:{select:{type:String,default:"projects",required:!1},selectOptions:{type:Array,default:()=>["Business Product","Freelance Project","Personal Project"]}}},j=r(3744);const _=(0,j.Z)(k,[["render",w]]);var P=_;const C=["src","alt"],F={class:"text-center px-4 py-6"},S={class:"font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"},T={class:"font-general-medium text-lg text-ternary-dark dark:text-ternary-light"};function D(e,t,r,n,l,i){const s=(0,a.up)("router-link");return(0,a.wg)(),(0,a.j4)(s,{to:{name:"project",params:{id:r.project.id}},class:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark","aria-label":"Single Project"},{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a._)("img",{src:r.project.img,alt:r.project.title,class:"rounded-t-xl border-none"},null,8,C)]),(0,a._)("div",F,[(0,a._)("p",S,(0,o.zw)(r.project.title),1),(0,a._)("span",T,(0,o.zw)(r.project.category),1)])])),_:1},8,["to"])}var M={props:["project"]};const B=(0,j.Z)(M,[["render",D]]);var A=B;const H=[{id:13,title:"Car Control Application",category:"Freelance Project",img:r(6430),isFeature:!0},{id:12,title:"Drone Control Application",category:"Freelance Project",img:r(8297),isFeature:!0},{id:11,title:"5 Phut Thuoc Bai - Landing Page",category:"Freelance Project",img:r(4725),isFeature:!1},{id:10,title:"iRobot - Control Vacuum Application",category:"Freelance Project",img:r(580),isFeature:!1},{id:9,title:"NFT Marketplace Web/App",category:"Freelance Project",img:r(8507),isFeature:!0},{id:8,title:"Luar Application",category:"Personal Project",img:r(5064),isFeature:!0},{id:7,title:"Clean Up - Clean Phone Storage Application",category:"Freelance Project",img:r(3058),isFeature:!0},{id:6,title:"Behap Website",category:"Freelance Project",img:r(1526),isFeature:!1},{id:5,title:"GoxGreen Web/App",category:"Freelance Project",img:r(5304),isFeature:!0},{id:4,title:"Prudential Internal Projects",category:"Business Product",img:r(7254),isFeature:!1},{id:3,title:"Ethereum Web/App",category:"Business Product",img:r(616),isFeature:!1},{id:2,title:"T-shirt",category:"Business Product",img:r(5218),isFeature:!1},{id:1,title:"SKG Landing Page",category:"Business Product",img:r(9872),isFeature:!1}];var W=H,O={components:{ProjectSingle:A,ProjectsFilter:P},props:{onlyFeature:{require:!1}},data:()=>({projects:W,projectsHeading:"Projects Portfolio",selectedCategory:"",searchProject:""}),computed:{filteredProjects(){return this.selectedCategory?this.filterProjectsByCategory():this.searchProject?this.filterProjectsBySearch():this.onlyFeature?this.projects.filter((e=>e.isFeature==this.onlyFeature)):this.projects}},methods:{filterProjectsByCategory(){return this.projects.filter((e=>{let t=e.category.charAt(0).toUpperCase()+e.category.slice(1);return console.log(t),t.includes(this.selectedCategory)}))},filterProjectsBySearch(){let e=new RegExp(this.searchProject,"i");return this.projects.filter((t=>t.title.match(e)))}},mounted(){y().replace()}};const I=(0,j.Z)(O,[["render",h]]);var Z=I},4595:function(e,t,r){r.d(t,{Z:function(){return d}});var a=r(6252),o=r(3577);function n(e,t,r,n,l,i){return(0,a.wg)(),(0,a.iD)("button",null,(0,o.zw)(r.title),1)}var l={props:["title"],data:()=>({})},i=r(3744);const s=(0,i.Z)(l,[["render",n]]);var d=s},9872:function(e,t,r){e.exports=r.p+"img/project-1.abb60be9.png"},580:function(e,t,r){e.exports=r.p+"img/project-10.edd0f0c4.png"},4725:function(e,t,r){e.exports=r.p+"img/project-11.66a70c30.png"},8297:function(e,t,r){e.exports=r.p+"img/project-12.700cd8f4.png"},6430:function(e,t,r){e.exports=r.p+"img/project-13.77ed5ab6.png"},5218:function(e,t,r){e.exports=r.p+"img/project-2.0f25f1d0.png"},616:function(e,t,r){e.exports=r.p+"img/project-3.0f9a8fad.png"},7254:function(e,t,r){e.exports=r.p+"img/project-4.f34d1364.png"},5304:function(e,t,r){e.exports=r.p+"img/project-5.a99f1a38.png"},1526:function(e,t,r){e.exports=r.p+"img/project-6.f2c5b835.png"},3058:function(e,t,r){e.exports=r.p+"img/project-7.38bd1beb.png"},5064:function(e,t,r){e.exports=r.p+"img/project-8.a7304659.png"},8507:function(e,t,r){e.exports=r.p+"img/project-9.5543098c.png"}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,r),n.exports}r.m=e,function(){var e=[];r.O=function(t,a,o,n){if(!a){var l=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],n=e[c][2];for(var i=!0,s=0;s<a.length;s++)(!1&n||l>=n)&&Object.keys(r.O).every((function(e){return r.O[e](a[s])}))?a.splice(s--,1):(i=!1,n<l&&(l=n));if(i){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,o,n]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,a){return r.f[a](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+{176:"projects",443:"about"}[e]+"."+{176:"fac44e35",443:"1ae7dad2"}[e]+".js"}}(),function(){r.miniCssF=function(e){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vythaor-portolio:";r.l=function(a,o,n,l){if(e[a])e[a].push(o);else{var i,s;if(void 0!==n)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var m=d[c];if(m.getAttribute("src")==a||m.getAttribute("data-webpack")==t+n){i=m;break}}i||(s=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+n),i.src=a),e[a]=[o];var u=function(t,r){i.onerror=i.onload=null,clearTimeout(p);var o=e[a];if(delete e[a],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),s&&document.head.appendChild(i)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/vythaor-portfolio/"}(),function(){var e={143:0};r.f.j=function(t,a){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var n=new Promise((function(r,a){o=e[t]=[r,a]}));a.push(o[2]=n);var l=r.p+r.u(t),i=new Error,s=function(a){if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var n=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+l+")",i.name="ChunkLoadError",i.type=n,i.request=l,o[1](i)}};r.l(l,s,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,n,l=a[0],i=a[1],s=a[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(s)var c=s(r)}for(t&&t(a);d<l.length;d++)n=l[d],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(c)},a=self["webpackChunkvythaor_portolio"]=self["webpackChunkvythaor_portolio"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(205)}));a=r.O(a)})();
//# sourceMappingURL=app.9b95a28b.js.map