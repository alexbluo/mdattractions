var ae=Object.defineProperty,ne=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var R=(r,t,a)=>t in r?ae(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a,g=(r,t)=>{for(var a in t||(t={}))le.call(t,a)&&R(r,a,t[a]);if(D)for(var a of D(t))oe.call(t,a)&&R(r,a,t[a]);return r},v=(r,t)=>ne(r,ie(t));import{a as se,R as I,N as B,r as h,O as ce,L as O,u as de,B as he,d as ue,e as y}from"./vendor.7718de09.js";import{u as L,a as me,Q as fe,b as pe}from"./react-query.06ef0f45.js";import{j as n,a as e,F as N,u as A,b as k,P as ge}from"./react-redux.789de98c.js";import{c as m}from"./classnames.c2fe505d.js";import{a as C}from"./axios.e45706d7.js";import{C as F}from"./react-content-loader.efd58250.js";import{c as q,b as xe}from"./@reduxjs/toolkit.962a6e49.js";import{l as _}from"./qs.fc7ad2bc.js";import{u as we,G as be,M as $,I as T}from"./@react-google-maps/api.9b704ce4.js";import{I as ve}from"./rc-slider.c99b5bc1.js";const ye=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}};ye();var W,Ne=se.exports;W=Ne.createRoot;var z={exports:{}};z.exports={ReactQueryDevtools:function(){return null},ReactQueryDevtoolsPanel:function(){return null}};var E=I.memo(({to:r,children:t})=>n("li",{className:"group relative inline cursor-pointer",children:[e("div",{className:"absolute bottom-0 -z-10 h-0 w-full transform bg-gold duration-200 ease-in-out group-hover:h-full"}),e(B,{className:({isActive:a})=>m("flex h-full w-fit px-8 text-xl duration-100 ease-in group-hover:text-black",{"text-gold":!a},{"bg-gold text-black":a}),to:r,children:e("span",{className:"flex h-full -skew-x-[60deg] items-center",children:t})})]})),ke=I.memo(()=>{const[r,t]=h.exports.useState(!1),[a,l]=h.exports.useState(window.scrollY),o=h.exports.useCallback(()=>{t(window.scrollY>a&&window.scrollY>64),l(window.scrollY)},[a]);return h.exports.useEffect(()=>(window.addEventListener("scroll",o,{passive:!0}),()=>{window.removeEventListener("scroll",o)}),[o]),n("nav",{className:m("fixed top-0 left-0 z-10 flex h-16 w-screen justify-end border-b border-gold bg-black font-montserrat font-medium duration-200 ease-out sm:justify-between",{"border-opacity-60 bg-opacity-60 backdrop-blur backdrop-filter":r}),children:[e("header",{className:"hidden sm:block",children:e(B,{to:"/",children:e("h1",{className:"h-full w-fit skew-x-[60deg] bg-gold px-12 text-xl",children:e("span",{className:"flex h-full -skew-x-[60deg] items-center text-center text-2xl",children:"Maryland Attractions"})})})}),n("ul",{className:"mr-4 flex h-full skew-x-[60deg]",children:[e(E,{to:"/",children:"Attractions"}),e(E,{to:"/map",children:"Map"}),e(E,{to:"/help",children:"Help"})]})]})});function Ce(){return n(N,{children:[e(ke,{}),e("main",{className:"container mx-auto px-16 py-16",children:e(ce,{})})]})}function Se(r){return n(F,v(g({viewBox:"0 0 400 288",preserveAspectRatio:"none"},r),{children:[e("rect",{x:"0",y:"0",width:"400",height:"69"}),e("rect",{x:"0",y:"73",width:"400",height:"69"}),e("rect",{x:"0",y:"146",width:"400",height:"69"}),e("rect",{x:"0",y:"219",width:"400",height:"69"})]}))}const Q={region:[],city:[],category:[],amenities:[]},{reducer:Pe,actions:Me}=q({name:"filters",initialState:Q,reducers:{add:(r,{payload:{category:t,filter:a}})=>{r[t].push(a),r[t].sort()},remove:(r,{payload:{category:t,filter:a}})=>{r[t]=r[t].filter(l=>l!==a)},reset:()=>Q}}),{add:je,remove:Y,reset:Ie}=Me;var Le=I.memo(({category:r,filter:t,checked:a})=>{const l=A();return n("li",{className:"flex w-full items-center truncate text-lg",children:[e("input",{className:"mr-1 h-4 w-4 flex-shrink-0 cursor-pointer appearance-none rounded-sm border-2 bg-black transition-colors checked:bg-gold",type:"checkbox",onChange:i=>{i.target.checked?l(je({category:r,filter:t})):l(Y({category:r,filter:t}))},checked:a}),e("span",{children:t})]})});function x({header:r,children:t}){const[a,l]=h.exports.useState(!1);return n("div",{children:[n("button",{className:"flex min-h-[3.5rem] w-full cursor-pointer select-none items-center justify-between rounded bg-gold px-4",onClick:()=>l(!a),children:[e("h2",{className:"font-montserrat text-lg font-medium",children:r}),e("svg",{className:m("h-6 w-6 shrink-0 transition-transform duration-500 ease-[cubic-bezier(.84,-0.08,.16,1.08)]",{"-rotate-180":a}),viewBox:"0 0 16 16",children:e("path",{d:"M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"})})]}),e("ul",{className:m("mx-4 overflow-y-auto font-poppins font-light text-gold duration-500 ease-[cubic-bezier(.84,-0.08,.16,1.08)]",{"max-h-0":!a},{"my-2 max-h-48":a}),children:t})]})}const Ae=["region","city","category","amenities"];function _e(){const r=k(i=>i.filters),{data:t,error:a,isLoading:l,isError:o}=L(["filters"],async()=>{let i={};for(const d of Ae){const c=await C.get(`/api/filters/${d}`);i=g(g({},i),c.data)}return i});return o?n("span",{children:["Error: ",a.message]}):e("div",{className:m("flex flex-col gap-1 rounded-md border-4",{"border-transparent":l},{"border-black bg-black":!l}),children:l?e(Se,{width:"100%",height:"220px"}):Object.entries(t).map(([i,d])=>e(x,{header:i.toUpperCase(),children:d.map(c=>e(Le,{category:i,filter:c,checked:r[i].includes(c)},c))},i))})}const Ee={filterSearchInput:"",mapSearchInput:""},{reducer:De,actions:Re}=q({name:"search",initialState:Ee,reducers:{changeFilterSearchInput:(r,{payload:t})=>{r.filterSearchInput=t},changeMapSearchInput:(r,{payload:t})=>{r.mapSearchInput=t}}}),{changeFilterSearchInput:H,changeMapSearchInput:Be}=Re;function U({handleClick:r,children:t}){return n("div",{className:"flex h-16 w-full max-w-full gap-1 rounded-md border-4 bg-black sm:w-auto xl:w-full",children:[e("div",{className:"flex w-1/2 items-center justify-center rounded-l bg-gold px-4 font-montserrat text-lg sm:w-auto xl:w-1/2",type:"text",children:e("span",{className:"truncate",children:t})}),e("button",{className:"group aspect-square h-full w-1/2 rounded-r text-gold duration-150 ease-in-out hover:bg-gold focus:outline focus:outline-offset-4 focus:outline-gold/50 active:brightness-75 sm:w-auto xl:w-1/2",onClick:r,children:n("svg",{className:"mx-auto h-1/2 w-1/2 fill-gold duration-150 ease-in-out group-hover:fill-black",viewBox:"0 0 16 16",children:[e("path",{d:"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"}),e("path",{d:"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"})]})})]})}function Oe(){const r=k(l=>l.filters),t=A(),a=()=>{t(Ie()),t(H(""))};return n("div",{className:"flex flex-wrap gap-1",children:[Object.values(r).some(l=>l.length>0)&&e(U,{handleClick:a,reverse:!0,children:"Reset"}),Object.entries(r).map(([l,o])=>o.map(i=>e(U,{handleClick:()=>t(Y({category:l,filter:i})),children:i},i)))]})}var G="/assets/crab.ab07035c.jpg";function S({handleClick:r,inverted:t,children:a}){return e("button",{className:m("h-full w-full truncate rounded-md border p-4 duration-200 ease-in-out",{"border-red text-red hover:bg-red hover:text-white":t},{"border-white text-white hover:bg-white hover:text-red":!t}),onClick:r,children:a})}var Z="/assets/none.696a83ed.png";function Fe({attraction_id:r,attraction_name:t,attraction_image:a,city:l}){return e("div",{className:"group relative font-poppins",children:n(O,{to:`/attractions/${r}`,children:[e("img",{className:"aspect-square w-full rounded-md object-cover shadow-md shadow-black duration-200 group-hover:shadow-none group-hover:brightness-50",src:!a||a.includes("data")?Z:a,alt:""}),n("div",{className:"absolute bottom-0 flex h-24 w-full flex-col rounded-md bg-black bg-opacity-90 p-4 text-center text-gold duration-200 group-hover:h-full group-hover:bg-transparent",children:[e("span",{className:"my-auto truncate text-xl font-medium duration-200 group-hover:whitespace-normal",children:t}),e("span",{children:l})]})]})})}function qe(r){return e("div",{children:n(F,v(g({viewBox:"0 0 300 300"},r),{children:[e("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"300",height:"240"}),e("rect",{x:"0",y:"250",rx:"5",ry:"5",width:"300",height:"20"}),e("rect",{x:"0",y:"280",rx:"5",ry:"5",width:"300",height:"20"})]}))})}function $e(){const{filterSearchInput:r}=k(u=>u.search),t=k(u=>u.filters),{data:a,error:l,isLoading:o,isError:i,hasNextPage:d,fetchNextPage:c}=me(["attractions",r,t],async({pageParam:u=0})=>{const b=_.stringify({search:r,filters:t,page:u}),f=await C.get(`/api/attractions?${b}`);return{data:f.data.attractions,nextPageNumber:f.data.nextPageNumber}},{getNextPageParam:u=>u.nextPageNumber,keepPreviousData:!0}),p=()=>{if(o)return[...Array(8)].map((b,f)=>e(qe,{},f));const u=a.pages.map(b=>b.data.map(f=>h.exports.createElement(Fe,v(g({},f),{key:f.attraction_id})))).flat(1);return u.length===0?e("div",{className:"col-span-2",children:n("span",{className:"mx-auto block w-full rounded-2xl bg-[#f6f6f6] p-6 text-center font-poppins",children:[e("img",{className:"mx-auto w-1/2",src:G,alt:""}),"Nothing Matched!"]})}):u};return i?n("span",{children:["Error: ",l.message]}):n("div",{className:"flex w-full flex-col justify-center gap-12",children:[e("div",{className:"grid gap-12 sm:grid-cols-2",children:p()}),d&&e(S,{handleClick:c,inverted:!0,children:"Load More"})]})}function K({type:r}){const{filterSearchInput:t,mapSearchInput:a}=k(i=>i.search),l=A(),o=i=>{r==="filter"&&l(H(i.target.value)),r==="map"&&l(Be(i.target.value))};return n("div",{className:m("flex h-16 w-full shrink-0 gap-1 rounded-md  duration-150 ease-in-out focus-within:outline focus-within:outline-4",{"border-4 bg-black focus-within:outline-gold/50":r==="filter"},{"border border-white bg-white focus-within:outline-white/50":r==="map"}),children:[e("input",{className:m("w-full pl-4 font-poppins text-lg outline-none",{"rounded-l bg-gold":r==="filter"},{"rounded-l-md bg-red text-white":r==="map"}),type:"text",value:r==="filter"?t:a,onChange:o}),e("div",{className:"flex aspect-square h-full items-center justify-center rounded-r",children:e("svg",{className:m("h-1/2 w-1/2 fill-gold",{"fill-gold":r==="filter"},{"fill-red":r==="map"}),viewBox:"0 0 50 50",children:e("path",{d:"M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"})})})]})}function Te(){return n(N,{children:[e("h1",{className:"page-title",children:"Attractions"}),n("div",{className:"flex w-full flex-col gap-12 xl:flex-row",children:[n("div",{className:"flex w-full flex-col gap-1 xl:w-1/3",children:[e(K,{type:"filter"}),e(_e,{}),e(Oe,{})]}),e("div",{className:"flex w-full flex-col items-center xl:w-2/3",children:e($e,{})})]})]})}function M({link:r,tel:t,children:a}){return r?e("a",{href:t?`tel:${r}`:r,children:e(S,{children:a})}):null}function P({header:r,order:t,children:a}){return n("section",{className:m("flex aspect-square flex-col gap-2 overflow-auto p-8",{"bg-gold text-black":t==="odd"},{"bg-red text-white":t==="even"}),children:[e("h2",{className:"text-2xl",children:r}),e("article",{className:"box-border h-full overflow-auto",children:a})]})}function We({inputRef:r,value:t,handleSliderChange:a,handleSliderAfterChange:l,handleInputChange:o}){return n("div",{className:"flex h-16 w-full shrink-0 items-center gap-[1px] rounded-md border border-white bg-white duration-150 ease-in-out focus-within:outline focus-within:outline-4 focus-within:outline-white/50",children:[e("div",{className:"flex h-full w-full items-center rounded-l-md bg-red px-4",children:e(ve,{min:0,max:200,value:t,onChange:a,onAfterChange:l,railStyle:{backgroundColor:"red",height:3,marginTop:1},trackStyle:{backgroundColor:"white",height:3,marginLeft:-1,marginTop:1},handleStyle:{height:15,width:15,borderColor:"white",backgroundColor:"white",boxShadow:"none"}})}),n("div",{className:"flex h-full items-center gap-1 rounded-r bg-red px-4 text-white",children:[e("input",{ref:r,className:"w-8 bg-red text-right text-white",type:"number",min:0,max:400,value:t,onChange:o}),"km"]})]})}function V({center:r,isDefaultCenter:t}){const{mapSearchInput:a}=k(s=>s.search),[l,o]=h.exports.useState(10),[i,d]=h.exports.useState(t?2e4*1e3:l*1e3),[c,p]=h.exports.useState(null),u=h.exports.useRef(),{data:b,error:f,isLoading:J,isError:X}=L(["attraction",a,r.lng,r.lat,i],async()=>{const s=_.stringify({search:a,lng:r.lng,lat:r.lat,searchRadius:i});return(await C.get(`/api/attractions/near?${s}`)).data},{keepPreviousData:!0});h.exports.useEffect(()=>{c==="recenter"&&p(r)},[c,r]),h.exports.useEffect(()=>{l===0&&u.current.select()},[l]);const ee=s=>{let w=parseInt(s.target.value,10);w>200&&(w=200),Number.isNaN(w)&&(w=0),o(w),d(w*1e3)},{isLoaded:te,loadError:re}=we({googleMapsApiKey:{}.VITE_GOOGLE_MAPS_API_KEY});return re?e("div",{children:"Map cannot be loaded right now, sorry. Please make sure that you have granted location access."}):X?n("span",{children:["Error: ",f.message]}):n("div",{className:"flex w-full flex-col xl:flex-row",children:[e("div",{className:"aspect-square xl:w-1/2",children:te&&n(be,{mapContainerStyle:{width:"100%",height:"100%"},center:r,zoom:11,clickableIcons:!1,children:[e($,{position:r,onClick:()=>p(r),animation:window.google.maps.Animation.DROP,children:c===r&&e(T,{onCloseClick:()=>p(null),children:e("div",{children:r.name})})}),!J&&b.map(s=>e($,{position:{lat:s.location.coordinates[1],lng:s.location.coordinates[0]},onClick:()=>p(s),title:s.attraction_name,children:c===s&&e(T,{onCloseClick:()=>p(null),children:n(N,{children:[e("p",{className:"font-medium",children:s.attraction_name}),n("p",{children:[s.address,e("br",{}),s.city,", ",s.state,"\xA0",s.zip]}),e("a",{className:"font-normal text-[#2563eb] underline",href:s.directions_link,children:"Directions"})]})})},s.attraction_id))]})}),e("div",{className:"aspect-square bg-red p-8 xl:w-1/2",children:n("div",{className:"flex h-full flex-col gap-1",children:[e(K,{type:"map"}),!t&&n(N,{children:[e(We,{inputRef:u,value:l.toString(),handleSliderChange:s=>o(s),handleSliderAfterChange:s=>d(s*1e3),handleInputChange:ee}),n("div",{className:"flex w-full shrink-0 flex-col gap-1 sm:flex-row",children:[e(S,{handleClick:()=>p("recenter"),children:"Show Center"}),n(S,{handleClick:()=>d(s=>s===2e4*1e3?l*1e3:2e4*1e3),children:["Show ",i===2e4*1e3?"Specified":"All"]})]})]}),c&&c!==r&&c!=="recenter"&&n("section",{className:"flex grow flex-col rounded-md border border-white p-8 xl:overflow-y-auto",children:[e("h2",{className:"flex items-center border-b font-montserrat text-2xl font-semibold text-white",children:c===r?r.name:c.attraction_name}),e("article",{className:"h-full text-white xl:overflow-y-auto",children:n("div",{className:"flex h-full flex-col justify-between gap-4",children:[e("p",{className:"pt-4",children:c.description}),e(O,{className:"group font-normal text-[#2563eb] underline",to:`/attractions/${c.attraction_id}`,target:"_blank",children:e(S,{children:n("div",{className:"flex items-center justify-center",children:["More Details\xA0",e("svg",{className:"fill-white duration-200 ease-in-out group-hover:translate-x-1 group-hover:fill-red",width:"16",height:"16",viewBox:"0 0 16 16",children:e("path",{d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"})})]})})})]})})]})]})})]})}function ze(){const{id:r}=de(),{data:t,error:a,isLoading:l,isError:o}=L(["attraction",r],async()=>(await C.get(`/api/attractions/${r}`)).data),i=()=>t.amenities?{__html:`<li>- ${t.amenities.join("</li><li>- ")}</li>`}:{__html:"<li>No amenities listed</li>"};return l?null:o?n("span",{children:["Error: ",a.message]}):n("div",{className:"flex flex-col",children:[e("h1",{className:"page-title",children:t.attraction_name}),n("div",{className:"grid grid-rows-6 font-poppins lg:grid-cols-3 lg:grid-rows-2",children:[e(P,{header:"Description",order:"odd",children:t.description}),e(P,{header:"Website & Contact",order:"even",children:n("div",{className:"grid grid-cols-2 gap-4 text-center",children:[e(M,{link:t.website_link,children:"Website"}),e(M,{link:t.mailto_link,children:"Email"}),n(M,{link:t.phone_number,children:["Phone",e("br",{}),t.phone_number]}),n(M,{link:t.fax,children:["Fax",e("br",{}),t.fax]})]})}),e("img",{className:"aspect-square w-full object-fill",src:!t.attraction_image||t.attraction_image.includes("data")?Z:t.attraction_image,alt:""}),e(P,{header:"Amenities",order:"even",children:e("ul",{dangerouslySetInnerHTML:i()})}),n(P,{header:"Location",order:"odd",children:[t.address,e("br",{}),t.city,", ",t.state,"\xA0",t.zip,e("br",{}),e("a",{className:"text-white underline decoration-red decoration-4 underline-offset-4 duration-200 ease-in hover:text-red",href:t.directions_link,children:"Directions"})]}),n(P,{header:"Region",order:"even",children:[e("h3",{className:"text-lg",children:t.region}),t.region_image&&e("img",{className:"w-full",src:t.region_image,alt:`${t.region_name}`})]})]}),e(V,{center:{lat:t.location.coordinates[1],lng:t.location.coordinates[0],name:t.attraction_name,description:t.description,id:t.attraction_id}})]})}function Qe(){return e("div",{className:"fixed top-0 left-0 flex h-screen w-full items-center justify-center",children:n("span",{className:"mx-auto block w-1/2 rounded-2xl bg-[#f6f6f6] p-6 text-center font-poppins",children:[e("img",{className:"mx-auto w-1/2",src:G,alt:""}),"Page Not Found"]})})}function Ye(){return n(N,{children:[e("h1",{className:"page-title",children:"Help"}),e("h2",{className:"pb-4 text-3xl",children:"FAQ"}),n("div",{className:"mb-8 flex flex-col gap-1 rounded-md border-4 bg-black",children:[e(x,{header:"Why do my text searches not seem to match the results?",children:e("article",{children:"The search bar performs a full-text search on more fields than just the attractions' name. Thus, results may consist of attractions with a name, description, amenity, category, and/or address which matches the query. Results are sorted by relevance to the search query!"})}),e(x,{header:"What if I don't want to provide access to my location for the map?",children:n("article",{children:["This website will never collect any user data, and proof can be found in the\xA0",e("a",{className:"underline",href:"https://github.com/alexbluo/mdattractions",children:"GitHub repository"}),". Users who either do not want to or are unable to provide access to their location will still have the ability to view and search all attractions. Unfortunately they will not have access to the slider/input feature, nor the \u201Cshow center\u201D and \u201Cshow all\u201D (enabled by default) buttons."]})}),e(x,{header:"How does the map work if I am not located in Maryland?",children:e("article",{children:"The map automatically detects whether the user is within 200 kilometers of any attraction in Maryland before adjusting accordingly. Users located within that threshold will have access to all features. Users not located within 200 kilometers of any attraction in Maryland will still have the ability to view and search all attractions. Unfortunately they will not have access to the slider/input feature, nor the \u201Cshow center\u201D and \u201Cshow all\u201D (enabled by default) buttons."})}),e(x,{header:"Why does the map not show any attractions when the distance is changed?",children:e("article",{children:"If you are outside of Maryland but still within the threshold, please be sure to input a distance that is high enough to reach Maryland, or use the \u201Cshow all\u201D button to view every attraction."})}),e(x,{header:"Why is the input distance for the map capped at 200 kilometers?",children:e("article",{children:"The idea is that users taking advantage of the slider/input funcationality are only looking for attractions within a reasonable distance of their location. Users who wish to view any attractions beyond 200 kilometers of their location may use the \u201Cshow all\u201D button."})}),e(x,{header:"Where is the attraction data collected from?",children:n("article",{children:["All data was scraped from\xA0",e("a",{className:"underline",href:"https://www.visitmaryland.org/things-to-do/attractions",children:"here"}),"\xA0using Puppeteer. No copyright laws were violated, as permission was granted from the creators."]})}),e(x,{header:"Where can I find the source code?",children:n("article",{children:["The source code can be found\xA0",e("a",{className:"underline",href:"https://github.com/alexbluo/mdattractions",children:"here"}),"."]})})]}),e("div",{className:"flex w-full justify-center",children:e("a",{href:"mailto:alexluo92823@gmail.com",children:e("button",{className:"rounded-md bg-red p-4 text-white shadow-md duration-200 hover:brightness-125",children:"Contact Me"})})})]})}const j={lat:39.2904,lng:-76.6122,name:"Default Center - Baltimore",description:"This is the default center for users who are either too far away from Maryland or don't have location services enabled. For more information, see the help page."};function He(){const[r,t]=h.exports.useState(null);return h.exports.useEffect(()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(async a=>{const l={lat:Number(a.coords.latitude.toFixed(4)),lng:Number(a.coords.longitude.toFixed(4))},o=_.stringify(v(g({search:""},l),{searchRadius:2e5}));(await C.get(`/api/attractions/near?${o}`)).data.length>0?t(v(g({},l),{name:"You",description:"Your current location."})):t(j)},()=>{t(j)}):t(j)},[]),n(N,{children:[e("h1",{className:"page-title",children:"Map"}),r&&e(V,{center:r,isDefaultCenter:r===j})]})}const Ue=xe({reducer:{filters:Pe,search:De}});const Ge=new fe({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),Ze=W(document.getElementById("root"));Ze.render(e(ge,{store:Ue,children:n(pe,{client:Ge,children:[e(he,{children:e(ue,{children:n(y,{element:e(Ce,{}),children:[e(y,{path:"/",element:e(Te,{})}),e(y,{path:"/attractions/:id",element:e(ze,{})}),e(y,{path:"/map",element:e(He,{})}),e(y,{path:"/help",element:e(Ye,{})}),e(y,{path:"*",element:e(Qe,{})})]})})}),e(z.exports.ReactQueryDevtools,{initialIsOpen:!1})]})}));