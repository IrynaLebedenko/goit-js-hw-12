import{S as y,i as n,a as d}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const p of e.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const f=document.querySelector(".form"),c=document.querySelector(".gallery"),g=document.querySelector("input"),b=document.querySelector(".container"),w=document.querySelector(".btn-load");let m=1;const u=()=>{const o=document.createElement("span");o.classList.add("loader"),b.append(o)},l=()=>{const o=document.querySelector(".loader");o&&o.remove()},L={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250},h=new y(".gallery a",L);let a;f.addEventListener("submit",async o=>{u(),o.preventDefault(),c.innerHTML="";const s="42400311-c577e995298d386a6e7116ddb";if(a=g.value.trim(),!a){n.error({backgroundColor:"#EF4040",message:"Please. enter a search query!",position:"topRight"}),l();return}try{const r=(await d.get(`https://pixabay.com/api/?key=${s}&q=${encodeURIComponent(a)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=1`)).data;if(!r.hits.length)n.error({title:"",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else{const t=r.hits.map(e=>` <li class="gallery-item">
      <a href="${e.webformatURL}">
        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
      </a>
      <div class="image-details">
        <div class="image-text">
        <p><b class="image-text-width">Likes: </b>${e.likes}</p>
        <p><b class="image-text-width">Views: </b>${e.views}</p>
        <p><b class="image-text-width">Comments: </b>${e.comments}</p>
        <p><b class="image-text-width">Downloads: </b>${e.downloads}</p>
        
        </div>
      </div>
    </li>`).join("");c.insertAdjacentHTML("afterbegin",t),h.refresh()}}catch(i){console.log(i)}finally{l()}});w.addEventListener("click",async o=>{u(),o.preventDefault(),m=m+1,c.innerHTML="";const s="42400311-c577e995298d386a6e7116ddb";if(a=g.value.trim(),!a){n.error({backgroundColor:"#EF4040",message:"Please. enter a search query!",position:"topRight"}),l();return}try{const r=(await d.get(`https://pixabay.com/api/?key=${s}&q=${encodeURIComponent(a)}&image_type=photo&orientation=horizontal&safesearch=true&page=${m}&per_page=15&page=2`)).data;if(!r.hits.length)n.error({title:"",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else{const t=r.hits.map(e=>` <li class="gallery-item">
          <a href="${e.webformatURL}">
            <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
          </a>
          <div class="image-details">
            <div class="image-text">
            <p><b class="image-text-width">Likes: </b>${e.likes}</p>
            <p><b class="image-text-width">Views: </b>${e.views}</p>
            <p><b class="image-text-width">Comments: </b>${e.comments}</p>
            <p><b class="image-text-width">Downloads: </b>${e.downloads}</p>
            
          </div>
        </li>`).join("");c.insertAdjacentHTML("afterbegin",t),h.refresh()}}catch(i){console.log(i)}finally{l()}});
//# sourceMappingURL=commonHelpers.js.map
