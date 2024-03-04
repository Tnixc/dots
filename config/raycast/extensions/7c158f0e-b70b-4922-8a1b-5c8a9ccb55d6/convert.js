"use strict";var jn=Object.create;var J=Object.defineProperty;var Bn=Object.getOwnPropertyDescriptor;var Mn=Object.getOwnPropertyNames;var Un=Object.getPrototypeOf,Hn=Object.prototype.hasOwnProperty;var d=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),qn=(e,t)=>{for(var n in t)J(e,n,{get:t[n],enumerable:!0})},Me=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Mn(t))!Hn.call(e,r)&&r!==n&&J(e,r,{get:()=>t[r],enumerable:!(s=Bn(t,r))||s.enumerable});return e};var C=(e,t,n)=>(n=e!=null?jn(Un(e)):{},Me(t||!e||!e.__esModule?J(n,"default",{value:e,enumerable:!0}):n,e)),Wn=e=>Me(J({},"__esModule",{value:!0}),e);var _e=d((_r,We)=>{We.exports=qe;qe.sync=Xn;var Ue=require("fs");function _n(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var s=0;s<n.length;s++){var r=n[s].toLowerCase();if(r&&e.substr(-r.length).toLowerCase()===r)return!0}return!1}function He(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:_n(t,n)}function qe(e,t,n){Ue.stat(e,function(s,r){n(s,s?!1:He(r,e,t))})}function Xn(e,t){return He(Ue.statSync(e),e,t)}});var Je=d((Xr,ze)=>{ze.exports=Ke;Ke.sync=Kn;var Xe=require("fs");function Ke(e,t,n){Xe.stat(e,function(s,r){n(s,s?!1:Ve(r,t))})}function Kn(e,t){return Ve(Xe.statSync(e),t)}function Ve(e,t){return e.isFile()&&Vn(e,t)}function Vn(e,t){var n=e.mode,s=e.uid,r=e.gid,o=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),c=parseInt("010",8),p=parseInt("001",8),f=a|c,S=n&p||n&c&&r===i||n&a&&s===o||n&f&&o===0;return S}});var Ye=d((Vr,Ze)=>{var Kr=require("fs"),Z;process.platform==="win32"||global.TESTING_WINDOWS?Z=_e():Z=Je();Ze.exports=ue;ue.sync=zn;function ue(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(s,r){ue(e,t||{},function(o,i){o?r(o):s(i)})})}Z(e,t||{},function(s,r){s&&(s.code==="EACCES"||t&&t.ignoreErrors)&&(s=null,r=!1),n(s,r)})}function zn(e,t){try{return Z.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var it=d((zr,rt)=>{var N=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",Qe=require("path"),Jn=N?";":":",et=Ye(),tt=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),nt=(e,t)=>{let n=t.colon||Jn,s=e.match(/\//)||N&&e.match(/\\/)?[""]:[...N?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],r=N?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",o=N?r.split(n):[""];return N&&e.indexOf(".")!==-1&&o[0]!==""&&o.unshift(""),{pathEnv:s,pathExt:o,pathExtExe:r}},st=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:s,pathExt:r,pathExtExe:o}=nt(e,t),i=[],a=p=>new Promise((f,S)=>{if(p===s.length)return t.all&&i.length?f(i):S(tt(e));let g=s[p],y=/^".*"$/.test(g)?g.slice(1,-1):g,I=Qe.join(y,e),x=!y&&/^\.[\\\/]/.test(e)?e.slice(0,2)+I:I;f(c(x,p,0))}),c=(p,f,S)=>new Promise((g,y)=>{if(S===r.length)return g(a(f+1));let I=r[S];et(p+I,{pathExt:o},(x,A)=>{if(!x&&A)if(t.all)i.push(p+I);else return g(p+I);return g(c(p,f,S+1))})});return n?a(0).then(p=>n(null,p),n):a(0)},Zn=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:s,pathExtExe:r}=nt(e,t),o=[];for(let i=0;i<n.length;i++){let a=n[i],c=/^".*"$/.test(a)?a.slice(1,-1):a,p=Qe.join(c,e),f=!c&&/^\.[\\\/]/.test(e)?e.slice(0,2)+p:p;for(let S=0;S<s.length;S++){let g=f+s[S];try{if(et.sync(g,{pathExt:r}))if(t.all)o.push(g);else return g}catch{}}}if(t.all&&o.length)return o;if(t.nothrow)return null;throw tt(e)};rt.exports=st;st.sync=Zn});var me=d((Jr,fe)=>{"use strict";var ot=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(s=>s.toUpperCase()==="PATH")||"Path"};fe.exports=ot;fe.exports.default=ot});var pt=d((Zr,lt)=>{"use strict";var at=require("path"),Yn=it(),Qn=me();function ct(e,t){let n=e.options.env||process.env,s=process.cwd(),r=e.options.cwd!=null,o=r&&process.chdir!==void 0&&!process.chdir.disabled;if(o)try{process.chdir(e.options.cwd)}catch{}let i;try{i=Yn.sync(e.command,{path:n[Qn({env:n})],pathExt:t?at.delimiter:void 0})}catch{}finally{o&&process.chdir(s)}return i&&(i=at.resolve(r?e.options.cwd:"",i)),i}function es(e){return ct(e)||ct(e,!0)}lt.exports=es});var dt=d((Yr,ge)=>{"use strict";var he=/([()\][%!^"`<>&|;, *?])/g;function ts(e){return e=e.replace(he,"^$1"),e}function ns(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(he,"^$1"),t&&(e=e.replace(he,"^$1")),e}ge.exports.command=ts;ge.exports.argument=ns});var ft=d((Qr,ut)=>{"use strict";ut.exports=/^#!(.*)/});var ht=d((ei,mt)=>{"use strict";var ss=ft();mt.exports=(e="")=>{let t=e.match(ss);if(!t)return null;let[n,s]=t[0].replace(/#! ?/,"").split(" "),r=n.split("/").pop();return r==="env"?s:s?`${r} ${s}`:r}});var wt=d((ti,gt)=>{"use strict";var we=require("fs"),rs=ht();function is(e){let n=Buffer.alloc(150),s;try{s=we.openSync(e,"r"),we.readSync(s,n,0,150,0),we.closeSync(s)}catch{}return rs(n.toString())}gt.exports=is});var It=d((ni,yt)=>{"use strict";var os=require("path"),St=pt(),Pt=dt(),as=wt(),cs=process.platform==="win32",ls=/\.(?:com|exe)$/i,ps=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function ds(e){e.file=St(e);let t=e.file&&as(e.file);return t?(e.args.unshift(e.file),e.command=t,St(e)):e.file}function us(e){if(!cs)return e;let t=ds(e),n=!ls.test(t);if(e.options.forceShell||n){let s=ps.test(t);e.command=os.normalize(e.command),e.command=Pt.command(e.command),e.args=e.args.map(o=>Pt.argument(o,s));let r=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${r}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function fs(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let s={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?s:us(s)}yt.exports=fs});var vt=d((si,bt)=>{"use strict";var Se=process.platform==="win32";function Pe(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function ms(e,t){if(!Se)return;let n=e.emit;e.emit=function(s,r){if(s==="exit"){let o=xt(r,t,"spawn");if(o)return n.call(e,"error",o)}return n.apply(e,arguments)}}function xt(e,t){return Se&&e===1&&!t.file?Pe(t.original,"spawn"):null}function hs(e,t){return Se&&e===1&&!t.file?Pe(t.original,"spawnSync"):null}bt.exports={hookChildProcess:ms,verifyENOENT:xt,verifyENOENTSync:hs,notFoundError:Pe}});var Dt=d((ri,O)=>{"use strict";var Tt=require("child_process"),ye=It(),Ie=vt();function Ct(e,t,n){let s=ye(e,t,n),r=Tt.spawn(s.command,s.args,s.options);return Ie.hookChildProcess(r,s),r}function gs(e,t,n){let s=ye(e,t,n),r=Tt.spawnSync(s.command,s.args,s.options);return r.error=r.error||Ie.verifyENOENTSync(r.status,s),r}O.exports=Ct;O.exports.spawn=Ct;O.exports.sync=gs;O.exports._parse=ye;O.exports._enoent=Ie});var Rt=d((ii,Ft)=>{"use strict";Ft.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var At=d((oi,q)=>{"use strict";var H=require("path"),$t=me(),Et=e=>{e={cwd:process.cwd(),path:process.env[$t()],execPath:process.execPath,...e};let t,n=H.resolve(e.cwd),s=[];for(;t!==n;)s.push(H.join(n,"node_modules/.bin")),t=n,n=H.resolve(n,"..");let r=H.resolve(e.cwd,e.execPath,"..");return s.push(r),s.concat(e.path).join(H.delimiter)};q.exports=Et;q.exports.default=Et;q.exports.env=e=>{e={env:process.env,...e};let t={...e.env},n=$t({env:t});return e.path=t[n],t[n]=q.exports(e),t}});var Ot=d((ai,xe)=>{"use strict";var Nt=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};xe.exports=Nt;xe.exports.default=Nt});var kt=d((ci,Q)=>{"use strict";var ws=Ot(),Y=new WeakMap,Gt=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,s=0,r=e.displayName||e.name||"<anonymous>",o=function(...i){if(Y.set(o,++s),s===1)n=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${r}\` can only be called once`);return n};return ws(o,e),Y.set(o,s),o};Q.exports=Gt;Q.exports.default=Gt;Q.exports.callCount=e=>{if(!Y.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return Y.get(e)}});var Lt=d(ee=>{"use strict";Object.defineProperty(ee,"__esModule",{value:!0});ee.SIGNALS=void 0;var Ss=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];ee.SIGNALS=Ss});var be=d(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});G.SIGRTMAX=G.getRealtimeSignals=void 0;var Ps=function(){let e=Bt-jt+1;return Array.from({length:e},ys)};G.getRealtimeSignals=Ps;var ys=function(e,t){return{name:`SIGRT${t+1}`,number:jt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},jt=34,Bt=64;G.SIGRTMAX=Bt});var Mt=d(te=>{"use strict";Object.defineProperty(te,"__esModule",{value:!0});te.getSignals=void 0;var Is=require("os"),xs=Lt(),bs=be(),vs=function(){let e=(0,bs.getRealtimeSignals)();return[...xs.SIGNALS,...e].map(Ts)};te.getSignals=vs;var Ts=function({name:e,number:t,description:n,action:s,forced:r=!1,standard:o}){let{signals:{[e]:i}}=Is.constants,a=i!==void 0;return{name:e,number:a?i:t,description:n,supported:a,action:s,forced:r,standard:o}}});var Ht=d(k=>{"use strict";Object.defineProperty(k,"__esModule",{value:!0});k.signalsByNumber=k.signalsByName=void 0;var Cs=require("os"),Ut=Mt(),Ds=be(),Fs=function(){return(0,Ut.getSignals)().reduce(Rs,{})},Rs=function(e,{name:t,number:n,description:s,supported:r,action:o,forced:i,standard:a}){return{...e,[t]:{name:t,number:n,description:s,supported:r,action:o,forced:i,standard:a}}},$s=Fs();k.signalsByName=$s;var Es=function(){let e=(0,Ut.getSignals)(),t=Ds.SIGRTMAX+1,n=Array.from({length:t},(s,r)=>As(r,e));return Object.assign({},...n)},As=function(e,t){let n=Ns(e,t);if(n===void 0)return{};let{name:s,description:r,supported:o,action:i,forced:a,standard:c}=n;return{[e]:{name:s,number:e,description:r,supported:o,action:i,forced:a,standard:c}}},Ns=function(e,t){let n=t.find(({name:s})=>Cs.constants.signals[s]===e);return n!==void 0?n:t.find(s=>s.number===e)},Os=Es();k.signalsByNumber=Os});var Wt=d((fi,qt)=>{"use strict";var{signalsByName:Gs}=Ht(),ks=({timedOut:e,timeout:t,errorCode:n,signal:s,signalDescription:r,exitCode:o,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":n!==void 0?`failed with ${n}`:s!==void 0?`was killed with ${s} (${r})`:o!==void 0?`failed with exit code ${o}`:"failed",Ls=({stdout:e,stderr:t,all:n,error:s,signal:r,exitCode:o,command:i,escapedCommand:a,timedOut:c,isCanceled:p,killed:f,parsed:{options:{timeout:S}}})=>{o=o===null?void 0:o,r=r===null?void 0:r;let g=r===void 0?void 0:Gs[r].description,y=s&&s.code,x=`Command ${ks({timedOut:c,timeout:S,errorCode:y,signal:r,signalDescription:g,exitCode:o,isCanceled:p})}: ${i}`,A=Object.prototype.toString.call(s)==="[object Error]",V=A?`${x}
${s.message}`:x,z=[V,t,e].filter(Boolean).join(`
`);return A?(s.originalMessage=s.message,s.message=z):s=new Error(z),s.shortMessage=V,s.command=i,s.escapedCommand=a,s.exitCode=o,s.signal=r,s.signalDescription=g,s.stdout=e,s.stderr=t,n!==void 0&&(s.all=n),"bufferedData"in s&&delete s.bufferedData,s.failed=!0,s.timedOut=!!c,s.isCanceled=p,s.killed=f&&!c,s};qt.exports=Ls});var Xt=d((mi,ve)=>{"use strict";var ne=["stdin","stdout","stderr"],js=e=>ne.some(t=>e[t]!==void 0),_t=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return ne.map(s=>e[s]);if(js(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${ne.map(s=>`\`${s}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,ne.length);return Array.from({length:n},(s,r)=>t[r])};ve.exports=_t;ve.exports.node=e=>{let t=_t(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var Kt=d((hi,se)=>{se.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&se.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&se.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var Yt=d((gi,B)=>{var u=global.process,F=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};F(u)?(Vt=require("assert"),L=Kt(),zt=/^win/i.test(u.platform),W=require("events"),typeof W!="function"&&(W=W.EventEmitter),u.__signal_exit_emitter__?m=u.__signal_exit_emitter__:(m=u.__signal_exit_emitter__=new W,m.count=0,m.emitted={}),m.infinite||(m.setMaxListeners(1/0),m.infinite=!0),B.exports=function(e,t){if(!F(global.process))return function(){};Vt.equal(typeof e,"function","a callback must be provided for exit handler"),j===!1&&Te();var n="exit";t&&t.alwaysLast&&(n="afterexit");var s=function(){m.removeListener(n,e),m.listeners("exit").length===0&&m.listeners("afterexit").length===0&&re()};return m.on(n,e),s},re=function(){!j||!F(global.process)||(j=!1,L.forEach(function(t){try{u.removeListener(t,ie[t])}catch{}}),u.emit=oe,u.reallyExit=Ce,m.count-=1)},B.exports.unload=re,R=function(t,n,s){m.emitted[t]||(m.emitted[t]=!0,m.emit(t,n,s))},ie={},L.forEach(function(e){ie[e]=function(){if(F(global.process)){var n=u.listeners(e);n.length===m.count&&(re(),R("exit",null,e),R("afterexit",null,e),zt&&e==="SIGHUP"&&(e="SIGINT"),u.kill(u.pid,e))}}}),B.exports.signals=function(){return L},j=!1,Te=function(){j||!F(global.process)||(j=!0,m.count+=1,L=L.filter(function(t){try{return u.on(t,ie[t]),!0}catch{return!1}}),u.emit=Zt,u.reallyExit=Jt)},B.exports.load=Te,Ce=u.reallyExit,Jt=function(t){F(global.process)&&(u.exitCode=t||0,R("exit",u.exitCode,null),R("afterexit",u.exitCode,null),Ce.call(u,u.exitCode))},oe=u.emit,Zt=function(t,n){if(t==="exit"&&F(global.process)){n!==void 0&&(u.exitCode=n);var s=oe.apply(this,arguments);return R("exit",u.exitCode,null),R("afterexit",u.exitCode,null),s}else return oe.apply(this,arguments)}):B.exports=function(){return function(){}};var Vt,L,zt,W,m,re,R,ie,j,Te,Ce,Jt,oe,Zt});var en=d((wi,Qt)=>{"use strict";var Bs=require("os"),Ms=Yt(),Us=1e3*5,Hs=(e,t="SIGTERM",n={})=>{let s=e(t);return qs(e,t,n,s),s},qs=(e,t,n,s)=>{if(!Ws(t,n,s))return;let r=Xs(n),o=setTimeout(()=>{e("SIGKILL")},r);o.unref&&o.unref()},Ws=(e,{forceKillAfterTimeout:t},n)=>_s(e)&&t!==!1&&n,_s=e=>e===Bs.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Xs=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Us;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Ks=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Vs=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},zs=(e,{timeout:t,killSignal:n="SIGTERM"},s)=>{if(t===0||t===void 0)return s;let r,o=new Promise((a,c)=>{r=setTimeout(()=>{Vs(e,n,c)},t)}),i=s.finally(()=>{clearTimeout(r)});return Promise.race([o,i])},Js=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Zs=async(e,{cleanup:t,detached:n},s)=>{if(!t||n)return s;let r=Ms(()=>{e.kill()});return s.finally(()=>{r()})};Qt.exports={spawnedKill:Hs,spawnedCancel:Ks,setupTimeout:zs,validateTimeout:Js,setExitHandler:Zs}});var nn=d((Si,tn)=>{"use strict";var b=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";b.writable=e=>b(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";b.readable=e=>b(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";b.duplex=e=>b.writable(e)&&b.readable(e);b.transform=e=>b.duplex(e)&&typeof e._transform=="function";tn.exports=b});var rn=d((Pi,sn)=>{"use strict";var{PassThrough:Ys}=require("stream");sn.exports=e=>{e={...e};let{array:t}=e,{encoding:n}=e,s=n==="buffer",r=!1;t?r=!(n||s):n=n||"utf8",s&&(n=null);let o=new Ys({objectMode:r});n&&o.setEncoding(n);let i=0,a=[];return o.on("data",c=>{a.push(c),r?i=a.length:i+=c.length}),o.getBufferedValue=()=>t?a:s?Buffer.concat(a,i):a.join(""),o.getBufferedLength=()=>i,o}});var on=d((yi,_)=>{"use strict";var{constants:Qs}=require("buffer"),er=require("stream"),{promisify:tr}=require("util"),nr=rn(),sr=tr(er.pipeline),ae=class extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}};async function De(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:n}=t,s=nr(t);return await new Promise((r,o)=>{let i=a=>{a&&s.getBufferedLength()<=Qs.MAX_LENGTH&&(a.bufferedData=s.getBufferedValue()),o(a)};(async()=>{try{await sr(e,s),r()}catch(a){i(a)}})(),s.on("data",()=>{s.getBufferedLength()>n&&i(new ae)})}),s.getBufferedValue()}_.exports=De;_.exports.buffer=(e,t)=>De(e,{...t,encoding:"buffer"});_.exports.array=(e,t)=>De(e,{...t,array:!0});_.exports.MaxBufferError=ae});var cn=d((Ii,an)=>{"use strict";var{PassThrough:rr}=require("stream");an.exports=function(){var e=[],t=new rr({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=s,t.on("unpipe",r),Array.prototype.slice.call(arguments).forEach(n),t;function n(o){return Array.isArray(o)?(o.forEach(n),this):(e.push(o),o.once("end",r.bind(null,o)),o.once("error",t.emit.bind(t,"error")),o.pipe(t,{end:!1}),this)}function s(){return e.length==0}function r(o){e=e.filter(function(i){return i!==o}),!e.length&&t.readable&&t.end()}}});var un=d((xi,dn)=>{"use strict";var pn=nn(),ln=on(),ir=cn(),or=(e,t)=>{t===void 0||e.stdin===void 0||(pn(t)?t.pipe(e.stdin):e.stdin.end(t))},ar=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=ir();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},Fe=async(e,t)=>{if(e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},Re=(e,{encoding:t,buffer:n,maxBuffer:s})=>{if(!(!e||!n))return t?ln(e,{encoding:t,maxBuffer:s}):ln.buffer(e,{maxBuffer:s})},cr=async({stdout:e,stderr:t,all:n},{encoding:s,buffer:r,maxBuffer:o},i)=>{let a=Re(e,{encoding:s,buffer:r,maxBuffer:o}),c=Re(t,{encoding:s,buffer:r,maxBuffer:o}),p=Re(n,{encoding:s,buffer:r,maxBuffer:o*2});try{return await Promise.all([i,a,c,p])}catch(f){return Promise.all([{error:f,signal:f.signal,timedOut:f.timedOut},Fe(e,a),Fe(t,c),Fe(n,p)])}},lr=({input:e})=>{if(pn(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};dn.exports={handleInput:or,makeAllStream:ar,getSpawnedResult:cr,validateInputSync:lr}});var mn=d((bi,fn)=>{"use strict";var pr=(async()=>{})().constructor.prototype,dr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(pr,e)]),ur=(e,t)=>{for(let[n,s]of dr){let r=typeof t=="function"?(...o)=>Reflect.apply(s.value,t(),o):s.value.bind(t);Reflect.defineProperty(e,n,{...s,value:r})}return e},fr=e=>new Promise((t,n)=>{e.on("exit",(s,r)=>{t({exitCode:s,signal:r})}),e.on("error",s=>{n(s)}),e.stdin&&e.stdin.on("error",s=>{n(s)})});fn.exports={mergePromise:ur,getSpawnedPromise:fr}});var wn=d((vi,gn)=>{"use strict";var hn=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],mr=/^[\w.-]+$/,hr=/"/g,gr=e=>typeof e!="string"||mr.test(e)?e:`"${e.replace(hr,'\\"')}"`,wr=(e,t)=>hn(e,t).join(" "),Sr=(e,t)=>hn(e,t).map(n=>gr(n)).join(" "),Pr=/ +/g,yr=e=>{let t=[];for(let n of e.trim().split(Pr)){let s=t[t.length-1];s&&s.endsWith("\\")?t[t.length-1]=`${s.slice(0,-1)} ${n}`:t.push(n)}return t};gn.exports={joinCommand:wr,getEscapedCommand:Sr,parseCommand:yr}});var vn=d((Ti,M)=>{"use strict";var Ir=require("path"),$e=require("child_process"),xr=Dt(),br=Rt(),vr=At(),Tr=kt(),ce=Wt(),Pn=Xt(),{spawnedKill:Cr,spawnedCancel:Dr,setupTimeout:Fr,validateTimeout:Rr,setExitHandler:$r}=en(),{handleInput:Er,getSpawnedResult:Ar,makeAllStream:Nr,validateInputSync:Or}=un(),{mergePromise:Sn,getSpawnedPromise:Gr}=mn(),{joinCommand:yn,parseCommand:In,getEscapedCommand:xn}=wn(),kr=1e3*1e3*100,Lr=({env:e,extendEnv:t,preferLocal:n,localDir:s,execPath:r})=>{let o=t?{...process.env,...e}:e;return n?vr.env({env:o,cwd:s,execPath:r}):o},bn=(e,t,n={})=>{let s=xr._parse(e,t,n);return e=s.command,t=s.args,n=s.options,n={maxBuffer:kr,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...n},n.env=Lr(n),n.stdio=Pn(n),process.platform==="win32"&&Ir.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:s}},X=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?br(t):t,le=(e,t,n)=>{let s=bn(e,t,n),r=yn(e,t),o=xn(e,t);Rr(s.options);let i;try{i=$e.spawn(s.file,s.args,s.options)}catch(y){let I=new $e.ChildProcess,x=Promise.reject(ce({error:y,stdout:"",stderr:"",all:"",command:r,escapedCommand:o,parsed:s,timedOut:!1,isCanceled:!1,killed:!1}));return Sn(I,x)}let a=Gr(i),c=Fr(i,s.options,a),p=$r(i,s.options,c),f={isCanceled:!1};i.kill=Cr.bind(null,i.kill.bind(i)),i.cancel=Dr.bind(null,i,f);let g=Tr(async()=>{let[{error:y,exitCode:I,signal:x,timedOut:A},V,z,Ln]=await Ar(i,s.options,p),ke=X(s.options,V),Le=X(s.options,z),je=X(s.options,Ln);if(y||I!==0||x!==null){let Be=ce({error:y,exitCode:I,signal:x,stdout:ke,stderr:Le,all:je,command:r,escapedCommand:o,parsed:s,timedOut:A,isCanceled:f.isCanceled,killed:i.killed});if(!s.options.reject)return Be;throw Be}return{command:r,escapedCommand:o,exitCode:0,stdout:ke,stderr:Le,all:je,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return Er(i,s.options.input),i.all=Nr(i,s.options),Sn(i,g)};M.exports=le;M.exports.sync=(e,t,n)=>{let s=bn(e,t,n),r=yn(e,t),o=xn(e,t);Or(s.options);let i;try{i=$e.spawnSync(s.file,s.args,s.options)}catch(p){throw ce({error:p,stdout:"",stderr:"",all:"",command:r,escapedCommand:o,parsed:s,timedOut:!1,isCanceled:!1,killed:!1})}let a=X(s.options,i.stdout,i.error),c=X(s.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let p=ce({stdout:a,stderr:c,error:i.error,signal:i.signal,exitCode:i.status,command:r,escapedCommand:o,parsed:s,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!s.options.reject)return p;throw p}return{command:r,escapedCommand:o,exitCode:0,stdout:a,stderr:c,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};M.exports.command=(e,t)=>{let[n,...s]=In(e);return le(n,s,t)};M.exports.commandSync=(e,t)=>{let[n,...s]=In(e);return le.sync(n,s,t)};M.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let s=Pn.node(n),r=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:o=process.execPath,nodeOptions:i=r}=n;return le(o,[...i,e,...Array.isArray(t)?t:[]],{...n,stdin:void 0,stdout:void 0,stderr:void 0,stdio:s,shell:!1})}});var qr={};qn(qr,{default:()=>kn});module.exports=Wn(qr);var w=require("@raycast/api");var v=require("child_process"),Gn=C(require("fs")),U=C(require("os")),h=C(require("path")),D=require("@raycast/api");var K=require("child_process"),P=C(require("fs")),pe=C(require("os")),Fn=C(require("path"));var Ee=C(require("node:process"),1),Ae=C(vn(),1);async function $(e,{humanReadableOutput:t=!0}={}){if(Ee.default.platform!=="darwin")throw new Error("macOS only");let n=t?[]:["-ss"],{stdout:s}=await(0,Ae.default)("osascript",["-e",e,n]);return s}function Ne(e,{humanReadableOutput:t=!0}={}){if(Ee.default.platform!=="darwin")throw new Error("macOS only");let n=t?[]:["-ss"],{stdout:s}=Ae.default.sync("osascript",["-e",e,...n]);return s}var l=require("@raycast/api");var Tn=async()=>$(`use framework "AppKit"
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
      
      return filePaths`),Cn=async e=>{let t=Array.isArray(e)?e:[e];await $(`use framework "Foundation"
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
      end if`)};var Br=async()=>$(`set imageTypes to {"PNG", "JPG", "JPEG", "TIF", "HEIF", "GIF", "ICO", "ICNS", "ASTC", "BMP", "DDS", "EXR", "JP2", "KTX", "Portable Bitmap", "Adobe Photoshop", "PVR", "TGA", "WebP", "SVG", "PDF", "HEIC"}
    
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
    end tell`),Mr=async()=>$(`set imageTypes to {"PNG", "JPG", "JPEG", "TIF", "HEIF", "GIF", "ICO", "ICNS", "ASTC", "BMP", "DDS", "EXR", "JP2", "KTX", "Portable Bitmap", "Adobe Photoshop", "PVR", "TGA", "WebP", "SVG", "PDF", "HEIC"}

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
    end tell`),Rn=async()=>{let t=(await l.LocalStorage.getItem("itemsToRemove")??"").toString().split(", ");for(let n of t)P.existsSync(n)&&await P.promises.rm(n);await l.LocalStorage.removeItem("itemsToRemove")},$n=async()=>{let e=[],n=(0,l.getPreferenceValues)().inputMethod,s=!1;if(n=="Clipboard")try{let i=(await Tn()).split(", ");if(await l.LocalStorage.setItem("itemsToRemove",i.join(", ")),i.filter(a=>a.trim().length>0).length>0)return i}catch{console.error("Couldn't get images from clipboard"),s=!0}let r=n;try{r=(await(0,l.getFrontmostApplication)()).name}catch{console.error("Couldn't get frontmost application")}try{if(n=="Path Finder"&&((await Mr()).split(", ").forEach(a=>{e.includes(a)||e.push(a)}),e.length>0))return e}catch{console.error("Couldn't get images from Path Finder"),s=!0}let o=(await Br()).split(", ");return r=="Finder"||n=="Finder"||s?e.push(...o):o.forEach(i=>{i.split("/").at(-2)=="Desktop"&&!e.includes(i)&&e.push(i)}),e},En=async e=>{let t=(0,l.getPreferenceValues)();t.imageResultHandling=="copyToClipboard"?(await Cn(e),Dn(e)):t.imageResultHandling=="openInPreview"&&(console.log(e),await Ur(e),Dn(e))},de=async()=>(pe.cpus()[0].model.includes("Apple")?"arm":"x86")=="arm"?((0,K.execSync)(`chmod +x ${l.environment.assetsPath}/webp/arm/dwebp`),(0,K.execSync)(`chmod +x ${l.environment.assetsPath}/webp/arm/cwebp`),P.existsSync(`${l.environment.assetsPath}/webp/x86/dwebp`)&&await P.promises.rm(`${l.environment.assetsPath}/webp/x86/dwebp`),P.existsSync(`${l.environment.assetsPath}/webp/x86/cwebp`)&&await P.promises.rm(`${l.environment.assetsPath}/webp/x86/cwebp`),[`${l.environment.assetsPath}/webp/arm/dwebp`,`${l.environment.assetsPath}/webp/arm/cwebp`]):((0,K.execSync)(`chmod +x ${l.environment.assetsPath}/webp/x86/dwebp`),(0,K.execSync)(`chmod +x ${l.environment.assetsPath}/webp/x86/cwebp`),P.existsSync(`${l.environment.assetsPath}/webp/arm/dwebp`)&&await P.promises.rm(`${l.environment.assetsPath}/webp/arm/dwebp`),P.existsSync(`${l.environment.assetsPath}/webp/arm/cwebp`)&&await P.promises.rm(`${l.environment.assetsPath}/webp/arm/cwebp`),[`${l.environment.assetsPath}/webp/x86/dwebp`,`${l.environment.assetsPath}/webp/x86/cwebp`]);var An=(e,t,n)=>{Ne(`use framework "Foundation"
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
  pngData's writeToFile:"${n}" atomically:false`)},Nn=(e,t,n)=>{let s=(0,l.getPreferenceValues)();Ne(`use framework "Foundation"
  use framework "PDFKit"
  
  -- Load the PDF file as NSData
  set pdfData to current application's NSData's dataWithContentsOfFile:"${t}"
  
  -- Create a PDFDocument from the PDF data
  set pdfDoc to current application's PDFDocument's alloc()'s initWithData:pdfData

  ${s.imageResultHandling=="copyToClipboard"||s.imageResultHandling=="openInPreview"?"set pageImages to current application's NSMutableArray's alloc()'s init()":""}
  
  set pageCount to (pdfDoc's pageCount()) - 1
  repeat with pageIndex from 0 to pageCount
    -- Create an NSImage from each page of the PDF document
    set pdfPage to (pdfDoc's pageAtIndex:pageIndex)
    set pdfRect to (pdfPage's boundsForBox:(current application's kPDFDisplayBoxMediaBox))
    set pdfImage to (current application's NSImage's alloc()'s initWithSize:{item 1 of item 2 of pdfRect, item 2 of item 2 of pdfRect})
    pdfImage's lockFocus()
    (pdfPage's drawWithBox:(current application's kPDFDisplayBoxMediaBox))
    pdfImage's unlockFocus()

    ${s.imageResultHandling=="copyToClipboard"?"pageImages's addObject:pdfImage":`
  
    -- Convert the NSImage to PNG data
    set pngData to pdfImage's TIFFRepresentation()
    set pngRep to (current application's NSBitmapImageRep's imageRepWithData:pngData)
    set pngData to (pngRep's representationUsingType:(current application's NSPNGFileType) |properties|:(missing value))
    
    -- Write the PNG data to a new file
    set filePath to "${n}/page-" & pageIndex + 1 & ".${e.toLowerCase()}"
    set fileURL to current application's NSURL's fileURLWithPath:filePath
    ${s.imageResultHandling=="openInPreview"?"pageImages's addObject:fileURL":""}
    pngData's writeToURL:fileURL atomically:false`}
  end repeat

  ${s.imageResultHandling=="openInPreview"?`
    -- Open the images of each page in Preview, then delete their temporary files
    tell application "Finder"
      set previewPath to POSIX path of ((application file id "com.apple.Preview") as text)
      set previewURL to current application's NSURL's fileURLWithPath:previewPath
    end tell

    set workspace to current application's NSWorkspace's sharedWorkspace()
    set config to current application's NSWorkspaceOpenConfiguration's configuration()
    workspace's openURLs:pageImages withApplicationAtURL:previewURL configuration:config completionHandler:(missing value)
    delay 1
    
    set fileManager to current application's NSFileManager's defaultManager()
    repeat with imageURL in pageImages
      fileManager's removeItemAtURL:imageURL |error|:(missing value)
    end repeat
    `:""}
  
  ${s.imageResultHandling=="copyToClipboard"?`
    -- Copy the image of each page to the clipboard
    set thePasteboard to current application's NSPasteboard's generalPasteboard()
    thePasteboard's clearContents()
    thePasteboard's writeObjects:pageImages`:""}`)};var Ur=async e=>{let t=Array.isArray(e)?e:[e],n=t.some(s=>Fn.default.extname(s)==".svg");await $(`use framework "Foundation"
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
          end tell`}`)},Dn=e=>{let t=Array.isArray(e)?e:[e];for(let n of t)P.unlinkSync(n)};var On=async(e,t,n)=>{console.error(t),n?(n.title=e,n.message=t.message,n.style=l.Toast.Style.Failure,n.primaryAction={title:"Copy Error",onAction:async()=>{await l.Clipboard.copy(t.message)}}):n=await(0,l.showToast)({title:e,message:t.message,style:l.Toast.Style.Failure,primaryAction:{title:"Copy Error",onAction:async()=>{await l.Clipboard.copy(t.message)}}})};async function Oe(e,t){let n=(0,D.getPreferenceValues)(),s=[];for(let r of e){let o=h.default.extname(r).slice(1),i=h.default.join(h.default.dirname(r),h.default.basename(r,o)+t.toLowerCase());n.imageResultHandling=="saveToDownloads"?i=h.default.join(U.homedir(),"Downloads",h.default.basename(i)):n.imageResultHandling=="saveToDesktop"?i=h.default.join(U.homedir(),"Desktop",h.default.basename(i)):(n.imageResultHandling=="copyToClipboard"||n.imageResultHandling=="openInPreview")&&(i=h.default.join(U.tmpdir(),h.default.basename(i)));let a=2;for(;Gn.existsSync(i)&&U.tmpdir()!=h.default.dirname(i);)i=h.default.join(h.default.dirname(i),h.default.basename(i,`.${t.toLowerCase()}`)+` (${a})${h.default.extname(i)}`),a++;if(t==="WEBP"){let[,c]=await de();(0,v.execSync)(`${c} "${r}" -o "${i}"`)}else if(o.toLowerCase()=="svg")An(t,r,i);else if(t=="SVG"){let c=`${D.environment.supportPath}/tmp.bmp`;if((0,v.execSync)(`chmod +x ${D.environment.assetsPath}/potrace/potrace`),o.toLowerCase()=="webp"){let p=`${D.environment.supportPath}/tmp.png`,[f]=await de();(0,v.execSync)(`${f} "${r}" -o "${p}"`),(0,v.execSync)(`sips --setProperty format "bmp" "${p}" --out "${c}" && ${D.environment.assetsPath}/potrace/potrace -s --tight -o "${i}" "${c}"; rm "${c}"; rm "${p}"`)}else(0,v.execSync)(`sips --setProperty format "bmp" "${r}" --out "${c}" && ${D.environment.assetsPath}/potrace/potrace -s --tight -o "${i}" "${c}"; rm "${c}"`)}else if(o.toLowerCase()=="webp"){let[c]=await de();(0,v.execSync)(`${c} "${r}" -o "${i}"`),(0,v.execSync)(`sips --setProperty format ${t.toLowerCase()} "${i}"`)}else if(o.toLowerCase()=="pdf"){let c=h.default.basename(r),p=`${c?.substring(0,c.lastIndexOf("."))} ${t}`,f=h.default.join(i.split("/").slice(0,-1).join("/"),p);(0,v.execSync)(`mkdir -p "${f}"`),Nn(t,r,f)}else(0,v.execSync)(`sips --setProperty format ${t.toLowerCase()} "${r}" --out "${i}"`);s.push(i)}await En(s)}var E=require("@raycast/api");async function Ge(e){if(e.selectedImages.length===0||e.selectedImages.length===1&&e.selectedImages[0]===""){await(0,E.showToast)({title:"No images selected",style:E.Toast.Style.Failure});return}let t=await(0,E.showToast)({title:e.inProgressMessage,style:E.Toast.Style.Animated}),n=`image${e.selectedImages.length===1?"":"s"}`;try{await e.operation(),t.title=`${e.successMessage} ${e.selectedImages.length.toString()} ${n}`,t.style=E.Toast.Style.Success}catch(s){await On(`${e.failureMessage} ${e.selectedImages.length.toString()} ${n}`,s,t)}finally{await Rn()}}var T=require("react/jsx-runtime"),Hr=["ASTC","BMP","DDS","EXR","GIF","HEIC","HEICS","ICNS","ICO","JPEG","JP2","KTX","PBM","PDF","PNG","PSD","PVR","TGA","TIFF","WEBP","SVG"];function kn(){let e=(0,w.getPreferenceValues)(),t=Hr.filter(n=>e[`show${n}`]);return(0,T.jsxs)(w.List,{searchBarPlaceholder:"Search image transformations...",children:[(0,T.jsx)(w.List.EmptyView,{title:"No Formats Enabled",description:"Enable formats in the command preferences (\u2318\u21E7,)",icon:w.Icon.Image,actions:(0,T.jsx)(w.ActionPanel,{children:(0,T.jsx)(w.Action,{title:"Open Command Preferences",onAction:async()=>await(0,w.openCommandPreferences)(),shortcut:{modifiers:["cmd","shift"],key:","}})})}),t.map(n=>(0,T.jsx)(w.List.Item,{title:n,actions:(0,T.jsx)(w.ActionPanel,{children:(0,T.jsx)(w.Action,{title:`Convert to ${n}`,onAction:async()=>{let s=await $n();await Ge({operation:()=>Oe(s,n),selectedImages:s,inProgressMessage:"Conversion in progress...",successMessage:"Converted",failureMessage:"Failed to convert"})}})})},n))]})}
