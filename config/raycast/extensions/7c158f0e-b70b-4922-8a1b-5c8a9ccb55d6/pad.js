"use strict";var Nn=Object.create;var V=Object.defineProperty;var On=Object.getOwnPropertyDescriptor;var kn=Object.getOwnPropertyNames;var Gn=Object.getPrototypeOf,Ln=Object.prototype.hasOwnProperty;var p=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),jn=(e,t)=>{for(var n in t)V(e,n,{get:t[n],enumerable:!0})},Ge=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of kn(t))!Ln.call(e,s)&&s!==n&&V(e,s,{get:()=>t[s],enumerable:!(i=On(t,s))||i.enumerable});return e};var B=(e,t,n)=>(n=e!=null?Nn(Gn(e)):{},Ge(t||!e||!e.__esModule?V(n,"default",{value:e,enumerable:!0}):n,e)),Bn=e=>Ge(V({},"__esModule",{value:!0}),e);var Me=p((qs,Ue)=>{Ue.exports=Be;Be.sync=Mn;var Le=require("fs");function Un(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var i=0;i<n.length;i++){var s=n[i].toLowerCase();if(s&&e.substr(-s.length).toLowerCase()===s)return!0}return!1}function je(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:Un(t,n)}function Be(e,t,n){Le.stat(e,function(i,s){n(i,i?!1:je(s,e,t))})}function Mn(e,t){return je(Le.statSync(e),e,t)}});var Xe=p((Hs,_e)=>{_e.exports=He;He.sync=qn;var qe=require("fs");function He(e,t,n){qe.stat(e,function(i,s){n(i,i?!1:We(s,t))})}function qn(e,t){return We(qe.statSync(e),t)}function We(e,t){return e.isFile()&&Hn(e,t)}function Hn(e,t){var n=e.mode,i=e.uid,s=e.gid,r=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),o=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),d=parseInt("010",8),u=parseInt("001",8),m=a|d,y=n&u||n&d&&s===o||n&a&&i===r||n&m&&r===0;return y}});var Ve=p((_s,Ke)=>{var Ws=require("fs"),z;process.platform==="win32"||global.TESTING_WINDOWS?z=Me():z=Xe();Ke.exports=ce;ce.sync=Wn;function ce(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(i,s){ce(e,t||{},function(r,o){r?s(r):i(o)})})}z(e,t||{},function(i,s){i&&(i.code==="EACCES"||t&&t.ignoreErrors)&&(i=null,s=!1),n(i,s)})}function Wn(e,t){try{return z.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var tt=p((Xs,et)=>{var A=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",ze=require("path"),_n=A?";":":",Je=Ve(),Ze=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),Ye=(e,t)=>{let n=t.colon||_n,i=e.match(/\//)||A&&e.match(/\\/)?[""]:[...A?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],s=A?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",r=A?s.split(n):[""];return A&&e.indexOf(".")!==-1&&r[0]!==""&&r.unshift(""),{pathEnv:i,pathExt:r,pathExtExe:s}},Qe=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:i,pathExt:s,pathExtExe:r}=Ye(e,t),o=[],a=u=>new Promise((m,y)=>{if(u===i.length)return t.all&&o.length?m(o):y(Ze(e));let w=i[u],P=/^".*"$/.test(w)?w.slice(1,-1):w,x=ze.join(P,e),I=!P&&/^\.[\\\/]/.test(e)?e.slice(0,2)+x:x;m(d(I,u,0))}),d=(u,m,y)=>new Promise((w,P)=>{if(y===s.length)return w(a(m+1));let x=s[y];Je(u+x,{pathExt:r},(I,E)=>{if(!I&&E)if(t.all)o.push(u+x);else return w(u+x);return w(d(u,m,y+1))})});return n?a(0).then(u=>n(null,u),n):a(0)},Xn=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:i,pathExtExe:s}=Ye(e,t),r=[];for(let o=0;o<n.length;o++){let a=n[o],d=/^".*"$/.test(a)?a.slice(1,-1):a,u=ze.join(d,e),m=!d&&/^\.[\\\/]/.test(e)?e.slice(0,2)+u:u;for(let y=0;y<i.length;y++){let w=m+i[y];try{if(Je.sync(w,{pathExt:s}))if(t.all)r.push(w);else return w}catch{}}}if(t.all&&r.length)return r;if(t.nothrow)return null;throw Ze(e)};et.exports=Qe;Qe.sync=Xn});var pe=p((Ks,le)=>{"use strict";var nt=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(i=>i.toUpperCase()==="PATH")||"Path"};le.exports=nt;le.exports.default=nt});var ot=p((Vs,rt)=>{"use strict";var it=require("path"),Kn=tt(),Vn=pe();function st(e,t){let n=e.options.env||process.env,i=process.cwd(),s=e.options.cwd!=null,r=s&&process.chdir!==void 0&&!process.chdir.disabled;if(r)try{process.chdir(e.options.cwd)}catch{}let o;try{o=Kn.sync(e.command,{path:n[Vn({env:n})],pathExt:t?it.delimiter:void 0})}catch{}finally{r&&process.chdir(i)}return o&&(o=it.resolve(s?e.options.cwd:"",o)),o}function zn(e){return st(e)||st(e,!0)}rt.exports=zn});var at=p((zs,ue)=>{"use strict";var de=/([()\][%!^"`<>&|;, *?])/g;function Jn(e){return e=e.replace(de,"^$1"),e}function Zn(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(de,"^$1"),t&&(e=e.replace(de,"^$1")),e}ue.exports.command=Jn;ue.exports.argument=Zn});var lt=p((Js,ct)=>{"use strict";ct.exports=/^#!(.*)/});var dt=p((Zs,pt)=>{"use strict";var Yn=lt();pt.exports=(e="")=>{let t=e.match(Yn);if(!t)return null;let[n,i]=t[0].replace(/#! ?/,"").split(" "),s=n.split("/").pop();return s==="env"?i:i?`${s} ${i}`:s}});var ft=p((Ys,ut)=>{"use strict";var fe=require("fs"),Qn=dt();function ei(e){let n=Buffer.alloc(150),i;try{i=fe.openSync(e,"r"),fe.readSync(i,n,0,150,0),fe.closeSync(i)}catch{}return Qn(n.toString())}ut.exports=ei});var wt=p((Qs,gt)=>{"use strict";var ti=require("path"),mt=ot(),ht=at(),ni=ft(),ii=process.platform==="win32",si=/\.(?:com|exe)$/i,ri=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function oi(e){e.file=mt(e);let t=e.file&&ni(e.file);return t?(e.args.unshift(e.file),e.command=t,mt(e)):e.file}function ai(e){if(!ii)return e;let t=oi(e),n=!si.test(t);if(e.options.forceShell||n){let i=ri.test(t);e.command=ti.normalize(e.command),e.command=ht.command(e.command),e.args=e.args.map(r=>ht.argument(r,i));let s=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${s}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function ci(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let i={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?i:ai(i)}gt.exports=ci});var Pt=p((er,yt)=>{"use strict";var me=process.platform==="win32";function he(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function li(e,t){if(!me)return;let n=e.emit;e.emit=function(i,s){if(i==="exit"){let r=St(s,t,"spawn");if(r)return n.call(e,"error",r)}return n.apply(e,arguments)}}function St(e,t){return me&&e===1&&!t.file?he(t.original,"spawn"):null}function pi(e,t){return me&&e===1&&!t.file?he(t.original,"spawnSync"):null}yt.exports={hookChildProcess:li,verifyENOENT:St,verifyENOENTSync:pi,notFoundError:he}});var bt=p((tr,$)=>{"use strict";var xt=require("child_process"),ge=wt(),we=Pt();function It(e,t,n){let i=ge(e,t,n),s=xt.spawn(i.command,i.args,i.options);return we.hookChildProcess(s,i),s}function di(e,t,n){let i=ge(e,t,n),s=xt.spawnSync(i.command,i.args,i.options);return s.error=s.error||we.verifyENOENTSync(s.status,i),s}$.exports=It;$.exports.spawn=It;$.exports.sync=di;$.exports._parse=ge;$.exports._enoent=we});var Tt=p((nr,vt)=>{"use strict";vt.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var Ct=p((ir,M)=>{"use strict";var U=require("path"),Dt=pe(),Ft=e=>{e={cwd:process.cwd(),path:process.env[Dt()],execPath:process.execPath,...e};let t,n=U.resolve(e.cwd),i=[];for(;t!==n;)i.push(U.join(n,"node_modules/.bin")),t=n,n=U.resolve(n,"..");let s=U.resolve(e.cwd,e.execPath,"..");return i.push(s),i.concat(e.path).join(U.delimiter)};M.exports=Ft;M.exports.default=Ft;M.exports.env=e=>{e={env:process.env,...e};let t={...e.env},n=Dt({env:t});return e.path=t[n],t[n]=M.exports(e),t}});var Et=p((sr,Se)=>{"use strict";var Rt=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};Se.exports=Rt;Se.exports.default=Rt});var $t=p((rr,Z)=>{"use strict";var ui=Et(),J=new WeakMap,At=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,i=0,s=e.displayName||e.name||"<anonymous>",r=function(...o){if(J.set(r,++i),i===1)n=e.apply(this,o),e=null;else if(t.throw===!0)throw new Error(`Function \`${s}\` can only be called once`);return n};return ui(r,e),J.set(r,i),r};Z.exports=At;Z.exports.default=At;Z.exports.callCount=e=>{if(!J.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return J.get(e)}});var Nt=p(Y=>{"use strict";Object.defineProperty(Y,"__esModule",{value:!0});Y.SIGNALS=void 0;var fi=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];Y.SIGNALS=fi});var ye=p(N=>{"use strict";Object.defineProperty(N,"__esModule",{value:!0});N.SIGRTMAX=N.getRealtimeSignals=void 0;var mi=function(){let e=kt-Ot+1;return Array.from({length:e},hi)};N.getRealtimeSignals=mi;var hi=function(e,t){return{name:`SIGRT${t+1}`,number:Ot+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},Ot=34,kt=64;N.SIGRTMAX=kt});var Gt=p(Q=>{"use strict";Object.defineProperty(Q,"__esModule",{value:!0});Q.getSignals=void 0;var gi=require("os"),wi=Nt(),Si=ye(),yi=function(){let e=(0,Si.getRealtimeSignals)();return[...wi.SIGNALS,...e].map(Pi)};Q.getSignals=yi;var Pi=function({name:e,number:t,description:n,action:i,forced:s=!1,standard:r}){let{signals:{[e]:o}}=gi.constants,a=o!==void 0;return{name:e,number:a?o:t,description:n,supported:a,action:i,forced:s,standard:r}}});var jt=p(O=>{"use strict";Object.defineProperty(O,"__esModule",{value:!0});O.signalsByNumber=O.signalsByName=void 0;var xi=require("os"),Lt=Gt(),Ii=ye(),bi=function(){return(0,Lt.getSignals)().reduce(vi,{})},vi=function(e,{name:t,number:n,description:i,supported:s,action:r,forced:o,standard:a}){return{...e,[t]:{name:t,number:n,description:i,supported:s,action:r,forced:o,standard:a}}},Ti=bi();O.signalsByName=Ti;var Di=function(){let e=(0,Lt.getSignals)(),t=Ii.SIGRTMAX+1,n=Array.from({length:t},(i,s)=>Fi(s,e));return Object.assign({},...n)},Fi=function(e,t){let n=Ci(e,t);if(n===void 0)return{};let{name:i,description:s,supported:r,action:o,forced:a,standard:d}=n;return{[e]:{name:i,number:e,description:s,supported:r,action:o,forced:a,standard:d}}},Ci=function(e,t){let n=t.find(({name:i})=>xi.constants.signals[i]===e);return n!==void 0?n:t.find(i=>i.number===e)},Ri=Di();O.signalsByNumber=Ri});var Ut=p((pr,Bt)=>{"use strict";var{signalsByName:Ei}=jt(),Ai=({timedOut:e,timeout:t,errorCode:n,signal:i,signalDescription:s,exitCode:r,isCanceled:o})=>e?`timed out after ${t} milliseconds`:o?"was canceled":n!==void 0?`failed with ${n}`:i!==void 0?`was killed with ${i} (${s})`:r!==void 0?`failed with exit code ${r}`:"failed",$i=({stdout:e,stderr:t,all:n,error:i,signal:s,exitCode:r,command:o,escapedCommand:a,timedOut:d,isCanceled:u,killed:m,parsed:{options:{timeout:y}}})=>{r=r===null?void 0:r,s=s===null?void 0:s;let w=s===void 0?void 0:Ei[s].description,P=i&&i.code,I=`Command ${Ai({timedOut:d,timeout:y,errorCode:P,signal:s,signalDescription:w,exitCode:r,isCanceled:u})}: ${o}`,E=Object.prototype.toString.call(i)==="[object Error]",X=E?`${I}
${i.message}`:I,K=[X,t,e].filter(Boolean).join(`
`);return E?(i.originalMessage=i.message,i.message=K):i=new Error(K),i.shortMessage=X,i.command=o,i.escapedCommand=a,i.exitCode=r,i.signal=s,i.signalDescription=w,i.stdout=e,i.stderr=t,n!==void 0&&(i.all=n),"bufferedData"in i&&delete i.bufferedData,i.failed=!0,i.timedOut=!!d,i.isCanceled=u,i.killed=m&&!d,i};Bt.exports=$i});var qt=p((dr,Pe)=>{"use strict";var ee=["stdin","stdout","stderr"],Ni=e=>ee.some(t=>e[t]!==void 0),Mt=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return ee.map(i=>e[i]);if(Ni(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${ee.map(i=>`\`${i}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,ee.length);return Array.from({length:n},(i,s)=>t[s])};Pe.exports=Mt;Pe.exports.node=e=>{let t=Mt(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var Ht=p((ur,te)=>{te.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&te.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&te.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var Vt=p((fr,L)=>{var f=global.process,D=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};D(f)?(Wt=require("assert"),k=Ht(),_t=/^win/i.test(f.platform),q=require("events"),typeof q!="function"&&(q=q.EventEmitter),f.__signal_exit_emitter__?h=f.__signal_exit_emitter__:(h=f.__signal_exit_emitter__=new q,h.count=0,h.emitted={}),h.infinite||(h.setMaxListeners(1/0),h.infinite=!0),L.exports=function(e,t){if(!D(global.process))return function(){};Wt.equal(typeof e,"function","a callback must be provided for exit handler"),G===!1&&xe();var n="exit";t&&t.alwaysLast&&(n="afterexit");var i=function(){h.removeListener(n,e),h.listeners("exit").length===0&&h.listeners("afterexit").length===0&&ne()};return h.on(n,e),i},ne=function(){!G||!D(global.process)||(G=!1,k.forEach(function(t){try{f.removeListener(t,ie[t])}catch{}}),f.emit=se,f.reallyExit=Ie,h.count-=1)},L.exports.unload=ne,F=function(t,n,i){h.emitted[t]||(h.emitted[t]=!0,h.emit(t,n,i))},ie={},k.forEach(function(e){ie[e]=function(){if(D(global.process)){var n=f.listeners(e);n.length===h.count&&(ne(),F("exit",null,e),F("afterexit",null,e),_t&&e==="SIGHUP"&&(e="SIGINT"),f.kill(f.pid,e))}}}),L.exports.signals=function(){return k},G=!1,xe=function(){G||!D(global.process)||(G=!0,h.count+=1,k=k.filter(function(t){try{return f.on(t,ie[t]),!0}catch{return!1}}),f.emit=Kt,f.reallyExit=Xt)},L.exports.load=xe,Ie=f.reallyExit,Xt=function(t){D(global.process)&&(f.exitCode=t||0,F("exit",f.exitCode,null),F("afterexit",f.exitCode,null),Ie.call(f,f.exitCode))},se=f.emit,Kt=function(t,n){if(t==="exit"&&D(global.process)){n!==void 0&&(f.exitCode=n);var i=se.apply(this,arguments);return F("exit",f.exitCode,null),F("afterexit",f.exitCode,null),i}else return se.apply(this,arguments)}):L.exports=function(){return function(){}};var Wt,k,_t,q,h,ne,F,ie,G,xe,Ie,Xt,se,Kt});var Jt=p((mr,zt)=>{"use strict";var Oi=require("os"),ki=Vt(),Gi=1e3*5,Li=(e,t="SIGTERM",n={})=>{let i=e(t);return ji(e,t,n,i),i},ji=(e,t,n,i)=>{if(!Bi(t,n,i))return;let s=Mi(n),r=setTimeout(()=>{e("SIGKILL")},s);r.unref&&r.unref()},Bi=(e,{forceKillAfterTimeout:t},n)=>Ui(e)&&t!==!1&&n,Ui=e=>e===Oi.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Mi=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Gi;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},qi=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Hi=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Wi=(e,{timeout:t,killSignal:n="SIGTERM"},i)=>{if(t===0||t===void 0)return i;let s,r=new Promise((a,d)=>{s=setTimeout(()=>{Hi(e,n,d)},t)}),o=i.finally(()=>{clearTimeout(s)});return Promise.race([r,o])},_i=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Xi=async(e,{cleanup:t,detached:n},i)=>{if(!t||n)return i;let s=ki(()=>{e.kill()});return i.finally(()=>{s()})};zt.exports={spawnedKill:Li,spawnedCancel:qi,setupTimeout:Wi,validateTimeout:_i,setExitHandler:Xi}});var Yt=p((hr,Zt)=>{"use strict";var b=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";b.writable=e=>b(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";b.readable=e=>b(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";b.duplex=e=>b.writable(e)&&b.readable(e);b.transform=e=>b.duplex(e)&&typeof e._transform=="function";Zt.exports=b});var en=p((gr,Qt)=>{"use strict";var{PassThrough:Ki}=require("stream");Qt.exports=e=>{e={...e};let{array:t}=e,{encoding:n}=e,i=n==="buffer",s=!1;t?s=!(n||i):n=n||"utf8",i&&(n=null);let r=new Ki({objectMode:s});n&&r.setEncoding(n);let o=0,a=[];return r.on("data",d=>{a.push(d),s?o=a.length:o+=d.length}),r.getBufferedValue=()=>t?a:i?Buffer.concat(a,o):a.join(""),r.getBufferedLength=()=>o,r}});var tn=p((wr,H)=>{"use strict";var{constants:Vi}=require("buffer"),zi=require("stream"),{promisify:Ji}=require("util"),Zi=en(),Yi=Ji(zi.pipeline),re=class extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}};async function be(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:n}=t,i=Zi(t);return await new Promise((s,r)=>{let o=a=>{a&&i.getBufferedLength()<=Vi.MAX_LENGTH&&(a.bufferedData=i.getBufferedValue()),r(a)};(async()=>{try{await Yi(e,i),s()}catch(a){o(a)}})(),i.on("data",()=>{i.getBufferedLength()>n&&o(new re)})}),i.getBufferedValue()}H.exports=be;H.exports.buffer=(e,t)=>be(e,{...t,encoding:"buffer"});H.exports.array=(e,t)=>be(e,{...t,array:!0});H.exports.MaxBufferError=re});var sn=p((Sr,nn)=>{"use strict";var{PassThrough:Qi}=require("stream");nn.exports=function(){var e=[],t=new Qi({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=i,t.on("unpipe",s),Array.prototype.slice.call(arguments).forEach(n),t;function n(r){return Array.isArray(r)?(r.forEach(n),this):(e.push(r),r.once("end",s.bind(null,r)),r.once("error",t.emit.bind(t,"error")),r.pipe(t,{end:!1}),this)}function i(){return e.length==0}function s(r){e=e.filter(function(o){return o!==r}),!e.length&&t.readable&&t.end()}}});var cn=p((yr,an)=>{"use strict";var on=Yt(),rn=tn(),es=sn(),ts=(e,t)=>{t===void 0||e.stdin===void 0||(on(t)?t.pipe(e.stdin):e.stdin.end(t))},ns=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=es();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},ve=async(e,t)=>{if(e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},Te=(e,{encoding:t,buffer:n,maxBuffer:i})=>{if(!(!e||!n))return t?rn(e,{encoding:t,maxBuffer:i}):rn.buffer(e,{maxBuffer:i})},is=async({stdout:e,stderr:t,all:n},{encoding:i,buffer:s,maxBuffer:r},o)=>{let a=Te(e,{encoding:i,buffer:s,maxBuffer:r}),d=Te(t,{encoding:i,buffer:s,maxBuffer:r}),u=Te(n,{encoding:i,buffer:s,maxBuffer:r*2});try{return await Promise.all([o,a,d,u])}catch(m){return Promise.all([{error:m,signal:m.signal,timedOut:m.timedOut},ve(e,a),ve(t,d),ve(n,u)])}},ss=({input:e})=>{if(on(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};an.exports={handleInput:ts,makeAllStream:ns,getSpawnedResult:is,validateInputSync:ss}});var pn=p((Pr,ln)=>{"use strict";var rs=(async()=>{})().constructor.prototype,os=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(rs,e)]),as=(e,t)=>{for(let[n,i]of os){let s=typeof t=="function"?(...r)=>Reflect.apply(i.value,t(),r):i.value.bind(t);Reflect.defineProperty(e,n,{...i,value:s})}return e},cs=e=>new Promise((t,n)=>{e.on("exit",(i,s)=>{t({exitCode:i,signal:s})}),e.on("error",i=>{n(i)}),e.stdin&&e.stdin.on("error",i=>{n(i)})});ln.exports={mergePromise:as,getSpawnedPromise:cs}});var fn=p((xr,un)=>{"use strict";var dn=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],ls=/^[\w.-]+$/,ps=/"/g,ds=e=>typeof e!="string"||ls.test(e)?e:`"${e.replace(ps,'\\"')}"`,us=(e,t)=>dn(e,t).join(" "),fs=(e,t)=>dn(e,t).map(n=>ds(n)).join(" "),ms=/ +/g,hs=e=>{let t=[];for(let n of e.trim().split(ms)){let i=t[t.length-1];i&&i.endsWith("\\")?t[t.length-1]=`${i.slice(0,-1)} ${n}`:t.push(n)}return t};un.exports={joinCommand:us,getEscapedCommand:fs,parseCommand:hs}});var Pn=p((Ir,j)=>{"use strict";var gs=require("path"),De=require("child_process"),ws=bt(),Ss=Tt(),ys=Ct(),Ps=$t(),oe=Ut(),hn=qt(),{spawnedKill:xs,spawnedCancel:Is,setupTimeout:bs,validateTimeout:vs,setExitHandler:Ts}=Jt(),{handleInput:Ds,getSpawnedResult:Fs,makeAllStream:Cs,validateInputSync:Rs}=cn(),{mergePromise:mn,getSpawnedPromise:Es}=pn(),{joinCommand:gn,parseCommand:wn,getEscapedCommand:Sn}=fn(),As=1e3*1e3*100,$s=({env:e,extendEnv:t,preferLocal:n,localDir:i,execPath:s})=>{let r=t?{...process.env,...e}:e;return n?ys.env({env:r,cwd:i,execPath:s}):r},yn=(e,t,n={})=>{let i=ws._parse(e,t,n);return e=i.command,t=i.args,n=i.options,n={maxBuffer:As,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...n},n.env=$s(n),n.stdio=hn(n),process.platform==="win32"&&gs.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:i}},W=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?Ss(t):t,ae=(e,t,n)=>{let i=yn(e,t,n),s=gn(e,t),r=Sn(e,t);vs(i.options);let o;try{o=De.spawn(i.file,i.args,i.options)}catch(P){let x=new De.ChildProcess,I=Promise.reject(oe({error:P,stdout:"",stderr:"",all:"",command:s,escapedCommand:r,parsed:i,timedOut:!1,isCanceled:!1,killed:!1}));return mn(x,I)}let a=Es(o),d=bs(o,i.options,a),u=Ts(o,i.options,d),m={isCanceled:!1};o.kill=xs.bind(null,o.kill.bind(o)),o.cancel=Is.bind(null,o,m);let w=Ps(async()=>{let[{error:P,exitCode:x,signal:I,timedOut:E},X,K,$n]=await Fs(o,i.options,u),$e=W(i.options,X),Ne=W(i.options,K),Oe=W(i.options,$n);if(P||x!==0||I!==null){let ke=oe({error:P,exitCode:x,signal:I,stdout:$e,stderr:Ne,all:Oe,command:s,escapedCommand:r,parsed:i,timedOut:E,isCanceled:m.isCanceled,killed:o.killed});if(!i.options.reject)return ke;throw ke}return{command:s,escapedCommand:r,exitCode:0,stdout:$e,stderr:Ne,all:Oe,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return Ds(o,i.options.input),o.all=Cs(o,i.options),mn(o,w)};j.exports=ae;j.exports.sync=(e,t,n)=>{let i=yn(e,t,n),s=gn(e,t),r=Sn(e,t);Rs(i.options);let o;try{o=De.spawnSync(i.file,i.args,i.options)}catch(u){throw oe({error:u,stdout:"",stderr:"",all:"",command:s,escapedCommand:r,parsed:i,timedOut:!1,isCanceled:!1,killed:!1})}let a=W(i.options,o.stdout,o.error),d=W(i.options,o.stderr,o.error);if(o.error||o.status!==0||o.signal!==null){let u=oe({stdout:a,stderr:d,error:o.error,signal:o.signal,exitCode:o.status,command:s,escapedCommand:r,parsed:i,timedOut:o.error&&o.error.code==="ETIMEDOUT",isCanceled:!1,killed:o.signal!==null});if(!i.options.reject)return u;throw u}return{command:s,escapedCommand:r,exitCode:0,stdout:a,stderr:d,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};j.exports.command=(e,t)=>{let[n,...i]=wn(e);return ae(n,i,t)};j.exports.commandSync=(e,t)=>{let[n,...i]=wn(e);return ae.sync(n,i,t)};j.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let i=hn.node(n),s=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:r=process.execPath,nodeOptions:o=s}=n;return ae(r,[...o,e,...Array.isArray(t)?t:[]],{...n,stdin:void 0,stdout:void 0,stderr:void 0,stdio:i,shell:!1})}});var Us={};jn(Us,{default:()=>An});module.exports=Bn(Us);var T=require("@raycast/api");var Re=require("child_process");var v=require("child_process"),g=B(require("fs")),S=B(require("os")),l=B(require("path"));var Fe=B(require("node:process"),1),Ce=B(Pn(),1);async function C(e,{humanReadableOutput:t=!0}={}){if(Fe.default.platform!=="darwin")throw new Error("macOS only");let n=t?[]:["-ss"],{stdout:i}=await(0,Ce.default)("osascript",["-e",e,n]);return i}function _(e,{humanReadableOutput:t=!0}={}){if(Fe.default.platform!=="darwin")throw new Error("macOS only");let n=t?[]:["-ss"],{stdout:i}=Ce.default.sync("osascript",["-e",e,...n]);return i}var c=require("@raycast/api");var xn=async()=>C(`use framework "AppKit"
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
      
      return filePaths`),In=async e=>{let t=Array.isArray(e)?e:[e];await C(`use framework "Foundation"
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
      end if`)};var Ns=async()=>C(`set imageTypes to {"PNG", "JPG", "JPEG", "TIF", "HEIF", "GIF", "ICO", "ICNS", "ASTC", "BMP", "DDS", "EXR", "JP2", "KTX", "Portable Bitmap", "Adobe Photoshop", "PVR", "TGA", "WebP", "SVG", "PDF", "HEIC"}
    
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
    end tell`),Os=async()=>C(`set imageTypes to {"PNG", "JPG", "JPEG", "TIF", "HEIF", "GIF", "ICO", "ICNS", "ASTC", "BMP", "DDS", "EXR", "JP2", "KTX", "Portable Bitmap", "Adobe Photoshop", "PVR", "TGA", "WebP", "SVG", "PDF", "HEIC"}

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
    end tell`),vn=async()=>{let t=(await c.LocalStorage.getItem("itemsToRemove")??"").toString().split(", ");for(let n of t)g.existsSync(n)&&await g.promises.rm(n);await c.LocalStorage.removeItem("itemsToRemove")},Tn=async()=>{let e=[],n=(0,c.getPreferenceValues)().inputMethod,i=!1;if(n=="Clipboard")try{let o=(await xn()).split(", ");if(await c.LocalStorage.setItem("itemsToRemove",o.join(", ")),o.filter(a=>a.trim().length>0).length>0)return o}catch{console.error("Couldn't get images from clipboard"),i=!0}let s=n;try{s=(await(0,c.getFrontmostApplication)()).name}catch{console.error("Couldn't get frontmost application")}try{if(n=="Path Finder"&&((await Os()).split(", ").forEach(a=>{e.includes(a)||e.push(a)}),e.length>0))return e}catch{console.error("Couldn't get images from Path Finder"),i=!0}let r=(await Ns()).split(", ");return s=="Finder"||n=="Finder"||i?e.push(...r):r.forEach(o=>{o.split("/").at(-2)=="Desktop"&&!e.includes(o)&&e.push(o)}),e},Dn=async e=>{let t=(0,c.getPreferenceValues)();t.imageResultHandling=="copyToClipboard"?(await In(e),bn(e)):t.imageResultHandling=="openInPreview"&&(console.log(e),await Ls(e),bn(e))},ks=async()=>(S.cpus()[0].model.includes("Apple")?"arm":"x86")=="arm"?((0,v.execSync)(`chmod +x ${c.environment.assetsPath}/webp/arm/dwebp`),(0,v.execSync)(`chmod +x ${c.environment.assetsPath}/webp/arm/cwebp`),g.existsSync(`${c.environment.assetsPath}/webp/x86/dwebp`)&&await g.promises.rm(`${c.environment.assetsPath}/webp/x86/dwebp`),g.existsSync(`${c.environment.assetsPath}/webp/x86/cwebp`)&&await g.promises.rm(`${c.environment.assetsPath}/webp/x86/cwebp`),[`${c.environment.assetsPath}/webp/arm/dwebp`,`${c.environment.assetsPath}/webp/arm/cwebp`]):((0,v.execSync)(`chmod +x ${c.environment.assetsPath}/webp/x86/dwebp`),(0,v.execSync)(`chmod +x ${c.environment.assetsPath}/webp/x86/cwebp`),g.existsSync(`${c.environment.assetsPath}/webp/arm/dwebp`)&&await g.promises.rm(`${c.environment.assetsPath}/webp/arm/dwebp`),g.existsSync(`${c.environment.assetsPath}/webp/arm/cwebp`)&&await g.promises.rm(`${c.environment.assetsPath}/webp/arm/cwebp`),[`${c.environment.assetsPath}/webp/x86/dwebp`,`${c.environment.assetsPath}/webp/x86/cwebp`]),Fn=async(e,t)=>{let n=(0,c.getPreferenceValues)(),i=`${c.environment.supportPath}/tmp.png`,s=t;n.imageResultHandling=="saveToDownloads"?s=l.default.join(S.homedir(),"Downloads",l.default.basename(s)):n.imageResultHandling=="saveToDesktop"?s=l.default.join(S.homedir(),"Desktop",l.default.basename(s)):(n.imageResultHandling=="copyToClipboard"||n.imageResultHandling=="openInPreview")&&(s=l.default.join(S.tmpdir(),l.default.basename(s)));let r=2;for(;g.existsSync(s)&&S.tmpdir()!=l.default.dirname(s);)s=l.default.join(l.default.dirname(s),l.default.basename(s,l.default.extname(s))+` (${r})${l.default.extname(s)}`),r++;let[o,a]=await ks();return(0,v.execSync)(`${o} "${t}" -o "${i}" && ${e} "${i}" && ${a} "${i}" -o "${s}" ; rm "${i}"`),s},Cn=async(e,t)=>{let n=(0,c.getPreferenceValues)(),i=`${c.environment.supportPath}/tmp.bmp`,s=t;n.imageResultHandling=="saveToDownloads"?s=l.default.join(S.homedir(),"Downloads",l.default.basename(s)):n.imageResultHandling=="saveToDesktop"?s=l.default.join(S.homedir(),"Desktop",l.default.basename(s)):(n.imageResultHandling=="copyToClipboard"||n.imageResultHandling=="openInPreview")&&(s=l.default.join(S.tmpdir(),l.default.basename(s)));let r=2;for(;g.existsSync(s)&&S.tmpdir()!=l.default.dirname(s);)s=l.default.join(l.default.dirname(s),l.default.basename(s,l.default.extname(s))+` (${r})${l.default.extname(s)}`),r++;return Gs("BMP",t,i),(0,v.execSync)(`chmod +x ${c.environment.assetsPath}/potrace/potrace`),(0,v.execSync)(`${e} "${i}" && ${c.environment.assetsPath}/potrace/potrace -s --tight -o "${s}" "${i}"; rm "${i}"`),s},Gs=(e,t,n)=>{_(`use framework "Foundation"
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
  pngData's writeToFile:"${n}" atomically:false`)};var Ls=async e=>{let t=Array.isArray(e)?e:[e],n=t.some(i=>l.default.extname(i)==".svg");await C(`use framework "Foundation"
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
          end tell`}`)},bn=e=>{let t=Array.isArray(e)?e:[e];for(let n of t)g.unlinkSync(n)},js=()=>_(`use framework "Foundation"
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
    end if`),Bs=()=>{let e="Finder";try{e=js()}catch{console.error("Couldn't get frontmost application")}try{if(e=="Path Finder")return _(`tell application "Path Finder"
          if 1 \u2264 (count finder windows) then
            get POSIX path of (target of finder window 1)
          else
            get POSIX path of desktop
          end if
        end tell`)}catch{console.error("Couldn't get current directory of Path Finder")}return _(`tell application "Finder"
      if 1 <= (count Finder windows) then
        get POSIX path of (target of window 1 as alias)
      else
        get POSIX path of (desktop as alias)
      end if
    end tell`)},Rn=(e,t=!1)=>{let n=(0,c.getPreferenceValues)();return e.map(i=>{let s=i;if(n.imageResultHandling=="saveToDownloads"?s=l.default.join(S.homedir(),"Downloads",l.default.basename(s)):n.imageResultHandling=="saveToDesktop"?s=l.default.join(S.homedir(),"Desktop",l.default.basename(s)):(n.imageResultHandling=="saveInContainingFolder"||n.imageResultHandling=="replaceOriginal")&&(n.inputMethod=="Clipboard"||t)?s=l.default.join(Bs(),l.default.basename(s)):(n.imageResultHandling=="copyToClipboard"||n.imageResultHandling=="openInPreview")&&(s=l.default.join(S.tmpdir(),l.default.basename(s))),n.imageResultHandling!="replaceOriginal"&&S.tmpdir()!=l.default.dirname(s)){let r=2;for(;g.existsSync(s);)s=l.default.join(l.default.dirname(s),l.default.basename(s,l.default.extname(s))+` (${r})${l.default.extname(s)}`),r++}return s})},En=async(e,t,n)=>{console.error(t),n?(n.title=e,n.message=t.message,n.style=c.Toast.Style.Failure,n.primaryAction={title:"Copy Error",onAction:async()=>{await c.Clipboard.copy(t.message)}}):n=await(0,c.showToast)({title:e,message:t.message,style:c.Toast.Style.Failure,primaryAction:{title:"Copy Error",onAction:async()=>{await c.Clipboard.copy(t.message)}}})};async function Ee(e,t,n){let i=Rn(e),s=[];for(let r of e){let o=(0,Re.execSync)(`sips -g pixelWidth -g pixelHeight "${r}"`).toString().split(/(: |\n)/g),a=parseInt(o[4]),d=parseInt(o[8]);if(r.toLowerCase().endsWith(".webp"))s.push(await Fn(`sips --padToHeightWidth ${d+t} ${a+t} --padColor ${n}`,r));else if(r.toLowerCase().endsWith(".svg"))s.push(await Cn(`sips --padToHeightWidth ${d+t} ${a+t} --padColor ${n}`,r));else{let u=i[e.indexOf(r)];s.push(u),(0,Re.execSync)(`sips --padToHeightWidth ${d+t} ${a+t} --padColor ${n} -o "${u}" "${r}"`)}}await Dn(s)}var R=require("@raycast/api");async function Ae(e){if(e.selectedImages.length===0||e.selectedImages.length===1&&e.selectedImages[0]===""){await(0,R.showToast)({title:"No images selected",style:R.Toast.Style.Failure});return}let t=await(0,R.showToast)({title:e.inProgressMessage,style:R.Toast.Style.Animated}),n=`image${e.selectedImages.length===1?"":"s"}`;try{await e.operation(),t.title=`${e.successMessage} ${e.selectedImages.length.toString()} ${n}`,t.style=R.Toast.Style.Success}catch(i){await En(`${e.failureMessage} ${e.selectedImages.length.toString()} ${n}`,i,t)}finally{await vn()}}async function An(e){let{amount:t,hexcolor:n}=e.arguments,i=await Tn(),s=(0,T.getPreferenceValues)(),r=parseInt(t);if(isNaN(r)||r<0){await(0,T.showToast)({title:"Padding amount must be a positive integer",style:T.Toast.Style.Failure});return}let o=n||s.defaultPadColor;if(o.startsWith("#")&&(o=o.substring(1)),!o.match(/[0-9A-Fa-f]{6}/)){await(0,T.showToast)({title:"Invalid HEX Color",style:T.Toast.Style.Failure});return}await Ae({operation:()=>Ee(i,r,o),selectedImages:i,inProgressMessage:"Padding in progress...",successMessage:"Padded",failureMessage:"Failed to pad"})}
