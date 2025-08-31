const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/mermaid.core.C7tw_6MQ.js","_astro/preload-helper.gPGQIo_j.js","_astro/transform.BlFvXLy3.js"])))=>i.map(i=>d[i]);
import{_ as h}from"./preload-helper.gPGQIo_j.js";import{i as p}from"./index.CdZn3Kny.js";const c=()=>document.querySelectorAll("pre.mermaid").length>0;c()?(console.log("[astro-mermaid] Mermaid diagrams detected, loading mermaid.js..."),h(()=>import("./mermaid.core.C7tw_6MQ.js").then(t=>t.bp),__vite__mapDeps([0,1,2])).then(async({default:t})=>{const o=[{name:"logos",loader:"() => fetch('https://unpkg.com/@iconify-json/logos@1/icons.json').then(res => res.json())"},{name:"iconoir",loader:"() => fetch('https://unpkg.com/@iconify-json/iconoir@1/icons.json').then(res => res.json())"}];if(o&&o.length>0){console.log("[astro-mermaid] Registering",o.length,"icon packs");const r=o.map(a=>({name:a.name,loader:new Function("return "+a.loader)()}));await t.registerIconPacks(r)}const d={startOnLoad:!1,theme:"forest",flowchart:{curve:"basis"}},g={light:"default",dark:"dark"};async function m(){console.log("[astro-mermaid] Initializing mermaid diagrams...");const r=document.querySelectorAll("pre.mermaid");if(console.log("[astro-mermaid] Found",r.length,"mermaid diagrams"),r.length===0)return;let a=d.theme;{const e=document.documentElement.getAttribute("data-theme"),n=document.body.getAttribute("data-theme");a=g[e||n]||d.theme,console.log("[astro-mermaid] Using theme:",a,"from",e?"html":"body")}t.initialize({...d,theme:a,gitGraph:{mainBranchName:"main",showCommitLabel:!0,showBranches:!0,rotateCommitLabel:!0}});for(const e of r){if(e.hasAttribute("data-processed"))continue;e.hasAttribute("data-diagram")||e.setAttribute("data-diagram",e.textContent||"");const n=e.getAttribute("data-diagram")||"",i="mermaid-"+Math.random().toString(36).slice(2,11);console.log("[astro-mermaid] Rendering diagram:",i);try{const s=document.getElementById(i);s&&s.remove();const{svg:u}=await t.render(i,n);e.innerHTML=u,e.setAttribute("data-processed","true"),console.log("[astro-mermaid] Successfully rendered diagram:",i)}catch(s){console.error("[astro-mermaid] Mermaid rendering error for diagram:",i,s),e.innerHTML=`<div style="color: red; padding: 1rem; border: 1px solid red; border-radius: 0.5rem;">
            <strong>Error rendering diagram:</strong><br/>
            ${s.message||"Unknown error"}
          </div>`,e.setAttribute("data-processed","true")}}}m();{const r=new MutationObserver(a=>{for(const e of a)e.type==="attributes"&&e.attributeName==="data-theme"&&(document.querySelectorAll("pre.mermaid[data-processed]").forEach(n=>{n.removeAttribute("data-processed")}),m())});r.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),r.observe(document.body,{attributes:!0,attributeFilter:["data-theme"]})}document.addEventListener("astro:after-swap",()=>{c()&&m()})}).catch(t=>{console.error("[astro-mermaid] Failed to load mermaid:",t)})):console.log("[astro-mermaid] No mermaid diagrams found on this page, skipping mermaid.js load");const l=document.createElement("style");l.textContent=`
            /* Prevent layout shifts by setting minimum height */
            pre.mermaid {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 2rem 0;
              padding: 1rem;
              background-color: transparent;
              border: none;
              overflow: auto;
              min-height: 200px; /* Prevent layout shift */
              position: relative;
            }
            
            /* Loading state with skeleton loader */
            pre.mermaid:not([data-processed]) {
              background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
              background-size: 200% 100%;
              animation: shimmer 1.5s infinite;
            }
            
            /* Dark mode skeleton loader */
            [data-theme="dark"] pre.mermaid:not([data-processed]) {
              background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
              background-size: 200% 100%;
            }
            
            @keyframes shimmer {
              0% {
                background-position: -200% 0;
              }
              100% {
                background-position: 200% 0;
              }
            }
            
            /* Show processed diagrams with smooth transition */
            pre.mermaid[data-processed] {
              animation: none;
              background: transparent;
              min-height: auto; /* Allow natural height after render */
            }
            
            /* Ensure responsive sizing for mermaid SVGs */
            pre.mermaid svg {
              max-width: 100%;
              height: auto;
            }
            
            /* Optional: Add subtle background for better visibility */
            @media (prefers-color-scheme: dark) {
              pre.mermaid[data-processed] {
                background-color: rgba(255, 255, 255, 0.02);
                border-radius: 0.5rem;
              }
            }
            
            @media (prefers-color-scheme: light) {
              pre.mermaid[data-processed] {
                background-color: rgba(0, 0, 0, 0.02);
                border-radius: 0.5rem;
              }
            }
            
            /* Respect user's color scheme preference */
            [data-theme="dark"] pre.mermaid[data-processed] {
              background-color: rgba(255, 255, 255, 0.02);
              border-radius: 0.5rem;
            }
            
            [data-theme="light"] pre.mermaid[data-processed] {
              background-color: rgba(0, 0, 0, 0.02);
              border-radius: 0.5rem;
            }
          `;document.head.appendChild(l);{const t=sessionStorage,o=new Set(JSON.parse(t.getItem("starlight-site-graph--visited-pages")??"[]"));o.add(new URL(window.location.href).pathname.slice(1)),t.setItem("starlight-site-graph--visited-pages",JSON.stringify([...o]))}p();
