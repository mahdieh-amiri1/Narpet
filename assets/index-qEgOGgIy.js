import{aA as fe}from"./index-fx_f3edx.js";const me=Symbol(),ee=Object.getPrototypeOf,B=new WeakMap,he=e=>e&&(B.has(e)?B.get(e):ee(e)===Object.prototype||ee(e)===Array.prototype),be=e=>he(e)&&e[me]||null,te=(e,t=!0)=>{B.set(e,t)};var J={VITE_REACT_APP_PROJECT_ID:"9d80089c30635ff84b5339d993d63fa1",VITE_PINATA_JWT:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI2MTc3YmY2ZS04NDhkLTQwMWMtOTIxYy0xYjFjNDE1Njg3NzEiLCJlbWFpbCI6Im1laXNhbXRhaGVyNzFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6Ijg1MmZjNDkxOTdjNjIwYmE3ZGIyIiwic2NvcGVkS2V5U2VjcmV0IjoiNjhmNGQ4MGQ5OGM5ZDJlODM0MDlkMzgwZTlmZTI3MjllMWQ0OWYyOTI0MmE4OTE1ZmRkOWUwMjgyY2VmZjY5NCIsImlhdCI6MTcwMjEyNTY5OH0.5eYal8eAL9oe8IaQ7bw3vFdT8btKuiyEmOwz7e0y33M",BASE_URL:"/real-token/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const G=e=>typeof e=="object"&&e!==null,C=new WeakMap,Z=new WeakSet,ge=(e=Object.is,t=(n,b)=>new Proxy(n,b),s=n=>G(n)&&!Z.has(n)&&(Array.isArray(n)||!(Symbol.iterator in n))&&!(n instanceof WeakMap)&&!(n instanceof WeakSet)&&!(n instanceof Error)&&!(n instanceof Number)&&!(n instanceof Date)&&!(n instanceof String)&&!(n instanceof RegExp)&&!(n instanceof ArrayBuffer),r=n=>{switch(n.status){case"fulfilled":return n.value;case"rejected":throw n.reason;default:throw n}},l=new WeakMap,c=(n,b,v=r)=>{const I=l.get(n);if((I==null?void 0:I[0])===b)return I[1];const y=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n));return te(y,!0),l.set(n,[b,y]),Reflect.ownKeys(n).forEach(N=>{if(Object.getOwnPropertyDescriptor(y,N))return;const E=Reflect.get(n,N),A={value:E,enumerable:!0,configurable:!0};if(Z.has(E))te(E,!1);else if(E instanceof Promise)delete A.value,A.get=()=>v(E);else if(C.has(E)){const[g,z]=C.get(E);A.value=c(g,z(),v)}Object.defineProperty(y,N,A)}),Object.preventExtensions(y)},m=new WeakMap,f=[1,1],L=n=>{if(!G(n))throw new Error("object required");const b=m.get(n);if(b)return b;let v=f[0];const I=new Set,y=(a,i=++f[0])=>{v!==i&&(v=i,I.forEach(o=>o(a,i)))};let N=f[1];const E=(a=++f[1])=>(N!==a&&!I.size&&(N=a,g.forEach(([i])=>{const o=i[1](a);o>v&&(v=o)})),v),A=a=>(i,o)=>{const h=[...i];h[1]=[a,...h[1]],y(h,o)},g=new Map,z=(a,i)=>{if((J?"production":void 0)!=="production"&&g.has(a))throw new Error("prop listener already exists");if(I.size){const o=i[3](A(a));g.set(a,[i,o])}else g.set(a,[i])},q=a=>{var i;const o=g.get(a);o&&(g.delete(a),(i=o[1])==null||i.call(o))},ue=a=>(I.add(a),I.size===1&&g.forEach(([o,h],P)=>{if((J?"production":void 0)!=="production"&&h)throw new Error("remove already exists");const _=o[3](A(P));g.set(P,[o,_])}),()=>{I.delete(a),I.size===0&&g.forEach(([o,h],P)=>{h&&(h(),g.set(P,[o]))})}),F=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),R=t(F,{deleteProperty(a,i){const o=Reflect.get(a,i);q(i);const h=Reflect.deleteProperty(a,i);return h&&y(["delete",[i],o]),h},set(a,i,o,h){const P=Reflect.has(a,i),_=Reflect.get(a,i,h);if(P&&(e(_,o)||m.has(o)&&e(_,m.get(o))))return!0;q(i),G(o)&&(o=be(o)||o);let x=o;if(o instanceof Promise)o.then(j=>{o.status="fulfilled",o.value=j,y(["resolve",[i],j])}).catch(j=>{o.status="rejected",o.reason=j,y(["reject",[i],j])});else{!C.has(o)&&s(o)&&(x=L(o));const j=!Z.has(x)&&C.get(x);j&&z(i,j)}return Reflect.set(a,i,x,h),y(["set",[i],o,_]),!0}});m.set(n,R);const pe=[F,E,c,ue];return C.set(R,pe),Reflect.ownKeys(n).forEach(a=>{const i=Object.getOwnPropertyDescriptor(n,a);"value"in i&&(R[a]=n[a],delete i.value,delete i.writable),Object.defineProperty(F,a,i)}),R})=>[L,C,Z,e,t,s,r,l,c,m,f],[Ie]=ge();function M(e={}){return Ie(e)}function D(e,t,s){const r=C.get(e);(J?"production":void 0)!=="production"&&!r&&console.warn("Please use proxy object");let l;const c=[],m=r[3];let f=!1;const n=m(b=>{if(c.push(b),s){t(c.splice(0));return}l||(l=Promise.resolve().then(()=>{l=void 0,f&&t(c.splice(0))}))});return f=!0,()=>{f=!1,n()}}function ye(e,t){const s=C.get(e);(J?"production":void 0)!=="production"&&!s&&console.warn("Please use proxy object");const[r,l,c]=s;return c(r,l(),t)}const d=M({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),de={state:d,subscribe(e){return D(d,()=>e(d))},push(e,t){e!==d.view&&(d.view=e,t&&(d.data=t),d.history.push(e))},reset(e){d.view=e,d.history=[e]},replace(e){d.history.length>1&&(d.history[d.history.length-1]=e,d.view=e)},goBack(){if(d.history.length>1){d.history.pop();const[e]=d.history.slice(-1);d.view=e}},setData(e){d.data=e}},p={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return p.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return p.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(p.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},formatUniversalUrl(e,t,s){if(!p.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let r=e;r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(p.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(p.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=de.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},we=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),u=M({enabled:we,userSessionId:"",events:[],connectedWalletId:void 0}),ve={state:u,subscribe(e){return D(u.events,()=>e(ye(u.events[u.events.length-1])))},initialize(){u.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(u.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){u.connectedWalletId=e},click(e){if(u.enabled){const t={type:"CLICK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},track(e){if(u.enabled){const t={type:"TRACK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},view(e){if(u.enabled){const t={type:"VIEW",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}}},W=M({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),w={state:W,subscribe(e){return D(W,()=>e(W))},setChains(e){W.chains=e},setWalletConnectUri(e){W.walletConnectUri=e},setIsCustomDesktop(e){W.isCustomDesktop=e},setIsCustomMobile(e){W.isCustomMobile=e},setIsDataLoaded(e){W.isDataLoaded=e},setIsUiLoaded(e){W.isUiLoaded=e},setIsAuth(e){W.isAuth=e}},$=M({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),k={state:$,subscribe(e){return D($,()=>e($))},setConfig(e){var t,s;ve.initialize(),w.setChains(e.chains),w.setIsAuth(!!e.enableAuthMode),w.setIsCustomMobile(!!((t=e.mobileWallets)!=null&&t.length)),w.setIsCustomDesktop(!!((s=e.desktopWallets)!=null&&s.length)),p.setModalVersionInStorage(),Object.assign($,e)}};var We=Object.defineProperty,se=Object.getOwnPropertySymbols,Oe=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable,ne=(e,t,s)=>t in e?We(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Le=(e,t)=>{for(var s in t||(t={}))Oe.call(t,s)&&ne(e,s,t[s]);if(se)for(var s of se(t))Ee.call(t,s)&&ne(e,s,t[s]);return e};const K="https://explorer-api.walletconnect.com",H="wcm",X="js-2.6.2";async function Y(e,t){const s=Le({sdkType:H,sdkVersion:X},t),r=new URL(e,K);return r.searchParams.append("projectId",k.state.projectId),Object.entries(s).forEach(([l,c])=>{c&&r.searchParams.append(l,String(c))}),(await fetch(r)).json()}const U={async getDesktopListings(e){return Y("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return Y("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return Y("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return Y("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${K}/w3m/v1/getWalletImage/${e}?projectId=${k.state.projectId}&sdkType=${H}&sdkVersion=${X}`},getAssetImageUrl(e){return`${K}/w3m/v1/getAssetImage/${e}?projectId=${k.state.projectId}&sdkType=${H}&sdkVersion=${X}`}};var je=Object.defineProperty,oe=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable,re=(e,t,s)=>t in e?je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ae=(e,t)=>{for(var s in t||(t={}))Ce.call(t,s)&&re(e,s,t[s]);if(oe)for(var s of oe(t))Me.call(t,s)&&re(e,s,t[s]);return e};const ie=p.isMobile(),O=M({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),Ve={state:O,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=k.state;if(e==="NONE"||t==="ALL"&&!e)return O.recomendedWallets;if(p.isArray(e)){const s={recommendedIds:e.join(",")},{listings:r}=await U.getAllListings(s),l=Object.values(r);l.sort((c,m)=>{const f=e.indexOf(c.id),L=e.indexOf(m.id);return f-L}),O.recomendedWallets=l}else{const{chains:s,isAuth:r}=w.state,l=s==null?void 0:s.join(","),c=p.isArray(t),m={page:1,sdks:r?"auth_v1":void 0,entries:p.RECOMMENDED_WALLET_AMOUNT,chains:l,version:2,excludedIds:c?t.join(","):void 0},{listings:f}=ie?await U.getMobileListings(m):await U.getDesktopListings(m);O.recomendedWallets=Object.values(f)}return O.recomendedWallets},async getWallets(e){const t=Ae({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:r}=k.state,{recomendedWallets:l}=O;if(r==="ALL")return O.wallets;l.length?t.excludedIds=l.map(v=>v.id).join(","):p.isArray(s)&&(t.excludedIds=s.join(",")),p.isArray(r)&&(t.excludedIds=[t.excludedIds,r].filter(Boolean).join(",")),w.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:m}=e,{listings:f,total:L}=ie?await U.getMobileListings(t):await U.getDesktopListings(t),n=Object.values(f),b=m?"search":"wallets";return O[b]={listings:[...O[b].listings,...n],total:L,page:c??1},{listings:n,total:L}},getWalletImageUrl(e){return U.getWalletImageUrl(e)},getAssetImageUrl(e){return U.getAssetImageUrl(e)},resetSearch(){O.search={listings:[],total:0,page:1}}},T=M({open:!1}),Q={state:T,subscribe(e){return D(T,()=>e(T))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:r}=w.state;if(p.removeWalletConnectDeepLink(),w.setWalletConnectUri(e==null?void 0:e.uri),w.setChains(e==null?void 0:e.chains),de.reset("ConnectWallet"),s&&r)T.open=!0,t();else{const l=setInterval(()=>{const c=w.state;c.isUiLoaded&&c.isDataLoaded&&(clearInterval(l),T.open=!0,t())},200)}})},close(){T.open=!1}};var Ue=Object.defineProperty,ae=Object.getOwnPropertySymbols,Se=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable,le=(e,t,s)=>t in e?Ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ne=(e,t)=>{for(var s in t||(t={}))Se.call(t,s)&&le(e,s,t[s]);if(ae)for(var s of ae(t))De.call(t,s)&&le(e,s,t[s]);return e};function Pe(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const V=M({themeMode:Pe()?"dark":"light"}),ce={state:V,subscribe(e){return D(V,()=>e(V))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(V.themeMode=t),s&&(V.themeVariables=Ne({},s))}},S=M({open:!1,message:"",variant:"success"}),Re={state:S,subscribe(e){return D(S,()=>e(S))},openToast(e,t){S.open=!0,S.message=e,S.variant=t},closeToast(){S.open=!1}};class Te{constructor(t){this.openModal=Q.open,this.closeModal=Q.close,this.subscribeModal=Q.subscribe,this.setTheme=ce.setThemeConfig,ce.setThemeConfig(t),k.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await fe(()=>import("./index-EktFpbts.js"),__vite__mapDeps([0,1,2,3]));const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),w.setIsUiLoaded(!0)}}}const xe=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:Te},Symbol.toStringTag,{value:"Module"}));export{ve as R,de as T,p as a,xe as i,ce as n,Re as o,w as p,Q as s,Ve as t,k as y};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-EktFpbts.js","assets/browser-EJXffhTE.js","assets/index-fx_f3edx.js","assets/index-bI5pgBhQ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}