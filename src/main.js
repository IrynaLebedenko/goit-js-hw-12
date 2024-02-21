import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import axios from 'axios';

 const fetchImageForm = document.querySelector('.form');
 const gallery = document.querySelector('.gallery');
 const userInput = document.querySelector('input');
 const container = document.querySelector('.container');
 const btnLoadMore = document.querySelector('.btn-load');

 let page = 1;
let per_page = 15;
// Function showing the loader
const showLoader = () => {
    const loader = document.createElement('span');
    loader.classList.add('loader');
    container.append(loader);
  };
  
  // Function hiding the loader
  const hidingLoader = () => {
    const loader = document.querySelector('.loader');
    if (loader) {
      loader.remove();
    }
  };

const options = {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    animation: 250,
  };

const lightbox = new SimpleLightbox('.gallery a', options);
let query;
fetchImageForm.addEventListener('submit', async (event) => {
  showLoader();
  event.preventDefault(); 
  
  gallery.innerHTML = '';
  const baseUrl = 'https://pixabay.com/api/'; 
  const pixabayApiKey = '42400311-c577e995298d386a6e7116ddb';
  query = userInput.value.trim();
  const image_type = 'photo';
  const per_page = '15';
  const page = 'page++'
 
  if(!query){
    iziToast.error({
        backgroundColor: '#EF4040',
        message:
          'Please. enter a search query!',
        position: 'topRight',
      });
      hidingLoader();
    return;
    }
 try {
    const response = await axios.get(
        // `${baseUrl}${pixabayApiKey}${encodeURIComponent(query)}${image_type}${per_page}`
        `https://pixabay.com/api/?key=${pixabayApiKey}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=1`
    );

      const data = response.data;
      if (!data.hits.length) {
        iziToast.error({
          title: '',
          backgroundColor: '#EF4040',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
      });
    } else {
        const markup = data.hits
        .map(data => {
            return ` <li class="gallery-item">
      <a href="${data.webformatURL}">
        <img class="gallery-image" src="${data.webformatURL}" alt="${data.tags}">
      </a>
      <div class="image-details">
        <div class="image-text">
        <p><b class="image-text-width">Likes: </b>${data.likes}</p>
        <p><b class="image-text-width">Views: </b>${data.views}</p>
        <p><b class="image-text-width">Comments: </b>${data.comments}</p>
        <p><b class="image-text-width">Downloads: </b>${data.downloads}</p>
        
        </div>
      </div>
    </li>`;
          })
          .join('');
      gallery.insertAdjacentHTML('afterbegin', markup);
      lightbox.refresh();
    //   fetchImageForm.reset();
      }
    
    } catch(error) {
      console.log(error);
    } finally {
      hidingLoader();
    }
});

btnLoadMore.addEventListener('click', async (event) => {
      showLoader();
      event.preventDefault(); 
      page = page+1;
      
      gallery.innerHTML = '';
      const pixabayApiKey = '42400311-c577e995298d386a6e7116ddb';
      query = userInput.value.trim();
      if(!query){
        iziToast.error({
            backgroundColor: '#EF4040',
            message:
              'Please. enter a search query!',
            position: 'topRight',
          });
          hidingLoader();
        return;
        }
     try {
        const response = await axios.get(
            
            `https://pixabay.com/api/?key=${pixabayApiKey}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=15&page=2`
        );
    
          const data = response.data;
          if (!data.hits.length) {
            iziToast.error({
              title: '',
              backgroundColor: '#EF4040',
              message:
                'Sorry, there are no images matching your search query. Please try again!',
              position: 'topRight',
          });
        } else {
            const markup = data.hits
            .map(data => {
                return ` <li class="gallery-item">
          <a href="${data.webformatURL}">
            <img class="gallery-image" src="${data.webformatURL}" alt="${data.tags}">
          </a>
          <div class="image-details">
            <div class="image-text">
            <p><b class="image-text-width">Likes: </b>${data.likes}</p>
            <p><b class="image-text-width">Views: </b>${data.views}</p>
            <p><b class="image-text-width">Comments: </b>${data.comments}</p>
            <p><b class="image-text-width">Downloads: </b>${data.downloads}</p>
            
          </div>
        </li>`;
              })
              .join('');
          gallery.insertAdjacentHTML('afterbegin', markup);
          lightbox.refresh();
        //   fetchImageForm.reset();
          }
        
        } catch(error) {
          console.log(error);
        } finally {
          hidingLoader();
        }
    });
