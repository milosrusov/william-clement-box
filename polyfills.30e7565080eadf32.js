"use strict";(self.webpackChunktiles=self.webpackChunktiles||[]).push([[461],{96935:()=>{const te=globalThis;function ee(e){return(te.__Zone_symbol_prefix||"__zone_symbol__")+e}const ke=Object.getOwnPropertyDescriptor,Ne=Object.defineProperty,Le=Object.getPrototypeOf,_t=Object.create,Et=Array.prototype.slice,Ie="addEventListener",Me="removeEventListener",Ze=ee(Ie),Ae=ee(Me),ae="true",le="false",ve=ee("");function je(e,r){return Zone.current.wrap(e,r)}function He(e,r,c,t,i){return Zone.current.scheduleMacroTask(e,r,c,t,i)}const j=ee,we=typeof window<"u",Te=we?window:void 0,$=we&&Te||globalThis;function xe(e,r){for(let c=e.length-1;c>=0;c--)"function"==typeof e[c]&&(e[c]=je(e[c],r+"_"+c));return e}function We(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&typeof e.set>"u")}const qe=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Re=!("nw"in $)&&typeof $.process<"u"&&"[object process]"===$.process.toString(),Ve=!Re&&!qe&&!(!we||!Te.HTMLElement),Xe=typeof $.process<"u"&&"[object process]"===$.process.toString()&&!qe&&!(!we||!Te.HTMLElement),Ce={},yt=j("enable_beforeunload"),Ye=function(e){if(!(e=e||$.event))return;let r=Ce[e.type];r||(r=Ce[e.type]=j("ON_PROPERTY"+e.type));const c=this||e.target||$,t=c[r];let i;return Ve&&c===Te&&"error"===e.type?(i=t&&t.call(this,e.message,e.filename,e.lineno,e.colno,e.error),!0===i&&e.preventDefault()):(i=t&&t.apply(this,arguments),"beforeunload"===e.type&&$[yt]&&"string"==typeof i?e.returnValue=i:null!=i&&!i&&e.preventDefault()),i};function $e(e,r,c){let t=ke(e,r);if(!t&&c&&ke(c,r)&&(t={enumerable:!0,configurable:!0}),!t||!t.configurable)return;const i=j("on"+r+"patched");if(e.hasOwnProperty(i)&&e[i])return;delete t.writable,delete t.value;const u=t.get,E=t.set,T=r.slice(2);let m=Ce[T];m||(m=Ce[T]=j("ON_PROPERTY"+T)),t.set=function(D){let d=this;!d&&e===$&&(d=$),d&&("function"==typeof d[m]&&d.removeEventListener(T,Ye),E&&E.call(d,null),d[m]=D,"function"==typeof D&&d.addEventListener(T,Ye,!1))},t.get=function(){let D=this;if(!D&&e===$&&(D=$),!D)return null;const d=D[m];if(d)return d;if(u){let w=u.call(this);if(w)return t.set.call(this,w),"function"==typeof D.removeAttribute&&D.removeAttribute(r),w}return null},Ne(e,r,t),e[i]=!0}function Je(e,r,c){if(r)for(let t=0;t<r.length;t++)$e(e,"on"+r[t],c);else{const t=[];for(const i in e)"on"==i.slice(0,2)&&t.push(i);for(let i=0;i<t.length;i++)$e(e,t[i],c)}}const re=j("originalInstance");function be(e){const r=$[e];if(!r)return;$[j(e)]=r,$[e]=function(){const i=xe(arguments,e);switch(i.length){case 0:this[re]=new r;break;case 1:this[re]=new r(i[0]);break;case 2:this[re]=new r(i[0],i[1]);break;case 3:this[re]=new r(i[0],i[1],i[2]);break;case 4:this[re]=new r(i[0],i[1],i[2],i[3]);break;default:throw new Error("Arg list too long.")}},fe($[e],r);const c=new r(function(){});let t;for(t in c)"XMLHttpRequest"===e&&"responseBlob"===t||function(i){"function"==typeof c[i]?$[e].prototype[i]=function(){return this[re][i].apply(this[re],arguments)}:Ne($[e].prototype,i,{set:function(u){"function"==typeof u?(this[re][i]=je(u,e+"."+i),fe(this[re][i],u)):this[re][i]=u},get:function(){return this[re][i]}})}(t);for(t in r)"prototype"!==t&&r.hasOwnProperty(t)&&($[e][t]=r[t])}function ue(e,r,c){let t=e;for(;t&&!t.hasOwnProperty(r);)t=Le(t);!t&&e[r]&&(t=e);const i=j(r);let u=null;if(t&&(!(u=t[i])||!t.hasOwnProperty(i))&&(u=t[i]=t[r],We(t&&ke(t,r)))){const T=c(u,i,r);t[r]=function(){return T(this,arguments)},fe(t[r],u)}return u}function mt(e,r,c){let t=null;function i(u){const E=u.data;return E.args[E.cbIdx]=function(){u.invoke.apply(this,arguments)},t.apply(E.target,E.args),u}t=ue(e,r,u=>function(E,T){const m=c(E,T);return m.cbIdx>=0&&"function"==typeof T[m.cbIdx]?He(m.name,T[m.cbIdx],m,i):u.apply(E,T)})}function fe(e,r){e[j("OriginalDelegate")]=r}let Ke=!1,Ge=!1;function kt(){if(Ke)return Ge;Ke=!0;try{const e=Te.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(Ge=!0)}catch{}return Ge}function Qe(e){return"function"==typeof e}function et(e){return"number"==typeof e}let ge=!1;if(typeof window<"u")try{const e=Object.defineProperty({},"passive",{get:function(){ge=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{ge=!1}const vt={useG:!0},ne={},tt={},nt=new RegExp("^"+ve+"(\\w+)(true|false)$"),rt=j("propagationStopped");function ot(e,r){const c=(r?r(e):e)+le,t=(r?r(e):e)+ae,i=ve+c,u=ve+t;ne[e]={},ne[e][le]=i,ne[e][ae]=u}function bt(e,r,c,t){const i=t&&t.add||Ie,u=t&&t.rm||Me,E=t&&t.listeners||"eventListeners",T=t&&t.rmAll||"removeAllListeners",m=j(i),D="."+i+":",d="prependListener",w="."+d+":",Z=function(k,h,H){if(k.isRemoved)return;const V=k.callback;let Y;"object"==typeof V&&V.handleEvent&&(k.callback=g=>V.handleEvent(g),k.originalDelegate=V);try{k.invoke(k,h,[H])}catch(g){Y=g}const G=k.options;return G&&"object"==typeof G&&G.once&&h[u].call(h,H.type,k.originalDelegate?k.originalDelegate:k.callback,G),Y};function x(k,h,H){if(!(h=h||e.event))return;const V=k||h.target||e,Y=V[ne[h.type][H?ae:le]];if(Y){const G=[];if(1===Y.length){const g=Z(Y[0],V,h);g&&G.push(g)}else{const g=Y.slice();for(let z=0;z<g.length&&(!h||!0!==h[rt]);z++){const O=Z(g[z],V,h);O&&G.push(O)}}if(1===G.length)throw G[0];for(let g=0;g<G.length;g++){const z=G[g];r.nativeScheduleMicroTask(()=>{throw z})}}}const U=function(k){return x(this,k,!1)},J=function(k){return x(this,k,!0)};function K(k,h){if(!k)return!1;let H=!0;h&&void 0!==h.useG&&(H=h.useG);const V=h&&h.vh;let Y=!0;h&&void 0!==h.chkDup&&(Y=h.chkDup);let G=!1;h&&void 0!==h.rt&&(G=h.rt);let g=k;for(;g&&!g.hasOwnProperty(i);)g=Le(g);if(!g&&k[i]&&(g=k),!g||g[m])return!1;const z=h&&h.eventNameToString,O={},R=g[m]=g[i],b=g[j(u)]=g[u],S=g[j(E)]=g[E],Q=g[j(T)]=g[T];let W;h&&h.prepend&&(W=g[j(h.prepend)]=g[h.prepend]);const q=H?function(s){if(!O.isExisting)return R.call(O.target,O.eventName,O.capture?J:U,O.options)}:function(s){return R.call(O.target,O.eventName,s.invoke,O.options)},A=H?function(s){if(!s.isRemoved){const l=ne[s.eventName];let v;l&&(v=l[s.capture?ae:le]);const C=v&&s.target[v];if(C)for(let y=0;y<C.length;y++)if(C[y]===s){C.splice(y,1),s.isRemoved=!0,s.removeAbortListener&&(s.removeAbortListener(),s.removeAbortListener=null),0===C.length&&(s.allRemoved=!0,s.target[v]=null);break}}if(s.allRemoved)return b.call(s.target,s.eventName,s.capture?J:U,s.options)}:function(s){return b.call(s.target,s.eventName,s.invoke,s.options)},he=h&&h.diff?h.diff:function(s,l){const v=typeof l;return"function"===v&&s.callback===l||"object"===v&&s.originalDelegate===l},de=Zone[j("UNPATCHED_EVENTS")],oe=e[j("PASSIVE_EVENTS")],a=function(s,l,v,C,y=!1,L=!1){return function(){const I=this||e;let M=arguments[0];h&&h.transferEventName&&(M=h.transferEventName(M));let F=arguments[1];if(!F)return s.apply(this,arguments);if(Re&&"uncaughtException"===M)return s.apply(this,arguments);let B=!1;if("function"!=typeof F){if(!F.handleEvent)return s.apply(this,arguments);B=!0}if(V&&!V(s,F,I,arguments))return;const Ee=ge&&!!oe&&-1!==oe.indexOf(M),ie=function f(s){if("object"==typeof s&&null!==s){const l={...s};return s.signal&&(l.signal=s.signal),l}return s}(function N(s,l){return!ge&&"object"==typeof s&&s?!!s.capture:ge&&l?"boolean"==typeof s?{capture:s,passive:!0}:s?"object"==typeof s&&!1!==s.passive?{...s,passive:!0}:s:{passive:!0}:s}(arguments[2],Ee)),me=ie?.signal;if(me?.aborted)return;if(de)for(let ce=0;ce<de.length;ce++)if(M===de[ce])return Ee?s.call(I,M,F,ie):s.apply(this,arguments);const Be=!!ie&&("boolean"==typeof ie||ie.capture),lt=!(!ie||"object"!=typeof ie)&&ie.once,At=Zone.current;let Ue=ne[M];Ue||(ot(M,z),Ue=ne[M]);const ut=Ue[Be?ae:le];let Se,pe=I[ut],ft=!1;if(pe){if(ft=!0,Y)for(let ce=0;ce<pe.length;ce++)if(he(pe[ce],F))return}else pe=I[ut]=[];const ht=I.constructor.name,dt=tt[ht];dt&&(Se=dt[M]),Se||(Se=ht+l+(z?z(M):M)),O.options=ie,lt&&(O.options.once=!1),O.target=I,O.capture=Be,O.eventName=M,O.isExisting=ft;const Pe=H?vt:void 0;Pe&&(Pe.taskData=O),me&&(O.options.signal=void 0);const se=At.scheduleEventTask(Se,F,Pe,v,C);if(me){O.options.signal=me;const ce=()=>se.zone.cancelTask(se);s.call(me,"abort",ce,{once:!0}),se.removeAbortListener=()=>me.removeEventListener("abort",ce)}return O.target=null,Pe&&(Pe.taskData=null),lt&&(O.options.once=!0),!ge&&"boolean"==typeof se.options||(se.options=ie),se.target=I,se.capture=Be,se.eventName=M,B&&(se.originalDelegate=F),L?pe.unshift(se):pe.push(se),y?I:void 0}};return g[i]=a(R,D,q,A,G),W&&(g[d]=a(W,w,function(s){return W.call(O.target,O.eventName,s.invoke,O.options)},A,G,!0)),g[u]=function(){const s=this||e;let l=arguments[0];h&&h.transferEventName&&(l=h.transferEventName(l));const v=arguments[2],C=!!v&&("boolean"==typeof v||v.capture),y=arguments[1];if(!y)return b.apply(this,arguments);if(V&&!V(b,y,s,arguments))return;const L=ne[l];let I;L&&(I=L[C?ae:le]);const M=I&&s[I];if(M)for(let F=0;F<M.length;F++){const B=M[F];if(he(B,y))return M.splice(F,1),B.isRemoved=!0,0!==M.length||(B.allRemoved=!0,s[I]=null,C||"string"!=typeof l)||(s[ve+"ON_PROPERTY"+l]=null),B.zone.cancelTask(B),G?s:void 0}return b.apply(this,arguments)},g[E]=function(){const s=this||e;let l=arguments[0];h&&h.transferEventName&&(l=h.transferEventName(l));const v=[],C=st(s,z?z(l):l);for(let y=0;y<C.length;y++){const L=C[y];v.push(L.originalDelegate?L.originalDelegate:L.callback)}return v},g[T]=function(){const s=this||e;let l=arguments[0];if(l){h&&h.transferEventName&&(l=h.transferEventName(l));const v=ne[l];if(v){const L=s[v[le]],I=s[v[ae]];if(L){const M=L.slice();for(let F=0;F<M.length;F++){const B=M[F];this[u].call(this,l,B.originalDelegate?B.originalDelegate:B.callback,B.options)}}if(I){const M=I.slice();for(let F=0;F<M.length;F++){const B=M[F];this[u].call(this,l,B.originalDelegate?B.originalDelegate:B.callback,B.options)}}}}else{const v=Object.keys(s);for(let C=0;C<v.length;C++){const L=nt.exec(v[C]);let I=L&&L[1];I&&"removeListener"!==I&&this[T].call(this,I)}this[T].call(this,"removeListener")}if(G)return this},fe(g[i],R),fe(g[u],b),Q&&fe(g[T],Q),S&&fe(g[E],S),!0}let X=[];for(let k=0;k<c.length;k++)X[k]=K(c[k],t);return X}function st(e,r){if(!r){const u=[];for(let E in e){const T=nt.exec(E);let m=T&&T[1];if(m&&(!r||m===r)){const D=e[E];if(D)for(let d=0;d<D.length;d++)u.push(D[d])}}return u}let c=ne[r];c||(ot(r),c=ne[r]);const t=e[c[le]],i=e[c[ae]];return t?i?t.concat(i):t.slice():i?i.slice():[]}function Pt(e,r){const c=e.Event;c&&c.prototype&&r.patchMethod(c.prototype,"stopImmediatePropagation",t=>function(i,u){i[rt]=!0,t&&t.apply(i,u)})}const De=j("zoneTask");function ye(e,r,c,t){let i=null,u=null;c+=t;const E={};function T(D){const d=D.data;d.args[0]=function(){return D.invoke.apply(this,arguments)};const w=i.apply(e,d.args);return et(w)?d.handleId=w:(d.handle=w,d.isRefreshable=Qe(w.refresh)),D}function m(D){const{handle:d,handleId:w}=D.data;return u.call(e,d??w)}i=ue(e,r+=t,D=>function(d,w){if(Qe(w[0])){const Z={isRefreshable:!1,isPeriodic:"Interval"===t,delay:"Timeout"===t||"Interval"===t?w[1]||0:void 0,args:w},x=w[0];w[0]=function(){try{return x.apply(this,arguments)}finally{const{handle:H,handleId:V,isPeriodic:Y,isRefreshable:G}=Z;!Y&&!G&&(V?delete E[V]:H&&(H[De]=null))}};const U=He(r,w[0],Z,T,m);if(!U)return U;const{handleId:J,handle:K,isRefreshable:X,isPeriodic:k}=U.data;if(J)E[J]=U;else if(K&&(K[De]=U,X&&!k)){const h=K.refresh;K.refresh=function(){const{zone:H,state:V}=U;return"notScheduled"===V?(U._state="scheduled",H._updateTaskCount(U,1)):"running"===V&&(U._state="scheduling"),h.call(this)}}return K??J??U}return D.apply(e,w)}),u=ue(e,c,D=>function(d,w){const Z=w[0];let x;et(Z)?(x=E[Z],delete E[Z]):(x=Z?.[De],x?Z[De]=null:x=Z),x?.type?x.cancelFn&&x.zone.cancelTask(x):D.apply(e,w)})}function it(e,r,c){if(!c||0===c.length)return r;const t=c.filter(u=>u.target===e);if(!t||0===t.length)return r;const i=t[0].ignoreProperties;return r.filter(u=>-1===i.indexOf(u))}function ct(e,r,c,t){e&&Je(e,it(e,r,c),t)}function Fe(e){return Object.getOwnPropertyNames(e).filter(r=>r.startsWith("on")&&r.length>2).map(r=>r.substring(2))}function It(e,r,c,t,i){const u=Zone.__symbol__(t);if(r[u])return;const E=r[u]=r[t];r[t]=function(T,m,D){return m&&m.prototype&&i.forEach(function(d){const w=`${c}.${t}::`+d,Z=m.prototype;try{if(Z.hasOwnProperty(d)){const x=e.ObjectGetOwnPropertyDescriptor(Z,d);x&&x.value?(x.value=e.wrapWithCurrentZone(x.value,w),e._redefineProperty(m.prototype,d,x)):Z[d]&&(Z[d]=e.wrapWithCurrentZone(Z[d],w))}else Z[d]&&(Z[d]=e.wrapWithCurrentZone(Z[d],w))}catch{}}),E.call(r,T,m,D)},e.attachOriginToPatched(r[t],E)}const at=function Oe(){const e=globalThis,r=!0===e[ee("forceDuplicateZoneCheck")];if(e.Zone&&(r||"function"!=typeof e.Zone.__symbol__))throw new Error("Zone already loaded.");return e.Zone??=function ze(){const e=te.performance;function r(N){e&&e.mark&&e.mark(N)}function c(N,_){e&&e.measure&&e.measure(N,_)}r("Zone");let t=(()=>{class N{static{this.__symbol__=ee}static assertZonePatched(){if(te.Promise!==O.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let n=N.current;for(;n.parent;)n=n.parent;return n}static get current(){return b.zone}static get currentTask(){return S}static __load_patch(n,o,p=!1){if(O.hasOwnProperty(n)){const P=!0===te[ee("forceDuplicateZoneCheck")];if(!p&&P)throw Error("Already loaded patch: "+n)}else if(!te["__Zone_disable_"+n]){const P="Zone:"+n;r(P),O[n]=o(te,N,R),c(P,P)}}get parent(){return this._parent}get name(){return this._name}constructor(n,o){this._parent=n,this._name=o?o.name||"unnamed":"<root>",this._properties=o&&o.properties||{},this._zoneDelegate=new u(this,this._parent&&this._parent._zoneDelegate,o)}get(n){const o=this.getZoneWith(n);if(o)return o._properties[n]}getZoneWith(n){let o=this;for(;o;){if(o._properties.hasOwnProperty(n))return o;o=o._parent}return null}fork(n){if(!n)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,n)}wrap(n,o){if("function"!=typeof n)throw new Error("Expecting function got: "+n);const p=this._zoneDelegate.intercept(this,n,o),P=this;return function(){return P.runGuarded(p,this,arguments,o)}}run(n,o,p,P){b={parent:b,zone:this};try{return this._zoneDelegate.invoke(this,n,o,p,P)}finally{b=b.parent}}runGuarded(n,o=null,p,P){b={parent:b,zone:this};try{try{return this._zoneDelegate.invoke(this,n,o,p,P)}catch(q){if(this._zoneDelegate.handleError(this,q))throw q}}finally{b=b.parent}}runTask(n,o,p){if(n.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(n.zone||K).name+"; Execution: "+this.name+")");const P=n,{type:q,data:{isPeriodic:A=!1,isRefreshable:_e=!1}={}}=n;if(n.state===X&&(q===z||q===g))return;const he=n.state!=H;he&&P._transitionTo(H,h);const de=S;S=P,b={parent:b,zone:this};try{q==g&&n.data&&!A&&!_e&&(n.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,P,o,p)}catch(oe){if(this._zoneDelegate.handleError(this,oe))throw oe}}finally{const oe=n.state;if(oe!==X&&oe!==Y)if(q==z||A||_e&&oe===k)he&&P._transitionTo(h,H,k);else{const f=P._zoneDelegates;this._updateTaskCount(P,-1),he&&P._transitionTo(X,H,X),_e&&(P._zoneDelegates=f)}b=b.parent,S=de}}scheduleTask(n){if(n.zone&&n.zone!==this){let p=this;for(;p;){if(p===n.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${n.zone.name}`);p=p.parent}}n._transitionTo(k,X);const o=[];n._zoneDelegates=o,n._zone=this;try{n=this._zoneDelegate.scheduleTask(this,n)}catch(p){throw n._transitionTo(Y,k,X),this._zoneDelegate.handleError(this,p),p}return n._zoneDelegates===o&&this._updateTaskCount(n,1),n.state==k&&n._transitionTo(h,k),n}scheduleMicroTask(n,o,p,P){return this.scheduleTask(new E(G,n,o,p,P,void 0))}scheduleMacroTask(n,o,p,P,q){return this.scheduleTask(new E(g,n,o,p,P,q))}scheduleEventTask(n,o,p,P,q){return this.scheduleTask(new E(z,n,o,p,P,q))}cancelTask(n){if(n.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(n.zone||K).name+"; Execution: "+this.name+")");if(n.state===h||n.state===H){n._transitionTo(V,h,H);try{this._zoneDelegate.cancelTask(this,n)}catch(o){throw n._transitionTo(Y,V),this._zoneDelegate.handleError(this,o),o}return this._updateTaskCount(n,-1),n._transitionTo(X,V),n.runCount=-1,n}}_updateTaskCount(n,o){const p=n._zoneDelegates;-1==o&&(n._zoneDelegates=null);for(let P=0;P<p.length;P++)p[P]._updateTaskCount(n.type,o)}}return N})();const i={name:"",onHasTask:(N,_,n,o)=>N.hasTask(n,o),onScheduleTask:(N,_,n,o)=>N.scheduleTask(n,o),onInvokeTask:(N,_,n,o,p,P)=>N.invokeTask(n,o,p,P),onCancelTask:(N,_,n,o)=>N.cancelTask(n,o)};class u{get zone(){return this._zone}constructor(_,n,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this._zone=_,this._parentDelegate=n,this._forkZS=o&&(o&&o.onFork?o:n._forkZS),this._forkDlgt=o&&(o.onFork?n:n._forkDlgt),this._forkCurrZone=o&&(o.onFork?this._zone:n._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:n._interceptZS),this._interceptDlgt=o&&(o.onIntercept?n:n._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this._zone:n._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:n._invokeZS),this._invokeDlgt=o&&(o.onInvoke?n:n._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this._zone:n._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:n._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?n:n._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this._zone:n._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:n._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?n:n._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this._zone:n._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:n._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?n:n._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this._zone:n._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:n._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?n:n._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this._zone:n._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const p=o&&o.onHasTask;(p||n&&n._hasTaskZS)&&(this._hasTaskZS=p?o:i,this._hasTaskDlgt=n,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,o.onScheduleTask||(this._scheduleTaskZS=i,this._scheduleTaskDlgt=n,this._scheduleTaskCurrZone=this._zone),o.onInvokeTask||(this._invokeTaskZS=i,this._invokeTaskDlgt=n,this._invokeTaskCurrZone=this._zone),o.onCancelTask||(this._cancelTaskZS=i,this._cancelTaskDlgt=n,this._cancelTaskCurrZone=this._zone))}fork(_,n){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,_,n):new t(_,n)}intercept(_,n,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,_,n,o):n}invoke(_,n,o,p,P){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,_,n,o,p,P):n.apply(o,p)}handleError(_,n){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,_,n)}scheduleTask(_,n){let o=n;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,_,n),o||(o=n);else if(n.scheduleFn)n.scheduleFn(n);else{if(n.type!=G)throw new Error("Task is missing scheduleFn.");U(n)}return o}invokeTask(_,n,o,p){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,_,n,o,p):n.callback.apply(o,p)}cancelTask(_,n){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,_,n);else{if(!n.cancelFn)throw Error("Task is not cancelable");o=n.cancelFn(n)}return o}hasTask(_,n){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,_,n)}catch(o){this.handleError(_,o)}}_updateTaskCount(_,n){const o=this._taskCounts,p=o[_],P=o[_]=p+n;if(P<0)throw new Error("More tasks executed then were scheduled.");0!=p&&0!=P||this.hasTask(this._zone,{microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:_})}}class E{constructor(_,n,o,p,P,q){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=_,this.source=n,this.data=p,this.scheduleFn=P,this.cancelFn=q,!o)throw new Error("callback is not defined");this.callback=o;const A=this;this.invoke=_===z&&p&&p.useG?E.invokeTask:function(){return E.invokeTask.call(te,A,this,arguments)}}static invokeTask(_,n,o){_||(_=this),Q++;try{return _.runCount++,_.zone.runTask(_,n,o)}finally{1==Q&&J(),Q--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(X,k)}_transitionTo(_,n,o){if(this._state!==n&&this._state!==o)throw new Error(`${this.type} '${this.source}': can not transition to '${_}', expecting state '${n}'${o?" or '"+o+"'":""}, was '${this._state}'.`);this._state=_,_==X&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const T=ee("setTimeout"),m=ee("Promise"),D=ee("then");let Z,d=[],w=!1;function x(N){if(Z||te[m]&&(Z=te[m].resolve(0)),Z){let _=Z[D];_||(_=Z.then),_.call(Z,N)}else te[T](N,0)}function U(N){0===Q&&0===d.length&&x(J),N&&d.push(N)}function J(){if(!w){for(w=!0;d.length;){const N=d;d=[];for(let _=0;_<N.length;_++){const n=N[_];try{n.zone.runTask(n,null,null)}catch(o){R.onUnhandledError(o)}}}R.microtaskDrainDone(),w=!1}}const K={name:"NO ZONE"},X="notScheduled",k="scheduling",h="scheduled",H="running",V="canceling",Y="unknown",G="microTask",g="macroTask",z="eventTask",O={},R={symbol:ee,currentZoneFrame:()=>b,onUnhandledError:W,microtaskDrainDone:W,scheduleMicroTask:U,showUncaughtError:()=>!t[ee("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:W,patchMethod:()=>W,bindArguments:()=>[],patchThen:()=>W,patchMacroTask:()=>W,patchEventPrototype:()=>W,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>W,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>W,wrapWithCurrentZone:()=>W,filterProperties:()=>[],attachOriginToPatched:()=>W,_redefineProperty:()=>W,patchCallbacks:()=>W,nativeScheduleMicroTask:x};let b={parent:null,zone:new t(null,null)},S=null,Q=0;function W(){}return c("Zone","Zone"),t}(),e.Zone}();(function Zt(e){(function Nt(e){e.__load_patch("ZoneAwarePromise",(r,c,t)=>{const i=Object.getOwnPropertyDescriptor,u=Object.defineProperty,T=t.symbol,m=[],D=!1!==r[T("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],d=T("Promise"),w=T("then");t.onUnhandledError=f=>{if(t.showUncaughtError()){const a=f&&f.rejection;a?console.error("Unhandled Promise rejection:",a instanceof Error?a.message:a,"; Zone:",f.zone.name,"; Task:",f.task&&f.task.source,"; Value:",a,a instanceof Error?a.stack:void 0):console.error(f)}},t.microtaskDrainDone=()=>{for(;m.length;){const f=m.shift();try{f.zone.runGuarded(()=>{throw f.throwOriginal?f.rejection:f})}catch(a){U(a)}}};const x=T("unhandledPromiseRejectionHandler");function U(f){t.onUnhandledError(f);try{const a=c[x];"function"==typeof a&&a.call(this,f)}catch{}}function J(f){return f&&f.then}function K(f){return f}function X(f){return A.reject(f)}const k=T("state"),h=T("value"),H=T("finally"),V=T("parentPromiseValue"),Y=T("parentPromiseState"),g=null,z=!0,O=!1;function b(f,a){return s=>{try{N(f,a,s)}catch(l){N(f,!1,l)}}}const S=function(){let f=!1;return function(s){return function(){f||(f=!0,s.apply(null,arguments))}}},Q="Promise resolved with itself",W=T("currentTaskTrace");function N(f,a,s){const l=S();if(f===s)throw new TypeError(Q);if(f[k]===g){let v=null;try{("object"==typeof s||"function"==typeof s)&&(v=s&&s.then)}catch(C){return l(()=>{N(f,!1,C)})(),f}if(a!==O&&s instanceof A&&s.hasOwnProperty(k)&&s.hasOwnProperty(h)&&s[k]!==g)n(s),N(f,s[k],s[h]);else if(a!==O&&"function"==typeof v)try{v.call(s,l(b(f,a)),l(b(f,!1)))}catch(C){l(()=>{N(f,!1,C)})()}else{f[k]=a;const C=f[h];if(f[h]=s,f[H]===H&&a===z&&(f[k]=f[Y],f[h]=f[V]),a===O&&s instanceof Error){const y=c.currentTask&&c.currentTask.data&&c.currentTask.data.__creationTrace__;y&&u(s,W,{configurable:!0,enumerable:!1,writable:!0,value:y})}for(let y=0;y<C.length;)o(f,C[y++],C[y++],C[y++],C[y++]);if(0==C.length&&a==O){f[k]=0;let y=s;try{throw new Error("Uncaught (in promise): "+function E(f){return f&&f.toString===Object.prototype.toString?(f.constructor&&f.constructor.name||"")+": "+JSON.stringify(f):f?f.toString():Object.prototype.toString.call(f)}(s)+(s&&s.stack?"\n"+s.stack:""))}catch(L){y=L}D&&(y.throwOriginal=!0),y.rejection=s,y.promise=f,y.zone=c.current,y.task=c.currentTask,m.push(y),t.scheduleMicroTask()}}}return f}const _=T("rejectionHandledHandler");function n(f){if(0===f[k]){try{const a=c[_];a&&"function"==typeof a&&a.call(this,{rejection:f[h],promise:f})}catch{}f[k]=O;for(let a=0;a<m.length;a++)f===m[a].promise&&m.splice(a,1)}}function o(f,a,s,l,v){n(f);const C=f[k],y=C?"function"==typeof l?l:K:"function"==typeof v?v:X;a.scheduleMicroTask("Promise.then",()=>{try{const L=f[h],I=!!s&&H===s[H];I&&(s[V]=L,s[Y]=C);const M=a.run(y,void 0,I&&y!==X&&y!==K?[]:[L]);N(s,!0,M)}catch(L){N(s,!1,L)}},s)}const P=function(){},q=r.AggregateError;class A{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(a){return a instanceof A?a:N(new this(null),z,a)}static reject(a){return N(new this(null),O,a)}static withResolvers(){const a={};return a.promise=new A((s,l)=>{a.resolve=s,a.reject=l}),a}static any(a){if(!a||"function"!=typeof a[Symbol.iterator])return Promise.reject(new q([],"All promises were rejected"));const s=[];let l=0;try{for(let y of a)l++,s.push(A.resolve(y))}catch{return Promise.reject(new q([],"All promises were rejected"))}if(0===l)return Promise.reject(new q([],"All promises were rejected"));let v=!1;const C=[];return new A((y,L)=>{for(let I=0;I<s.length;I++)s[I].then(M=>{v||(v=!0,y(M))},M=>{C.push(M),l--,0===l&&(v=!0,L(new q(C,"All promises were rejected")))})})}static race(a){let s,l,v=new this((L,I)=>{s=L,l=I});function C(L){s(L)}function y(L){l(L)}for(let L of a)J(L)||(L=this.resolve(L)),L.then(C,y);return v}static all(a){return A.allWithCallback(a)}static allSettled(a){return(this&&this.prototype instanceof A?this:A).allWithCallback(a,{thenCallback:l=>({status:"fulfilled",value:l}),errorCallback:l=>({status:"rejected",reason:l})})}static allWithCallback(a,s){let l,v,C=new this((M,F)=>{l=M,v=F}),y=2,L=0;const I=[];for(let M of a){J(M)||(M=this.resolve(M));const F=L;try{M.then(B=>{I[F]=s?s.thenCallback(B):B,y--,0===y&&l(I)},B=>{s?(I[F]=s.errorCallback(B),y--,0===y&&l(I)):v(B)})}catch(B){v(B)}y++,L++}return y-=2,0===y&&l(I),C}constructor(a){const s=this;if(!(s instanceof A))throw new Error("Must be an instanceof Promise.");s[k]=g,s[h]=[];try{const l=S();a&&a(l(b(s,z)),l(b(s,O)))}catch(l){N(s,!1,l)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return A}then(a,s){let l=this.constructor?.[Symbol.species];(!l||"function"!=typeof l)&&(l=this.constructor||A);const v=new l(P),C=c.current;return this[k]==g?this[h].push(C,v,a,s):o(this,C,v,a,s),v}catch(a){return this.then(null,a)}finally(a){let s=this.constructor?.[Symbol.species];(!s||"function"!=typeof s)&&(s=A);const l=new s(P);l[H]=H;const v=c.current;return this[k]==g?this[h].push(v,l,a,a):o(this,v,l,a,a),l}}A.resolve=A.resolve,A.reject=A.reject,A.race=A.race,A.all=A.all;const _e=r[d]=r.Promise;r.Promise=A;const he=T("thenPatched");function de(f){const a=f.prototype,s=i(a,"then");if(s&&(!1===s.writable||!s.configurable))return;const l=a.then;a[w]=l,f.prototype.then=function(v,C){return new A((L,I)=>{l.call(this,L,I)}).then(v,C)},f[he]=!0}return t.patchThen=de,_e&&(de(_e),ue(r,"fetch",f=>function oe(f){return function(a,s){let l=f.apply(a,s);if(l instanceof A)return l;let v=l.constructor;return v[he]||de(v),l}}(f))),Promise[c.__symbol__("uncaughtPromiseErrors")]=m,A})})(e),function Lt(e){e.__load_patch("toString",r=>{const c=Function.prototype.toString,t=j("OriginalDelegate"),i=j("Promise"),u=j("Error"),E=function(){if("function"==typeof this){const d=this[t];if(d)return"function"==typeof d?c.call(d):Object.prototype.toString.call(d);if(this===Promise){const w=r[i];if(w)return c.call(w)}if(this===Error){const w=r[u];if(w)return c.call(w)}}return c.call(this)};E[t]=c,Function.prototype.toString=E;const T=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":T.call(this)}})}(e),function Mt(e){e.__load_patch("util",(r,c,t)=>{const i=Fe(r);t.patchOnProperties=Je,t.patchMethod=ue,t.bindArguments=xe,t.patchMacroTask=mt;const u=c.__symbol__("BLACK_LISTED_EVENTS"),E=c.__symbol__("UNPATCHED_EVENTS");r[E]&&(r[u]=r[E]),r[u]&&(c[u]=c[E]=r[u]),t.patchEventPrototype=Pt,t.patchEventTarget=bt,t.isIEOrEdge=kt,t.ObjectDefineProperty=Ne,t.ObjectGetOwnPropertyDescriptor=ke,t.ObjectCreate=_t,t.ArraySlice=Et,t.patchClass=be,t.wrapWithCurrentZone=je,t.filterProperties=it,t.attachOriginToPatched=fe,t._redefineProperty=Object.defineProperty,t.patchCallbacks=It,t.getGlobalObjects=()=>({globalSources:tt,zoneSymbolEventNames:ne,eventNames:i,isBrowser:Ve,isMix:Xe,isNode:Re,TRUE_STR:ae,FALSE_STR:le,ZONE_SYMBOL_PREFIX:ve,ADD_EVENT_LISTENER_STR:Ie,REMOVE_EVENT_LISTENER_STR:Me})})}(e)})(at),function Ot(e){e.__load_patch("legacy",r=>{const c=r[e.__symbol__("legacyPatch")];c&&c()}),e.__load_patch("timers",r=>{const c="set",t="clear";ye(r,c,t,"Timeout"),ye(r,c,t,"Interval"),ye(r,c,t,"Immediate")}),e.__load_patch("requestAnimationFrame",r=>{ye(r,"request","cancel","AnimationFrame"),ye(r,"mozRequest","mozCancel","AnimationFrame"),ye(r,"webkitRequest","webkitCancel","AnimationFrame")}),e.__load_patch("blocking",(r,c)=>{const t=["alert","prompt","confirm"];for(let i=0;i<t.length;i++)ue(r,t[i],(E,T,m)=>function(D,d){return c.current.run(E,r,d,m)})}),e.__load_patch("EventTarget",(r,c,t)=>{(function Dt(e,r){r.patchEventPrototype(e,r)})(r,t),function Ct(e,r){if(Zone[r.symbol("patchEventTarget")])return;const{eventNames:c,zoneSymbolEventNames:t,TRUE_STR:i,FALSE_STR:u,ZONE_SYMBOL_PREFIX:E}=r.getGlobalObjects();for(let m=0;m<c.length;m++){const D=c[m],Z=E+(D+u),x=E+(D+i);t[D]={},t[D][u]=Z,t[D][i]=x}const T=e.EventTarget;T&&T.prototype&&r.patchEventTarget(e,r,[T&&T.prototype])}(r,t);const i=r.XMLHttpRequestEventTarget;i&&i.prototype&&t.patchEventTarget(r,t,[i.prototype])}),e.__load_patch("MutationObserver",(r,c,t)=>{be("MutationObserver"),be("WebKitMutationObserver")}),e.__load_patch("IntersectionObserver",(r,c,t)=>{be("IntersectionObserver")}),e.__load_patch("FileReader",(r,c,t)=>{be("FileReader")}),e.__load_patch("on_property",(r,c,t)=>{!function St(e,r){if(Re&&!Xe||Zone[e.symbol("patchEvents")])return;const c=r.__Zone_ignore_on_properties;let t=[];if(Ve){const i=window;t=t.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const u=function pt(){try{const e=Te.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:i,ignoreProperties:["error"]}]:[];ct(i,Fe(i),c&&c.concat(u),Le(i))}t=t.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let i=0;i<t.length;i++){const u=r[t[i]];u&&u.prototype&&ct(u.prototype,Fe(u.prototype),c)}}(t,r)}),e.__load_patch("customElements",(r,c,t)=>{!function Rt(e,r){const{isBrowser:c,isMix:t}=r.getGlobalObjects();(c||t)&&e.customElements&&"customElements"in e&&r.patchCallbacks(r,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"])}(r,t)}),e.__load_patch("XHR",(r,c)=>{!function D(d){const w=d.XMLHttpRequest;if(!w)return;const Z=w.prototype;let U=Z[Ze],J=Z[Ae];if(!U){const R=d.XMLHttpRequestEventTarget;if(R){const b=R.prototype;U=b[Ze],J=b[Ae]}}const K="readystatechange",X="scheduled";function k(R){const b=R.data,S=b.target;S[E]=!1,S[m]=!1;const Q=S[u];U||(U=S[Ze],J=S[Ae]),Q&&J.call(S,K,Q);const W=S[u]=()=>{if(S.readyState===S.DONE)if(!b.aborted&&S[E]&&R.state===X){const _=S[c.__symbol__("loadfalse")];if(0!==S.status&&_&&_.length>0){const n=R.invoke;R.invoke=function(){const o=S[c.__symbol__("loadfalse")];for(let p=0;p<o.length;p++)o[p]===R&&o.splice(p,1);!b.aborted&&R.state===X&&n.call(R)},_.push(R)}else R.invoke()}else!b.aborted&&!1===S[E]&&(S[m]=!0)};return U.call(S,K,W),S[t]||(S[t]=R),z.apply(S,b.args),S[E]=!0,R}function h(){}function H(R){const b=R.data;return b.aborted=!0,O.apply(b.target,b.args)}const V=ue(Z,"open",()=>function(R,b){return R[i]=0==b[2],R[T]=b[1],V.apply(R,b)}),G=j("fetchTaskAborting"),g=j("fetchTaskScheduling"),z=ue(Z,"send",()=>function(R,b){if(!0===c.current[g]||R[i])return z.apply(R,b);{const S={target:R,url:R[T],isPeriodic:!1,args:b,aborted:!1},Q=He("XMLHttpRequest.send",h,S,k,H);R&&!0===R[m]&&!S.aborted&&Q.state===X&&Q.invoke()}}),O=ue(Z,"abort",()=>function(R,b){const S=function x(R){return R[t]}(R);if(S&&"string"==typeof S.type){if(null==S.cancelFn||S.data&&S.data.aborted)return;S.zone.cancelTask(S)}else if(!0===c.current[G])return O.apply(R,b)})}(r);const t=j("xhrTask"),i=j("xhrSync"),u=j("xhrListener"),E=j("xhrScheduled"),T=j("xhrURL"),m=j("xhrErrorBeforeScheduled")}),e.__load_patch("geolocation",r=>{r.navigator&&r.navigator.geolocation&&function gt(e,r){const c=e.constructor.name;for(let t=0;t<r.length;t++){const i=r[t],u=e[i];if(u){if(!We(ke(e,i)))continue;e[i]=(T=>{const m=function(){return T.apply(this,xe(arguments,c+"."+i))};return fe(m,T),m})(u)}}}(r.navigator.geolocation,["getCurrentPosition","watchPosition"])}),e.__load_patch("PromiseRejectionEvent",(r,c)=>{function t(i){return function(u){st(r,i).forEach(T=>{const m=r.PromiseRejectionEvent;if(m){const D=new m(i,{promise:u.promise,reason:u.rejection});T.invoke(D)}})}}r.PromiseRejectionEvent&&(c[j("unhandledPromiseRejectionHandler")]=t("unhandledrejection"),c[j("rejectionHandledHandler")]=t("rejectionhandled"))}),e.__load_patch("queueMicrotask",(r,c,t)=>{!function wt(e,r){r.patchMethod(e,"queueMicrotask",c=>function(t,i){Zone.current.scheduleMicroTask("queueMicrotask",i[0])})}(r,t)})}(at)}},te=>{te(te.s=96935)}]);