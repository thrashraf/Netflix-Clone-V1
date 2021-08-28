import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';

const swiperWrapper = document.querySelector('.swiper-wrapper');
const container = document.querySelector('.mySwiper');
const topContainer = document.querySelector('.top-Malaysia');
const upComingContainer = document.querySelector('.coming-Soon');
const topAll = document.querySelector('.top-Rated');



const getHttpRequest = async(url) => {

    return fetch(url).then(res => {

        return res.json();
    });
};


const getPreviews = async() => {

    const data = await getHttpRequest('https://api.themoviedb.org/3/movie/popular?api_key=0e67c7f5622f10a1f3bfdd364e01a455&language=en-US&page=1');
    

    for (const movie of data.results) {
        swiperWrapper.innerHTML += `
    <div class="swiper-slide"><img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt=""></div>
    `;

    container.append(swiperWrapper);
    }
};

const getTop = async() => {

  const data = await getHttpRequest('https://api.themoviedb.org/3/trending/all/day?api_key=0e67c7f5622f10a1f3bfdd364e01a455');
  
  const topWrapper = topContainer.querySelector('.swiper-wrapper');

  for (const movie of data.results) {
    topWrapper.innerHTML += `
  <div class="swiper-slide" id="backdrop"><img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt=""></div>
  `;

  topContainer.append(topWrapper);
  }
};

const getUpcoming = async() => {

  const data = await getHttpRequest('https://api.themoviedb.org/3/movie/upcoming?api_key=0e67c7f5622f10a1f3bfdd364e01a455&language=en-US&page=1');
  console.log(data);
  const upComingWrapper = upComingContainer.querySelector('.swiper-wrapper');

  for (const movie of data.results) {
    upComingWrapper.innerHTML += `
  <div class="swiper-slide"><img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt=""></div>
  `;

  upComingContainer.append(upComingWrapper);
  }
};

const topAllTime = async() => {

  const data = await getHttpRequest('https://api.themoviedb.org/3/movie/top_rated?api_key=0e67c7f5622f10a1f3bfdd364e01a455&language=en-US&page=1');
  console.log(data);
  const topAlltimeWrapper = topAll.querySelector('.swiper-wrapper');

  for (const movie of data.results) {
    topAlltimeWrapper.innerHTML += `
  <div class="swiper-slide"><img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt=""></div>
  `;

  topAll.append(topAlltimeWrapper);
  }
};

getPreviews();
getTop();
getUpcoming();
topAllTime();



const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    direction: "horizontal",
    
    mousewheel: {
        releaseOnEdges: true,
        loop: true,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
