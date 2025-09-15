const N=new Set,v=new WeakSet;let S=!0,W,R=!1;function Y(e){R||(R=!0,S??=!1,W??="hover",Z(),G(),J(),_())}function Z(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,o=>{m(o.target,"tap")&&b(o.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function G(){let e;document.body.addEventListener("focusin",r=>{m(r.target,"hover")&&o(r)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),C(()=>{for(const r of document.getElementsByTagName("a"))v.has(r)||m(r,"hover")&&(v.add(r),r.addEventListener("mouseenter",o,{passive:!0}),r.addEventListener("mouseleave",n,{passive:!0}))});function o(r){const a=r.target.href;e&&clearTimeout(e),e=setTimeout(()=>{b(a)},80)}function n(){e&&(clearTimeout(e),e=0)}}function J(){let e;C(()=>{for(const o of document.getElementsByTagName("a"))v.has(o)||m(o,"viewport")&&(v.add(o),e??=Q(),e.observe(o))})}function Q(){const e=new WeakMap;return new IntersectionObserver((o,n)=>{for(const r of o){const a=r.target,u=e.get(a);r.isIntersecting?(u&&clearTimeout(u),e.set(a,setTimeout(()=>{n.unobserve(a),e.delete(a),b(a.href)},300))):u&&(clearTimeout(u),e.delete(a))}})}function _(){C(()=>{for(const e of document.getElementsByTagName("a"))m(e,"load")&&b(e.href)})}function b(e,o){e=e.replace(/#.*/,"");const n=o?.ignoreSlowConnection??!1;if(ee(e,n))if(N.add(e),document.createElement("link").relList?.supports?.("prefetch")&&o?.with!=="fetch"){const r=document.createElement("link");r.rel="prefetch",r.setAttribute("href",e),document.head.append(r)}else fetch(e,{priority:"low"})}function ee(e,o){if(!navigator.onLine||!o&&I())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!N.has(e)}catch{}return!1}function m(e,o){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:o==="tap"&&(n!=null||S)&&I()?!0:n==null&&S||n===""?o===W:n===o}function I(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function C(e){e();let o=!1;document.addEventListener("astro:page-load",()=>{if(!o){o=!0;return}e()})}function te(e={}){const{position:o="right",smoothScroll:n=!0,threshold:r=30,svgPath:a="M18 15l-6-6-6 6",svgStrokeWidth:u="2",borderRadius:j="15",showTooltip:y=!1,showProgressRing:P=!1,progressRingColor:H="yellow",showOnHomepage:V=!1}=e,B=((t,d)=>{if(typeof t=="string")return t;if(typeof t!="object"||t===null)return"Scroll to top";const i=d&&typeof d=="string"?d.toLowerCase().trim():"";if(!i){const c=t.en;return typeof c=="string"?c:"Scroll to top"}let l=t[i];if(typeof l=="string")return l;if(i.includes("-")){const c=i.split("-")[0];if(l=t[c],typeof l=="string")return l}return l=t.en,typeof l=="string"?l:"Scroll to top"})(e.tooltipText,document.documentElement.lang);let p=null;const U=()=>document.querySelector(".hero")||document.querySelector(".sl-hero")||document.querySelector('[data-page="index"]')||document.querySelector(".landing-page")||document.querySelector(".homepage")||document.querySelector("[data-starlight-homepage]")||document.querySelector(".site-hero")||document.body.classList.contains("homepage")||document.body.classList.contains("homepage")||document.body.classList.contains("landing")||document.querySelector("main.sl-main")&&document.querySelector("main.sl-main .hero, main.sl-main .sl-hero"),X=()=>{if(p&&p(),U()&&!V)return;const t=document.createElement("button");t.id="scroll-to-top-button",t.ariaLabel=B,t.setAttribute("aria-describedby",y?"scroll-to-top-tooltip":""),t.setAttribute("role","button"),t.setAttribute("tabindex","0");let d=!1;t.innerHTML=`
      ${P?`
      <svg class="scroll-progress-ring" 
           width="47"   
           height="47" 
           viewBox="0 0 47 47"
           style="position: absolute; top: 0; left: 0;">
        <!-- Background circle -->
        <circle cx="23.5" cy="23.5" r="22" 
                fill="none" 
                stroke="${H}" 
                stroke-width="3" 
                opacity="0.2" />
        <!-- Progress circle -->
        <circle cx="23.5" cy="23.5" r="22" 
                fill="none" 
                stroke="${H}" 
                stroke-width="3" 
                stroke-linecap="round"
                class="scroll-progress-circle"
                style="transform: rotate(-90deg); transform-origin: center;" />
      </svg>
      `:""}
      <svg xmlns="http://www.w3.org/2000/svg" 
           width="35" 
           height="35" 
           viewBox="0 0 24 24"            
           fill="none" 
           stroke="currentColor" 
           stroke-width="${u}" 
           stroke-linecap="round" 
           stroke-linejoin="round"
           style="position: relative; z-index: 1;">
        <path d="${a}"/>
      </svg>
    `;const i=document.createElement("div");i.id="scroll-to-top-tooltip",i.textContent=B;const l=document.createElement("div");l.style.cssText=`
    position: absolute;
    top: 100%; /* Position below the tooltip */
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid var(--sl-color-gray-7);
  `;const c=document.createElement("style");c.id="scroll-to-top-styles",c.textContent=`
    .scroll-to-top-button {
      position: fixed;
      bottom: 40px;
      width: 47px;
      height: 47px;
      ${o==="left"?"left: 40px;":o==="right"?"right: 35px;":"left: 50%;"}
      border-radius: ${j}%;     
      background-color: var(--sl-color-accent);       
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;      
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transform: ${o==="center"?"translateX(-50%) scale(0)":"scale(0)"};
      transition: opacity 0.3s ease, visibility 0.3s ease, background-color 0.3s ease, transform 0.3s ease;      
      z-index: 100;            
      border: 1px solid var(--sl-color-accent);
      transform-origin: center;
      -webkit-tap-highlight-color: transparent; /* Disable mobile tap highlight */
      touch-action: manipulation; /* Prevent double-tap zoom */
      box-shadow: 0 0 0 1px rgba(0,0,0,0.04),0 4px 8px 0 rgba(0,0,0,0.2);
    }
      .scroll-to-top-button:active {
        background-color: var(--sl-color-accent-dark); 
        color: var(--sl-text-white);        
        transition: background-color 0.1s ease, transform 0.1s ease; 
     }
      .scroll-to-top-button.visible {
        opacity: 1;
        visibility: visible;
        transform: ${o==="center"?"translateX(-50%) scale(1)":"scale(1)"};        
      }

      .scroll-to-top-button:hover {
        background-color: var(--sl-color-accent-low); 
        box-shadow: 0 0 0 1px rgba(0,0,0,0.04),0 4px 8px 0 rgba(0,0,0,0.2);
        color: var(--sl-color-accent);
        border-color: var(--sl-color-accent);     
      }
      
      .scroll-to-top-button.keyboard-focus {
        outline: 2px solid var(--sl-color-text);
        outline-offset: 2px;
      }

      .scroll-to-top-btn-tooltip {
        position: absolute;
        ${o==="left"?"left: -25px;":"right: -22px;"}
        top: -47px;
        background-color: var(--sl-color-gray-7);
        color: var(--sl-color-text);
        padding: 5px 10px;
        border-radius: 4px;
        font-weight: 400;
        font-size: 14px;
        white-space: nowrap;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s, visibility 0.3s;
        pointer-events: none;
     }
      .scroll-to-top-btn-tooltip.visible {
        opacity: 1;
        visibility: visible;        
      }

      /* Progress ring styles */
      .scroll-progress-ring {
        pointer-events: none;
      }
      
      .scroll-progress-circle {
        stroke-dasharray: 138.23; /* 2 * π * r = 2 * π * 22 ≈ 138.23 */
        stroke-dashoffset: 138.23;
        transition: stroke-dashoffset 0.1s ease;
      }
    `,document.head.appendChild(c),t.classList.add("scroll-to-top-button"),document.body.appendChild(t),y&&(i.classList.add("scroll-to-top-btn-tooltip"),i.appendChild(l),t.appendChild(i));const x=()=>{i.classList.remove("visible")},q=()=>{y&&i.classList.add("visible")};t.addEventListener("mouseenter",()=>{q()}),t.addEventListener("mouseleave",()=>{x()});const L=()=>{x(),window.scrollTo({top:0,behavior:n?"smooth":"auto"}),t.classList.remove("active")};document.addEventListener("keydown",s=>{s.key==="Tab"&&(d=!0)}),t.addEventListener("mousedown",()=>{d=!1}),t.addEventListener("keydown",s=>{s.key==="Enter"&&(L(),t.classList.remove("keyboard-focus"))}),t.addEventListener("focus",()=>{d&&(q(),t.classList.add("keyboard-focus"))}),t.addEventListener("blur",()=>{x(),t.classList.remove("keyboard-focus")}),t.addEventListener("touchstart",s=>{s.preventDefault(),t.classList.add("active")}),t.addEventListener("touchend",s=>{s.preventDefault(),L(),t.classList.remove("active")}),t.addEventListener("click",s=>{s.preventDefault(),L()});function F(s,T){let f;return function(){const g=arguments,E=this;f||(s.apply(E,g),f=!0,setTimeout(()=>f=!1,T))}}const $=()=>{const s=window.scrollY,T=window.innerHeight,f=document.documentElement.scrollHeight,g=s/(f-T);if(P){const M=t.querySelector(".scroll-progress-circle");if(M){let h=g*100;h>=99.5&&(h=100),h<0&&(h=0);const A=138.23,K=A-h/100*A;M.style.strokeDashoffset=K.toString()}}const E=r>=10&&r<=99?r:30;g>E/100?t.classList.add("visible"):t.classList.remove("visible")},z=F($,16);window.addEventListener("scroll",z),$();const D=()=>{document.documentElement.classList.contains("theme-dark")?(i.style.backgroundColor="var(--sl-color-gray-7)",i.style.color="var(--sl-color-text)",l.style.borderTopColor="var(--sl-color-gray-7)"):(i.style.backgroundColor="black",i.style.color="white",l.style.borderTopColor="black")};D();const O=new MutationObserver(D);O.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});function k(){Math.round(window.outerWidth/window.innerWidth*100)/100>3?t.style.display="none":t.style.display="flex"}return window.addEventListener("resize",k),k(),p=()=>{window.removeEventListener("scroll",z),window.removeEventListener("resize",k),O.disconnect(),t&&t.parentNode&&t.parentNode.removeChild(t);const s=document.getElementById("scroll-to-top-styles");s&&s.remove()},p},w=()=>{setTimeout(X,10)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",w):w(),document.addEventListener("astro:page-load",w),document.addEventListener("astro:before-preparation",()=>{p&&p()})}te({position:"right",tooltipText:"Back to Top",smoothScroll:!0,threshold:30,svgPath:"M18 15l-6-6-6 6",svgStrokeWidth:"2",borderRadius:"15",showTooltip:!0,showProgressRing:!0,progressRingColor:"white",showOnHomepage:!0});Y();export{te as default};
