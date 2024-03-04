"use strict";var On=Object.create;var z=Object.defineProperty;var kn=Object.getOwnPropertyDescriptor;var Gn=Object.getOwnPropertyNames;var Ln=Object.getPrototypeOf,jn=Object.prototype.hasOwnProperty;var p=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Bn=(e,t)=>{for(var n in t)z(e,n,{get:t[n],enumerable:!0})},Ue=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Gn(t))!jn.call(e,i)&&i!==n&&z(e,i,{get:()=>t[i],enumerable:!(s=kn(t,i))||s.enumerable});return e};var A=(e,t,n)=>(n=e!=null?On(Ln(e)):{},Ue(t||!e||!e.__esModule?z(n,"default",{value:e,enumerable:!0}):n,e)),Un=e=>Ue(z({},"__esModule",{value:!0}),e);var _e=p((Wi,qe)=>{qe.exports=We;We.sync=Hn;var Me=require("fs");function Mn(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var s=0;s<n.length;s++){var i=n[s].toLowerCase();if(i&&e.substr(-i.length).toLowerCase()===i)return!0}return!1}function He(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:Mn(t,n)}function We(e,t,n){Me.stat(e,function(s,i){n(s,s?!1:He(i,e,t))})}function Hn(e,t){return He(Me.statSync(e),e,t)}});var Je=p((qi,ze)=>{ze.exports=Ke;Ke.sync=Wn;var Xe=require("fs");function Ke(e,t,n){Xe.stat(e,function(s,i){n(s,s?!1:Ve(i,t))})}function Wn(e,t){return Ve(Xe.statSync(e),t)}function Ve(e,t){return e.isFile()&&qn(e,t)}function qn(e,t){var n=e.mode,s=e.uid,i=e.gid,r=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),o=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),d=parseInt("010",8),u=parseInt("001",8),m=a|d,y=n&u||n&d&&i===o||n&a&&s===r||n&m&&r===0;return y}});var Ye=p((Xi,Ze)=>{var _i=require("fs"),J;process.platform==="win32"||global.TESTING_WINDOWS?J=_e():J=Je();Ze.exports=de;de.sync=_n;function de(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(s,i){de(e,t||{},function(r,o){r?i(r):s(o)})})}J(e,t||{},function(s,i){s&&(s.code==="EACCES"||t&&t.ignoreErrors)&&(s=null,i=!1),n(s,i)})}function _n(e,t){try{return J.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var rt=p((Ki,it)=>{var N=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",Qe=require("path"),Xn=N?";":":",et=Ye(),tt=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),nt=(e,t)=>{let n=t.colon||Xn,s=e.match(/\//)||N&&e.match(/\\/)?[""]:[...N?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],i=N?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",r=N?i.split(n):[""];return N&&e.indexOf(".")!==-1&&r[0]!==""&&r.unshift(""),{pathEnv:s,pathExt:r,pathExtExe:i}},st=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:s,pathExt:i,pathExtExe:r}=nt(e,t),o=[],a=u=>new Promise((m,y)=>{if(u===s.length)return t.all&&o.length?m(o):y(tt(e));let w=s[u],P=/^".*"$/.test(w)?w.slice(1,-1):w,x=Qe.join(P,e),I=!P&&/^\.[\\\/]/.test(e)?e.slice(0,2)+x:x;m(d(I,u,0))}),d=(u,m,y)=>new Promise((w,P)=>{if(y===i.length)return w(a(m+1));let x=i[y];et(u+x,{pathExt:r},(I,E)=>{if(!I&&E)if(t.all)o.push(u+x);else return w(u+x);return w(d(u,m,y+1))})});return n?a(0).then(u=>n(null,u),n):a(0)},Kn=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:s,pathExtExe:i}=nt(e,t),r=[];for(let o=0;o<n.length;o++){let a=n[o],d=/^".*"$/.test(a)?a.slice(1,-1):a,u=Qe.join(d,e),m=!d&&/^\.[\\\/]/.test(e)?e.slice(0,2)+u:u;for(let y=0;y<s.length;y++){let w=m+s[y];try{if(et.sync(w,{pathExt:i}))if(t.all)r.push(w);else return w}catch{}}}if(t.all&&r.length)return r;if(t.nothrow)return null;throw tt(e)};it.exports=st;st.sync=Kn});var fe=p((Vi,ue)=>{"use strict";var ot=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(s=>s.toUpperCase()==="PATH")||"Path"};ue.exports=ot;ue.exports.default=ot});var pt=p((zi,lt)=>{"use strict";var at=require("path"),Vn=rt(),zn=fe();function ct(e,t){let n=e.options.env||process.env,s=process.cwd(),i=e.options.cwd!=null,r=i&&process.chdir!==void 0&&!process.chdir.disabled;if(r)try{process.chdir(e.options.cwd)}catch{}let o;try{o=Vn.sync(e.command,{path:n[zn({env:n})],pathExt:t?at.delimiter:void 0})}catch{}finally{r&&process.chdir(s)}return o&&(o=at.resolve(i?e.options.cwd:"",o)),o}function Jn(e){return ct(e)||ct(e,!0)}lt.exports=Jn});var dt=p((Ji,he)=>{"use strict";var me=/([()\][%!^"`<>&|;, *?])/g;function Zn(e){return e=e.replace(me,"^$1"),e}function Yn(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(me,"^$1"),t&&(e=e.replace(me,"^$1")),e}he.exports.command=Zn;he.exports.argument=Yn});var ft=p((Zi,ut)=>{"use strict";ut.exports=/^#!(.*)/});var ht=p((Yi,mt)=>{"use strict";var Qn=ft();mt.exports=(e="")=>{let t=e.match(Qn);if(!t)return null;let[n,s]=t[0].replace(/#! ?/,"").split(" "),i=n.split("/").pop();return i==="env"?s:s?`${i} ${s}`:i}});var wt=p((Qi,gt)=>{"use strict";var ge=require("fs"),es=ht();function ts(e){let n=Buffer.alloc(150),s;try{s=ge.openSync(e,"r"),ge.readSync(s,n,0,150,0),ge.closeSync(s)}catch{}return es(n.toString())}gt.exports=ts});var xt=p((er,Pt)=>{"use strict";var ns=require("path"),St=pt(),yt=dt(),ss=wt(),is=process.platform==="win32",rs=/\.(?:com|exe)$/i,os=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function as(e){e.file=St(e);let t=e.file&&ss(e.file);return t?(e.args.unshift(e.file),e.command=t,St(e)):e.file}function cs(e){if(!is)return e;let t=as(e),n=!rs.test(t);if(e.options.forceShell||n){let s=os.test(t);e.command=ns.normalize(e.command),e.command=yt.command(e.command),e.args=e.args.map(r=>yt.argument(r,s));let i=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${i}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function ls(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let s={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?s:cs(s)}Pt.exports=ls});var vt=p((tr,bt)=>{"use strict";var we=process.platform==="win32";function Se(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function ps(e,t){if(!we)return;let n=e.emit;e.emit=function(s,i){if(s==="exit"){let r=It(i,t,"spawn");if(r)return n.call(e,"error",r)}return n.apply(e,arguments)}}function It(e,t){return we&&e===1&&!t.file?Se(t.original,"spawn"):null}function ds(e,t){return we&&e===1&&!t.file?Se(t.original,"spawnSync"):null}bt.exports={hookChildProcess:ps,verifyENOENT:It,verifyENOENTSync:ds,notFoundError:Se}});var Ft=p((nr,O)=>{"use strict";var Tt=require("child_process"),ye=xt(),Pe=vt();function Dt(e,t,n){let s=ye(e,t,n),i=Tt.spawn(s.command,s.args,s.options);return Pe.hookChildProcess(i,s),i}function us(e,t,n){let s=ye(e,t,n),i=Tt.spawnSync(s.command,s.args,s.options);return i.error=i.error||Pe.verifyENOENTSync(i.status,s),i}O.exports=Dt;O.exports.spawn=Dt;O.exports.sync=us;O.exports._parse=ye;O.exports._enoent=Pe});var Ct=p((sr,Rt)=>{"use strict";Rt.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var At=p((ir,H)=>{"use strict";var M=require("path"),$t=fe(),Et=e=>{e={cwd:process.cwd(),path:process.env[$t()],execPath:process.execPath,...e};let t,n=M.resolve(e.cwd),s=[];for(;t!==n;)s.push(M.join(n,"node_modules/.bin")),t=n,n=M.resolve(n,"..");let i=M.resolve(e.cwd,e.execPath,"..");return s.push(i),s.concat(e.path).join(M.delimiter)};H.exports=Et;H.exports.default=Et;H.exports.env=e=>{e={env:process.env,...e};let t={...e.env},n=$t({env:t});return e.path=t[n],t[n]=H.exports(e),t}});var Ot=p((rr,xe)=>{"use strict";var Nt=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};xe.exports=Nt;xe.exports.default=Nt});var Gt=p((or,Y)=>{"use strict";var fs=Ot(),Z=new WeakMap,kt=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,s=0,i=e.displayName||e.name||"<anonymous>",r=function(...o){if(Z.set(r,++s),s===1)n=e.apply(this,o),e=null;else if(t.throw===!0)throw new Error(`Function \`${i}\` can only be called once`);return n};return fs(r,e),Z.set(r,s),r};Y.exports=kt;Y.exports.default=kt;Y.exports.callCount=e=>{if(!Z.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return Z.get(e)}});var Lt=p(Q=>{"use strict";Object.defineProperty(Q,"__esModule",{value:!0});Q.SIGNALS=void 0;var ms=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];Q.SIGNALS=ms});var Ie=p(k=>{"use strict";Object.defineProperty(k,"__esModule",{value:!0});k.SIGRTMAX=k.getRealtimeSignals=void 0;var hs=function(){let e=Bt-jt+1;return Array.from({length:e},gs)};k.getRealtimeSignals=hs;var gs=function(e,t){return{name:`SIGRT${t+1}`,number:jt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},jt=34,Bt=64;k.SIGRTMAX=Bt});var Ut=p(ee=>{"use strict";Object.defineProperty(ee,"__esModule",{value:!0});ee.getSignals=void 0;var ws=require("os"),Ss=Lt(),ys=Ie(),Ps=function(){let e=(0,ys.getRealtimeSignals)();return[...Ss.SIGNALS,...e].map(xs)};ee.getSignals=Ps;var xs=function({name:e,number:t,description:n,action:s,forced:i=!1,standard:r}){let{signals:{[e]:o}}=ws.constants,a=o!==void 0;return{name:e,number:a?o:t,description:n,supported:a,action:s,forced:i,standard:r}}});var Ht=p(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});G.signalsByNumber=G.signalsByName=void 0;var Is=require("os"),Mt=Ut(),bs=Ie(),vs=function(){return(0,Mt.getSignals)().reduce(Ts,{})},Ts=function(e,{name:t,number:n,description:s,supported:i,action:r,forced:o,standard:a}){return{...e,[t]:{name:t,number:n,description:s,supported:i,action:r,forced:o,standard:a}}},Ds=vs();G.signalsByName=Ds;var Fs=function(){let e=(0,Mt.getSignals)(),t=bs.SIGRTMAX+1,n=Array.from({length:t},(s,i)=>Rs(i,e));return Object.assign({},...n)},Rs=function(e,t){let n=Cs(e,t);if(n===void 0)return{};let{name:s,description:i,supported:r,action:o,forced:a,standard:d}=n;return{[e]:{name:s,number:e,description:i,supported:r,action:o,forced:a,standard:d}}},Cs=function(e,t){let n=t.find(({name:s})=>Is.constants.signals[s]===e);return n!==void 0?n:t.find(s=>s.number===e)},$s=Fs();G.signalsByNumber=$s});var qt=p((dr,Wt)=>{"use strict";var{signalsByName:Es}=Ht(),As=({timedOut:e,timeout:t,errorCode:n,signal:s,signalDescription:i,exitCode:r,isCanceled:o})=>e?`timed out after ${t} milliseconds`:o?"was canceled":n!==void 0?`failed with ${n}`:s!==void 0?`was killed with ${s} (${i})`:r!==void 0?`failed with exit code ${r}`:"failed",Ns=({stdout:e,stderr:t,all:n,error:s,signal:i,exitCode:r,command:o,escapedCommand:a,timedOut:d,isCanceled:u,killed:m,parsed:{options:{timeout:y}}})=>{r=r===null?void 0:r,i=i===null?void 0:i;let w=i===void 0?void 0:Es[i].description,P=s&&s.code,I=`Command ${As({timedOut:d,timeout:y,errorCode:P,signal:i,signalDescription:w,exitCode:r,isCanceled:u})}: ${o}`,E=Object.prototype.toString.call(s)==="[object Error]",K=E?`${I}
${s.message}`:I,V=[K,t,e].filter(Boolean).join(`
`);return E?(s.originalMessage=s.message,s.message=V):s=new Error(V),s.shortMessage=K,s.command=o,s.escapedCommand=a,s.exitCode=r,s.signal=i,s.signalDescription=w,s.stdout=e,s.stderr=t,n!==void 0&&(s.all=n),"bufferedData"in s&&delete s.bufferedData,s.failed=!0,s.timedOut=!!d,s.isCanceled=u,s.killed=m&&!d,s};Wt.exports=Ns});var Xt=p((ur,be)=>{"use strict";var te=["stdin","stdout","stderr"],Os=e=>te.some(t=>e[t]!==void 0),_t=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return te.map(s=>e[s]);if(Os(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${te.map(s=>`\`${s}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,te.length);return Array.from({length:n},(s,i)=>t[i])};be.exports=_t;be.exports.node=e=>{let t=_t(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var Kt=p((fr,ne)=>{ne.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&ne.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&ne.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var Yt=p((mr,B)=>{var f=global.process,F=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};F(f)?(Vt=require("assert"),L=Kt(),zt=/^win/i.test(f.platform),W=require("events"),typeof W!="function"&&(W=W.EventEmitter),f.__signal_exit_emitter__?h=f.__signal_exit_emitter__:(h=f.__signal_exit_emitter__=new W,h.count=0,h.emitted={}),h.infinite||(h.setMaxListeners(1/0),h.infinite=!0),B.exports=function(e,t){if(!F(global.process))return function(){};Vt.equal(typeof e,"function","a callback must be provided for exit handler"),j===!1&&ve();var n="exit";t&&t.alwaysLast&&(n="afterexit");var s=function(){h.removeListener(n,e),h.listeners("exit").length===0&&h.listeners("afterexit").length===0&&se()};return h.on(n,e),s},se=function(){!j||!F(global.process)||(j=!1,L.forEach(function(t){try{f.removeListener(t,ie[t])}catch{}}),f.emit=re,f.reallyExit=Te,h.count-=1)},B.exports.unload=se,R=function(t,n,s){h.emitted[t]||(h.emitted[t]=!0,h.emit(t,n,s))},ie={},L.forEach(function(e){ie[e]=function(){if(F(global.process)){var n=f.listeners(e);n.length===h.count&&(se(),R("exit",null,e),R("afterexit",null,e),zt&&e==="SIGHUP"&&(e="SIGINT"),f.kill(f.pid,e))}}}),B.exports.signals=function(){return L},j=!1,ve=function(){j||!F(global.process)||(j=!0,h.count+=1,L=L.filter(function(t){try{return f.on(t,ie[t]),!0}catch{return!1}}),f.emit=Zt,f.reallyExit=Jt)},B.exports.load=ve,Te=f.reallyExit,Jt=function(t){F(global.process)&&(f.exitCode=t||0,R("exit",f.exitCode,null),R("afterexit",f.exitCode,null),Te.call(f,f.exitCode))},re=f.emit,Zt=function(t,n){if(t==="exit"&&F(global.process)){n!==void 0&&(f.exitCode=n);var s=re.apply(this,arguments);return R("exit",f.exitCode,null),R("afterexit",f.exitCode,null),s}else return re.apply(this,arguments)}):B.exports=function(){return function(){}};var Vt,L,zt,W,h,se,R,ie,j,ve,Te,Jt,re,Zt});var en=p((hr,Qt)=>{"use strict";var ks=require("os"),Gs=Yt(),Ls=1e3*5,js=(e,t="SIGTERM",n={})=>{let s=e(t);return Bs(e,t,n,s),s},Bs=(e,t,n,s)=>{if(!Us(t,n,s))return;let i=Hs(n),r=setTimeout(()=>{e("SIGKILL")},i);r.unref&&r.unref()},Us=(e,{forceKillAfterTimeout:t},n)=>Ms(e)&&t!==!1&&n,Ms=e=>e===ks.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Hs=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Ls;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Ws=(e,t)=>{e.kill()&&(t.isCanceled=!0)},qs=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},_s=(e,{timeout:t,killSignal:n="SIGTERM"},s)=>{if(t===0||t===void 0)return s;let i,r=new Promise((a,d)=>{i=setTimeout(()=>{qs(e,n,d)},t)}),o=s.finally(()=>{clearTimeout(i)});return Promise.race([r,o])},Xs=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Ks=async(e,{cleanup:t,detached:n},s)=>{if(!t||n)return s;let i=Gs(()=>{e.kill()});return s.finally(()=>{i()})};Qt.exports={spawnedKill:js,spawnedCancel:Ws,setupTimeout:_s,validateTimeout:Xs,setExitHandler:Ks}});var nn=p((gr,tn)=>{"use strict";var b=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";b.writable=e=>b(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";b.readable=e=>b(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";b.duplex=e=>b.writable(e)&&b.readable(e);b.transform=e=>b.duplex(e)&&typeof e._transform=="function";tn.exports=b});var rn=p((wr,sn)=>{"use strict";var{PassThrough:Vs}=require("stream");sn.exports=e=>{e={...e};let{array:t}=e,{encoding:n}=e,s=n==="buffer",i=!1;t?i=!(n||s):n=n||"utf8",s&&(n=null);let r=new Vs({objectMode:i});n&&r.setEncoding(n);let o=0,a=[];return r.on("data",d=>{a.push(d),i?o=a.length:o+=d.length}),r.getBufferedValue=()=>t?a:s?Buffer.concat(a,o):a.join(""),r.getBufferedLength=()=>o,r}});var on=p((Sr,q)=>{"use strict";var{constants:zs}=require("buffer"),Js=require("stream"),{promisify:Zs}=require("util"),Ys=rn(),Qs=Zs(Js.pipeline),oe=class extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}};async function De(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:n}=t,s=Ys(t);return await new Promise((i,r)=>{let o=a=>{a&&s.getBufferedLength()<=zs.MAX_LENGTH&&(a.bufferedData=s.getBufferedValue()),r(a)};(async()=>{try{await Qs(e,s),i()}catch(a){o(a)}})(),s.on("data",()=>{s.getBufferedLength()>n&&o(new oe)})}),s.getBufferedValue()}q.exports=De;q.exports.buffer=(e,t)=>De(e,{...t,encoding:"buffer"});q.exports.array=(e,t)=>De(e,{...t,array:!0});q.exports.MaxBufferError=oe});var cn=p((yr,an)=>{"use strict";var{PassThrough:ei}=require("stream");an.exports=function(){var e=[],t=new ei({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=s,t.on("unpipe",i),Array.prototype.slice.call(arguments).forEach(n),t;function n(r){return Array.isArray(r)?(r.forEach(n),this):(e.push(r),r.once("end",i.bind(null,r)),r.once("error",t.emit.bind(t,"error")),r.pipe(t,{end:!1}),this)}function s(){return e.length==0}function i(r){e=e.filter(function(o){return o!==r}),!e.length&&t.readable&&t.end()}}});var un=p((Pr,dn)=>{"use strict";var pn=nn(),ln=on(),ti=cn(),ni=(e,t)=>{t===void 0||e.stdin===void 0||(pn(t)?t.pipe(e.stdin):e.stdin.end(t))},si=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=ti();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},Fe=async(e,t)=>{if(e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},Re=(e,{encoding:t,buffer:n,maxBuffer:s})=>{if(!(!e||!n))return t?ln(e,{encoding:t,maxBuffer:s}):ln.buffer(e,{maxBuffer:s})},ii=async({stdout:e,stderr:t,all:n},{encoding:s,buffer:i,maxBuffer:r},o)=>{let a=Re(e,{encoding:s,buffer:i,maxBuffer:r}),d=Re(t,{encoding:s,buffer:i,maxBuffer:r}),u=Re(n,{encoding:s,buffer:i,maxBuffer:r*2});try{return await Promise.all([o,a,d,u])}catch(m){return Promise.all([{error:m,signal:m.signal,timedOut:m.timedOut},Fe(e,a),Fe(t,d),Fe(n,u)])}},ri=({input:e})=>{if(pn(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};dn.exports={handleInput:ni,makeAllStream:si,getSpawnedResult:ii,validateInputSync:ri}});var mn=p((xr,fn)=>{"use strict";var oi=(async()=>{})().constructor.prototype,ai=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(oi,e)]),ci=(e,t)=>{for(let[n,s]of ai){let i=typeof t=="function"?(...r)=>Reflect.apply(s.value,t(),r):s.value.bind(t);Reflect.defineProperty(e,n,{...s,value:i})}return e},li=e=>new Promise((t,n)=>{e.on("exit",(s,i)=>{t({exitCode:s,signal:i})}),e.on("error",s=>{n(s)}),e.stdin&&e.stdin.on("error",s=>{n(s)})});fn.exports={mergePromise:ci,getSpawnedPromise:li}});var wn=p((Ir,gn)=>{"use strict";var hn=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],pi=/^[\w.-]+$/,di=/"/g,ui=e=>typeof e!="string"||pi.test(e)?e:`"${e.replace(di,'\\"')}"`,fi=(e,t)=>hn(e,t).join(" "),mi=(e,t)=>hn(e,t).map(n=>ui(n)).join(" "),hi=/ +/g,gi=e=>{let t=[];for(let n of e.trim().split(hi)){let s=t[t.length-1];s&&s.endsWith("\\")?t[t.length-1]=`${s.slice(0,-1)} ${n}`:t.push(n)}return t};gn.exports={joinCommand:fi,getEscapedCommand:mi,parseCommand:gi}});var vn=p((br,U)=>{"use strict";var wi=require("path"),Ce=require("child_process"),Si=Ft(),yi=Ct(),Pi=At(),xi=Gt(),ae=qt(),yn=Xt(),{spawnedKill:Ii,spawnedCancel:bi,setupTimeout:vi,validateTimeout:Ti,setExitHandler:Di}=en(),{handleInput:Fi,getSpawnedResult:Ri,makeAllStream:Ci,validateInputSync:$i}=un(),{mergePromise:Sn,getSpawnedPromise:Ei}=mn(),{joinCommand:Pn,parseCommand:xn,getEscapedCommand:In}=wn(),Ai=1e3*1e3*100,Ni=({env:e,extendEnv:t,preferLocal:n,localDir:s,execPath:i})=>{let r=t?{...process.env,...e}:e;return n?Pi.env({env:r,cwd:s,execPath:i}):r},bn=(e,t,n={})=>{let s=Si._parse(e,t,n);return e=s.command,t=s.args,n=s.options,n={maxBuffer:Ai,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...n},n.env=Ni(n),n.stdio=yn(n),process.platform==="win32"&&wi.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:s}},_=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?yi(t):t,ce=(e,t,n)=>{let s=bn(e,t,n),i=Pn(e,t),r=In(e,t);Ti(s.options);let o;try{o=Ce.spawn(s.file,s.args,s.options)}catch(P){let x=new Ce.ChildProcess,I=Promise.reject(ae({error:P,stdout:"",stderr:"",all:"",command:i,escapedCommand:r,parsed:s,timedOut:!1,isCanceled:!1,killed:!1}));return Sn(x,I)}let a=Ei(o),d=vi(o,s.options,a),u=Di(o,s.options,d),m={isCanceled:!1};o.kill=Ii.bind(null,o.kill.bind(o)),o.cancel=bi.bind(null,o,m);let w=xi(async()=>{let[{error:P,exitCode:x,signal:I,timedOut:E},K,V,Nn]=await Ri(o,s.options,u),Ge=_(s.options,K),Le=_(s.options,V),je=_(s.options,Nn);if(P||x!==0||I!==null){let Be=ae({error:P,exitCode:x,signal:I,stdout:Ge,stderr:Le,all:je,command:i,escapedCommand:r,parsed:s,timedOut:E,isCanceled:m.isCanceled,killed:o.killed});if(!s.options.reject)return Be;throw Be}return{command:i,escapedCommand:r,exitCode:0,stdout:Ge,stderr:Le,all:je,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return Fi(o,s.options.input),o.all=Ci(o,s.options),Sn(o,w)};U.exports=ce;U.exports.sync=(e,t,n)=>{let s=bn(e,t,n),i=Pn(e,t),r=In(e,t);$i(s.options);let o;try{o=Ce.spawnSync(s.file,s.args,s.options)}catch(u){throw ae({error:u,stdout:"",stderr:"",all:"",command:i,escapedCommand:r,parsed:s,timedOut:!1,isCanceled:!1,killed:!1})}let a=_(s.options,o.stdout,o.error),d=_(s.options,o.stderr,o.error);if(o.error||o.status!==0||o.signal!==null){let u=ae({stdout:a,stderr:d,error:o.error,signal:o.signal,exitCode:o.status,command:i,escapedCommand:r,parsed:s,timedOut:o.error&&o.error.code==="ETIMEDOUT",isCanceled:!1,killed:o.signal!==null});if(!s.options.reject)return u;throw u}return{command:i,escapedCommand:r,exitCode:0,stdout:a,stderr:d,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};U.exports.command=(e,t)=>{let[n,...s]=xn(e);return ce(n,s,t)};U.exports.commandSync=(e,t)=>{let[n,...s]=xn(e);return ce.sync(n,s,t)};U.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let s=yn.node(n),i=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:r=process.execPath,nodeOptions:o=i}=n;return ce(r,[...o,e,...Array.isArray(t)?t:[]],{...n,stdin:void 0,stdout:void 0,stderr:void 0,stdio:s,shell:!1})}});var Mi={};Bn(Mi,{default:()=>An});module.exports=Un(Mi);var D=require("@raycast/api");var T=require("child_process"),Ne=A(require("path"));var v=require("child_process"),g=A(require("fs")),S=A(require("os")),l=A(require("path"));var $e=A(require("node:process"),1),Ee=A(vn(),1);async function C(e,{humanReadableOutput:t=!0}={}){if($e.default.platform!=="darwin")throw new Error("macOS only");let n=t?[]:["-ss"],{stdout:s}=await(0,Ee.default)("osascript",["-e",e,n]);return s}function X(e,{humanReadableOutput:t=!0}={}){if($e.default.platform!=="darwin")throw new Error("macOS only");let n=t?[]:["-ss"],{stdout:s}=Ee.default.sync("osascript",["-e",e,...n]);return s}var c=require("@raycast/api");var Tn=async()=>C(`use framework "AppKit"
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
      
      return filePaths`),Dn=async e=>{let t=Array.isArray(e)?e:[e];await C(`use framework "Foundation"
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
      end if`)};var Oi=async()=>C(`set imageTypes to {"PNG", "JPG", "JPEG", "TIF", "HEIF", "GIF", "ICO", "ICNS", "ASTC", "BMP", "DDS", "EXR", "JP2", "KTX", "Portable Bitmap", "Adobe Photoshop", "PVR", "TGA", "WebP", "SVG", "PDF", "HEIC"}
    
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
    end tell`),ki=async()=>C(`set imageTypes to {"PNG", "JPG", "JPEG", "TIF", "HEIF", "GIF", "ICO", "ICNS", "ASTC", "BMP", "DDS", "EXR", "JP2", "KTX", "Portable Bitmap", "Adobe Photoshop", "PVR", "TGA", "WebP", "SVG", "PDF", "HEIC"}

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
    end tell`),Rn=async()=>{let t=(await c.LocalStorage.getItem("itemsToRemove")??"").toString().split(", ");for(let n of t)g.existsSync(n)&&await g.promises.rm(n);await c.LocalStorage.removeItem("itemsToRemove")},Cn=async()=>{let e=[],n=(0,c.getPreferenceValues)().inputMethod,s=!1;if(n=="Clipboard")try{let o=(await Tn()).split(", ");if(await c.LocalStorage.setItem("itemsToRemove",o.join(", ")),o.filter(a=>a.trim().length>0).length>0)return o}catch{console.error("Couldn't get images from clipboard"),s=!0}let i=n;try{i=(await(0,c.getFrontmostApplication)()).name}catch{console.error("Couldn't get frontmost application")}try{if(n=="Path Finder"&&((await ki()).split(", ").forEach(a=>{e.includes(a)||e.push(a)}),e.length>0))return e}catch{console.error("Couldn't get images from Path Finder"),s=!0}let r=(await Oi()).split(", ");return i=="Finder"||n=="Finder"||s?e.push(...r):r.forEach(o=>{o.split("/").at(-2)=="Desktop"&&!e.includes(o)&&e.push(o)}),e},Ae=async e=>{let t=(0,c.getPreferenceValues)();t.imageResultHandling=="copyToClipboard"?(await Dn(e),Fn(e)):t.imageResultHandling=="openInPreview"&&(console.log(e),await ji(e),Fn(e))},Gi=async()=>(S.cpus()[0].model.includes("Apple")?"arm":"x86")=="arm"?((0,v.execSync)(`chmod +x ${c.environment.assetsPath}/webp/arm/dwebp`),(0,v.execSync)(`chmod +x ${c.environment.assetsPath}/webp/arm/cwebp`),g.existsSync(`${c.environment.assetsPath}/webp/x86/dwebp`)&&await g.promises.rm(`${c.environment.assetsPath}/webp/x86/dwebp`),g.existsSync(`${c.environment.assetsPath}/webp/x86/cwebp`)&&await g.promises.rm(`${c.environment.assetsPath}/webp/x86/cwebp`),[`${c.environment.assetsPath}/webp/arm/dwebp`,`${c.environment.assetsPath}/webp/arm/cwebp`]):((0,v.execSync)(`chmod +x ${c.environment.assetsPath}/webp/x86/dwebp`),(0,v.execSync)(`chmod +x ${c.environment.assetsPath}/webp/x86/cwebp`),g.existsSync(`${c.environment.assetsPath}/webp/arm/dwebp`)&&await g.promises.rm(`${c.environment.assetsPath}/webp/arm/dwebp`),g.existsSync(`${c.environment.assetsPath}/webp/arm/cwebp`)&&await g.promises.rm(`${c.environment.assetsPath}/webp/arm/cwebp`),[`${c.environment.assetsPath}/webp/x86/dwebp`,`${c.environment.assetsPath}/webp/x86/cwebp`]),le=async(e,t)=>{let n=(0,c.getPreferenceValues)(),s=`${c.environment.supportPath}/tmp.png`,i=t;n.imageResultHandling=="saveToDownloads"?i=l.default.join(S.homedir(),"Downloads",l.default.basename(i)):n.imageResultHandling=="saveToDesktop"?i=l.default.join(S.homedir(),"Desktop",l.default.basename(i)):(n.imageResultHandling=="copyToClipboard"||n.imageResultHandling=="openInPreview")&&(i=l.default.join(S.tmpdir(),l.default.basename(i)));let r=2;for(;g.existsSync(i)&&S.tmpdir()!=l.default.dirname(i);)i=l.default.join(l.default.dirname(i),l.default.basename(i,l.default.extname(i))+` (${r})${l.default.extname(i)}`),r++;let[o,a]=await Gi();return(0,v.execSync)(`${o} "${t}" -o "${s}" && ${e} "${s}" && ${a} "${s}" -o "${i}" ; rm "${s}"`),i},pe=async(e,t)=>{let n=(0,c.getPreferenceValues)(),s=`${c.environment.supportPath}/tmp.bmp`,i=t;n.imageResultHandling=="saveToDownloads"?i=l.default.join(S.homedir(),"Downloads",l.default.basename(i)):n.imageResultHandling=="saveToDesktop"?i=l.default.join(S.homedir(),"Desktop",l.default.basename(i)):(n.imageResultHandling=="copyToClipboard"||n.imageResultHandling=="openInPreview")&&(i=l.default.join(S.tmpdir(),l.default.basename(i)));let r=2;for(;g.existsSync(i)&&S.tmpdir()!=l.default.dirname(i);)i=l.default.join(l.default.dirname(i),l.default.basename(i,l.default.extname(i))+` (${r})${l.default.extname(i)}`),r++;return Li("BMP",t,s),(0,v.execSync)(`chmod +x ${c.environment.assetsPath}/potrace/potrace`),(0,v.execSync)(`${e} "${s}" && ${c.environment.assetsPath}/potrace/potrace -s --tight -o "${i}" "${s}"; rm "${s}"`),i},Li=(e,t,n)=>{X(`use framework "Foundation"
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
  pngData's writeToFile:"${n}" atomically:false`)};var ji=async e=>{let t=Array.isArray(e)?e:[e],n=t.some(s=>l.default.extname(s)==".svg");await C(`use framework "Foundation"
    use scripting additions
    set pageImages to {${t.map(s=>`current application's NSURL's fileURLWithPath:"${s}"`).join(", ")}}

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
                repeat with thePath in {"${t.map(s=>encodeURI(`file://${s}`)).join('", "')}"}
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
          end tell`}`)},Fn=e=>{let t=Array.isArray(e)?e:[e];for(let n of t)g.unlinkSync(n)},Bi=()=>X(`use framework "Foundation"
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
    end if`),Ui=()=>{let e="Finder";try{e=Bi()}catch{console.error("Couldn't get frontmost application")}try{if(e=="Path Finder")return X(`tell application "Path Finder"
          if 1 \u2264 (count finder windows) then
            get POSIX path of (target of finder window 1)
          else
            get POSIX path of desktop
          end if
        end tell`)}catch{console.error("Couldn't get current directory of Path Finder")}return X(`tell application "Finder"
      if 1 <= (count Finder windows) then
        get POSIX path of (target of window 1 as alias)
      else
        get POSIX path of (desktop as alias)
      end if
    end tell`)},$n=(e,t=!1)=>{let n=(0,c.getPreferenceValues)();return e.map(s=>{let i=s;if(n.imageResultHandling=="saveToDownloads"?i=l.default.join(S.homedir(),"Downloads",l.default.basename(i)):n.imageResultHandling=="saveToDesktop"?i=l.default.join(S.homedir(),"Desktop",l.default.basename(i)):(n.imageResultHandling=="saveInContainingFolder"||n.imageResultHandling=="replaceOriginal")&&(n.inputMethod=="Clipboard"||t)?i=l.default.join(Ui(),l.default.basename(i)):(n.imageResultHandling=="copyToClipboard"||n.imageResultHandling=="openInPreview")&&(i=l.default.join(S.tmpdir(),l.default.basename(i))),n.imageResultHandling!="replaceOriginal"&&S.tmpdir()!=l.default.dirname(i)){let r=2;for(;g.existsSync(i);)i=l.default.join(l.default.dirname(i),l.default.basename(i,l.default.extname(i))+` (${r})${l.default.extname(i)}`),r++}return i})},En=async(e,t,n)=>{console.error(t),n?(n.title=e,n.message=t.message,n.style=c.Toast.Style.Failure,n.primaryAction={title:"Copy Error",onAction:async()=>{await c.Clipboard.copy(t.message)}}):n=await(0,c.showToast)({title:e,message:t.message,style:c.Toast.Style.Failure,primaryAction:{title:"Copy Error",onAction:async()=>{await c.Clipboard.copy(t.message)}}})};async function Oe(e,t,n){let s='"'+e.join('" "')+'"',i=$n(e);if(s.toLocaleLowerCase().includes("webp")||s.toLocaleLowerCase().includes("svg")){let r=[];for(let o of e)if(o.toLowerCase().endsWith(".webp"))t!=-1&&n==-1?r.push(await le(`sips --resampleWidth ${t}`,o)):t==-1&&n!=-1?r.push(await le(`sips --resampleHeight ${n}`,o)):r.push(await le(`sips --resampleHeightWidth ${n} ${t}`,o));else if(o.toLowerCase().endsWith(".svg"))t!=-1&&n==-1?r.push(await pe(`sips --resampleWidth ${t}`,o)):t==-1&&n!=-1?r.push(await pe(`sips --resampleHeight ${n}`,o)):r.push(await pe(`sips --resampleHeightWidth ${n} ${t}`,o));else{let a=i[e.indexOf(o)];r.push(a),t!=-1&&n==-1?(0,T.execSync)(`sips --resampleWidth ${t} -o "${a}" "${o}"`):t==-1&&n!=-1?(0,T.execSync)(`sips --resampleHeight ${n} -o "${a}" "${o}"`):(0,T.execSync)(`sips --resampleHeightWidth ${n} -o "${a}" ${t} "${o}"`)}await Ae(r)}else{let r=i.length==1?i[0]:Ne.default.join(Ne.default.dirname(i[0]),"resized");i.length>1&&(0,T.execSync)(`mkdir -p "${r}"`),t!=-1&&n==-1?(0,T.execSync)(`sips --resampleWidth ${t} -o "${r}" ${s}`):t==-1&&n!=-1?(0,T.execSync)(`sips --resampleHeight ${n} -o "${r}" ${s}`):(0,T.execSync)(`sips --resampleHeightWidth ${n} ${t} -o "${r}" ${s}`),await Ae(i)}}var $=require("@raycast/api");async function ke(e){if(e.selectedImages.length===0||e.selectedImages.length===1&&e.selectedImages[0]===""){await(0,$.showToast)({title:"No images selected",style:$.Toast.Style.Failure});return}let t=await(0,$.showToast)({title:e.inProgressMessage,style:$.Toast.Style.Animated}),n=`image${e.selectedImages.length===1?"":"s"}`;try{await e.operation(),t.title=`${e.successMessage} ${e.selectedImages.length.toString()} ${n}`,t.style=$.Toast.Style.Success}catch(s){await En(`${e.failureMessage} ${e.selectedImages.length.toString()} ${n}`,s,t)}finally{await Rn()}}async function An(e){let{width:t,height:n}=e.arguments;if(t==""&&n==""){await(0,D.showToast)({title:"Must specify either width or height",style:D.Toast.Style.Failure});return}let s=t==""?-1:parseInt(t),i=n==""?-1:parseInt(n);if(isNaN(s)){await(0,D.showToast)({title:"Width must be an integer",style:D.Toast.Style.Failure});return}else if(isNaN(i)){await(0,D.showToast)({title:"Height must be an integer",style:D.Toast.Style.Failure});return}let r=await Cn();await ke({operation:()=>Oe(r,s,i),selectedImages:r,inProgressMessage:"Resizing in progress...",successMessage:"Resized",failureMessage:"Failed to resize"})}
