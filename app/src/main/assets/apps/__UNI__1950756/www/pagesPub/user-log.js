"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(()=>{var ie=Object.create;var G=Object.defineProperty;var se=Object.getOwnPropertyDescriptor;var ue=Object.getOwnPropertyNames;var fe=Object.getPrototypeOf,ge=Object.prototype.hasOwnProperty;var ce=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports);var pe=(e,o,t,a)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of ue(o))!ge.call(e,r)&&r!==t&&G(e,r,{get:()=>o[r],enumerable:!(a=se(o,r))||a.enumerable});return e};var z=(e,o,t)=>(t=e!=null?ie(fe(e)):{},pe(o||!e||!e.__esModule?G(t,"default",{value:e,enumerable:!0}):t,e));var H=(e,o,t)=>new Promise((a,r)=>{var n=u=>{try{s(t.next(u))}catch(f){r(f)}},l=u=>{try{s(t.throw(u))}catch(f){r(f)}},s=u=>u.done?a(u.value):Promise.resolve(u.value).then(n,l);s((t=t.apply(e,o)).next())});var E=ce(($e,Q)=>{Q.exports=Vue});var Je=z(E());function A(e,o,...t){uni.__log__?uni.__log__(e,o,...t):console[e].apply(console,[...t,o])}var X=(e,o)=>{let t=e.__vccOpts||e;for(let[a,r]of o)t[a]=r;return t};var i=z(E());var he={zT:2,appId:plus.runtime.appid,appV:parseInt(plus.runtime.version.split(".").join("")),isAndroid:plus.os.name=="Android"};function Y(e,o){getApp().globalData.s.commit("setPubValue",{name:e,value:o})}function Z(e,o="none",t="center"){uni.showToast({title:e,duration:2e3,icon:o,position:t})}function P(e,o,t,a="Confirm"){C(e,o,t,"",a,!1)}function C(e,o,t,a,r="Confirm",n=!0,l="Cancel",s=!1,u){uni.showModal({title:e,content:o,showCancel:n,cancelText:l,confirmText:r,editable:s,placeholderText:u,success(f){f.confirm?typeof t=="function"&&t(f):f.cancel&&typeof a=="function"&&a()}})}function F(e,o){let t={mask:!!e};o&&(t.title=o),uni.showLoading(t)}function M(){uni.hideLoading()}function y(e){return typeof e=="undefined"||e==null||e==""}var _=new Promise(()=>{});function x(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(o){return"%"+o.charCodeAt(0).toString(16).toUpperCase()})}function ee(e){try{let o=JSON.parse(e);if(typeof o=="object")return o}catch(o){}return!1}function te(e){if(!e)return"";let o=JSON.stringify(e);return(typeof o!="string"||o=="{}")&&(o=e.toString()),o}var $=0;function de(e){return Ce(me(Ae(e)))}function me(e){return ve(be(ye(e),e.length*8))}function Ce(e){try{}catch(n){$=0}for(var o=$?"0123456789ABCDEF":"0123456789abcdef",t="",a,r=0;r<e.length;r++)a=e.charCodeAt(r),t+=o.charAt(a>>>4&15)+o.charAt(a&15);return t}function Ae(e){for(var o="",t=-1,a,r;++t<e.length;)a=e.charCodeAt(t),r=t+1<e.length?e.charCodeAt(t+1):0,55296<=a&&a<=56319&&56320<=r&&r<=57343&&(a=65536+((a&1023)<<10)+(r&1023),t++),a<=127?o+=String.fromCharCode(a):a<=2047?o+=String.fromCharCode(192|a>>>6&31,128|a&63):a<=65535?o+=String.fromCharCode(224|a>>>12&15,128|a>>>6&63,128|a&63):a<=2097151&&(o+=String.fromCharCode(240|a>>>18&7,128|a>>>12&63,128|a>>>6&63,128|a&63));return o}function ye(e){for(var o=Array(e.length>>2),t=0;t<o.length;t++)o[t]=0;for(var t=0;t<e.length*8;t+=8)o[t>>5]|=(e.charCodeAt(t/8)&255)<<t%32;return o}function ve(e){for(var o="",t=0;t<e.length*32;t+=8)o+=String.fromCharCode(e[t>>5]>>>t%32&255);return o}function be(e,o){e[o>>5]|=128<<o%32,e[(o+64>>>9<<4)+14]=o;for(var t=1732584193,a=-271733879,r=-1732584194,n=271733878,l=0;l<e.length;l+=16){var s=t,u=a,f=r,k=n;t=c(t,a,r,n,e[l+0],7,-680876936),n=c(n,t,a,r,e[l+1],12,-389564586),r=c(r,n,t,a,e[l+2],17,606105819),a=c(a,r,n,t,e[l+3],22,-1044525330),t=c(t,a,r,n,e[l+4],7,-176418897),n=c(n,t,a,r,e[l+5],12,1200080426),r=c(r,n,t,a,e[l+6],17,-1473231341),a=c(a,r,n,t,e[l+7],22,-45705983),t=c(t,a,r,n,e[l+8],7,1770035416),n=c(n,t,a,r,e[l+9],12,-1958414417),r=c(r,n,t,a,e[l+10],17,-42063),a=c(a,r,n,t,e[l+11],22,-1990404162),t=c(t,a,r,n,e[l+12],7,1804603682),n=c(n,t,a,r,e[l+13],12,-40341101),r=c(r,n,t,a,e[l+14],17,-1502002290),a=c(a,r,n,t,e[l+15],22,1236535329),t=p(t,a,r,n,e[l+1],5,-165796510),n=p(n,t,a,r,e[l+6],9,-1069501632),r=p(r,n,t,a,e[l+11],14,643717713),a=p(a,r,n,t,e[l+0],20,-373897302),t=p(t,a,r,n,e[l+5],5,-701558691),n=p(n,t,a,r,e[l+10],9,38016083),r=p(r,n,t,a,e[l+15],14,-660478335),a=p(a,r,n,t,e[l+4],20,-405537848),t=p(t,a,r,n,e[l+9],5,568446438),n=p(n,t,a,r,e[l+14],9,-1019803690),r=p(r,n,t,a,e[l+3],14,-187363961),a=p(a,r,n,t,e[l+8],20,1163531501),t=p(t,a,r,n,e[l+13],5,-1444681467),n=p(n,t,a,r,e[l+2],9,-51403784),r=p(r,n,t,a,e[l+7],14,1735328473),a=p(a,r,n,t,e[l+12],20,-1926607734),t=h(t,a,r,n,e[l+5],4,-378558),n=h(n,t,a,r,e[l+8],11,-2022574463),r=h(r,n,t,a,e[l+11],16,1839030562),a=h(a,r,n,t,e[l+14],23,-35309556),t=h(t,a,r,n,e[l+1],4,-1530992060),n=h(n,t,a,r,e[l+4],11,1272893353),r=h(r,n,t,a,e[l+7],16,-155497632),a=h(a,r,n,t,e[l+10],23,-1094730640),t=h(t,a,r,n,e[l+13],4,681279174),n=h(n,t,a,r,e[l+0],11,-358537222),r=h(r,n,t,a,e[l+3],16,-722521979),a=h(a,r,n,t,e[l+6],23,76029189),t=h(t,a,r,n,e[l+9],4,-640364487),n=h(n,t,a,r,e[l+12],11,-421815835),r=h(r,n,t,a,e[l+15],16,530742520),a=h(a,r,n,t,e[l+2],23,-995338651),t=d(t,a,r,n,e[l+0],6,-198630844),n=d(n,t,a,r,e[l+7],10,1126891415),r=d(r,n,t,a,e[l+14],15,-1416354905),a=d(a,r,n,t,e[l+5],21,-57434055),t=d(t,a,r,n,e[l+12],6,1700485571),n=d(n,t,a,r,e[l+3],10,-1894986606),r=d(r,n,t,a,e[l+10],15,-1051523),a=d(a,r,n,t,e[l+1],21,-2054922799),t=d(t,a,r,n,e[l+8],6,1873313359),n=d(n,t,a,r,e[l+15],10,-30611744),r=d(r,n,t,a,e[l+6],15,-1560198380),a=d(a,r,n,t,e[l+13],21,1309151649),t=d(t,a,r,n,e[l+4],6,-145523070),n=d(n,t,a,r,e[l+11],10,-1120210379),r=d(r,n,t,a,e[l+2],15,718787259),a=d(a,r,n,t,e[l+9],21,-343485551),t=v(t,s),a=v(a,u),r=v(r,f),n=v(n,k)}return Array(t,a,r,n)}function O(e,o,t,a,r,n){return v(_e(v(v(o,e),v(a,n)),r),t)}function c(e,o,t,a,r,n,l){return O(o&t|~o&a,e,o,r,n,l)}function p(e,o,t,a,r,n,l){return O(o&a|t&~a,e,o,r,n,l)}function h(e,o,t,a,r,n,l){return O(o^t^a,e,o,r,n,l)}function d(e,o,t,a,r,n,l){return O(t^(o|~a),e,o,r,n,l)}function v(e,o){var t=(e&65535)+(o&65535),a=(e>>16)+(o>>16)+(t>>16);return a<<16|t&65535}function _e(e,o){return e<<o|e>>>32-o}var V={md5:function(e){return de(e)}};function Le(e,o){let t=getApp().globalData.s.state.AES.encrypt(o,e);return`${getApp().globalData.apiUaPrefix}${t}`}function ae(e){return V.md5(`${getApp().globalData.channel}${e}${getApp().globalData.apiEncValue}`).substring(0,16)}var j={setToken(e){y(e)||Y("pubToken",e)},isLogin(){let e=getApp().globalData.s.state;return!y(e.pubToken)&&e.pubUser.uid},request(e,o,t,a,r=!1){return new Promise((n,l)=>{var s,u,f;let k=!1;if(t)if(t=="refresh")k=!0;else{let m={mask:!0};typeof t=="string"&&(m.title=t),uni.showLoading(m)}let b=!1;try{b=getApp().globalData.s.state.pubToken}catch(m){A("error","at common/api.js:31","request token catch "+JSON.stringify(m))}y((s=getApp().globalData)==null?void 0:s.ua)&&(J(7,(u=getApp().globalData)==null?void 0:u.ua,typeof((f=getApp().globalData)==null?void 0:f.ua),o,e,b),getApp().initUaInfo());let N=getApp().globalData.ua,w,re=Se(o),L={"content-type":"application/json"},ne=getApp().globalData.apiHost,S;b&&getApp().globalData.uid!==0?(L.Authorization=`Bearer ${b}`,S=ae(getApp().globalData.uid)):S=ae(0),L.ua=Le(N,S),w=getApp().globalData.s.state.AES.encrypt(S,JSON.stringify(re)),uni.request({url:ne+e,method:"POST",header:L,data:w,dataType:"json",timeout:1e4,complete(m){if(t&&uni.hideLoading(),A("log","at common/api.js:63",`request ${e} obj ${JSON.stringify(o)}`,m.statusCode),m.header&&m.header["x-report-log"]&&J(m.header["x-report-log"],L.ua,N,w,e,b),m.statusCode==200){let le=m.data,g=getApp().globalData.s.state.AES.decrypt(S,le);if(g=ee(g),A("log","at common/api.js:71","res:",g),!g){a&&l(g),J(1,L.ua,N,w,e,b);return}if(g.data&&typeof g.data.callback=="object"&&(j.handleCallback(g.data.callback),r))return _;if(g.ok===99)return getApp().loginOut("API ok 99"),_;if(g.ok==-98)return a&&l(g),_;if(y(g.msg)||Z(g.msg),g.ok>0){n(g);return}a&&l(g)}else{if(m.statusCode==401)return getApp().loginOut("API status code 401"),_;if(k&&uni.stopPullDownRefresh(),a)l(m);else return _}},fail(m){}})})},handleCallback(e){},accessLogExtra(e,o,t){}};function Se(e){try{y(e)&&(e={}),e.times=new Date().getTime();let o=Object.keys(e).sort(),t={};for(let r=0,n=o.length;r<n;r++)t[o[r]]=e[o[r]];let a=oe(t).substr(1);return t.sign=V.md5(`${V.md5(a)}${getApp().globalData.apiSignValue}`),t}catch(o){return e}}function oe(e,o){if(e==null||typeof e=="number"&&isNaN(e))return"";try{let t="",a=typeof e;if(a=="string"||a=="number")t+="&"+o+"="+x(e);else if(a=="boolean")t+="&"+o+"="+(e?1:0);else for(let r in e){let n=o==null?r:o+De(r);t+=oe(e[r],n)}return t}catch(t){return""}}function De(e){return`${encodeURIComponent("[")}${e}${encodeURIComponent("]")}`}function J(e,o,t,a,r,n){let l={type:e,ua:o,origin_ua:t,params:a,api:r,token:n},s=!1;try{s=getApp().globalData.s.state.pubToken}catch(f){A("error","at common/api.js:182","request token catch "+JSON.stringify(f))}let u={"content-type":"application/json",ua:getApp().globalData.ua};s&&(u.Authorization=`Bearer ${s}`),uni.request({url:`${getApp().globalData.apiHost}/log/report`,method:"POST",header:u,data:l,dataType:"json",timeout:1e4})}var U={PHOTO:1,VIDEO:2,VOICE:3,TXT:4},B={DB:"db",MESSAGE:"message",AVATAR:"avatar",LOG:"log",ALBUM:"album"};var ke="/upload/params";function R(e,o,t){return new Promise((a,r)=>H(this,null,function*(){let n=e.replace("file://",""),l={flag:o,type:t};try{let s=yield j.request(ke,l,!1,!0),u=yield we(n,"",s.data);a(u)}catch(s){let u=te(s);A("error","at common/api-upload.js:27","upload media fail "+u),uni.hideLoading(),r(s)}}))}function we(e,o,t,a=0,r=0){return new Promise((n,l)=>{getApp().globalData.pluginUpload.singleUpS3({filePath:e,isBase64:a,coverFilePath:o,coverIsBase64:r,ossInfo:t},s=>{A("log","at common/api-upload.js:80","upload plugin s3 result",s),(typeof s=="object"?s.success:s)?n({path:t.dir.path,smallPath:t.dir.small_url}):l(`_upModuleS3 ${JSON.stringify(s)}`)})})}function Pe(e,o){var t;if(typeof getApp().globalData.pluginLog.saveUserInfo=="function")return(t=getApp().globalData.pluginLog)==null?void 0:t.saveUserInfo(e,a=>{typeof o=="function"&&o(a)})}function Oe(e){var o;typeof getApp().globalData.pluginLog.makeCrash=="function"&&((o=getApp().globalData.pluginLog)==null||o.makeCrash({type:e}))}function T(){var e;if(typeof getApp().globalData.pluginLog.getCrashMessagePath=="function")return(e=getApp().globalData.pluginLog)==null?void 0:e.getCrashMessagePath()}function D(){var e;if(typeof getApp().globalData.pluginLog.getLogMessagePath=="function")return(e=getApp().globalData.pluginLog)==null?void 0:e.getLogMessagePath()}function K(e,o){var t;typeof getApp().globalData.pluginLog.deleteCrashMessage=="function"&&((t=getApp().globalData.pluginLog)==null||t.deleteCrashMessage({isAll:e,array:o}))}function W(e,o){var t;typeof getApp().globalData.pluginLog.deleteLogMessage=="function"&&((t=getApp().globalData.pluginLog)==null||t.deleteLogMessage({isAll:e,array:o}))}function Ue(e,o){typeof getApp().globalData.pluginLog.writeLog=="function"&&getApp().globalData.pluginLog.writeLog({type:e,logMessage:o})}function Te(e){typeof getApp().globalData.pluginLog.logConfig=="function"&&getApp().globalData.pluginLog.logConfig(e)}function Ie(e){typeof getApp().globalData.pluginLog.getUserInfo=="function"&&getApp().globalData.pluginLog.getUserInfo(o=>{typeof e=="function"&&e(o)})}function Ne(e,o){typeof getApp().globalData.pluginLog.getFileContent=="function"&&getApp().globalData.pluginLog.getFileContent({path:e},t=>{typeof o=="function"&&o(t)})}var Ee={data(){return{crashArray:[],logArray:[]}},methods:{clickCrash(e){C("Crash","APP\u5373\u5C06Crash",()=>{Oe(e)},"","\u786E\u5B9A",!1)},click1(){A("log","at pagesPub/user-log.nvue:67","getApp().pubUser:",getApp().pubUser),Pe(getApp().pubUser),Ie(e=>{C("User",JSON.stringify(e),()=>{},"","\u786E\u5B9A",!1)})},click2(){this.crashArray=T(),C("Crash",JSON.stringify(this.crashArray),()=>{},"","OK",!1)},click3(){this.logArray=D(),C("Log",JSON.stringify(this.logArray),()=>{},"","OK",!1)},click4(){K(!0,null),this.click2()},click5(){this.crashArray=T(),this.crashArray.length>0?(K(!1,[this.crashArray[0]]),this.click2()):C("Crash","\u6CA1\u6709\u6570\u636E",()=>{},"","OK",!1)},click6(){W(!0,null),this.click3()},click7(){this.logArray=D(),this.logArray.length>0?(W(!1,[this.logArray[0]]),this.click3()):C("Log","\u6CA1\u6709\u6570\u636E",()=>{},"","OK",!1)},click8(){if(this.crashArray=T(),this.crashArray.length>0){F();let e=this.crashArray[0];R(e,B.LOG,U.TXT).then(o=>{let t=getApp().globalData.ossPath+o.path;P("\u4E0A\u4F20\u6210\u529F",t,()=>{uni.setClipboardData({data:t})})}).finally(()=>{M()})}else C("Crash","\u6CA1\u6709\u6570\u636E",()=>{},"","OK",!1)},click9(){if(this.logArray=D(),this.logArray.length>0){F();let e=this.logArray[0];R(e,B.LOG,U.TXT).then(o=>{let t=getApp().globalData.ossPath+o.path;P("\u4E0A\u4F20\u6210\u529F",t,()=>{uni.setClipboardData({data:t})})}).error(o=>{P("\u4E0A\u4F20\u5931\u8D25",o)}).finally(()=>{M()})}else C("Log","\u6CA1\u6709\u6570\u636E",()=>{},"","OK",!1)},click10(){let e={crashCount:30,logCount:30,logLines:100,routerLines:100};Te(e),C("logConfig",`\u914D\u7F6E\u5185\u5BB9\u53C2\u6570:${JSON.stringify(e)}`,()=>{},"","OK",!1)},wl(){let e=new Date().getMilliseconds()%5,o=Date().toString();Ue(e,o),C("Log\u5199\u5165\u5185\u5BB9",`${e}	${o}`,()=>{this.logArray=D()},"","OK",!1)},showFileContent(e){Ne(e,o=>{C("Log",o,()=>{},"","OK",!1)})},deleteCrashFile(e){K(!1,[e]),this.crashArray=T()},deleteLogFile(e){W(!1,[e]),this.logArray=D()}}};function Fe(e,o,t,a,r,n){let l=(0,i.resolveComponent)("button");return(0,i.openBlock)(),(0,i.createElementBlock)("scroll-view",{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true",style:{flexDirection:"column"}},[(0,i.createVNode)(l,{onClick:o[0]||(o[0]=s=>n.clickCrash(0))},{default:(0,i.withCtx)(()=>[(0,i.createTextVNode)("\u4EA7\u751FCrash\u79CD\u7C7B0")]),_:1}),(0,i.createVNode)(l,{onClick:o[1]||(o[1]=s=>n.clickCrash(1))},{default:(0,i.withCtx)(()=>[(0,i.createTextVNode)("\u4EA7\u751FCrash\u79CD\u7C7B1")]),_:1}),(0,i.createVNode)(l,{onClick:o[2]||(o[2]=s=>n.clickCrash(2))},{default:(0,i.withCtx)(()=>[(0,i.createTextVNode)("\u4EA7\u751FCrash\u79CD\u7C7B2")]),_:1}),(0,i.createVNode)(l,{onClick:n.wl},{default:(0,i.withCtx)(()=>[(0,i.createTextVNode)("\u5199\u5165\u65E5\u5FD7")]),_:1},8,["onClick"]),(0,i.createVNode)(l,{onClick:n.click1},{default:(0,i.withCtx)(()=>[(0,i.createTextVNode)("\u4F20\u5165\u7528\u6237\u65E5\u5FD7\u4FE1\u606F")]),_:1},8,["onClick"]),(0,i.createVNode)(l,{onClick:n.click2},{default:(0,i.withCtx)(()=>[(0,i.createTextVNode)("\u83B7\u53D6Crash\u65E5\u5FD7\u4FE1\u606F")]),_:1},8,["onClick"]),((0,i.openBlock)(!0),(0,i.createElementBlock)(i.Fragment,null,(0,i.renderList)(r.crashArray,(s,u)=>((0,i.openBlock)(),(0,i.createElementBlock)("div",null,[(0,i.createElementVNode)("div",{onClick:f=>n.showFileContent(s),onLongpress:f=>n.deleteCrashFile(s),style:{border:"#000 solid 1px"}},[(0,i.createElementVNode)("u-text",null,(0,i.toDisplayString)(s),1)],40,["onClick","onLongpress"])]))),256)),(0,i.createVNode)(l,{onClick:n.click3},{default:(0,i.withCtx)(()=>[(0,i.createTextVNode)("\u83B7\u53D6Log\u65E5\u5FD7\u4FE1\u606F")]),_:1},8,["onClick"]),((0,i.openBlock)(!0),(0,i.createElementBlock)(i.Fragment,null,(0,i.renderList)(r.logArray,(s,u)=>((0,i.openBlock)(),(0,i.createElementBlock)("div",null,[(0,i.createElementVNode)("div",{onClick:f=>n.showFileContent(s),onLongpress:f=>n.deleteLogFile(s),style:{border:"#000 solid 1px"}},[(0,i.createElementVNode)("u-text",null,(0,i.toDisplayString)(s),1)],40,["onClick","onLongpress"])]))),256)),(0,i.createVNode)(l,{onClick:n.click4},{default:(0,i.withCtx)(()=>[(0,i.createTextVNode)("\u5220\u9664\u6240\u6709Crash\u65E5\u5FD7\u4FE1\u606F")]),_:1},8,["onClick"]),(0,i.createVNode)(l,{onClick:n.click5},{default:(0,i.withCtx)(()=>[(0,i.createTextVNode)("\u5220\u9664\u7B2C\u4E00\u6761Crash\u65E5\u5FD7\u4FE1\u606F")]),_:1},8,["onClick"]),(0,i.createVNode)(l,{onClick:n.click6},{default:(0,i.withCtx)(()=>[(0,i.createTextVNode)("\u5220\u9664\u6240\u6709Log\u65E5\u5FD7\u4FE1\u606F")]),_:1},8,["onClick"]),(0,i.createVNode)(l,{onClick:n.click7},{default:(0,i.withCtx)(()=>[(0,i.createTextVNode)("\u5220\u9664\u7B2C\u4E00\u6761Log\u65E5\u5FD7\u4FE1\u606F")]),_:1},8,["onClick"]),(0,i.createVNode)(l,{onClick:n.click8},{default:(0,i.withCtx)(()=>[(0,i.createTextVNode)("\u4E0A\u4F20\u7B2C\u4E00\u6761Crash\u65E5\u5FD7")]),_:1},8,["onClick"]),(0,i.createVNode)(l,{onClick:n.click9},{default:(0,i.withCtx)(()=>[(0,i.createTextVNode)("\u4E0A\u4F20\u7B2C\u4E00\u6761Log\u65E5\u5FD7")]),_:1},8,["onClick"]),(0,i.createVNode)(l,{onClick:n.click10},{default:(0,i.withCtx)(()=>[(0,i.createTextVNode)("\u65E5\u5FD7\u914D\u7F6E")]),_:1},8,["onClick"])])}var I=X(Ee,[["render",Fe]]);var q=plus.webview.currentWebview();if(q){let e=parseInt(q.id),o="pagesPub/user-log",t={};try{t=JSON.parse(q.__query__)}catch(r){}I.mpType="page";let a=Vue.createPageApp(I,{$store:getApp({allowDefault:!0}).$store,__pageId:e,__pagePath:o,__pageQuery:t});a.provide("__globalStyles",Vue.useCssStyles([...__uniConfig.styles,...I.styles||[]])),a.mount("#root")}})();
