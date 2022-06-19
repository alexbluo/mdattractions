import{r as l,R as K,a as Q}from"./vendor.312e4218.js";import{r as X}from"./rc-slider.8e5ae458.js";var N={exports:{}},D={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=l.exports;function Z(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var ee=typeof Object.is=="function"?Object.is:Z,te=m.useState,re=m.useEffect,ne=m.useLayoutEffect,oe=m.useDebugValue;function ue(e,t){var u=t(),r=te({inst:{value:u,getSnapshot:t}}),n=r[0].inst,o=r[1];return ne(function(){n.value=u,n.getSnapshot=t,L(n)&&o({inst:n})},[e,u,t]),re(function(){return L(n)&&o({inst:n}),e(function(){L(n)&&o({inst:n})})},[e]),oe(u),u}function L(e){var t=e.getSnapshot;e=e.value;try{var u=t();return!ee(e,u)}catch{return!0}}function se(e,t){return t()}var ce=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?se:ue;D.useSyncExternalStore=m.useSyncExternalStore!==void 0?m.useSyncExternalStore:ce;N.exports=D;var V={exports:{}},U={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=l.exports,ie=N.exports;function fe(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var le=typeof Object.is=="function"?Object.is:fe,ae=ie.useSyncExternalStore,pe=b.useRef,de=b.useEffect,Se=b.useMemo,ye=b.useDebugValue;U.useSyncExternalStoreWithSelector=function(e,t,u,r,n){var o=pe(null);if(o.current===null){var c={hasValue:!1,value:null};o.current=c}else c=o.current;o=Se(function(){function a(p){if(!v){if(v=!0,S=p,p=r(p),n!==void 0&&c.hasValue){var x=c.value;if(n(x,p))return y=x}return y=p}if(x=y,le(S,p))return x;var I=r(p);return n!==void 0&&n(x,I)?x:(S=p,y=I)}var v=!1,S,y,F=u===void 0?null:u;return[function(){return a(t())},F===null?void 0:function(){return a(F())}]},[t,u,r,n]);var i=ae(e,o[0],o[1]);return de(function(){c.hasValue=!0,c.value=i},[i]),ye(i),i};V.exports=U;function xe(e){e()}let z=xe;const me=e=>z=e,ve=()=>z,d=K.createContext(null);function A(){return l.exports.useContext(d)}const be=()=>{throw new Error("uSES not initialized!")};let W=be;const $e=e=>{W=e},he=(e,t)=>e===t;function _e(e=d){const t=e===d?A:()=>l.exports.useContext(e);return function(r,n=he){const{store:o,subscription:c,getServerState:i}=t(),a=W(c.addNestedSub,o.getState,i||o.getState,r,n);return l.exports.useDebugValue(a),a}}const Ae=_e();var q=X.exports,Ee={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},we={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},B={};B[q.ForwardRef]=Ee;B[q.Memo]=we;var s={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T=Symbol.for("react.element"),k=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),w=Symbol.for("react.context"),Ce=Symbol.for("react.server_context"),C=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),H;H=Symbol.for("react.module.reference");function f(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case T:switch(e=e.type,e){case $:case _:case h:case g:case R:return e;default:switch(e=e&&e.$$typeof,e){case Ce:case w:case C:case O:case j:case E:return e;default:return t}}case k:return t}}}s.ContextConsumer=w;s.ContextProvider=E;s.Element=T;s.ForwardRef=C;s.Fragment=$;s.Lazy=O;s.Memo=j;s.Portal=k;s.Profiler=_;s.StrictMode=h;s.Suspense=g;s.SuspenseList=R;s.isAsyncMode=function(){return!1};s.isConcurrentMode=function(){return!1};s.isContextConsumer=function(e){return f(e)===w};s.isContextProvider=function(e){return f(e)===E};s.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===T};s.isForwardRef=function(e){return f(e)===C};s.isFragment=function(e){return f(e)===$};s.isLazy=function(e){return f(e)===O};s.isMemo=function(e){return f(e)===j};s.isPortal=function(e){return f(e)===k};s.isProfiler=function(e){return f(e)===_};s.isStrictMode=function(e){return f(e)===h};s.isSuspense=function(e){return f(e)===g};s.isSuspenseList=function(e){return f(e)===R};s.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===$||e===_||e===h||e===g||e===R||e===ge||typeof e=="object"&&e!==null&&(e.$$typeof===O||e.$$typeof===j||e.$$typeof===E||e.$$typeof===w||e.$$typeof===C||e.$$typeof===H||e.getModuleId!==void 0)};s.typeOf=f;function Re(){const e=ve();let t=null,u=null;return{clear(){t=null,u=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],n=t;for(;n;)r.push(n),n=n.next;return r},subscribe(r){let n=!0,o=u={callback:r,next:null,prev:u};return o.prev?o.prev.next=o:t=o,function(){!n||t===null||(n=!1,o.next?o.next.prev=o.prev:u=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const Y={notify(){},get:()=>[]};function je(e,t){let u,r=Y;function n(y){return a(),r.subscribe(y)}function o(){r.notify()}function c(){S.onStateChange&&S.onStateChange()}function i(){return Boolean(u)}function a(){u||(u=t?t.addNestedSub(c):e.subscribe(c),r=Re())}function v(){u&&(u(),u=void 0,r.clear(),r=Y)}const S={addNestedSub:n,notifyNestedSubs:o,handleChangeWrapper:c,isSubscribed:i,trySubscribe:a,tryUnsubscribe:v,getListeners:()=>r};return S}const Oe=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",Pe=Oe?l.exports.useLayoutEffect:l.exports.useEffect;var P={exports:{}},M={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Me=l.exports,Le=Symbol.for("react.element"),Te=Symbol.for("react.fragment"),ke=Object.prototype.hasOwnProperty,Fe=Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ie={key:!0,ref:!0,__self:!0,__source:!0};function J(e,t,u){var r,n={},o=null,c=null;u!==void 0&&(o=""+u),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(c=t.ref);for(r in t)ke.call(t,r)&&!Ie.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)n[r]===void 0&&(n[r]=t[r]);return{$$typeof:Le,type:e,key:o,ref:c,props:n,_owner:Fe.current}}M.Fragment=Te;M.jsx=J;M.jsxs=J;P.exports=M;const Ne=P.exports.jsx,We=P.exports.jsxs,qe=P.exports.Fragment;function Be({store:e,context:t,children:u,serverState:r}){const n=l.exports.useMemo(()=>{const i=je(e);return{store:e,subscription:i,getServerState:r?()=>r:void 0}},[e,r]),o=l.exports.useMemo(()=>e.getState(),[e]);return Pe(()=>{const{subscription:i}=n;return i.onStateChange=i.notifyNestedSubs,i.trySubscribe(),o!==e.getState()&&i.notifyNestedSubs(),()=>{i.tryUnsubscribe(),i.onStateChange=void 0}},[n,o]),Ne((t||d).Provider,{value:n,children:u})}function G(e=d){const t=e===d?A:()=>l.exports.useContext(e);return function(){const{store:r}=t();return r}}const De=G();function Ve(e=d){const t=e===d?De:G(e);return function(){return t().dispatch}}const He=Ve();$e(V.exports.useSyncExternalStoreWithSelector);me(Q.exports.unstable_batchedUpdates);export{qe as F,Be as P,Ne as a,Ae as b,We as j,He as u};
