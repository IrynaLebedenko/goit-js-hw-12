import{S as v,i as f,a as b}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const p of e.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const q=document.querySelector(".form"),a=document.querySelector(".gallery"),w=document.querySelector("input");document.querySelector(".container");const h=document.querySelector(".btn-load"),x=document.querySelector(".loading-text");let d=1,n=15,u=0;const g=()=>{x.style.display="block"},y=()=>{x.style.display="none"},L=()=>{h.style.display="block"},m=()=>{h.style.display="none"},S={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250},$=new v(".gallery a",S);let l;q.addEventListener("submit",async c=>{n=15,c.preventDefault(),g(),m(),a.innerHTML="";const r="42400311-c577e995298d386a6e7116ddb";if(l=w.value.trim(),!l){f.error({backgroundColor:"#EF4040",message:"Please. enter a search query!",position:"topRight"}),y(),m();return}try{const s=(await b.get(`https://pixabay.com/api/?key=${r}&q=${encodeURIComponent(l)}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=${n}`)).data;if(!s.hits.length)f.error({title:"",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m();else{g();const t=s.hits.map(e=>` <li class="gallery-item">
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
    </li>`).join("");a.insertAdjacentHTML("afterbegin",t),$.refresh(),L()}}catch(i){console.log(i)}finally{y()}});h.addEventListener("click",async c=>{d++,g(),m(),c.preventDefault(),a.innerHTML="";const r="42400311-c577e995298d386a6e7116ddb";l=w.value.trim();try{const s=(await b.get(`https://pixabay.com/api/?key=${r}&q=${encodeURIComponent(l)}&image_type=photo&orientation=horizontal&safesearch=true&page=${d}&per_page=${n}`)).data;if(s.hits.length){const t=s.hits.map(o=>` <li class="gallery-item">
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
        </li>`).join("");a.insertAdjacentHTML("afterbegin",t),$.refresh();const e=document.querySelector(".gallery-image").getBoundingClientRect().height;if((()=>{window.scrollBy({top:2*e,behavior:"smooth"})})(),g(),u=s.totalHits,u<=n*d){const o=document.createElement("div");o.innerText="We're sorry, but you've reached the end of search results.",a.appendChild(o)}}}catch(i){console.log(i)}finally{y(),u>n*d&&L()}});
//# sourceMappingURL=commonHelpers.js.map
