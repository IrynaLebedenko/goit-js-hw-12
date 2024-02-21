import{S as u,i as a,a as d}from"./assets/vendor-5401a4b0.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const c=document.querySelector(".form"),l=document.querySelector(".gallery"),p=document.querySelector("input"),g=document.querySelector(".container"),f=()=>{const r=document.createElement("span");r.classList.add("loader"),g.append(r)},m=()=>{const r=document.querySelector(".loader");r&&r.remove()},y={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250},h=new u(".gallery a",y);c.addEventListener("submit",async r=>{f(),r.preventDefault(),l.innerHTML="";const i="42400311-c577e995298d386a6e7116ddb",n=p.value.trim();if(!n){a.error({backgroundColor:"#EF4040",message:"Please. enter a search query!",position:"topRight"}),m();return}try{const s=await d.get(`https://pixabay.com/api/?key=${i}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`);if(!responce.ok)throw new Error(s.status);const e=await s.join();if(!e.hits.length)a.error({title:"",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else{const t=e.hits.map(o=>` <li class="gallery-item">
      <a href="${o.webformatURL}">
        <img class="gallery-image" src="${o.webformatURL}" alt="${o.tags}">
      </a>
      <div class="image-details">
        <div class="image-text">
        <p><b class="image-text-width">Likes: </b>${o.likes}</p>
        <p><b class="image-text-width">Views: </b>${o.views}</p>
        <p><b class="image-text-width">Comments: </b>${o.comments}</p>
        <p><b class="image-text-width">Downloads: </b>${o.downloads}</p>
        </div>
      </div>
    </li>`).join("");l.insertAdjacentHTML("afterbegin",t),h.refresh(),c.reset()}}catch(s){console.log(s)}finally{m()}});
//# sourceMappingURL=commonHelpers.js.map
