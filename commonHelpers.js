import{S as q,i as b,a as L}from"./assets/vendor-5401a4b0.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const p of t.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const S=document.querySelector(".form"),i=document.querySelector(".gallery"),x=document.querySelector("input");document.querySelector(".container");const f=document.querySelector(".btn-load"),w=document.querySelector(".loading-text");let n=1,c=15,m=0;const u=()=>{w.style.display="block"},g=()=>{w.style.display="none"},y=()=>{f.style.display="block"},l=()=>{f.style.display="none"},T={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250},v=new q(".gallery a",T);let d;function $(o){return`
        <li class="gallery-item">
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
        </li>`}S.addEventListener("submit",async o=>{n=1,c=15,o.preventDefault(),u(),l(),i.innerHTML="";const a="42400311-c577e995298d386a6e7116ddb";if(d=x.value.trim(),!d){b.error({backgroundColor:"#EF4040",message:"Please. enter a search query!",position:"topRight"}),g(),l();return}try{const r=(await L.get(`https://pixabay.com/api/?key=${a}&q=${encodeURIComponent(d)}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=${c}`)).data;if(!r.hits.length)b.error({title:"",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l();else{u();const e=r.hits.map($).join("");i.insertAdjacentHTML("beforeend",e),v.refresh(),y()}}catch(s){console.log(s)}finally{g()}});f.addEventListener("click",async o=>{n++,i.innerHTML="",u(),l(),o.preventDefault();const a="42400311-c577e995298d386a6e7116ddb";d=x.value.trim();try{const r=(await L.get(`https://pixabay.com/api/?key=${a}&q=${encodeURIComponent(d)}&image_type=photo&orientation=horizontal&safesearch=true&page=${n}&per_page=${c}`)).data;if(r.hits.length){const e=r.hits.map($).join("");i.insertAdjacentHTML("beforeend",e),v.refresh(),y();const t=document.querySelector(".gallery-image").getBoundingClientRect().height;if((()=>{window.scrollBy({top:2*t,behavior:"smooth"})})(),u(),m=r.totalHits,m<=c*n){const h=document.createElement("div");h.innerText="We're sorry, but you've reached the end of search results.",i.appendChild(h)}l()}}catch(s){console.log(s)}finally{g(),m>c*n&&y()}});
//# sourceMappingURL=commonHelpers.js.map
