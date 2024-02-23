import{S as $,i as f,a as b}from"./assets/vendor-5401a4b0.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const q=document.querySelector(".form"),d=document.querySelector(".gallery"),L=document.querySelector("input"),T=document.querySelector(".container"),m=document.querySelector(".btn-load"),x=document.querySelector(".loading-text");let l=1,p=15,h=0;const u=()=>{x.style.display="block"},g=()=>{x.style.display="none"},S=()=>{m.style.display="block"},s=()=>{m.style.display="none"},M={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250},w=new $(".gallery a",M);let i;function v(o){return`
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
        </li>`}q.addEventListener("submit",async o=>{l=1,p=15,o.preventDefault(),u(),s(),d.innerHTML="";const a="42400311-c577e995298d386a6e7116ddb";if(i=L.value.trim(),!i){f.error({backgroundColor:"#EF4040",message:"Please. enter a search query!",position:"topRight"}),g(),s();return}try{const r=(await b.get(`https://pixabay.com/api/?key=${a}&q=${encodeURIComponent(i)}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=${p}`)).data;if(!r.hits.length)f.error({title:"",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),s();else{u();const e=r.hits.map(v).join("");d.insertAdjacentHTML("afterbegin",e),w.refresh(),S()}}catch(n){console.log(n)}finally{g()}});m.addEventListener("click",async o=>{l++,d.innerHTML="",u(),s(),o.preventDefault();const a="42400311-c577e995298d386a6e7116ddb";i=L.value.trim();try{const r=(await b.get(`https://pixabay.com/api/?key=${a}&q=${encodeURIComponent(i)}&image_type=photo&orientation=horizontal&safesearch=true&page=${l}&per_page=${p}`)).data;if(r.hits.length){const e=r.hits.map(v).join("");d.insertAdjacentHTML("afterbegin",e),w.refresh();const t=document.querySelector(".gallery-image").getBoundingClientRect().height;if((()=>{window.scrollBy({top:2*t,behavior:"smooth"})})(),u(),h=r.totalHits,h<=p*l){const y=document.createElement("div");y.innerText="We're sorry, but you've reached the end of search results.",T.appendChild(y)}s()}}catch(n){console.log(n)}finally{g(),showLoadMoreButtonLoadingText()}});
//# sourceMappingURL=commonHelpers.js.map
