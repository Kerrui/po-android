if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){const t=this.constructor;return this.then(o=>t.resolve(e()).then(()=>o),o=>t.resolve(e()).then(()=>{throw o}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){const e=uni.requireGlobal();ArrayBuffer=e.ArrayBuffer,Int8Array=e.Int8Array,Uint8Array=e.Uint8Array,Uint8ClampedArray=e.Uint8ClampedArray,Int16Array=e.Int16Array,Uint16Array=e.Uint16Array,Int32Array=e.Int32Array,Uint32Array=e.Uint32Array,Float32Array=e.Float32Array,Float64Array=e.Float64Array,BigInt64Array=e.BigInt64Array,BigUint64Array=e.BigUint64Array}uni.restoreGlobal&&uni.restoreGlobal(Vue,weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),function(e){"use strict";function t(e){return weex.requireModule(e)}function o(e,t,...o){uni.__log__?uni.__log__(e,t,...o):console[e].apply(console,[...o,t])}let n,i,r,a;n="https://bts.267girl.com",i="https://pic3.candychat.link/",a="https://pic2.candychat.link/",r="1b28c2eac0672761";let s="1.0.2",l="https://bts.267girl.com",c="Android"==plus.os.name,u="https://pic3.candychat.link/",p="https://pic2.candychat.link/",d="1b28c2eac0672761";parseInt(plus.runtime.version.split(".").join(""));function m(){try{let e;if(c){e=plus.android.importClass("java.util.TimeZone").getDefault().getID()}else e=Intl.DateTimeFormat().resolvedOptions().timeZone;return e}catch(e){return"0"}}function f(e){return null==e||""==e||void 0===e}function g(e){if(f(e))return"";let t=e.split("/");if(f(t))return"";let o=t[t.length-1];if(f(o))return"";let n=o.split(".");if(f(n))return"";let i=n[n.length-1];return f(i)?"":i.toLowerCase()}function h(e){if(!e)return"";let t=JSON.stringify(e);return"string"==typeof t&&"{}"!=t||(t=e.toString()),t}const A={parseData(){o("error","at comApp/init.js:10","[[[[[[[[[[[===== appInfo ",getApp().globalData.toolModule.getApplnfo());let e=uni.getWindowInfo();getApp().globalData.window={width:e.screenWidth,height:e.screenHeight,statusBarHeight:e.statusBarHeight,navBarHeight:44,safeTop:e.safeAreaInsets.top,safeBottom:e.safeAreaInsets.bottom,scaleH:(e.screenHeight/812).toFixed(3)};let t=uni.getDeviceInfo(),n=[c?"a":"i",t.system||"0",plus.runtime.version,s,getApp().globalData.toolModule.deviceID(),m(),getApp().globalData.appLetModule.bundleId(),c?plus.runtime.channel||"www":"appstore","en,"+b(),e.screenWidth||"0",e.screenHeight||"0",t.brand||"0",t.deviceModel||"0"];getApp().globalData.ua=n.join("|")}};function b(e){let t=uni.getAppBaseInfo().language;return f(t)?e?"en-US":"en":e?t:t.split("-")[0]}const y=1,w=2,v=3,D=4,C=101,k=1,P=0,S=-1;function I(e,t=!0,o=!0){return new Promise(t=>{let n=function(n){n==k?t(!0):n==P?t(!1):n==S?(o&&function(e,t){uni.showModal({title:"Tips",content:T(e),showCancel:!0,cancelText:"Cancel",confirmText:"To turn on",complete(o){o.confirm?(!function(e){if(c){!function(e){if(f(e))return void function(){var e=plus.android.importClass("android.content.Intent"),t=plus.android.importClass("android.provider.Settings"),o=plus.android.importClass("android.net.Uri"),n=plus.android.runtimeMainActivity(),i=new e;i.setAction(t.ACTION_APPLICATION_DETAILS_SETTINGS);var r=o.fromParts("package",n.getPackageName(),null);i.setData(r),n.startActivity(i)}();!function(e){getApp().globalData.toolModule.permissionOpenSetting({permission:e})}(e)}(_(e))}else t=plus.ios.import("UIApplication").sharedApplication(),o=plus.ios.import("NSURL"),n=o.URLWithString("app-settings:"),t.openURL(n),plus.ios.deleteObject(n),plus.ios.deleteObject(o),plus.ios.deleteObject(t);var t,o,n}(e),"function"==typeof t&&t(!0)):o.cancel&&"function"==typeof t&&t(!1)}})}(e),t(!1)):t(!1)};if(c){(function(e){return new Promise(t=>{getApp().globalData.toolModule.permissionRequest({permission:e},e=>{t(e)})})})(_(e)).then(n)}else{(function(e){switch(e){case y:case v:return j;case D:return F;case w:return M}})(e)(!0).then(n)}})}function _(e){switch(e){case y:case v:return["android.permission.READ_MEDIA_IMAGES","android.permission.READ_MEDIA_VIDEO"];case D:return["android.permission.RECORD_AUDIO"];case w:return["android.permission.CAMERA"]}}function T(e){switch(e){case y:case v:return"Turn on the read and write permissions for App in the application management to use the album function normally";case D:return"In the application management, enable the microphone permission for App to use the voice function normally";case w:return"In the application management, enable the camera permission for App to use the camera function normally"}}function j(){return new Promise(e=>{let t=plus.ios.import("PHPhotoLibrary"),o=t.authorizationStatus();3==o||4==o?(plus.ios.deleteObject(t),e(k)):0==o?plus.ios.invoke("PHPhotoLibrary","requestAuthorization:",(function(){plus.ios.deleteObject(t),e(P)})):(plus.ios.deleteObject(t),e(S))})}function F(e){return new Promise(t=>{let o=plus.ios.importClass("AVCaptureDevice"),n=o.authorizationStatusForMediaType("soun");3==n?(plus.ios.deleteObject(o),t(k)):0==n?plus.ios.invoke("AVCaptureDevice","requestAccessForMediaType:completionHandler:","soun",(function(){if(e){let e=o.authorizationStatusForMediaType("soun");plus.ios.deleteObject(o),t(3==e?k:P)}else plus.ios.deleteObject(o),t(P)})):(plus.ios.deleteObject(o),t(S))})}function M(e){return new Promise(t=>{let o=plus.ios.importClass("AVCaptureDevice"),n=o.authorizationStatusForMediaType("vide");3==n?(plus.ios.deleteObject(o),t(k)):0==n?plus.ios.invoke("AVCaptureDevice","requestAccessForMediaType:completionHandler:","vide",(function(){if(e){let e=o.authorizationStatusForMediaType("vide");plus.ios.deleteObject(o),t(3==e?k:P)}else plus.ios.deleteObject(o),t(P)})):(plus.ios.deleteObject(o),t(S))})}function O(e,t,n){return new Promise(i=>{let r=e;r.startsWith("_doc")&&(r=plus.io.convertLocalFileSystemURL(r)),getApp().globalData.previewModule.getVideoCover({url:r,width:t,height:n},e=>{var t;o("error","at comExtend/preview-media.js:74","preview media "+("getVideoCover "+e),t),i(e)})})}function q(e,t="none",o="center"){uni.showToast({title:e,duration:2e3,icon:t,position:o})}const U=new Promise(()=>{});function x(e){e&&(getApp().globalData.token=e)}function V(e){e&&(getApp().globalData.uid=e)}function H(e){e.mqtt_host&&(getApp().globalData.mqttConfig=e)}function L(e){e&&(getApp().globalData.userAvatar=e)}function N(e,t){uni.showToast({title:e,duration:t,icon:"none",position:"center"})}function R(e){let t=uni.getSystemInfoSync().uniRuntimeVersion;if(!e)return t;let o=t.split("."),n=o[o.length-1];n.length<=1&&(o[o.length-1]=n+"0");let i=o.join("");return Number(i)}function B(e){return new Promise(t=>{plus.io.getVideoInfo({filePath:e,success(e){t(e)},fail(e){t("getVideoInfo "+JSON.stringify(e))}})})}const E=Object.freeze(Object.defineProperty({__proto__:null,choosePhotos:function(e,t=1){return new Promise((o,n)=>{let i,r=["album","camera"],a=["compressed"];1==e?(r=["album"],i=y):2==e?(r=["camera"],i=w):0==e&&(i=C),I(i).then(i=>{i?(getApp().globalData.filterAppHide=!0,uni.chooseImage({count:t,sourceType:r,sizeType:a,crop:{},success:function(t){let n=[];for(let e=0,o=t.tempFilePaths.length;e<o;e++){let o=g(t.tempFilePaths[e]);-1!=["gif","heic"].indexOf(o)&&n.push(e)}if(n.length>0&&(t.tempFilePaths=t.tempFilePaths.filter((e,t)=>-1==n.indexOf(t)),t.tempFiles&&(t.tempFiles=t.tempFiles.filter((e,t)=>-1!=n.indexOf(t)))),1!=e)for(let e=0,o=t.tempFilePaths.length;e<o;e++)t.tempFilePaths[e]=plus.io.convertLocalFileSystemURL(t.tempFilePaths[e]);o(t)},fail:function(e){n()}})):n()})})},chooseVideo:function(e,t,n=!1,i=15){return new Promise((r,a)=>{let s,l,u=["album","camera"];1==e?(u=["album"],l=v):2==e&&(u=["camera"],l=w),I(l).then(e=>{if(e)return getApp().globalData.filterAppHide=!0,uni.chooseVideo({sourceType:u,compressed:!1,maxDuration:i,camera:n?"front":"back"});a()}).then(e=>{if(o("error","at common/common.js:121","----\x3e uni.chooseVideo "+JSON.stringify(e)),s=JSON.parse(JSON.stringify(e)),s&&s.duration&&parseInt(s.duration)>i){let e=setTimeout(()=>{clearTimeout(e),N(`Video duration cannot exceed ${i} seconds`,3e3)},500);return a(null),U}return s.tempFilePath=s.tempFilePath.replace("file://",""),c&&R(!0)<3617?B(s.tempFilePath):new Promise(e=>{e(null)})}).then(e=>{if(e&&("right"==e.orientation||"left"==e.orientation)){o("error","at common/common.js:142","----\x3e uni.chooseVideo videoInfo "+JSON.stringify(e));let t=s.height,n=s.width;s.width=t,s.height=n}return t?O(s.tempFilePath,s.width,s.height):new Promise(e=>{e(null)})}).then(e=>(o("error","at common/common.js:156","----\x3e uni.chooseVideo coverUrl "+e),s.coverPath=e,r(s))).catch(e=>{o("error","at common/common.js:160","-----\x3e chooseVideo error "+h(e)),a()})})},downloadFile:function(e){return new Promise((t,n)=>{uni.downloadFile({url:e}).then(e=>e&&200==e.statusCode&&e.tempFilePath?uni.saveFile({tempFilePath:e.tempFilePath}):(n(),new Promise(()=>{}))).then(e=>{e&&e.savedFilePath?t(e.savedFilePath):n()}).catch(e=>{o("error","at common/common.js:197","downloadFile error "+JSON.stringify(e))})})},getFileInfo:function(e,t="md5"){return new Promise(o=>{uni.getFileInfo({filePath:e,digestAlgorithm:t,success(e){o(e)},fail(){o(null)}})})},getUniAppVersion:R,getVideoInfo:B,pendingPromise:U,setGlobalMqConfig:H,setGlobalToken:x,setGlobalUid:V,setUserAvatar:L,showToast:q,showToastDuration:N,videoCompress:function(e,t){return new Promise((n,i)=>{uni.compressVideo({src:e,quality:t,success(e){o("log","at common/common.js:239","videoCompress res "+JSON.stringify(e)),n(e)},fail(e){o("log","at common/common.js:243","videoCompress error "+JSON.stringify(e)),i("videoCompress "+JSON.stringify(e))}})})}},Symbol.toStringTag,{value:"Module"}));var $=0;function J(e){return function(e){for(var t,o=$?"0123456789ABCDEF":"0123456789abcdef",n="",i=0;i<e.length;i++)t=e.charCodeAt(i),n+=o.charAt(t>>>4&15)+o.charAt(15&t);return n}(function(e){return function(e){for(var t="",o=0;o<32*e.length;o+=8)t+=String.fromCharCode(e[o>>5]>>>o%32&255);return t}(function(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var o=1732584193,n=-271733879,i=-1732584194,r=271733878,a=0;a<e.length;a+=16){var s=o,l=n,c=i,u=r;o=z(o,n,i,r,e[a+0],7,-680876936),r=z(r,o,n,i,e[a+1],12,-389564586),i=z(i,r,o,n,e[a+2],17,606105819),n=z(n,i,r,o,e[a+3],22,-1044525330),o=z(o,n,i,r,e[a+4],7,-176418897),r=z(r,o,n,i,e[a+5],12,1200080426),i=z(i,r,o,n,e[a+6],17,-1473231341),n=z(n,i,r,o,e[a+7],22,-45705983),o=z(o,n,i,r,e[a+8],7,1770035416),r=z(r,o,n,i,e[a+9],12,-1958414417),i=z(i,r,o,n,e[a+10],17,-42063),n=z(n,i,r,o,e[a+11],22,-1990404162),o=z(o,n,i,r,e[a+12],7,1804603682),r=z(r,o,n,i,e[a+13],12,-40341101),i=z(i,r,o,n,e[a+14],17,-1502002290),o=W(o,n=z(n,i,r,o,e[a+15],22,1236535329),i,r,e[a+1],5,-165796510),r=W(r,o,n,i,e[a+6],9,-1069501632),i=W(i,r,o,n,e[a+11],14,643717713),n=W(n,i,r,o,e[a+0],20,-373897302),o=W(o,n,i,r,e[a+5],5,-701558691),r=W(r,o,n,i,e[a+10],9,38016083),i=W(i,r,o,n,e[a+15],14,-660478335),n=W(n,i,r,o,e[a+4],20,-405537848),o=W(o,n,i,r,e[a+9],5,568446438),r=W(r,o,n,i,e[a+14],9,-1019803690),i=W(i,r,o,n,e[a+3],14,-187363961),n=W(n,i,r,o,e[a+8],20,1163531501),o=W(o,n,i,r,e[a+13],5,-1444681467),r=W(r,o,n,i,e[a+2],9,-51403784),i=W(i,r,o,n,e[a+7],14,1735328473),o=Z(o,n=W(n,i,r,o,e[a+12],20,-1926607734),i,r,e[a+5],4,-378558),r=Z(r,o,n,i,e[a+8],11,-2022574463),i=Z(i,r,o,n,e[a+11],16,1839030562),n=Z(n,i,r,o,e[a+14],23,-35309556),o=Z(o,n,i,r,e[a+1],4,-1530992060),r=Z(r,o,n,i,e[a+4],11,1272893353),i=Z(i,r,o,n,e[a+7],16,-155497632),n=Z(n,i,r,o,e[a+10],23,-1094730640),o=Z(o,n,i,r,e[a+13],4,681279174),r=Z(r,o,n,i,e[a+0],11,-358537222),i=Z(i,r,o,n,e[a+3],16,-722521979),n=Z(n,i,r,o,e[a+6],23,76029189),o=Z(o,n,i,r,e[a+9],4,-640364487),r=Z(r,o,n,i,e[a+12],11,-421815835),i=Z(i,r,o,n,e[a+15],16,530742520),o=K(o,n=Z(n,i,r,o,e[a+2],23,-995338651),i,r,e[a+0],6,-198630844),r=K(r,o,n,i,e[a+7],10,1126891415),i=K(i,r,o,n,e[a+14],15,-1416354905),n=K(n,i,r,o,e[a+5],21,-57434055),o=K(o,n,i,r,e[a+12],6,1700485571),r=K(r,o,n,i,e[a+3],10,-1894986606),i=K(i,r,o,n,e[a+10],15,-1051523),n=K(n,i,r,o,e[a+1],21,-2054922799),o=K(o,n,i,r,e[a+8],6,1873313359),r=K(r,o,n,i,e[a+15],10,-30611744),i=K(i,r,o,n,e[a+6],15,-1560198380),n=K(n,i,r,o,e[a+13],21,1309151649),o=K(o,n,i,r,e[a+4],6,-145523070),r=K(r,o,n,i,e[a+11],10,-1120210379),i=K(i,r,o,n,e[a+2],15,718787259),n=K(n,i,r,o,e[a+9],21,-343485551),o=Q(o,s),n=Q(n,l),i=Q(i,c),r=Q(r,u)}return Array(o,n,i,r)}(function(e){for(var t=Array(e.length>>2),o=0;o<t.length;o++)t[o]=0;for(o=0;o<8*e.length;o+=8)t[o>>5]|=(255&e.charCodeAt(o/8))<<o%32;return t}(e),8*e.length))}(function(e){var t,o,n="",i=-1;for(;++i<e.length;)t=e.charCodeAt(i),o=i+1<e.length?e.charCodeAt(i+1):0,55296<=t&&t<=56319&&56320<=o&&o<=57343&&(t=65536+((1023&t)<<10)+(1023&o),i++),t<=127?n+=String.fromCharCode(t):t<=2047?n+=String.fromCharCode(192|t>>>6&31,128|63&t):t<=65535?n+=String.fromCharCode(224|t>>>12&15,128|t>>>6&63,128|63&t):t<=2097151&&(n+=String.fromCharCode(240|t>>>18&7,128|t>>>12&63,128|t>>>6&63,128|63&t));return n}(e)))}function G(e,t,o,n,i,r){return Q((a=Q(Q(t,e),Q(n,r)))<<(s=i)|a>>>32-s,o);var a,s}function z(e,t,o,n,i,r,a){return G(t&o|~t&n,e,t,i,r,a)}function W(e,t,o,n,i,r,a){return G(t&n|o&~n,e,t,i,r,a)}function Z(e,t,o,n,i,r,a){return G(t^o^n,e,t,i,r,a)}function K(e,t,o,n,i,r,a){return G(o^(t|~n),e,t,i,r,a)}function Q(e,t){var o=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(o>>16)<<16|65535&o}const X=function(e){return J(e)},Y={request:(e,t,o,n,i=!1)=>new Promise((r,a)=>{let s=!1;s=getApp().globalData.token;let l={"content-type":"application/json",ua:getApp().globalData.ua};s&&(l.Authorization="Bearer "+s);let c=getApp().globalData.apiHost;t.nonce=X(Math.random().toString(36).substr(2)+(new Date).getTime());let u=function(e){try{f(e)&&(e={}),e.times=(new Date).getTime();let t=Object.keys(e).sort(),o={};for(let i=0,r=t.length;i<r;i++)o[t[i]]=e[t[i]];let n=function e(t,o){if(null==t)return"";try{let n="",i=typeof t;if("string"==i||"number"==i)n+="&"+o+"="+encodeURIComponent(t).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}));else if("boolean"==i)n+="&"+o+"="+(t?1:0);else for(let r in t){let i=null==o?r:o+ee(r);n+=e(t[r],i)}return n}catch(n){return""}}(o).substr(1);return o.sign=X(`${X(n)}${d}`),o}catch(t){return e}}(t);uni.request({url:c+e,method:"POST",header:l,data:u,dataType:"json",timeout:1e4,async complete(s){if(o&&uni.hideLoading(),200==s.statusCode){let l=s.data;if(f(l.msg)||q(l.msg),99===l.ok){await getApp().createUser();let a=await Y.request(e,t,o,n,i);return void r(a)}if(l.ok>0)return void r(l);n&&a(l)}else{if(!n)return U;a(s)}},fail(e){}})})};function ee(e){return`${encodeURIComponent("[")}${e}${encodeURIComponent("]")}`}const te=0,oe=1,ne=6,ie=7,re="init",ae="reconnect_listener",se="reconnect_local",le="app_show",ce=1;const ue=(e,t)=>{switch(e){case ce:uni.$emit("event_socket_message",t)}};let pe=!1,de=0,me=0,fe=0,ge=0;o("error","at comSocket/socket.js:20","----\x3e file socket.js onLoad ...");const he=(e,t)=>{switch(e){case oe:o("error","at comSocket/socket.js:25","socket connect success"),pe=!1;break;case te:o("error","at comSocket/socket.js:29","socket connect fail"),pe=!1;break;case ie:if(o("error","at comSocket/socket.js:33","socket reconnect"),getApp().globalData.appStopTaking)return void Ae.disconnect();if(c){let e=(new Date).getTime();e-fe>18e4&&(Ae.disconnect(),Ae.executeConnect(ae)),fe=e}else Ae.disconnect(),Ae.executeConnect(ae);break;case ne:if(o("error","at comSocket/socket.js:54","socket disconnect"),!getApp().globalData.appShow)return;let t=(new Date).getTime();t-ge>12e4&&function(){if(0==getApp().globalData.uid)return;if(f(getApp().globalData.token))return;if(ye())return;Ae.executeConnect(se)}(),ge=t;break;default:o("error","at comSocket/socket.js:64","socket other code = "+e+" !!!")}};let Ae={_connect(e){this.disconnect(),function(e,t,o){e&&(getApp().globalData.mqttConfig=e);let n=getApp().globalData.mqttConfig;if(f(n))return;let i={client_id:n.client_id,mqtt_host:n.mqtt_host,mqtt_port_tcp:n.mqtt_port_tcp,password:n.password,username:n.username};getApp().globalData.pluginMqtt.connect(i,e=>{if(f(e)||f(e.res))return;let n=e.res,i=n.type,r=n.data;switch(i){case 100:t(oe);break;case 101:t(ie);break;case 102:t(ne);break;case 200:t(te);break;default:o(i,r)}})}(e,he,ue)},disconnect(){getApp().globalData.pluginMqtt.disConnect()},checkConnect(e){f(getApp().globalData.uid)||ye()||(this.disconnect(),this.executeConnect(e))},executeConnect(e,t){if(!f(getApp().globalData.uid)){if(pe){return(new Date).getTime()-me>1e3&&(de+=1),de>5&&(pe=!1,de=0,this.disconnect()),o("log","at comSocket/socket.js:93",`socket ${e} connect is doing ${de}`),void(me=(new Date).getTime())}pe=!0,o("log","at comSocket/socket.js:99",`socket ${e} start connect`),Ae._connect(t)}}};function be(){return c?getApp().globalData.pluginMqtt.checkStatusSync().status?oe:te:getApp().globalData.pluginMqtt.checkStatusSync()?oe:te}function ye(){return be()==oe}let we=t("ToolModule"),ve=t("ImageBrowserModule"),De=t("AudioModule"),Ce=t("MqttModule"),ke=t("APPLetModule"),Pe=!0;const Se={globalData:{uid:"",face:"",token:"",apiHost:"",window:"",ua:"",appShow:!0,filterAppHide:!1,toolModule:we,appLetModule:ke,ossPicPath:u,ossPath:p,previewModule:ve,audioModule:De,picCacheObj:{},mqttConfig:{},timeServer:0,timeLocal:0,pluginMqtt:Ce,customerAvatar:"https://img0.baidu.com/it/u=367268319,3445943231&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",userAvatar:"https://pix.veryjack.com/i/2023/04/04/fsxnkv.webp",showVideoCall:!1},methods:{async initApp(){try{await this.createUser(),Ae.executeConnect(re)}catch(e){o("error","at App.vue:49","Init App error "+h(e))}},getCTime(e){let t=(new Date).getTime();if(0==this.globalData.timeServer||0==this.globalData.timeLocal)return t;let o=this.globalData.timeServer+(t-this.globalData.timeLocal);return e?parseInt(o/1e3):o},createUser(){return new Promise((e,t)=>{Y.request("/user/create",{uniq_uid:this.globalData.uid||"",avatar:this.globalData.face||""}).then(o=>{o.data.token||t(!1),x(o.data.token),V(o.data.user_info.uid),H(o.data.mqtt_config),L(o.data.user_info.avatar),e(!0)})})},socketCheckConnect(e){Ae.checkConnect(e)}},onLaunch:function(e){this.globalData.toolModule=we,this.globalData.apiHost=l,A.parseData();let t=e.referrerInfo.extraData||{};t.bHasAgora&&(this.globalData.showVideoCall=!0),t.face&&(this.globalData.face=t.face,this.globalData.uid=t.uid)},onShow:function(){this.globalData.appShow=!0,this.globalData.filterAppHide?this.globalData.filterAppHide=!1:(Pe||Ae.executeConnect(le),Pe=!1)},onHide:function(){this.globalData.filterAppHide||(this.globalData.appShow=!1,Ae.disconnect())}};const{app:Ie,Vuex:_e,Pinia:Te}=function(){const t=e.createVueApp(Se);return t.config.globalProperties.$api=Y,t.config.globalProperties.$com=E,{app:t}}();uni.Vuex=_e,uni.Pinia=Te,Ie.provide("__globalStyles",__uniConfig.styles),Ie._component.mpType="app",Ie._component.render=()=>{},Ie.mount("#app")}(Vue);
