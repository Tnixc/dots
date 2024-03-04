"use strict";var Bn=Object.create;var z=Object.defineProperty;var Ln=Object.getOwnPropertyDescriptor;var jn=Object.getOwnPropertyNames;var Un=Object.getPrototypeOf,Wn=Object.prototype.hasOwnProperty;var l=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),_n=(e,t)=>{for(var n in t)z(e,n,{get:t[n],enumerable:!0})},je=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of jn(t))!Wn.call(e,a)&&a!==n&&z(e,a,{get:()=>t[a],enumerable:!(i=Ln(t,a))||i.enumerable});return e};var C=(e,t,n)=>(n=e!=null?Bn(Un(e)):{},je(t||!e||!e.__esModule?z(n,"default",{value:e,enumerable:!0}):n,e)),Hn=e=>je(z({},"__esModule",{value:!0}),e);var qe=l((qa,He)=>{He.exports=_e;_e.sync=Kn;var Ue=require("fs");function qn(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var i=0;i<n.length;i++){var a=n[i].toLowerCase();if(a&&e.substr(-a.length).toLowerCase()===a)return!0}return!1}function We(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:qn(t,n)}function _e(e,t,n){Ue.stat(e,function(i,a){n(i,i?!1:We(a,e,t))})}function Kn(e,t){return We(Ue.statSync(e),e,t)}});var Ze=l((Ka,Ve)=>{Ve.exports=Xe;Xe.sync=Xn;var Ke=require("fs");function Xe(e,t,n){Ke.stat(e,function(i,a){n(i,i?!1:ze(a,t))})}function Xn(e,t){return ze(Ke.statSync(e),t)}function ze(e,t){return e.isFile()&&zn(e,t)}function zn(e,t){var n=e.mode,i=e.uid,a=e.gid,s=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),r=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),o=parseInt("100",8),p=parseInt("010",8),m=parseInt("001",8),u=o|p,b=n&m||n&p&&a===r||n&o&&i===s||n&u&&s===0;return b}});var Ye=l((za,Je)=>{var Xa=require("fs"),V;process.platform==="win32"||global.TESTING_WINDOWS?V=qe():V=Ze();Je.exports=le;le.sync=Vn;function le(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(i,a){le(e,t||{},function(s,r){s?a(s):i(r)})})}V(e,t||{},function(i,a){i&&(i.code==="EACCES"||t&&t.ignoreErrors)&&(i=null,a=!1),n(i,a)})}function Vn(e,t){try{return V.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var st=l((Va,at)=>{var N=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",Qe=require("path"),Zn=N?";":":",et=Ye(),tt=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),nt=(e,t)=>{let n=t.colon||Zn,i=e.match(/\//)||N&&e.match(/\\/)?[""]:[...N?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],a=N?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",s=N?a.split(n):[""];return N&&e.indexOf(".")!==-1&&s[0]!==""&&s.unshift(""),{pathEnv:i,pathExt:s,pathExtExe:a}},it=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:i,pathExt:a,pathExtExe:s}=nt(e,t),r=[],o=m=>new Promise((u,b)=>{if(m===i.length)return t.all&&r.length?u(r):b(tt(e));let I=i[m],w=/^".*"$/.test(I)?I.slice(1,-1):I,y=Qe.join(w,e),S=!w&&/^\.[\\\/]/.test(e)?e.slice(0,2)+y:y;u(p(S,m,0))}),p=(m,u,b)=>new Promise((I,w)=>{if(b===a.length)return I(o(u+1));let y=a[b];et(m+y,{pathExt:s},(S,R)=>{if(!S&&R)if(t.all)r.push(m+y);else return I(m+y);return I(p(m,u,b+1))})});return n?o(0).then(m=>n(null,m),n):o(0)},Jn=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:i,pathExtExe:a}=nt(e,t),s=[];for(let r=0;r<n.length;r++){let o=n[r],p=/^".*"$/.test(o)?o.slice(1,-1):o,m=Qe.join(p,e),u=!p&&/^\.[\\\/]/.test(e)?e.slice(0,2)+m:m;for(let b=0;b<i.length;b++){let I=u+i[b];try{if(et.sync(I,{pathExt:a}))if(t.all)s.push(I);else return I}catch{}}}if(t.all&&s.length)return s;if(t.nothrow)return null;throw tt(e)};at.exports=it;it.sync=Jn});var me=l((Za,pe)=>{"use strict";var rt=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(i=>i.toUpperCase()==="PATH")||"Path"};pe.exports=rt;pe.exports.default=rt});var pt=l((Ja,lt)=>{"use strict";var ot=require("path"),Yn=st(),Qn=me();function ct(e,t){let n=e.options.env||process.env,i=process.cwd(),a=e.options.cwd!=null,s=a&&process.chdir!==void 0&&!process.chdir.disabled;if(s)try{process.chdir(e.options.cwd)}catch{}let r;try{r=Yn.sync(e.command,{path:n[Qn({env:n})],pathExt:t?ot.delimiter:void 0})}catch{}finally{s&&process.chdir(i)}return r&&(r=ot.resolve(a?e.options.cwd:"",r)),r}function ei(e){return ct(e)||ct(e,!0)}lt.exports=ei});var mt=l((Ya,ue)=>{"use strict";var de=/([()\][%!^"`<>&|;, *?])/g;function ti(e){return e=e.replace(de,"^$1"),e}function ni(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(de,"^$1"),t&&(e=e.replace(de,"^$1")),e}ue.exports.command=ti;ue.exports.argument=ni});var ut=l((Qa,dt)=>{"use strict";dt.exports=/^#!(.*)/});var ht=l((es,ft)=>{"use strict";var ii=ut();ft.exports=(e="")=>{let t=e.match(ii);if(!t)return null;let[n,i]=t[0].replace(/#! ?/,"").split(" "),a=n.split("/").pop();return a==="env"?i:i?`${a} ${i}`:a}});var It=l((ts,gt)=>{"use strict";var fe=require("fs"),ai=ht();function si(e){let n=Buffer.alloc(150),i;try{i=fe.openSync(e,"r"),fe.readSync(i,n,0,150,0),fe.closeSync(i)}catch{}return ai(n.toString())}gt.exports=si});var St=l((ns,yt)=>{"use strict";var ri=require("path"),bt=pt(),wt=mt(),oi=It(),ci=process.platform==="win32",li=/\.(?:com|exe)$/i,pi=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function mi(e){e.file=bt(e);let t=e.file&&oi(e.file);return t?(e.args.unshift(e.file),e.command=t,bt(e)):e.file}function di(e){if(!ci)return e;let t=mi(e),n=!li.test(t);if(e.options.forceShell||n){let i=pi.test(t);e.command=ri.normalize(e.command),e.command=wt.command(e.command),e.args=e.args.map(s=>wt.argument(s,i));let a=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${a}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function ui(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let i={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?i:di(i)}yt.exports=ui});var Ct=l((is,xt)=>{"use strict";var he=process.platform==="win32";function ge(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function fi(e,t){if(!he)return;let n=e.emit;e.emit=function(i,a){if(i==="exit"){let s=Pt(a,t,"spawn");if(s)return n.call(e,"error",s)}return n.apply(e,arguments)}}function Pt(e,t){return he&&e===1&&!t.file?ge(t.original,"spawn"):null}function hi(e,t){return he&&e===1&&!t.file?ge(t.original,"spawnSync"):null}xt.exports={hookChildProcess:fi,verifyENOENT:Pt,verifyENOENTSync:hi,notFoundError:ge}});var Dt=l((as,E)=>{"use strict";var Ft=require("child_process"),Ie=St(),be=Ct();function vt(e,t,n){let i=Ie(e,t,n),a=Ft.spawn(i.command,i.args,i.options);return be.hookChildProcess(a,i),a}function gi(e,t,n){let i=Ie(e,t,n),a=Ft.spawnSync(i.command,i.args,i.options);return a.error=a.error||be.verifyENOENTSync(a.status,i),a}E.exports=vt;E.exports.spawn=vt;E.exports.sync=gi;E.exports._parse=Ie;E.exports._enoent=be});var Rt=l((ss,Tt)=>{"use strict";Tt.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var At=l((rs,U)=>{"use strict";var j=require("path"),Nt=me(),Et=e=>{e={cwd:process.cwd(),path:process.env[Nt()],execPath:process.execPath,...e};let t,n=j.resolve(e.cwd),i=[];for(;t!==n;)i.push(j.join(n,"node_modules/.bin")),t=n,n=j.resolve(n,"..");let a=j.resolve(e.cwd,e.execPath,"..");return i.push(a),i.concat(e.path).join(j.delimiter)};U.exports=Et;U.exports.default=Et;U.exports.env=e=>{e={env:process.env,...e};let t={...e.env},n=Nt({env:t});return e.path=t[n],t[n]=U.exports(e),t}});var $t=l((os,we)=>{"use strict";var kt=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};we.exports=kt;we.exports.default=kt});var Mt=l((cs,J)=>{"use strict";var Ii=$t(),Z=new WeakMap,Ot=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,i=0,a=e.displayName||e.name||"<anonymous>",s=function(...r){if(Z.set(s,++i),i===1)n=e.apply(this,r),e=null;else if(t.throw===!0)throw new Error(`Function \`${a}\` can only be called once`);return n};return Ii(s,e),Z.set(s,i),s};J.exports=Ot;J.exports.default=Ot;J.exports.callCount=e=>{if(!Z.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return Z.get(e)}});var Gt=l(Y=>{"use strict";Object.defineProperty(Y,"__esModule",{value:!0});Y.SIGNALS=void 0;var bi=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];Y.SIGNALS=bi});var ye=l(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});A.SIGRTMAX=A.getRealtimeSignals=void 0;var wi=function(){let e=Lt-Bt+1;return Array.from({length:e},yi)};A.getRealtimeSignals=wi;var yi=function(e,t){return{name:`SIGRT${t+1}`,number:Bt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},Bt=34,Lt=64;A.SIGRTMAX=Lt});var jt=l(Q=>{"use strict";Object.defineProperty(Q,"__esModule",{value:!0});Q.getSignals=void 0;var Si=require("os"),Pi=Gt(),xi=ye(),Ci=function(){let e=(0,xi.getRealtimeSignals)();return[...Pi.SIGNALS,...e].map(Fi)};Q.getSignals=Ci;var Fi=function({name:e,number:t,description:n,action:i,forced:a=!1,standard:s}){let{signals:{[e]:r}}=Si.constants,o=r!==void 0;return{name:e,number:o?r:t,description:n,supported:o,action:i,forced:a,standard:s}}});var Wt=l(k=>{"use strict";Object.defineProperty(k,"__esModule",{value:!0});k.signalsByNumber=k.signalsByName=void 0;var vi=require("os"),Ut=jt(),Di=ye(),Ti=function(){return(0,Ut.getSignals)().reduce(Ri,{})},Ri=function(e,{name:t,number:n,description:i,supported:a,action:s,forced:r,standard:o}){return{...e,[t]:{name:t,number:n,description:i,supported:a,action:s,forced:r,standard:o}}},Ni=Ti();k.signalsByName=Ni;var Ei=function(){let e=(0,Ut.getSignals)(),t=Di.SIGRTMAX+1,n=Array.from({length:t},(i,a)=>Ai(a,e));return Object.assign({},...n)},Ai=function(e,t){let n=ki(e,t);if(n===void 0)return{};let{name:i,description:a,supported:s,action:r,forced:o,standard:p}=n;return{[e]:{name:i,number:e,description:a,supported:s,action:r,forced:o,standard:p}}},ki=function(e,t){let n=t.find(({name:i})=>vi.constants.signals[i]===e);return n!==void 0?n:t.find(i=>i.number===e)},$i=Ei();k.signalsByNumber=$i});var Ht=l((us,_t)=>{"use strict";var{signalsByName:Oi}=Wt(),Mi=({timedOut:e,timeout:t,errorCode:n,signal:i,signalDescription:a,exitCode:s,isCanceled:r})=>e?`timed out after ${t} milliseconds`:r?"was canceled":n!==void 0?`failed with ${n}`:i!==void 0?`was killed with ${i} (${a})`:s!==void 0?`failed with exit code ${s}`:"failed",Gi=({stdout:e,stderr:t,all:n,error:i,signal:a,exitCode:s,command:r,escapedCommand:o,timedOut:p,isCanceled:m,killed:u,parsed:{options:{timeout:b}}})=>{s=s===null?void 0:s,a=a===null?void 0:a;let I=a===void 0?void 0:Oi[a].description,w=i&&i.code,S=`Command ${Mi({timedOut:p,timeout:b,errorCode:w,signal:a,signalDescription:I,exitCode:s,isCanceled:m})}: ${r}`,R=Object.prototype.toString.call(i)==="[object Error]",K=R?`${S}
${i.message}`:S,X=[K,t,e].filter(Boolean).join(`
`);return R?(i.originalMessage=i.message,i.message=X):i=new Error(X),i.shortMessage=K,i.command=r,i.escapedCommand=o,i.exitCode=s,i.signal=a,i.signalDescription=I,i.stdout=e,i.stderr=t,n!==void 0&&(i.all=n),"bufferedData"in i&&delete i.bufferedData,i.failed=!0,i.timedOut=!!p,i.isCanceled=m,i.killed=u&&!p,i};_t.exports=Gi});var Kt=l((fs,Se)=>{"use strict";var ee=["stdin","stdout","stderr"],Bi=e=>ee.some(t=>e[t]!==void 0),qt=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return ee.map(i=>e[i]);if(Bi(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${ee.map(i=>`\`${i}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,ee.length);return Array.from({length:n},(i,a)=>t[a])};Se.exports=qt;Se.exports.node=e=>{let t=qt(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var Xt=l((hs,te)=>{te.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&te.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&te.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var Yt=l((gs,M)=>{var d=global.process,F=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};F(d)?(zt=require("assert"),$=Xt(),Vt=/^win/i.test(d.platform),W=require("events"),typeof W!="function"&&(W=W.EventEmitter),d.__signal_exit_emitter__?f=d.__signal_exit_emitter__:(f=d.__signal_exit_emitter__=new W,f.count=0,f.emitted={}),f.infinite||(f.setMaxListeners(1/0),f.infinite=!0),M.exports=function(e,t){if(!F(global.process))return function(){};zt.equal(typeof e,"function","a callback must be provided for exit handler"),O===!1&&Pe();var n="exit";t&&t.alwaysLast&&(n="afterexit");var i=function(){f.removeListener(n,e),f.listeners("exit").length===0&&f.listeners("afterexit").length===0&&ne()};return f.on(n,e),i},ne=function(){!O||!F(global.process)||(O=!1,$.forEach(function(t){try{d.removeListener(t,ie[t])}catch{}}),d.emit=ae,d.reallyExit=xe,f.count-=1)},M.exports.unload=ne,v=function(t,n,i){f.emitted[t]||(f.emitted[t]=!0,f.emit(t,n,i))},ie={},$.forEach(function(e){ie[e]=function(){if(F(global.process)){var n=d.listeners(e);n.length===f.count&&(ne(),v("exit",null,e),v("afterexit",null,e),Vt&&e==="SIGHUP"&&(e="SIGINT"),d.kill(d.pid,e))}}}),M.exports.signals=function(){return $},O=!1,Pe=function(){O||!F(global.process)||(O=!0,f.count+=1,$=$.filter(function(t){try{return d.on(t,ie[t]),!0}catch{return!1}}),d.emit=Jt,d.reallyExit=Zt)},M.exports.load=Pe,xe=d.reallyExit,Zt=function(t){F(global.process)&&(d.exitCode=t||0,v("exit",d.exitCode,null),v("afterexit",d.exitCode,null),xe.call(d,d.exitCode))},ae=d.emit,Jt=function(t,n){if(t==="exit"&&F(global.process)){n!==void 0&&(d.exitCode=n);var i=ae.apply(this,arguments);return v("exit",d.exitCode,null),v("afterexit",d.exitCode,null),i}else return ae.apply(this,arguments)}):M.exports=function(){return function(){}};var zt,$,Vt,W,f,ne,v,ie,O,Pe,xe,Zt,ae,Jt});var en=l((Is,Qt)=>{"use strict";var Li=require("os"),ji=Yt(),Ui=1e3*5,Wi=(e,t="SIGTERM",n={})=>{let i=e(t);return _i(e,t,n,i),i},_i=(e,t,n,i)=>{if(!Hi(t,n,i))return;let a=Ki(n),s=setTimeout(()=>{e("SIGKILL")},a);s.unref&&s.unref()},Hi=(e,{forceKillAfterTimeout:t},n)=>qi(e)&&t!==!1&&n,qi=e=>e===Li.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Ki=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Ui;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Xi=(e,t)=>{e.kill()&&(t.isCanceled=!0)},zi=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Vi=(e,{timeout:t,killSignal:n="SIGTERM"},i)=>{if(t===0||t===void 0)return i;let a,s=new Promise((o,p)=>{a=setTimeout(()=>{zi(e,n,p)},t)}),r=i.finally(()=>{clearTimeout(a)});return Promise.race([s,r])},Zi=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Ji=async(e,{cleanup:t,detached:n},i)=>{if(!t||n)return i;let a=ji(()=>{e.kill()});return i.finally(()=>{a()})};Qt.exports={spawnedKill:Wi,spawnedCancel:Xi,setupTimeout:Vi,validateTimeout:Zi,setExitHandler:Ji}});var nn=l((bs,tn)=>{"use strict";var P=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";P.writable=e=>P(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";P.readable=e=>P(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";P.duplex=e=>P.writable(e)&&P.readable(e);P.transform=e=>P.duplex(e)&&typeof e._transform=="function";tn.exports=P});var sn=l((ws,an)=>{"use strict";var{PassThrough:Yi}=require("stream");an.exports=e=>{e={...e};let{array:t}=e,{encoding:n}=e,i=n==="buffer",a=!1;t?a=!(n||i):n=n||"utf8",i&&(n=null);let s=new Yi({objectMode:a});n&&s.setEncoding(n);let r=0,o=[];return s.on("data",p=>{o.push(p),a?r=o.length:r+=p.length}),s.getBufferedValue=()=>t?o:i?Buffer.concat(o,r):o.join(""),s.getBufferedLength=()=>r,s}});var rn=l((ys,_)=>{"use strict";var{constants:Qi}=require("buffer"),ea=require("stream"),{promisify:ta}=require("util"),na=sn(),ia=ta(ea.pipeline),se=class extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}};async function Ce(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:n}=t,i=na(t);return await new Promise((a,s)=>{let r=o=>{o&&i.getBufferedLength()<=Qi.MAX_LENGTH&&(o.bufferedData=i.getBufferedValue()),s(o)};(async()=>{try{await ia(e,i),a()}catch(o){r(o)}})(),i.on("data",()=>{i.getBufferedLength()>n&&r(new se)})}),i.getBufferedValue()}_.exports=Ce;_.exports.buffer=(e,t)=>Ce(e,{...t,encoding:"buffer"});_.exports.array=(e,t)=>Ce(e,{...t,array:!0});_.exports.MaxBufferError=se});var cn=l((Ss,on)=>{"use strict";var{PassThrough:aa}=require("stream");on.exports=function(){var e=[],t=new aa({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=i,t.on("unpipe",a),Array.prototype.slice.call(arguments).forEach(n),t;function n(s){return Array.isArray(s)?(s.forEach(n),this):(e.push(s),s.once("end",a.bind(null,s)),s.once("error",t.emit.bind(t,"error")),s.pipe(t,{end:!1}),this)}function i(){return e.length==0}function a(s){e=e.filter(function(r){return r!==s}),!e.length&&t.readable&&t.end()}}});var dn=l((Ps,mn)=>{"use strict";var pn=nn(),ln=rn(),sa=cn(),ra=(e,t)=>{t===void 0||e.stdin===void 0||(pn(t)?t.pipe(e.stdin):e.stdin.end(t))},oa=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=sa();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},Fe=async(e,t)=>{if(e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},ve=(e,{encoding:t,buffer:n,maxBuffer:i})=>{if(!(!e||!n))return t?ln(e,{encoding:t,maxBuffer:i}):ln.buffer(e,{maxBuffer:i})},ca=async({stdout:e,stderr:t,all:n},{encoding:i,buffer:a,maxBuffer:s},r)=>{let o=ve(e,{encoding:i,buffer:a,maxBuffer:s}),p=ve(t,{encoding:i,buffer:a,maxBuffer:s}),m=ve(n,{encoding:i,buffer:a,maxBuffer:s*2});try{return await Promise.all([r,o,p,m])}catch(u){return Promise.all([{error:u,signal:u.signal,timedOut:u.timedOut},Fe(e,o),Fe(t,p),Fe(n,m)])}},la=({input:e})=>{if(pn(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};mn.exports={handleInput:ra,makeAllStream:oa,getSpawnedResult:ca,validateInputSync:la}});var fn=l((xs,un)=>{"use strict";var pa=(async()=>{})().constructor.prototype,ma=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(pa,e)]),da=(e,t)=>{for(let[n,i]of ma){let a=typeof t=="function"?(...s)=>Reflect.apply(i.value,t(),s):i.value.bind(t);Reflect.defineProperty(e,n,{...i,value:a})}return e},ua=e=>new Promise((t,n)=>{e.on("exit",(i,a)=>{t({exitCode:i,signal:a})}),e.on("error",i=>{n(i)}),e.stdin&&e.stdin.on("error",i=>{n(i)})});un.exports={mergePromise:da,getSpawnedPromise:ua}});var In=l((Cs,gn)=>{"use strict";var hn=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],fa=/^[\w.-]+$/,ha=/"/g,ga=e=>typeof e!="string"||fa.test(e)?e:`"${e.replace(ha,'\\"')}"`,Ia=(e,t)=>hn(e,t).join(" "),ba=(e,t)=>hn(e,t).map(n=>ga(n)).join(" "),wa=/ +/g,ya=e=>{let t=[];for(let n of e.trim().split(wa)){let i=t[t.length-1];i&&i.endsWith("\\")?t[t.length-1]=`${i.slice(0,-1)} ${n}`:t.push(n)}return t};gn.exports={joinCommand:Ia,getEscapedCommand:ba,parseCommand:ya}});var Cn=l((Fs,G)=>{"use strict";var Sa=require("path"),De=require("child_process"),Pa=Dt(),xa=Rt(),Ca=At(),Fa=Mt(),re=Ht(),wn=Kt(),{spawnedKill:va,spawnedCancel:Da,setupTimeout:Ta,validateTimeout:Ra,setExitHandler:Na}=en(),{handleInput:Ea,getSpawnedResult:Aa,makeAllStream:ka,validateInputSync:$a}=dn(),{mergePromise:bn,getSpawnedPromise:Oa}=fn(),{joinCommand:yn,parseCommand:Sn,getEscapedCommand:Pn}=In(),Ma=1e3*1e3*100,Ga=({env:e,extendEnv:t,preferLocal:n,localDir:i,execPath:a})=>{let s=t?{...process.env,...e}:e;return n?Ca.env({env:s,cwd:i,execPath:a}):s},xn=(e,t,n={})=>{let i=Pa._parse(e,t,n);return e=i.command,t=i.args,n=i.options,n={maxBuffer:Ma,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...n},n.env=Ga(n),n.stdio=wn(n),process.platform==="win32"&&Sa.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:i}},H=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?xa(t):t,oe=(e,t,n)=>{let i=xn(e,t,n),a=yn(e,t),s=Pn(e,t);Ra(i.options);let r;try{r=De.spawn(i.file,i.args,i.options)}catch(w){let y=new De.ChildProcess,S=Promise.reject(re({error:w,stdout:"",stderr:"",all:"",command:a,escapedCommand:s,parsed:i,timedOut:!1,isCanceled:!1,killed:!1}));return bn(y,S)}let o=Oa(r),p=Ta(r,i.options,o),m=Na(r,i.options,p),u={isCanceled:!1};r.kill=va.bind(null,r.kill.bind(r)),r.cancel=Da.bind(null,r,u);let I=Fa(async()=>{let[{error:w,exitCode:y,signal:S,timedOut:R},K,X,Gn]=await Aa(r,i.options,m),Me=H(i.options,K),Ge=H(i.options,X),Be=H(i.options,Gn);if(w||y!==0||S!==null){let Le=re({error:w,exitCode:y,signal:S,stdout:Me,stderr:Ge,all:Be,command:a,escapedCommand:s,parsed:i,timedOut:R,isCanceled:u.isCanceled,killed:r.killed});if(!i.options.reject)return Le;throw Le}return{command:a,escapedCommand:s,exitCode:0,stdout:Me,stderr:Ge,all:Be,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return Ea(r,i.options.input),r.all=ka(r,i.options),bn(r,I)};G.exports=oe;G.exports.sync=(e,t,n)=>{let i=xn(e,t,n),a=yn(e,t),s=Pn(e,t);$a(i.options);let r;try{r=De.spawnSync(i.file,i.args,i.options)}catch(m){throw re({error:m,stdout:"",stderr:"",all:"",command:a,escapedCommand:s,parsed:i,timedOut:!1,isCanceled:!1,killed:!1})}let o=H(i.options,r.stdout,r.error),p=H(i.options,r.stderr,r.error);if(r.error||r.status!==0||r.signal!==null){let m=re({stdout:o,stderr:p,error:r.error,signal:r.signal,exitCode:r.status,command:a,escapedCommand:s,parsed:i,timedOut:r.error&&r.error.code==="ETIMEDOUT",isCanceled:!1,killed:r.signal!==null});if(!i.options.reject)return m;throw m}return{command:a,escapedCommand:s,exitCode:0,stdout:o,stderr:p,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};G.exports.command=(e,t)=>{let[n,...i]=Sn(e);return oe(n,i,t)};G.exports.commandSync=(e,t)=>{let[n,...i]=Sn(e);return oe.sync(n,i,t)};G.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let i=wn.node(n),a=process.execArgv.filter(o=>!o.startsWith("--inspect")),{nodePath:s=process.execPath,nodeOptions:r=a}=n;return oe(s,[...r,e,...Array.isArray(t)?t:[]],{...n,stdin:void 0,stdout:void 0,stderr:void 0,stdio:i,shell:!1})}});var _a={};_n(_a,{default:()=>Mn});module.exports=Hn(_a);var T=require("@raycast/api");var En=C(require("fs")),L=C(require("os")),g=C(require("path")),An=require("@raycast/api");var B=C(require("fs"));var Tn=C(require("path"));var Te=C(require("node:process"),1),Re=C(Cn(),1);async function x(e,{humanReadableOutput:t=!0}={}){if(Te.default.platform!=="darwin")throw new Error("macOS only");let n=t?[]:["-ss"],{stdout:i}=await(0,Re.default)("osascript",["-e",e,n]);return i}function Ne(e,{humanReadableOutput:t=!0}={}){if(Te.default.platform!=="darwin")throw new Error("macOS only");let n=t?[]:["-ss"],{stdout:i}=Re.default.sync("osascript",["-e",e,...n]);return i}var h=require("@raycast/api");var Fn=async()=>x(`use framework "AppKit"
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
      
      return filePaths`),vn=async e=>{let t=Array.isArray(e)?e:[e];await x(`use framework "Foundation"
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
      end if`)};var La=async()=>x(`set imageTypes to {"PNG", "JPG", "JPEG", "TIF", "HEIF", "GIF", "ICO", "ICNS", "ASTC", "BMP", "DDS", "EXR", "JP2", "KTX", "Portable Bitmap", "Adobe Photoshop", "PVR", "TGA", "WebP", "SVG", "PDF", "HEIC"}
    
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
    end tell`),ja=async()=>x(`set imageTypes to {"PNG", "JPG", "JPEG", "TIF", "HEIF", "GIF", "ICO", "ICNS", "ASTC", "BMP", "DDS", "EXR", "JP2", "KTX", "Portable Bitmap", "Adobe Photoshop", "PVR", "TGA", "WebP", "SVG", "PDF", "HEIC"}

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
    end tell`),ce=async()=>{let t=(await h.LocalStorage.getItem("itemsToRemove")??"").toString().split(", ");for(let n of t)B.existsSync(n)&&await B.promises.rm(n);await h.LocalStorage.removeItem("itemsToRemove")},Ee=async()=>{let e=[],n=(0,h.getPreferenceValues)().inputMethod,i=!1;if(n=="Clipboard")try{let r=(await Fn()).split(", ");if(await h.LocalStorage.setItem("itemsToRemove",r.join(", ")),r.filter(o=>o.trim().length>0).length>0)return r}catch{console.error("Couldn't get images from clipboard"),i=!0}let a=n;try{a=(await(0,h.getFrontmostApplication)()).name}catch{console.error("Couldn't get frontmost application")}try{if(n=="Path Finder"&&((await ja()).split(", ").forEach(o=>{e.includes(o)||e.push(o)}),e.length>0))return e}catch{console.error("Couldn't get images from Path Finder"),i=!0}let s=(await La()).split(", ");return a=="Finder"||n=="Finder"||i?e.push(...s):s.forEach(r=>{r.split("/").at(-2)=="Desktop"&&!e.includes(r)&&e.push(r)}),e},Rn=async e=>{let t=(0,h.getPreferenceValues)();t.imageResultHandling=="copyToClipboard"?(await vn(e),Dn(e)):t.imageResultHandling=="openInPreview"&&(console.log(e),await Ua(e),Dn(e))};var Ua=async e=>{let t=Array.isArray(e)?e:[e],n=t.some(i=>Tn.default.extname(i)==".svg");await x(`use framework "Foundation"
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
          end tell`}`)},Dn=e=>{let t=Array.isArray(e)?e:[e];for(let n of t)B.unlinkSync(n)};var Nn=async(e,t,n)=>{console.error(t),n?(n.title=e,n.message=t.message,n.style=h.Toast.Style.Failure,n.primaryAction={title:"Copy Error",onAction:async()=>{await h.Clipboard.copy(t.message)}}):n=await(0,h.showToast)({title:e,message:t.message,style:h.Toast.Style.Failure,primaryAction:{title:"Copy Error",onAction:async()=>{await h.Clipboard.copy(t.message)}}})};async function Ae(e,t){let n=(0,An.getPreferenceValues)(),i=[];for(let a of e){let s=g.default.join(g.default.dirname(a),g.default.basename(a,g.default.extname(a))+(a.endsWith(".pdf")?".pdf":".png"));if(n.imageResultHandling=="saveToDownloads"?s=g.default.join(L.default.homedir(),"Downloads",g.default.basename(s)):n.imageResultHandling=="saveToDesktop"?s=g.default.join(L.default.homedir(),"Desktop",g.default.basename(s)):(n.imageResultHandling=="copyToClipboard"||n.imageResultHandling=="openInPreview")&&(s=g.default.join(L.default.tmpdir(),g.default.basename(s))),n.imageResultHandling!="replaceOriginal"&&L.default.tmpdir()!=g.default.dirname(s)){let r=2;for(;En.default.existsSync(s)&&L.default.tmpdir()!=g.default.dirname(s);)s=g.default.join(g.default.dirname(s),g.default.basename(s,g.default.extname(s))+` ${r}`+g.default.extname(s)),r++}await t.applyMethod(a,s,t.CIFilterName),i.push(s)}await Rn(i)}var kn=(e,t,n)=>`use framework "Foundation"
    use framework "Quartz"
    use framework "PDFKit"

    set res to ""
    set thePDF to missing value
    applyFilter("${e}", "${t}")
    on applyFilter(sourcePath, destinationPath)
        global thePDF
        set repeatCount to 1
        if "${e}" ends with ".pdf" and "${t}" is not "" then
            set thePDF to current application's PDFDocument's alloc()'s initWithURL:(current application's |NSURL|'s fileURLWithPath:sourcePath)
            set pageCount to thePDF's pageCount()
            set repeatCount to pageCount
        end if

        repeat with i from 1 to repeatCount
          if repeatCount > 1 then
            set thePage to thePDF's pageAtIndex:(i - 1)
            set theData to thePage's dataRepresentation()
            set theImage to current application's NSImage's alloc()'s initWithData:theData
          else
            set theImage to current application's NSImage's alloc()'s initWithContentsOfFile:sourcePath
          end if
          
          -- Set up the Filter
          set filterName to "${n}"
          set theFilter to current application's CIFilter's filterWithName:filterName
          theFilter's setDefaults()`,$n=`-- Get result & crop to original image size
    set theBounds to current application's NSMakeRect(0, 0, theImage's |size|()'s width, theImage's |size|()'s height)
    set uncroppedOutput to theFilter's valueForKey:(current application's kCIOutputImageKey)
    set croppedOutput to uncroppedOutput's imageByCroppingToRect:(uncroppedOutput's extent())
    
    -- Convert back to NSImage and save to file
    set theRep to current application's NSCIImageRep's imageRepWithCIImage:croppedOutput
    set theResult to current application's NSImage's alloc()'s initWithSize:(theRep's |size|())
    theResult's addRepresentation:theRep
    saveImage(theResult, sourcePath, destinationPath, i)`,Wa=`on saveImage(imageToSave, sourcePath, destinationPath, iter)
    global thePDF
    if destinationPath ends with ".pdf" then
      -- Replaces the contents of a PDF page with the supplied NSImage
      set newPage to current application's PDFPage's alloc()'s initWithImage:imageToSave
      thePDF's removePageAtIndex:(iter - 1)
      thePDF's insertPage:newPage atIndex:(iter - 1)
    else
      -- Saves an NSImage to the supplied file path
      set theTIFFData to imageToSave's TIFFRepresentation()
      set theBitmapImageRep to current application's NSBitmapImageRep's imageRepWithData:theTIFFData
      set theImageProperties to current application's NSDictionary's dictionaryWithObject:1 forKey:(current application's NSImageCompressionFactor)
      set theResultData to theBitmapImageRep's representationUsingType:(current application's NSPNGFileType) |properties|:(missing value)
      theResultData's writeToFile:destinationPath atomically:false
    end if
end saveImage`,On=(e,t)=>Ne(`${kn(t,"",e.CIFilterName)}
    set theCIImage to current application's CIImage's imageWithData:(theImage's TIFFRepresentation())
    theFilter's setValue:theCIImage forKey:"inputImage"
    ${$n}
  end repeat
  end applyFilter
  
  on saveImage(imageToSave, sourcePath, destinationPath, iter)
       global res
        -- Saves an NSImage to the supplied file path
        set theTIFFData to imageToSave's TIFFRepresentation()
        set theBitmapImageRep to current application's NSBitmapImageRep's imageRepWithData:theTIFFData
        set theImageProperties to current application's NSDictionary's dictionaryWithObject:1 forKey:(current application's NSImageCompressionFactor)
        set theResultData to theBitmapImageRep's representationUsingType:(current application's NSPNGFileType) |properties|:(missing value)
        set base64String to (theResultData's base64EncodedStringWithOptions:0) as text
        set res to "data:image/png;base64," & base64String
  end saveImage
  
  return res`),c=async(e,t,n)=>x(`${kn(e,t,n)}
          set theCIImage to current application's CIImage's imageWithData:(theImage's TIFFRepresentation())
          theFilter's setValue:theCIImage forKey:"inputImage"
          ${$n}
        end repeat

        -- Save PDFs
        if "${e}" ends with ".pdf" then
          thePDF's writeToFile:"${t}"
        end if
    end applyFilter
    ${Wa}`),ke=[{name:"Bloom",description:"Softens edges and adds a glow",applyMethod:c,CIFilterName:"CIBloom",thumbnail:"thumbnails/bloom.webp"},{name:"Bokeh Blur",description:"Applies a Bokeh effect",applyMethod:c,CIFilterName:"CIBokehBlur",thumbnail:"thumbnails/bokeh_blur.webp"},{name:"Box Blur",description:"Blur effect using a box-shaped convolution kernel",applyMethod:c,CIFilterName:"CIBoxBlur",thumbnail:"thumbnails/box_blur.webp"},{name:"Chrome",description:"Increase brightness and saturation",applyMethod:c,CIFilterName:"CIPhotoEffectChrome",thumbnail:"thumbnails/chrome.webp"},{name:"Circular Screen",description:"Simulates a circular-shaped halftone screen",applyMethod:c,CIFilterName:"CICircularScreen",thumbnail:"thumbnails/circular_screen.webp"},{name:"Circular Wrap",description:"Wraps an image around a transparent circle",applyMethod:c,CIFilterName:"CICircularWrap",thumbnail:"thumbnails/circular_wrap.webp"},{name:"CMYK Halftone",description:"Creates a halftoned rendition of an image using cyan, magenta, yellow, and black",applyMethod:c,CIFilterName:"CICMYKHalftone",thumbnail:"thumbnails/cmyk_halftone.webp"},{name:"Comic",description:"Makes images look like comic book drawings",applyMethod:c,CIFilterName:"CIComicEffect",thumbnail:"thumbnails/comic.webp"},{name:"Crystallize",description:"Creates polygon-shaped color blocks by aggregating pixel values",applyMethod:c,CIFilterName:"CICrystallize",thumbnail:"thumbnails/crystallize.webp"},{name:"Depth Of Field",description:"Simulates tilt-shift",applyMethod:c,CIFilterName:"CIDepthOfField",thumbnail:"thumbnails/depth_of_field.webp"},{name:"Disc Blur",description:"Blur effect that uses a disc-shaped convolution kernel",applyMethod:c,CIFilterName:"CIDiscBlur",thumbnail:"thumbnails/disc_blur.webp"},{name:"Dither",description:"Adds noise to reduce distortion",applyMethod:c,CIFilterName:"CIDither",thumbnail:"thumbnails/dither.webp"},{name:"Document Enhancement",description:"Removes unwanted shadows, whitens background, and enhances contrast",applyMethod:c,CIFilterName:"CIDocumentEnhancer",thumbnail:"thumbnails/document_enhancement.webp"},{name:"Dot Screen",description:"Simulates the dot pattern of a halftone screen",applyMethod:c,CIFilterName:"CIDotScreen",thumbnail:"thumbnails/dot_screen.webp"},{name:"Edges",description:"Detects edges and highlights them colorfully, blackening other areas",applyMethod:c,CIFilterName:"CIEdges",thumbnail:"thumbnails/edges.webp"},{name:"Edge Work",description:"White woodblock cutout effect",applyMethod:c,CIFilterName:"CIEdgeWork",thumbnail:"thumbnails/edge_work.webp"},{name:"Fade",description:"Decreases saturation",applyMethod:c,CIFilterName:"CIPhotoEffectFade",thumbnail:"thumbnails/fade.webp"},{name:"Gaussian Blur",description:"Blurs the image using a Gaussian filter",applyMethod:c,CIFilterName:"CIGaussianBlur",thumbnail:"thumbnails/gaussian_blur.webp"},{name:"Gloom",description:"Dulls highlights",applyMethod:c,CIFilterName:"CIGloom",thumbnail:"thumbnails/gloom.webp"},{name:"Hatched Screen",description:"Simulates the hatched pattern of a halftone screen",applyMethod:c,CIFilterName:"CIHatchedScreen",thumbnail:"thumbnails/hatched_screen.webp"},{name:"Hexagonal Pixellate",description:"Pixellates images using hexagons",applyMethod:c,CIFilterName:"CIHexagonalPixellate",thumbnail:"thumbnails/hexagonal_pixellate.webp"},{name:"Instant",description:"Decreases saturation, reduces contrast",applyMethod:c,CIFilterName:"CIPhotoEffectInstant",thumbnail:"thumbnails/instant.webp"},{name:"Invert",description:"Inverts colors",applyMethod:c,CIFilterName:"CIColorInvert",thumbnail:"thumbnails/invert.webp"},{name:"Kaleidoscope",description:"Creates a kaleidoscopic image by applying 12-way symmetry",applyMethod:c,CIFilterName:"CIKaleidoscope",thumbnail:"thumbnails/kaleidoscope.webp"},{name:"Line Overlay",description:"Black woodblock cutout effect",applyMethod:c,CIFilterName:"CILineOverlay",thumbnail:"thumbnails/line_overlay.webp"},{name:"Line Screen",description:"Simulates the line pattern of a halftone screen",applyMethod:c,CIFilterName:"CILineScreen",thumbnail:"thumbnails/line_screen.webp"},{name:"Maximum Component",description:"Converts image to grayscale using the maximum of the three color components",applyMethod:c,CIFilterName:"CIMaximumComponent",thumbnail:"thumbnails/maximum_component.webp"},{name:"Median",description:"Reduces noise by calculating median pixel values",applyMethod:c,CIFilterName:"CILineOverlay",thumbnail:"thumbnails/median.webp"},{name:"Minimum Component",description:"Converts image to grayscale using the minimum of the three color components",applyMethod:c,CIFilterName:"CIMinimumComponent",thumbnail:"thumbnails/minimum_component.webp"},{name:"Mono",description:"Desaturates images and reduces contrast",applyMethod:c,CIFilterName:"CIPhotoEffectMono",thumbnail:"thumbnails/mono.webp"},{name:"Motion Blur",description:"Blur effect simulating a camera moving while capturing an image",applyMethod:c,CIFilterName:"CIMotionBlur",thumbnail:"thumbnails/motion_blur.webp"},{name:"Noir",description:"Desaturates images and increases contrast",applyMethod:c,CIFilterName:"CIPhotoEffectNoir",thumbnail:"thumbnails/noir.webp"},{name:"Noise Reduction",description:"Reduces noise by sharpening areas of low luminance",applyMethod:c,CIFilterName:"CINoiseReduction",thumbnail:"thumbnails/noise_reduction.webp"},{name:"Pixellate",description:"Pixellates images with large square pixels",applyMethod:c,CIFilterName:"CIPixellate",thumbnail:"thumbnails/pixellate.webp"},{name:"Posterize",description:"Flattens colors",applyMethod:c,CIFilterName:"CIColorPosterize",thumbnail:"thumbnails/posterize.webp"},{name:"Pointillize",description:"Pixellates images with dots",applyMethod:c,CIFilterName:"CIPointillize",thumbnail:"thumbnails/pointillize.webp"},{name:"Process",description:"Gives images a cooler toner",applyMethod:c,CIFilterName:"CIPhotoEffectProcess",thumbnail:"thumbnails/process.webp"},{name:"Sepia",description:"Maps all colors to shades of brown",applyMethod:c,CIFilterName:"CISepiaTone",thumbnail:"thumbnails/sepia.webp"},{name:"Sharpen Luminance",description:"Increases detailed by sharpening based on luminance",applyMethod:c,CIFilterName:"CISharpenLuminance",thumbnail:"thumbnails/sharpen_luminance.webp"},{name:"Thermal",description:"Thermal camera effect",applyMethod:c,CIFilterName:"CIThermal",thumbnail:"thumbnails/thermal.webp"},{name:"Tonal",description:"Decreases saturation and contrast",applyMethod:c,CIFilterName:"CIPhotoEffectTonal",thumbnail:"thumbnails/tonal.webp"},{name:"Transfer",description:"Makes images warmer",applyMethod:c,CIFilterName:"CIPhotoEffectTransfer",thumbnail:"thumbnails/transfer.webp"},{name:"Vignette",description:"Adds shading to the corners of images",applyMethod:c,CIFilterName:"CIVignette",thumbnail:"thumbnails/vignette.webp"},{name:"X-Ray",description:"X-Ray image effect",applyMethod:c,CIFilterName:"CIXRay",thumbnail:"thumbnails/x-ray.webp"},{name:"Zoom Blur",description:"Blur simulating a camera zooming in while capturing an image",applyMethod:c,CIFilterName:"CIZoomBlur",thumbnail:"thumbnails/zoom_blur.webp"}];var Oe=require("react");var D=require("@raycast/api");async function $e(e){if(e.selectedImages.length===0||e.selectedImages.length===1&&e.selectedImages[0]===""){await(0,D.showToast)({title:"No images selected",style:D.Toast.Style.Failure});return}let t=await(0,D.showToast)({title:e.inProgressMessage,style:D.Toast.Style.Animated}),n=`image${e.selectedImages.length===1?"":"s"}`;try{await e.operation(),t.title=`${e.successMessage} ${e.selectedImages.length.toString()} ${n}`,t.style=D.Toast.Style.Success}catch(i){await Nn(`${e.failureMessage} ${e.selectedImages.length.toString()} ${n}`,i,t)}finally{await ce()}}var q=require("react/jsx-runtime");function Mn(){let[e,t]=(0,Oe.useState)(),[n,i]=(0,Oe.useState)(""),a=ke.map(s=>{let o={source:e?.name===s.name?n==""?s.thumbnail:n:s.thumbnail};return(0,q.jsx)(T.Grid.Item,{title:s.name,id:s.name,subtitle:s.description,content:o,actions:(0,q.jsx)(T.ActionPanel,{children:(0,q.jsx)(T.Action,{title:`Apply ${s.name} Filter`,onAction:async()=>{let p=await Ee();await $e({operation:()=>Ae(p,s),selectedImages:p,inProgressMessage:"Filtering in progress...",successMessage:"Applied filter to",failureMessage:"Failed to apply filter to"})}})})},s.name)});return(0,q.jsx)(T.Grid,{searchBarPlaceholder:"Search filters...",throttle:!0,onSelectionChange:async s=>{let r=ke.find(o=>o.name===s);if(r&&r.name!==e?.name){i(""),t(r);let o=await Ee();if(o.length>0&&o[0].trim()!==""){let p=On(r,o[0]);i(p)}await ce()}},children:a})}
