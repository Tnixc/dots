"use strict";var kn=Object.create;var K=Object.defineProperty;var Gn=Object.getOwnPropertyDescriptor;var Ln=Object.getOwnPropertyNames;var jn=Object.getPrototypeOf,Bn=Object.prototype.hasOwnProperty;var p=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Un=(e,t)=>{for(var n in t)K(e,n,{get:t[n],enumerable:!0})},Le=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Ln(t))!Bn.call(e,s)&&s!==n&&K(e,s,{get:()=>t[s],enumerable:!(i=Gn(t,s))||i.enumerable});return e};var E=(e,t,n)=>(n=e!=null?kn(jn(e)):{},Le(t||!e||!e.__esModule?K(n,"default",{value:e,enumerable:!0}):n,e)),Mn=e=>Le(K({},"__esModule",{value:!0}),e);var qe=p((Ws,Me)=>{Me.exports=Ue;Ue.sync=Hn;var je=require("fs");function qn(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var i=0;i<n.length;i++){var s=n[i].toLowerCase();if(s&&e.substr(-s.length).toLowerCase()===s)return!0}return!1}function Be(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:qn(t,n)}function Ue(e,t,n){je.stat(e,function(i,s){n(i,i?!1:Be(s,e,t))})}function Hn(e,t){return Be(je.statSync(e),e,t)}});var Ke=p((_s,Xe)=>{Xe.exports=We;We.sync=Wn;var He=require("fs");function We(e,t,n){He.stat(e,function(i,s){n(i,i?!1:_e(s,t))})}function Wn(e,t){return _e(He.statSync(e),t)}function _e(e,t){return e.isFile()&&_n(e,t)}function _n(e,t){var n=e.mode,i=e.uid,s=e.gid,r=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),o=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),d=parseInt("010",8),u=parseInt("001",8),h=a|d,y=n&u||n&d&&s===o||n&a&&i===r||n&h&&r===0;return y}});var ze=p((Ks,Ve)=>{var Xs=require("fs"),V;process.platform==="win32"||global.TESTING_WINDOWS?V=qe():V=Ke();Ve.exports=ce;ce.sync=Xn;function ce(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(i,s){ce(e,t||{},function(r,o){r?s(r):i(o)})})}V(e,t||{},function(i,s){i&&(i.code==="EACCES"||t&&t.ignoreErrors)&&(i=null,s=!1),n(i,s)})}function Xn(e,t){try{return V.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var nt=p((Vs,tt)=>{var A=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",Ze=require("path"),Kn=A?";":":",Je=ze(),Ye=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),Qe=(e,t)=>{let n=t.colon||Kn,i=e.match(/\//)||A&&e.match(/\\/)?[""]:[...A?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],s=A?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",r=A?s.split(n):[""];return A&&e.indexOf(".")!==-1&&r[0]!==""&&r.unshift(""),{pathEnv:i,pathExt:r,pathExtExe:s}},et=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:i,pathExt:s,pathExtExe:r}=Qe(e,t),o=[],a=u=>new Promise((h,y)=>{if(u===i.length)return t.all&&o.length?h(o):y(Ye(e));let S=i[u],P=/^".*"$/.test(S)?S.slice(1,-1):S,x=Ze.join(P,e),I=!P&&/^\.[\\\/]/.test(e)?e.slice(0,2)+x:x;h(d(I,u,0))}),d=(u,h,y)=>new Promise((S,P)=>{if(y===s.length)return S(a(h+1));let x=s[y];Je(u+x,{pathExt:r},(I,R)=>{if(!I&&R)if(t.all)o.push(u+x);else return S(u+x);return S(d(u,h,y+1))})});return n?a(0).then(u=>n(null,u),n):a(0)},Vn=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:i,pathExtExe:s}=Qe(e,t),r=[];for(let o=0;o<n.length;o++){let a=n[o],d=/^".*"$/.test(a)?a.slice(1,-1):a,u=Ze.join(d,e),h=!d&&/^\.[\\\/]/.test(e)?e.slice(0,2)+u:u;for(let y=0;y<i.length;y++){let S=h+i[y];try{if(Je.sync(S,{pathExt:s}))if(t.all)r.push(S);else return S}catch{}}}if(t.all&&r.length)return r;if(t.nothrow)return null;throw Ye(e)};tt.exports=et;et.sync=Vn});var pe=p((zs,le)=>{"use strict";var it=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(i=>i.toUpperCase()==="PATH")||"Path"};le.exports=it;le.exports.default=it});var at=p((Zs,ot)=>{"use strict";var st=require("path"),zn=nt(),Zn=pe();function rt(e,t){let n=e.options.env||process.env,i=process.cwd(),s=e.options.cwd!=null,r=s&&process.chdir!==void 0&&!process.chdir.disabled;if(r)try{process.chdir(e.options.cwd)}catch{}let o;try{o=zn.sync(e.command,{path:n[Zn({env:n})],pathExt:t?st.delimiter:void 0})}catch{}finally{r&&process.chdir(i)}return o&&(o=st.resolve(s?e.options.cwd:"",o)),o}function Jn(e){return rt(e)||rt(e,!0)}ot.exports=Jn});var ct=p((Js,ue)=>{"use strict";var de=/([()\][%!^"`<>&|;, *?])/g;function Yn(e){return e=e.replace(de,"^$1"),e}function Qn(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(de,"^$1"),t&&(e=e.replace(de,"^$1")),e}ue.exports.command=Yn;ue.exports.argument=Qn});var pt=p((Ys,lt)=>{"use strict";lt.exports=/^#!(.*)/});var ut=p((Qs,dt)=>{"use strict";var ei=pt();dt.exports=(e="")=>{let t=e.match(ei);if(!t)return null;let[n,i]=t[0].replace(/#! ?/,"").split(" "),s=n.split("/").pop();return s==="env"?i:i?`${s} ${i}`:s}});var mt=p((er,ft)=>{"use strict";var fe=require("fs"),ti=ut();function ni(e){let n=Buffer.alloc(150),i;try{i=fe.openSync(e,"r"),fe.readSync(i,n,0,150,0),fe.closeSync(i)}catch{}return ti(n.toString())}ft.exports=ni});var St=p((tr,wt)=>{"use strict";var ii=require("path"),ht=at(),gt=ct(),si=mt(),ri=process.platform==="win32",oi=/\.(?:com|exe)$/i,ai=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function ci(e){e.file=ht(e);let t=e.file&&si(e.file);return t?(e.args.unshift(e.file),e.command=t,ht(e)):e.file}function li(e){if(!ri)return e;let t=ci(e),n=!oi.test(t);if(e.options.forceShell||n){let i=ai.test(t);e.command=ii.normalize(e.command),e.command=gt.command(e.command),e.args=e.args.map(r=>gt.argument(r,i));let s=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${s}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function pi(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let i={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?i:li(i)}wt.exports=pi});var xt=p((nr,Pt)=>{"use strict";var me=process.platform==="win32";function he(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function di(e,t){if(!me)return;let n=e.emit;e.emit=function(i,s){if(i==="exit"){let r=yt(s,t,"spawn");if(r)return n.call(e,"error",r)}return n.apply(e,arguments)}}function yt(e,t){return me&&e===1&&!t.file?he(t.original,"spawn"):null}function ui(e,t){return me&&e===1&&!t.file?he(t.original,"spawnSync"):null}Pt.exports={hookChildProcess:di,verifyENOENT:yt,verifyENOENTSync:ui,notFoundError:he}});var vt=p((ir,$)=>{"use strict";var It=require("child_process"),ge=St(),we=xt();function bt(e,t,n){let i=ge(e,t,n),s=It.spawn(i.command,i.args,i.options);return we.hookChildProcess(s,i),s}function fi(e,t,n){let i=ge(e,t,n),s=It.spawnSync(i.command,i.args,i.options);return s.error=s.error||we.verifyENOENTSync(s.status,i),s}$.exports=bt;$.exports.spawn=bt;$.exports.sync=fi;$.exports._parse=ge;$.exports._enoent=we});var Dt=p((sr,Tt)=>{"use strict";Tt.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var Rt=p((rr,M)=>{"use strict";var U=require("path"),Ft=pe(),Ct=e=>{e={cwd:process.cwd(),path:process.env[Ft()],execPath:process.execPath,...e};let t,n=U.resolve(e.cwd),i=[];for(;t!==n;)i.push(U.join(n,"node_modules/.bin")),t=n,n=U.resolve(n,"..");let s=U.resolve(e.cwd,e.execPath,"..");return i.push(s),i.concat(e.path).join(U.delimiter)};M.exports=Ct;M.exports.default=Ct;M.exports.env=e=>{e={env:process.env,...e};let t={...e.env},n=Ft({env:t});return e.path=t[n],t[n]=M.exports(e),t}});var At=p((or,Se)=>{"use strict";var Et=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};Se.exports=Et;Se.exports.default=Et});var Nt=p((ar,Z)=>{"use strict";var mi=At(),z=new WeakMap,$t=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,i=0,s=e.displayName||e.name||"<anonymous>",r=function(...o){if(z.set(r,++i),i===1)n=e.apply(this,o),e=null;else if(t.throw===!0)throw new Error(`Function \`${s}\` can only be called once`);return n};return mi(r,e),z.set(r,i),r};Z.exports=$t;Z.exports.default=$t;Z.exports.callCount=e=>{if(!z.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return z.get(e)}});var Ot=p(J=>{"use strict";Object.defineProperty(J,"__esModule",{value:!0});J.SIGNALS=void 0;var hi=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];J.SIGNALS=hi});var ye=p(N=>{"use strict";Object.defineProperty(N,"__esModule",{value:!0});N.SIGRTMAX=N.getRealtimeSignals=void 0;var gi=function(){let e=Gt-kt+1;return Array.from({length:e},wi)};N.getRealtimeSignals=gi;var wi=function(e,t){return{name:`SIGRT${t+1}`,number:kt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},kt=34,Gt=64;N.SIGRTMAX=Gt});var Lt=p(Y=>{"use strict";Object.defineProperty(Y,"__esModule",{value:!0});Y.getSignals=void 0;var Si=require("os"),yi=Ot(),Pi=ye(),xi=function(){let e=(0,Pi.getRealtimeSignals)();return[...yi.SIGNALS,...e].map(Ii)};Y.getSignals=xi;var Ii=function({name:e,number:t,description:n,action:i,forced:s=!1,standard:r}){let{signals:{[e]:o}}=Si.constants,a=o!==void 0;return{name:e,number:a?o:t,description:n,supported:a,action:i,forced:s,standard:r}}});var Bt=p(O=>{"use strict";Object.defineProperty(O,"__esModule",{value:!0});O.signalsByNumber=O.signalsByName=void 0;var bi=require("os"),jt=Lt(),vi=ye(),Ti=function(){return(0,jt.getSignals)().reduce(Di,{})},Di=function(e,{name:t,number:n,description:i,supported:s,action:r,forced:o,standard:a}){return{...e,[t]:{name:t,number:n,description:i,supported:s,action:r,forced:o,standard:a}}},Fi=Ti();O.signalsByName=Fi;var Ci=function(){let e=(0,jt.getSignals)(),t=vi.SIGRTMAX+1,n=Array.from({length:t},(i,s)=>Ri(s,e));return Object.assign({},...n)},Ri=function(e,t){let n=Ei(e,t);if(n===void 0)return{};let{name:i,description:s,supported:r,action:o,forced:a,standard:d}=n;return{[e]:{name:i,number:e,description:s,supported:r,action:o,forced:a,standard:d}}},Ei=function(e,t){let n=t.find(({name:i})=>bi.constants.signals[i]===e);return n!==void 0?n:t.find(i=>i.number===e)},Ai=Ci();O.signalsByNumber=Ai});var Mt=p((ur,Ut)=>{"use strict";var{signalsByName:$i}=Bt(),Ni=({timedOut:e,timeout:t,errorCode:n,signal:i,signalDescription:s,exitCode:r,isCanceled:o})=>e?`timed out after ${t} milliseconds`:o?"was canceled":n!==void 0?`failed with ${n}`:i!==void 0?`was killed with ${i} (${s})`:r!==void 0?`failed with exit code ${r}`:"failed",Oi=({stdout:e,stderr:t,all:n,error:i,signal:s,exitCode:r,command:o,escapedCommand:a,timedOut:d,isCanceled:u,killed:h,parsed:{options:{timeout:y}}})=>{r=r===null?void 0:r,s=s===null?void 0:s;let S=s===void 0?void 0:$i[s].description,P=i&&i.code,I=`Command ${Ni({timedOut:d,timeout:y,errorCode:P,signal:s,signalDescription:S,exitCode:r,isCanceled:u})}: ${o}`,R=Object.prototype.toString.call(i)==="[object Error]",_=R?`${I}
${i.message}`:I,X=[_,t,e].filter(Boolean).join(`
`);return R?(i.originalMessage=i.message,i.message=X):i=new Error(X),i.shortMessage=_,i.command=o,i.escapedCommand=a,i.exitCode=r,i.signal=s,i.signalDescription=S,i.stdout=e,i.stderr=t,n!==void 0&&(i.all=n),"bufferedData"in i&&delete i.bufferedData,i.failed=!0,i.timedOut=!!d,i.isCanceled=u,i.killed=h&&!d,i};Ut.exports=Oi});var Ht=p((fr,Pe)=>{"use strict";var Q=["stdin","stdout","stderr"],ki=e=>Q.some(t=>e[t]!==void 0),qt=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return Q.map(i=>e[i]);if(ki(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${Q.map(i=>`\`${i}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,Q.length);return Array.from({length:n},(i,s)=>t[s])};Pe.exports=qt;Pe.exports.node=e=>{let t=qt(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var Wt=p((mr,ee)=>{ee.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&ee.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&ee.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var zt=p((hr,L)=>{var f=global.process,T=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};T(f)?(_t=require("assert"),k=Wt(),Xt=/^win/i.test(f.platform),q=require("events"),typeof q!="function"&&(q=q.EventEmitter),f.__signal_exit_emitter__?g=f.__signal_exit_emitter__:(g=f.__signal_exit_emitter__=new q,g.count=0,g.emitted={}),g.infinite||(g.setMaxListeners(1/0),g.infinite=!0),L.exports=function(e,t){if(!T(global.process))return function(){};_t.equal(typeof e,"function","a callback must be provided for exit handler"),G===!1&&xe();var n="exit";t&&t.alwaysLast&&(n="afterexit");var i=function(){g.removeListener(n,e),g.listeners("exit").length===0&&g.listeners("afterexit").length===0&&te()};return g.on(n,e),i},te=function(){!G||!T(global.process)||(G=!1,k.forEach(function(t){try{f.removeListener(t,ne[t])}catch{}}),f.emit=ie,f.reallyExit=Ie,g.count-=1)},L.exports.unload=te,D=function(t,n,i){g.emitted[t]||(g.emitted[t]=!0,g.emit(t,n,i))},ne={},k.forEach(function(e){ne[e]=function(){if(T(global.process)){var n=f.listeners(e);n.length===g.count&&(te(),D("exit",null,e),D("afterexit",null,e),Xt&&e==="SIGHUP"&&(e="SIGINT"),f.kill(f.pid,e))}}}),L.exports.signals=function(){return k},G=!1,xe=function(){G||!T(global.process)||(G=!0,g.count+=1,k=k.filter(function(t){try{return f.on(t,ne[t]),!0}catch{return!1}}),f.emit=Vt,f.reallyExit=Kt)},L.exports.load=xe,Ie=f.reallyExit,Kt=function(t){T(global.process)&&(f.exitCode=t||0,D("exit",f.exitCode,null),D("afterexit",f.exitCode,null),Ie.call(f,f.exitCode))},ie=f.emit,Vt=function(t,n){if(t==="exit"&&T(global.process)){n!==void 0&&(f.exitCode=n);var i=ie.apply(this,arguments);return D("exit",f.exitCode,null),D("afterexit",f.exitCode,null),i}else return ie.apply(this,arguments)}):L.exports=function(){return function(){}};var _t,k,Xt,q,g,te,D,ne,G,xe,Ie,Kt,ie,Vt});var Jt=p((gr,Zt)=>{"use strict";var Gi=require("os"),Li=zt(),ji=1e3*5,Bi=(e,t="SIGTERM",n={})=>{let i=e(t);return Ui(e,t,n,i),i},Ui=(e,t,n,i)=>{if(!Mi(t,n,i))return;let s=Hi(n),r=setTimeout(()=>{e("SIGKILL")},s);r.unref&&r.unref()},Mi=(e,{forceKillAfterTimeout:t},n)=>qi(e)&&t!==!1&&n,qi=e=>e===Gi.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Hi=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return ji;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Wi=(e,t)=>{e.kill()&&(t.isCanceled=!0)},_i=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Xi=(e,{timeout:t,killSignal:n="SIGTERM"},i)=>{if(t===0||t===void 0)return i;let s,r=new Promise((a,d)=>{s=setTimeout(()=>{_i(e,n,d)},t)}),o=i.finally(()=>{clearTimeout(s)});return Promise.race([r,o])},Ki=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Vi=async(e,{cleanup:t,detached:n},i)=>{if(!t||n)return i;let s=Li(()=>{e.kill()});return i.finally(()=>{s()})};Zt.exports={spawnedKill:Bi,spawnedCancel:Wi,setupTimeout:Xi,validateTimeout:Ki,setExitHandler:Vi}});var Qt=p((wr,Yt)=>{"use strict";var b=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";b.writable=e=>b(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";b.readable=e=>b(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";b.duplex=e=>b.writable(e)&&b.readable(e);b.transform=e=>b.duplex(e)&&typeof e._transform=="function";Yt.exports=b});var tn=p((Sr,en)=>{"use strict";var{PassThrough:zi}=require("stream");en.exports=e=>{e={...e};let{array:t}=e,{encoding:n}=e,i=n==="buffer",s=!1;t?s=!(n||i):n=n||"utf8",i&&(n=null);let r=new zi({objectMode:s});n&&r.setEncoding(n);let o=0,a=[];return r.on("data",d=>{a.push(d),s?o=a.length:o+=d.length}),r.getBufferedValue=()=>t?a:i?Buffer.concat(a,o):a.join(""),r.getBufferedLength=()=>o,r}});var nn=p((yr,H)=>{"use strict";var{constants:Zi}=require("buffer"),Ji=require("stream"),{promisify:Yi}=require("util"),Qi=tn(),es=Yi(Ji.pipeline),se=class extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}};async function be(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:n}=t,i=Qi(t);return await new Promise((s,r)=>{let o=a=>{a&&i.getBufferedLength()<=Zi.MAX_LENGTH&&(a.bufferedData=i.getBufferedValue()),r(a)};(async()=>{try{await es(e,i),s()}catch(a){o(a)}})(),i.on("data",()=>{i.getBufferedLength()>n&&o(new se)})}),i.getBufferedValue()}H.exports=be;H.exports.buffer=(e,t)=>be(e,{...t,encoding:"buffer"});H.exports.array=(e,t)=>be(e,{...t,array:!0});H.exports.MaxBufferError=se});var rn=p((Pr,sn)=>{"use strict";var{PassThrough:ts}=require("stream");sn.exports=function(){var e=[],t=new ts({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=i,t.on("unpipe",s),Array.prototype.slice.call(arguments).forEach(n),t;function n(r){return Array.isArray(r)?(r.forEach(n),this):(e.push(r),r.once("end",s.bind(null,r)),r.once("error",t.emit.bind(t,"error")),r.pipe(t,{end:!1}),this)}function i(){return e.length==0}function s(r){e=e.filter(function(o){return o!==r}),!e.length&&t.readable&&t.end()}}});var ln=p((xr,cn)=>{"use strict";var an=Qt(),on=nn(),ns=rn(),is=(e,t)=>{t===void 0||e.stdin===void 0||(an(t)?t.pipe(e.stdin):e.stdin.end(t))},ss=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=ns();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},ve=async(e,t)=>{if(e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},Te=(e,{encoding:t,buffer:n,maxBuffer:i})=>{if(!(!e||!n))return t?on(e,{encoding:t,maxBuffer:i}):on.buffer(e,{maxBuffer:i})},rs=async({stdout:e,stderr:t,all:n},{encoding:i,buffer:s,maxBuffer:r},o)=>{let a=Te(e,{encoding:i,buffer:s,maxBuffer:r}),d=Te(t,{encoding:i,buffer:s,maxBuffer:r}),u=Te(n,{encoding:i,buffer:s,maxBuffer:r*2});try{return await Promise.all([o,a,d,u])}catch(h){return Promise.all([{error:h,signal:h.signal,timedOut:h.timedOut},ve(e,a),ve(t,d),ve(n,u)])}},os=({input:e})=>{if(an(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};cn.exports={handleInput:is,makeAllStream:ss,getSpawnedResult:rs,validateInputSync:os}});var dn=p((Ir,pn)=>{"use strict";var as=(async()=>{})().constructor.prototype,cs=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(as,e)]),ls=(e,t)=>{for(let[n,i]of cs){let s=typeof t=="function"?(...r)=>Reflect.apply(i.value,t(),r):i.value.bind(t);Reflect.defineProperty(e,n,{...i,value:s})}return e},ps=e=>new Promise((t,n)=>{e.on("exit",(i,s)=>{t({exitCode:i,signal:s})}),e.on("error",i=>{n(i)}),e.stdin&&e.stdin.on("error",i=>{n(i)})});pn.exports={mergePromise:ls,getSpawnedPromise:ps}});var mn=p((br,fn)=>{"use strict";var un=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],ds=/^[\w.-]+$/,us=/"/g,fs=e=>typeof e!="string"||ds.test(e)?e:`"${e.replace(us,'\\"')}"`,ms=(e,t)=>un(e,t).join(" "),hs=(e,t)=>un(e,t).map(n=>fs(n)).join(" "),gs=/ +/g,ws=e=>{let t=[];for(let n of e.trim().split(gs)){let i=t[t.length-1];i&&i.endsWith("\\")?t[t.length-1]=`${i.slice(0,-1)} ${n}`:t.push(n)}return t};fn.exports={joinCommand:ms,getEscapedCommand:hs,parseCommand:ws}});var xn=p((vr,j)=>{"use strict";var Ss=require("path"),De=require("child_process"),ys=vt(),Ps=Dt(),xs=Rt(),Is=Nt(),re=Mt(),gn=Ht(),{spawnedKill:bs,spawnedCancel:vs,setupTimeout:Ts,validateTimeout:Ds,setExitHandler:Fs}=Jt(),{handleInput:Cs,getSpawnedResult:Rs,makeAllStream:Es,validateInputSync:As}=ln(),{mergePromise:hn,getSpawnedPromise:$s}=dn(),{joinCommand:wn,parseCommand:Sn,getEscapedCommand:yn}=mn(),Ns=1e3*1e3*100,Os=({env:e,extendEnv:t,preferLocal:n,localDir:i,execPath:s})=>{let r=t?{...process.env,...e}:e;return n?xs.env({env:r,cwd:i,execPath:s}):r},Pn=(e,t,n={})=>{let i=ys._parse(e,t,n);return e=i.command,t=i.args,n=i.options,n={maxBuffer:Ns,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...n},n.env=Os(n),n.stdio=gn(n),process.platform==="win32"&&Ss.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:i}},W=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?Ps(t):t,oe=(e,t,n)=>{let i=Pn(e,t,n),s=wn(e,t),r=yn(e,t);Ds(i.options);let o;try{o=De.spawn(i.file,i.args,i.options)}catch(P){let x=new De.ChildProcess,I=Promise.reject(re({error:P,stdout:"",stderr:"",all:"",command:s,escapedCommand:r,parsed:i,timedOut:!1,isCanceled:!1,killed:!1}));return hn(x,I)}let a=$s(o),d=Ts(o,i.options,a),u=Fs(o,i.options,d),h={isCanceled:!1};o.kill=bs.bind(null,o.kill.bind(o)),o.cancel=vs.bind(null,o,h);let S=Is(async()=>{let[{error:P,exitCode:x,signal:I,timedOut:R},_,X,On]=await Rs(o,i.options,u),Ne=W(i.options,_),Oe=W(i.options,X),ke=W(i.options,On);if(P||x!==0||I!==null){let Ge=re({error:P,exitCode:x,signal:I,stdout:Ne,stderr:Oe,all:ke,command:s,escapedCommand:r,parsed:i,timedOut:R,isCanceled:h.isCanceled,killed:o.killed});if(!i.options.reject)return Ge;throw Ge}return{command:s,escapedCommand:r,exitCode:0,stdout:Ne,stderr:Oe,all:ke,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return Cs(o,i.options.input),o.all=Es(o,i.options),hn(o,S)};j.exports=oe;j.exports.sync=(e,t,n)=>{let i=Pn(e,t,n),s=wn(e,t),r=yn(e,t);As(i.options);let o;try{o=De.spawnSync(i.file,i.args,i.options)}catch(u){throw re({error:u,stdout:"",stderr:"",all:"",command:s,escapedCommand:r,parsed:i,timedOut:!1,isCanceled:!1,killed:!1})}let a=W(i.options,o.stdout,o.error),d=W(i.options,o.stderr,o.error);if(o.error||o.status!==0||o.signal!==null){let u=re({stdout:a,stderr:d,error:o.error,signal:o.signal,exitCode:o.status,command:s,escapedCommand:r,parsed:i,timedOut:o.error&&o.error.code==="ETIMEDOUT",isCanceled:!1,killed:o.signal!==null});if(!i.options.reject)return u;throw u}return{command:s,escapedCommand:r,exitCode:0,stdout:a,stderr:d,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};j.exports.command=(e,t)=>{let[n,...i]=Sn(e);return oe(n,i,t)};j.exports.commandSync=(e,t)=>{let[n,...i]=Sn(e);return oe.sync(n,i,t)};j.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let i=gn.node(n),s=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:r=process.execPath,nodeOptions:o=s}=n;return oe(r,[...o,e,...Array.isArray(t)?t:[]],{...n,stdin:void 0,stdout:void 0,stderr:void 0,stdio:i,shell:!1})}});var qs={};Un(qs,{default:()=>Nn});module.exports=Mn(qs);var ae=require("child_process"),Ee=E(require("path"));var v=require("child_process"),w=E(require("fs")),m=E(require("os")),c=E(require("path"));var Fe=E(require("node:process"),1),Ce=E(xn(),1);async function F(e,{humanReadableOutput:t=!0}={}){if(Fe.default.platform!=="darwin")throw new Error("macOS only");let n=t?[]:["-ss"],{stdout:i}=await(0,Ce.default)("osascript",["-e",e,n]);return i}function B(e,{humanReadableOutput:t=!0}={}){if(Fe.default.platform!=="darwin")throw new Error("macOS only");let n=t?[]:["-ss"],{stdout:i}=Ce.default.sync("osascript",["-e",e,...n]);return i}var l=require("@raycast/api");var In=async()=>F(`use framework "AppKit"
      use framework "PDFKit"
      
      set pb to current application's NSPasteboard's generalPasteboard()
      set theItems to pb's readObjectsForClasses:({current application's NSURL, current application's NSImage, current application's NSAttributedString}) options:{}
      
      set theImages to {}
      repeat with i from 0 to ((theItems's |count|()) - 1)
        set theItem to (theItems's objectAtIndex:i)
        if (theItem's |class|()) is current application's NSImage then
          copy theItem to end of theImages
        else if (theItem's |class|()) is current application's NSURL then
          if (theItem's absoluteString() as text) ends with ".pdf" then
            set theImage to (current application's PDFDocument's alloc()'s initWithURL:theItem)
          else
            set theImage to (current application's NSImage's alloc()'s initWithContentsOfURL:theItem)
          end if
          if theImage is not missing value then
            copy theImage to end of theImages
          end if
        else if (theItem's |class|()) is current application's NSConcreteAttributedString then
          repeat with i from 0 to ((theItem's |length|()) - 1)
            set attrs to (theItem's attributesAtIndex:i longestEffectiveRange:(missing value) inRange:{i, (theItem's |length|()) - i})
            set theAttachment to (attrs's objectForKey:"NSAttachment")
            if theAttachment is not missing value then
              set cell to theAttachment's attachmentCell()
              set theImage to cell's image()
              copy theImage to end of theImages
            end if
          end repeat
        end if
      end repeat
      
      set tempDir to current application's NSTemporaryDirectory() as text
      set filePaths to {}
      repeat with i from 1 to count theImages
        set theImage to item i of theImages
        set theFile to tempDir & "clipboardImage_" & i
        if theImage's |class|() is current application's PDFDocument then
          set theFile to theFile & ".pdf"
          (theImage's writeToFile:theFile)
        else
          set theFile to theFile & ".png"
          set theTIFFData to theImage's TIFFRepresentation()
          set theBitmap to (current application's NSBitmapImageRep's alloc()'s initWithData:theTIFFData)
          set thePNGData to (theBitmap's representationUsingType:(current application's NSBitmapImageFileTypePNG) |properties|:(current application's NSDictionary's alloc()'s init()))
          (thePNGData's writeToFile:theFile atomically:false)
        end if
        copy theFile to end of filePaths
      end repeat
      
      return filePaths`),bn=async e=>{let t=Array.isArray(e)?e:[e];await F(`use framework "Foundation"
      use framework "PDFKit"
      use scripting additions
  
      set thePasteboard to current application's NSPasteboard's generalPasteboard()
      thePasteboard's clearContents()
      
      -- Handle PDFs separately
      set pdfPaths to {"${t.filter(n=>n.endsWith(".pdf")).join('", "')}"}
  
      set pdfItems to current application's NSMutableArray's alloc()'s init()
      repeat with pdfPath in pdfPaths
        if length of pdfPath is not 0 then
          set pdfItem to current application's NSPasteboardItem's alloc()'s init()
          set pdfData to current application's NSData's dataWithContentsOfFile:pdfPath
          pdfItem's setData:pdfData forType:(current application's NSPasteboardTypePDF)
          pdfItems's addObject:pdfItem
        end if
      end repeat
  
      if pdfItems's |count|() > 0 then
        thePasteboard's writeObjects:pdfItems
      end if
        
      -- Handle all other image types
      set theFiles to {"${t.join('", "')}"}
    
      set theImages to {}
      repeat with theFile in theFiles
        if length of theFile is not 0 then
          set theImage to (current application's NSImage's alloc()'s initWithContentsOfFile:theFile)
          if theImage is not missing value then
            copy theImage to end of theImages
          end if
        end if
      end repeat
      
      if (count theImages) > 0 then
        thePasteboard's writeObjects:theImages
      end if`)};var ks=async()=>F(`set imageTypes to {"PNG", "JPG", "JPEG", "TIF", "HEIF", "GIF", "ICO", "ICNS", "ASTC", "BMP", "DDS", "EXR", "JP2", "KTX", "Portable Bitmap", "Adobe Photoshop", "PVR", "TGA", "WebP", "SVG", "PDF", "HEIC"}
    
    tell application "Finder"
      set theSelection to selection

      if theSelection is {} and (count Finder windows) > 0 then
        repeat with i from 1 to (count Finder windows)
          activate window i
          set theSelection to selection

          set selectionKinds to {}
          repeat with j from 1 to (count theSelection)
            set selectionKinds to selectionKinds & kind of (item j of theSelection)
          end repeat

          set containsImage to false
          repeat with imageType in imageTypes
            if selectionKinds contains imageType then
              set containsImage to true
              exit repeat
            end if
          end repeat
        end repeat
      end if

      if theSelection is {} then
        return
      else if (theSelection count) is equal to 1 then
        repeat with imageType in imageTypes
          if (kind of the first item of theSelection) contains imageType then
            return the POSIX path of (theSelection as alias)
            exit repeat
          end if
        end repeat
      else
        set thePaths to {}
        repeat with i from 1 to (theSelection count)
          repeat with imageType in imageTypes
            if (kind of (item i of theSelection)) contains imageType then
              copy (POSIX path of (item i of theSelection as alias)) to end of thePaths
              exit repeat
            end if
          end repeat
        end repeat
        return thePaths
      end if
    end tell`),Gs=async()=>F(`set imageTypes to {"PNG", "JPG", "JPEG", "TIF", "HEIF", "GIF", "ICO", "ICNS", "ASTC", "BMP", "DDS", "EXR", "JP2", "KTX", "Portable Bitmap", "Adobe Photoshop", "PVR", "TGA", "WebP", "SVG", "PDF", "HEIC"}

    tell application "Path Finder"
      set theSelection to selection

      if theSelection is {} and (count windows) > 0 then
        repeat with i from 1 to (count windows)
          activate window i
          set theSelection to selection

          set selectionKinds to {}
          repeat with j from 1 to (count theSelection)
            set selectionKinds to selectionKinds & kind of (item j of theSelection)
          end repeat

          set containsImage to false
          repeat with imageType in imageTypes
            if selectionKinds contains imageType then
              set containsImage to true
              exit repeat
            end if
          end repeat
        end repeat
      end if

      if theSelection is {} then
        return
      else if (theSelection count) is equal to 1 then
        repeat with imageType in imageTypes
          if (kind of the first item of theSelection) contains imageType then
            return the POSIX path of first item of theSelection
            exit repeat
          end if
        end repeat
      else
        set thePaths to {}
        repeat with i from 1 to (theSelection count)
          repeat with imageType in imageTypes
            if (kind of (item i of theSelection)) contains imageType then
              copy (POSIX path of (item i of theSelection)) to end of thePaths
              exit repeat
            end if
          end repeat
        end repeat
        return thePaths
      end if
    end tell`),Dn=async()=>{let t=(await l.LocalStorage.getItem("itemsToRemove")??"").toString().split(", ");for(let n of t)w.existsSync(n)&&await w.promises.rm(n);await l.LocalStorage.removeItem("itemsToRemove")},Fn=async()=>{let e=[],n=(0,l.getPreferenceValues)().inputMethod,i=!1;if(n=="Clipboard")try{let o=(await In()).split(", ");if(await l.LocalStorage.setItem("itemsToRemove",o.join(", ")),o.filter(a=>a.trim().length>0).length>0)return o}catch{console.error("Couldn't get images from clipboard"),i=!0}let s=n;try{s=(await(0,l.getFrontmostApplication)()).name}catch{console.error("Couldn't get frontmost application")}try{if(n=="Path Finder"&&((await Gs()).split(", ").forEach(a=>{e.includes(a)||e.push(a)}),e.length>0))return e}catch{console.error("Couldn't get images from Path Finder"),i=!0}let r=(await ks()).split(", ");return s=="Finder"||n=="Finder"||i?e.push(...r):r.forEach(o=>{o.split("/").at(-2)=="Desktop"&&!e.includes(o)&&e.push(o)}),e},Re=async e=>{let t=(0,l.getPreferenceValues)();t.imageResultHandling=="copyToClipboard"?(await bn(e),vn(e)):t.imageResultHandling=="openInPreview"&&(console.log(e),await Bs(e),vn(e))},Ls=async()=>(m.cpus()[0].model.includes("Apple")?"arm":"x86")=="arm"?((0,v.execSync)(`chmod +x ${l.environment.assetsPath}/webp/arm/dwebp`),(0,v.execSync)(`chmod +x ${l.environment.assetsPath}/webp/arm/cwebp`),w.existsSync(`${l.environment.assetsPath}/webp/x86/dwebp`)&&await w.promises.rm(`${l.environment.assetsPath}/webp/x86/dwebp`),w.existsSync(`${l.environment.assetsPath}/webp/x86/cwebp`)&&await w.promises.rm(`${l.environment.assetsPath}/webp/x86/cwebp`),[`${l.environment.assetsPath}/webp/arm/dwebp`,`${l.environment.assetsPath}/webp/arm/cwebp`]):((0,v.execSync)(`chmod +x ${l.environment.assetsPath}/webp/x86/dwebp`),(0,v.execSync)(`chmod +x ${l.environment.assetsPath}/webp/x86/cwebp`),w.existsSync(`${l.environment.assetsPath}/webp/arm/dwebp`)&&await w.promises.rm(`${l.environment.assetsPath}/webp/arm/dwebp`),w.existsSync(`${l.environment.assetsPath}/webp/arm/cwebp`)&&await w.promises.rm(`${l.environment.assetsPath}/webp/arm/cwebp`),[`${l.environment.assetsPath}/webp/x86/dwebp`,`${l.environment.assetsPath}/webp/x86/cwebp`]),Cn=async(e,t)=>{let n=(0,l.getPreferenceValues)(),i=`${l.environment.supportPath}/tmp.png`,s=t;n.imageResultHandling=="saveToDownloads"?s=c.default.join(m.homedir(),"Downloads",c.default.basename(s)):n.imageResultHandling=="saveToDesktop"?s=c.default.join(m.homedir(),"Desktop",c.default.basename(s)):(n.imageResultHandling=="copyToClipboard"||n.imageResultHandling=="openInPreview")&&(s=c.default.join(m.tmpdir(),c.default.basename(s)));let r=2;for(;w.existsSync(s)&&m.tmpdir()!=c.default.dirname(s);)s=c.default.join(c.default.dirname(s),c.default.basename(s,c.default.extname(s))+` (${r})${c.default.extname(s)}`),r++;let[o,a]=await Ls();return(0,v.execSync)(`${o} "${t}" -o "${i}" && ${e} "${i}" && ${a} "${i}" -o "${s}" ; rm "${i}"`),s},Rn=async(e,t)=>{let n=(0,l.getPreferenceValues)(),i=`${l.environment.supportPath}/tmp.bmp`,s=t;n.imageResultHandling=="saveToDownloads"?s=c.default.join(m.homedir(),"Downloads",c.default.basename(s)):n.imageResultHandling=="saveToDesktop"?s=c.default.join(m.homedir(),"Desktop",c.default.basename(s)):(n.imageResultHandling=="copyToClipboard"||n.imageResultHandling=="openInPreview")&&(s=c.default.join(m.tmpdir(),c.default.basename(s)));let r=2;for(;w.existsSync(s)&&m.tmpdir()!=c.default.dirname(s);)s=c.default.join(c.default.dirname(s),c.default.basename(s,c.default.extname(s))+` (${r})${c.default.extname(s)}`),r++;return js("BMP",t,i),(0,v.execSync)(`chmod +x ${l.environment.assetsPath}/potrace/potrace`),(0,v.execSync)(`${e} "${i}" && ${l.environment.assetsPath}/potrace/potrace -s --tight -o "${s}" "${i}"; rm "${i}"`),s},js=(e,t,n)=>{B(`use framework "Foundation"
  use scripting additions

  -- Load SVG image from file
  set svgFilePath to "${t}"
  set svgData to current application's NSData's alloc()'s initWithContentsOfFile:svgFilePath
  
  -- Create image from SVG data
  set svgImage to current application's NSImage's alloc()'s initWithData:svgData
  
  -- Convert image to PNG data
  set tiffData to svgImage's TIFFRepresentation()
  set theBitmap to current application's NSBitmapImageRep's alloc()'s initWithData:tiffData
  set pngData to theBitmap's representationUsingType:(current application's NSBitmapImageFileType${e}) |properties|:(missing value)
  
  -- Save PNG data to file
  pngData's writeToFile:"${n}" atomically:false`)};var En=(e,t)=>{let n=(0,l.getPreferenceValues)(),i=e;n.imageResultHandling=="saveToDownloads"?i=c.default.join(m.homedir(),"Downloads",c.default.basename(i)):n.imageResultHandling=="saveToDesktop"?i=c.default.join(m.homedir(),"Desktop",c.default.basename(i)):(n.imageResultHandling=="copyToClipboard"||n.imageResultHandling=="openInPreview")&&(i=c.default.join(m.tmpdir(),c.default.basename(i)));let s=2;for(;w.existsSync(i)&&m.tmpdir()!=c.default.dirname(i);)i=c.default.join(c.default.dirname(i),c.default.basename(i,c.default.extname(i))+` (${s})${c.default.extname(i)}`),s++;let r=t==0?`(transform's scaleXBy:-1 yBy:1)
    (transform's translateXBy:(-(item 1 of item 2 of pdfRect)) yBy:0)`:`(transform's scaleXBy:1 yBy:-1)
    (transform's translateXBy:0 yBy:(-(item 2 of item 2 of pdfRect)))`;return B(`use framework "Foundation"
  use framework "PDFKit"
  
  -- Load the PDF file as NSData
  set pdfData to current application's NSData's dataWithContentsOfFile:"${e}"
  
  -- Create a PDFDocument from the PDF data
  set pdfDoc to current application's PDFDocument's alloc()'s initWithData:pdfData
  
  -- Flip each page
  repeat with i from 0 to ((pdfDoc's pageCount()) - 1)
    set thePDFPage to (pdfDoc's pageAtIndex:i)
    set pdfRect to (thePDFPage's boundsForBox:(current application's kPDFDisplayBoxMediaBox))
    set flippedPdfImage to (current application's NSImage's alloc()'s initWithSize:(item 2 of pdfRect))
    
    flippedPdfImage's lockFocus()
    set transform to current application's NSAffineTransform's alloc()'s init()
    ${r}
    transform's concat()
    (thePDFPage's drawWithBox:(current application's kPDFDisplayBoxMediaBox))
    flippedPdfImage's unlockFocus()
    
    set newPage to (current application's PDFPage's alloc()'s initWithImage:flippedPdfImage)
    
    (pdfDoc's removePageAtIndex:i)
    (pdfDoc's insertPage:newPage atIndex:i)
  end repeat
  
  -- Write the modified PDF data to the file
  set flippedPdfData to pdfDoc's dataRepresentation()
  flippedPdfData's writeToFile:"${i}" atomically:false`),i};var Bs=async e=>{let t=Array.isArray(e)?e:[e],n=t.some(i=>c.default.extname(i)==".svg");await F(`use framework "Foundation"
    use scripting additions
    set pageImages to {${t.map(i=>`current application's NSURL's fileURLWithPath:"${i}"`).join(", ")}}

    set workspace to current application's NSWorkspace's sharedWorkspace()
    set config to current application's NSWorkspaceOpenConfiguration's configuration()

    ${n?`tell application "Finder"
            set safariPath to POSIX path of ((application file id "com.apple.Safari") as text)
            set safariURL to current application's NSURL's fileURLWithPath:safariPath
          end tell

          workspace's openURLs:pageImages withApplicationAtURL:safariURL configuration:config completionHandler:(missing value)
          
          tell application "Safari"
            set finished to false
            set iter to 0
            repeat while ((count of windows) = 0 or finished is not true) and iter < 10
              delay 0.5
              set iter to iter + 1

              set currentStatus to true
              repeat with doc in (path of documents as list)
                repeat with thePath in {"${t.map(i=>encodeURI(`file://${i}`)).join('", "')}"}
                  if thePath is not in doc then
                    set currentStatus to false
                  end if
                end repeat
              end repeat
              set finished to currentStatus
            end repeat
          end tell
          `:`tell application "Finder"
            set previewPath to POSIX path of ((application file id "com.apple.Preview") as text)
            set previewURL to current application's NSURL's fileURLWithPath:previewPath
          end tell

          workspace's openURLs:pageImages withApplicationAtURL:previewURL configuration:config completionHandler:(missing value)
          
          tell application "Preview"
            set finished to false
            set iter to 0
            repeat while ((count of windows) = 0 or finished is not true) and iter < 10
              delay 0.5
              set iter to iter + 1

              set currentStatus to true
              repeat with doc in (path of documents as list)
                repeat with thePath in {"${t.join('", "')}"}
                  if thePath is not in doc then
                    set currentStatus to false
                  end if
                end repeat
              end repeat
              set finished to currentStatus
            end repeat
          end tell`}`)},vn=e=>{let t=Array.isArray(e)?e:[e];for(let n of t)w.unlinkSync(n)},Us=()=>B(`use framework "Foundation"
    use scripting additions
    set workspace to current application's NSWorkspace's sharedWorkspace()
    set runningApps to workspace's runningApplications()
    
    set targetApp to missing value
    repeat with theApp in runningApps
      if theApp's ownsMenuBar() then
        set targetApp to theApp
        exit repeat
      end if
    end repeat
    
    if targetApp is missing value then
      return "Finder"
    else
      return targetApp's localizedName() as text
    end if`),Ms=()=>{let e="Finder";try{e=Us()}catch{console.error("Couldn't get frontmost application")}try{if(e=="Path Finder")return B(`tell application "Path Finder"
          if 1 \u2264 (count finder windows) then
            get POSIX path of (target of finder window 1)
          else
            get POSIX path of desktop
          end if
        end tell`)}catch{console.error("Couldn't get current directory of Path Finder")}return B(`tell application "Finder"
      if 1 <= (count Finder windows) then
        get POSIX path of (target of window 1 as alias)
      else
        get POSIX path of (desktop as alias)
      end if
    end tell`)},An=(e,t=!1)=>{let n=(0,l.getPreferenceValues)();return e.map(i=>{let s=i;if(n.imageResultHandling=="saveToDownloads"?s=c.default.join(m.homedir(),"Downloads",c.default.basename(s)):n.imageResultHandling=="saveToDesktop"?s=c.default.join(m.homedir(),"Desktop",c.default.basename(s)):(n.imageResultHandling=="saveInContainingFolder"||n.imageResultHandling=="replaceOriginal")&&(n.inputMethod=="Clipboard"||t)?s=c.default.join(Ms(),c.default.basename(s)):(n.imageResultHandling=="copyToClipboard"||n.imageResultHandling=="openInPreview")&&(s=c.default.join(m.tmpdir(),c.default.basename(s))),n.imageResultHandling!="replaceOriginal"&&m.tmpdir()!=c.default.dirname(s)){let r=2;for(;w.existsSync(s);)s=c.default.join(c.default.dirname(s),c.default.basename(s,c.default.extname(s))+` (${r})${c.default.extname(s)}`),r++}return s})},$n=async(e,t,n)=>{console.error(t),n?(n.title=e,n.message=t.message,n.style=l.Toast.Style.Failure,n.primaryAction={title:"Copy Error",onAction:async()=>{await l.Clipboard.copy(t.message)}}):n=await(0,l.showToast)({title:e,message:t.message,style:l.Toast.Style.Failure,primaryAction:{title:"Copy Error",onAction:async()=>{await l.Clipboard.copy(t.message)}}})};async function Ae(e,t){let n='"'+e.join('" "')+'"',i=An(e),s=t==0?"horizontal":"vertical";if(n.toLowerCase().includes("webp")||n.toLowerCase().includes("svg")||n.toLowerCase().includes("pdf")){let r=[];for(let o of e)if(o.toLowerCase().endsWith("webp"))r.push(await Cn(`sips --flip ${s}`,o));else if(o.toLowerCase().endsWith("svg"))r.push(await Rn(`sips --flip ${s}`,o));else if(o.toLowerCase().endsWith("pdf"))r.push(En(o,t));else{let a=i[e.indexOf(o)];r.push(a),(0,ae.execSync)(`sips --flip ${s} -o "${a}" "${o}"`)}await Re(r)}else{let r=i.length==1?i[0]:Ee.default.join(Ee.default.dirname(i[0]),"flipped");i.length>1&&(0,ae.execSync)(`mkdir -p "${r}"`),(0,ae.execSync)(`sips --flip ${s} -o "${r}" ${n}`),await Re(i)}}var C=require("@raycast/api");async function $e(e){if(e.selectedImages.length===0||e.selectedImages.length===1&&e.selectedImages[0]===""){await(0,C.showToast)({title:"No images selected",style:C.Toast.Style.Failure});return}let t=await(0,C.showToast)({title:e.inProgressMessage,style:C.Toast.Style.Animated}),n=`image${e.selectedImages.length===1?"":"s"}`;try{await e.operation(),t.title=`${e.successMessage} ${e.selectedImages.length.toString()} ${n}`,t.style=C.Toast.Style.Success}catch(i){await $n(`${e.failureMessage} ${e.selectedImages.length.toString()} ${n}`,i,t)}finally{await Dn()}}async function Nn(){let e=await Fn();await $e({operation:()=>Ae(e,0),selectedImages:e,inProgressMessage:"Flipping in progress...",successMessage:"Flipped",failureMessage:"Failed to flip"})}
