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
 const loadingText = document.querySelector('.loading-text');

let page = 1;
let per_page = 15;
let totalHits = 0;
// Function showing the loading text
const showLoadingText = () => {
    loadingText.style.display = 'block';
  };
  
  // Function hiding the loading text
  const hideLoadingText = () => {
      loadingText.style.display = 'none';
  };

  // Function to show loadMore button
const showLoadMoreButton = () => {
    btnLoadMore.style.display = 'block';
};

// Function to hide loadMore button
const hideLoadMoreButton = () => {
    btnLoadMore.style.display = 'none';
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
    per_page = 15;
  event.preventDefault(); 
  showLoadingText();
  hideLoadMoreButton();
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
      hideLoadingText();
      hideLoadMoreButton();
    return;
  }
 try {
    const response = await axios.get(
        `https://pixabay.com/api/?key=${pixabayApiKey}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=${per_page}`
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
      hideLoadMoreButton();
      
    } else {
        showLoadingText();
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
      showLoadMoreButton();
      }
    
    } catch(error) {
      console.log(error);
    } finally {
      hideLoadingText();
    }
});

btnLoadMore.addEventListener('click', async (event) => {
      page++;
      showLoadingText();
      hideLoadMoreButton();
      event.preventDefault(); 
      
      const pixabayApiKey = '42400311-c577e995298d386a6e7116ddb';
      query = userInput.value.trim();
 
     try {
        const response = await axios.get(
            
            `https://pixabay.com/api/?key=${pixabayApiKey}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`
        );
            const data = response.data;
      
            if (data.hits.length) {
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
              gallery.insertAdjacentHTML('beforeend', markup);
          lightbox.refresh();

// We get the height of one gallery card
const cardHeight = document.querySelector('.gallery-image').getBoundingClientRect().height;

// Scroll the page to the distance of two card heights
const scrollToNextGroup = () => {
    window.scrollBy({
        top: 2 * cardHeight,
        behavior: 'smooth' 
    });
};

// Call the scrolling function
scrollToNextGroup();

          showLoadingText();
          totalHits = data.totalHits;
          if (totalHits <= per_page * page) {
            // Show a message about the end of search results
            const endMessage = document.createElement('div');
            endMessage.innerText = "We're sorry, but you've reached the end of search results.";
            gallery.appendChild(endMessage); 
            }
        };
        } catch(error) {
          console.log(error);
        } finally {
          hideLoadingText();
          if ( totalHits > per_page * page ){
            showLoadMoreButton();
            
          }
        }
    });
