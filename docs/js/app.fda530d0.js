(function(e){function t(t){for(var s,n,c=t[0],i=t[1],u=t[2],f=0,d=[];f<c.length;f++)n=c[f],a[n]&&d.push(a[n][0]),a[n]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],s=!0,n=1;n<r.length;n++){var c=r[n];0!==a[c]&&(s=!1)}s&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var s={},n={app:0},a={app:0},o=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d22502a":"9226b0d7","chunk-2f149dc6":"0877e951","chunk-5ad075c6":"70a09946","chunk-bd77b8e2":"b760c624"}[e]+".js"}function i(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-2f149dc6":1,"chunk-5ad075c6":1,"chunk-bd77b8e2":1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise(function(t,r){for(var s="css/"+({}[e]||e)+"."+{"chunk-2d22502a":"31d6cfe0","chunk-2f149dc6":"15cfdbbb","chunk-5ad075c6":"8e7ebe51","chunk-bd77b8e2":"86b4cbe4"}[e]+".css",a=i.p+s,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],f=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(f===s||f===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],f=u.getAttribute("data-href");if(f===s||f===a)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var s=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");o.request=s,delete n[e],l.parentNode.removeChild(l),r(o)},l.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(l)}).then(function(){n[e]=0}));var s=a[e];if(0!==s)if(s)t.push(s[2]);else{var o=new Promise(function(t,r){s=a[e]=[t,r]});t.push(s[2]=o);var u,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(e),u=function(t){f.onerror=f.onload=null,clearTimeout(d);var r=a[e];if(0!==r){if(r){var s=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+s+": "+n+")");o.type=s,o.request=n,r[1](o)}a[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:f})},12e4);f.onerror=f.onload=u,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=s,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(r,s,function(t){return e[t]}.bind(null,s));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-github-explorer/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],f=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var l=f;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"21bb":function(e,t,r){"use strict";var s=r("bcc9"),n=r.n(s);n.a},"30df":function(e,t,r){},4678:function(e,t,r){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=a(e);return r(t)}function a(e){var t=s[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}n.keys=function(){return Object.keys(s)},n.resolve=a,e.exports=n,n.id="4678"},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var s=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},["/"!==e.$route.path?r("Header"):e._e(),e._v("\n  "+e._s(e.$router.path)+"\n  "),r("router-view")],1)},a=[],o=r("a960"),c={components:{Header:o["a"]}},i=c,u=(r("5c0b"),r("2877")),f=Object(u["a"])(i,n,a,!1,null,null,null),d=f.exports,l=r("8c4f"),b=r("2f62");s["a"].use(b["a"]);var p=new b["a"].Store({state:{starredRepositories:null,repositories:null,username:null,user:null},mutations:{SET_STARRED_REPOSITORIES:function(e,t){e.starredRepositories=t},SET_REPOSITORIES:function(e,t){e.repositories=t},SET_USERNAME:function(e,t){e.username=t},SET_USER:function(e,t){e.user=t}},actions:{setStarredRepositories:function(e,t){return e.commit("SET_STARRED_REPOSITORIES",t)},setRepositories:function(e,t){return e.commit("SET_REPOSITORIES",t)},setUsername:function(e,t){return e.commit("SET_USERNAME",t)},setUser:function(e,t){return e.commit("SET_USER",t)}},getters:{getStarredRepositories:function(e){return e.starredRepositories},getRepositories:function(e){return e.repositories},getUsername:function(e){return e.username},getUser:function(e){return e.user}}}),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"auth"},[r("form",{staticClass:"container",on:{submit:e.checkForm,keypress:function(t){return t.type.indexOf("key")||13===t.keyCode?e.checkForm(t):null}}},[r("h1",[e._v("Github Explorer")]),r("div",{staticClass:"container__input"},[r("p",[e._v("Github Username")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"input",attrs:{type:"text",autofocus:"",autocomplete:"new-username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),r("button",{staticClass:"btn -main",attrs:{type:"submit",disabled:e.isLoading}},[e._v("Search")])])])},m=[],j=r("f499"),g=r.n(j),v=(r("96cf"),r("3b8d")),k=r("7424"),y={name:"Home",components:{},data:function(){return{errors:[],username:"",isLoading:!1}},methods:{checkForm:function(e){return e.preventDefault(),this.errors=[],this.username?this.getUser():(this.username||this.errors.push("Inform a github profile"),this.errors.map(function(e){s["a"].toasted.error(e)}))},getUser:function(){var e=Object(v["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.isLoading=!0,e.next=4,k["a"].get("".concat(k["b"].baseUrl,"/users/").concat(this.username));case 4:if(t=e.sent,200===t.status){e.next=10;break}return this.isLoading=!1,e.abrupt("return",s["a"].toasted.error("Username not found"));case 10:localStorage.setItem("@GithubExplorer:user",g()(t.data)),localStorage.setItem("@GithubExplorer:username",this.username),this.$store.dispatch("setUsername",this.username),this.$store.dispatch("setUser",t.data),this.$router.push("/profile"),this.isLoading=!1;case 16:e.next=24;break;case 18:if(e.prev=18,e.t0=e["catch"](0),this.isLoading=!1,404!==e.t0.status){e.next=23;break}return e.abrupt("return",s["a"].toasted.error("Username not found"));case 23:return e.abrupt("return",s["a"].toasted.error(e.t0.message));case 24:case"end":return e.stop()}},e,this,[[0,18]])}));function t(){return e.apply(this,arguments)}return t}()}},S=y,E=(r("21bb"),Object(u["a"])(S,h,m,!1,null,null,null)),_=E.exports;s["a"].use(l["a"]);var w=new l["a"]({mode:"history",base:"/vue-github-explorer/",routes:[{path:"/",name:"home",component:_},{path:"/profile",component:function(){return r.e("chunk-2f149dc6").then(r.bind(null,"c66d"))},children:[{path:"",redirect:"repositories"},{path:"repositories",component:function(){return r.e("chunk-5ad075c6").then(r.bind(null,"49df"))}},{path:"organizations",component:function(){return r.e("chunk-2d22502a").then(r.bind(null,"e328"))}},{path:"stars",component:function(){return r.e("chunk-bd77b8e2").then(r.bind(null,"7fea"))}}]}]});w.beforeEach(function(e,t,r){"/"===t.path&&"/"===e.path&&r();var s=localStorage.getItem("@GithubExplorer:user"),n=localStorage.getItem("@GithubExplorer:username"),a=p.getters.getUser,o=p.getters.getUsername;!a&&s&&p.dispatch("setUser",JSON.parse(s)),!o&&n&&p.dispatch("setUsername",n),s&&n||"/"===t.path||"/"===e.path||(w.push("/"),r()),r()});var x=w,R=r("1881"),O=r.n(R);s["a"].use(O.a);var U=r("c1df"),z=r.n(U);s["a"].filter("formatDate",function(e){return z()(String(e)).format("MM/DD/YYYY")});var T=r("a65d"),C=r.n(T);s["a"].use(C.a,{iconPack:"fontawesome",duration:3e3});var P=r("4ae6"),$=r.n(P);s["a"].use($.a),s["a"].config.productionTip=!1,new s["a"]({router:x,store:p,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var s=r("5e27"),n=r.n(s);n.a},"5e27":function(e,t,r){},7424:function(e,t,r){"use strict";r.d(t,"a",function(){return a}),r.d(t,"b",function(){return o});var s=r("bc3a"),n=r.n(s),a=n.a,o={baseUrl:"https://api.github.com"}},a960:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Slide",{staticClass:"profile-options"},[r("div",{staticClass:"profile-options__routes"},[r("ul",[r("li",[r("router-link",{attrs:{tag:"a","router-link-active":"",to:"repositories"}},[e._v("Repositories")])],1),r("li",[r("router-link",{attrs:{tag:"a","router-link-active":"",to:"stars"}},[e._v("Stars")])],1)])]),r("div",{staticClass:"profile-options__actions"},[r("a",{staticClass:"logout",attrs:{href:"#"},on:{click:function(t){return e.doLogout()}}},[e._v("Exit")])])])},n=[],a=(r("cadf"),r("551c"),r("f751"),r("097d"),r("2f62"),r("db0f")),o={components:{Slide:a["Slide"]},methods:{doLogout:function(){localStorage.clear(),this.$store.dispatch("setUser",null),this.$store.dispatch("setUsername",null),this.$store.dispatch("setRepositories",null),this.$store.dispatch("setStarredRepositories",null),this.$router.push("/")}}},c=o,i=(r("eadf"),r("2877")),u=Object(i["a"])(c,s,n,!1,null,null,null);t["a"]=u.exports},bcc9:function(e,t,r){},eadf:function(e,t,r){"use strict";var s=r("30df"),n=r.n(s);n.a}});
//# sourceMappingURL=app.fda530d0.js.map