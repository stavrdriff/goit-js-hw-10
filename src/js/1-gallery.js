'use strict';

import SimpleLightbox from 'simplelightbox';

const images = [
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const createCard = (preview, image, description) => {
  return `<li class="gallery-item">
  <a class="gallery-link" href="${image}" aria-label="Open in modal window ${description} image">
    <img
      class="gallery-image"
      src="${preview}"
      data-source="${image}"
      alt="${description}"
    />
  </a>
</li>`
}

const insertItems = (container, arr, item) => {
  arr.forEach(el => {
    container.insertAdjacentHTML('beforeend', item(el.preview, el.original, el.description));
  })
}

const initLightBox = () => {
  const gallery = new SimpleLightbox('.gallery a', {
    spinner: false,
    overlayOpacity: .8,
    navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.031 0.468998C11.1008 0.538667 11.1563 0.62143 11.1941 0.712548C11.2319 0.803665 11.2513 0.901347 11.2513 0.999998C11.2513 1.09865 11.2319 1.19633 11.1941 1.28745C11.1563 1.37857 11.1008 1.46133 11.031 1.531L2.5605 10L11.031 18.469C11.1718 18.6098 11.2509 18.8008 11.2509 19C11.2509 19.1992 11.1718 19.3902 11.031 19.531C10.8902 19.6718 10.6992 19.7509 10.5 19.7509C10.3008 19.7509 10.1098 19.6718 9.969 19.531L0.968997 10.531C0.899153 10.4613 0.843738 10.3786 0.805928 10.2874C0.768119 10.1963 0.748657 10.0986 0.748657 10C0.748657 9.90135 0.768119 9.80367 0.805928 9.71255C0.843738 9.62143 0.899153 9.53867 0.968997 9.469L9.969 0.468998C10.0387 0.399153 10.1214 0.343739 10.2125 0.305929C10.3037 0.26812 10.4013 0.248657 10.5 0.248657C10.5986 0.248657 10.6963 0.26812 10.7874 0.305929C10.8786 0.343739 10.9613 0.399153 11.031 0.468998Z" fill="currentColor"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none"><path d="M5.32223 0.822998L5.32223 0.822999L5.32312 0.822104C5.34634 0.798823 5.37393 0.780351 5.4043 0.767748C5.43468 0.755145 5.46724 0.748657 5.50012 0.748657C5.533 0.748657 5.56556 0.755145 5.59594 0.767748C5.62631 0.780351 5.6539 0.798823 5.67712 0.822105L5.67757 0.822551L14.6776 9.82255L14.678 9.823C14.7013 9.84622 14.7198 9.87381 14.7324 9.90418C14.745 9.93456 14.7515 9.96711 14.7515 10C14.7515 10.0329 14.745 10.0654 14.7324 10.0958C14.7198 10.1262 14.7013 10.1538 14.678 10.177L14.6776 10.1774L5.67757 19.1774C5.63051 19.2245 5.56668 19.2509 5.50012 19.2509C5.43356 19.2509 5.36973 19.2245 5.32267 19.1774C5.27561 19.1304 5.24917 19.0666 5.24917 19C5.24917 18.9334 5.27561 18.8696 5.32267 18.8226L13.7931 10.3536L14.1468 10L13.7931 9.64641L5.32264 1.17741L5.32223 1.177C5.29894 1.15377 5.28047 1.12619 5.26787 1.09581C5.25527 1.06544 5.24878 1.03288 5.24878 0.999998C5.24878 0.967112 5.25527 0.934552 5.26787 0.904181C5.28047 0.873809 5.29894 0.846221 5.32223 0.822998Z" stroke="currentColor"/></svg>'
    ],
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    closeText: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292078 0.291986C0.384969 0.19886 0.49532 0.124974 0.616811 0.0745611C0.738301 0.0241482 0.868544 -0.00180054 1.00008 -0.00180054C1.13161 -0.00180054 1.26186 0.0241482 1.38335 0.0745611C1.50484 0.124974 1.61519 0.19886 1.70808 0.291986L7.00008 5.58599L12.2921 0.291986C12.3851 0.199011 12.4954 0.125258 12.6169 0.0749397C12.7384 0.0246215 12.8686 -0.00127697 13.0001 -0.00127697C13.1316 -0.00127697 13.2618 0.0246215 13.3832 0.0749397C13.5047 0.125258 13.6151 0.199011 13.7081 0.291986C13.8011 0.384962 13.8748 0.49534 13.9251 0.616819C13.9754 0.738298 14.0013 0.868499 14.0013 0.999987C14.0013 1.13147 13.9754 1.26168 13.9251 1.38315C13.8748 1.50463 13.8011 1.61501 13.7081 1.70799L8.41408 6.99999L13.7081 12.292C13.8011 12.385 13.8748 12.4953 13.9251 12.6168C13.9754 12.7383 14.0013 12.8685 14.0013 13C14.0013 13.1315 13.9754 13.2617 13.9251 13.3832C13.8748 13.5046 13.8011 13.615 13.7081 13.708C13.6151 13.801 13.5047 13.8747 13.3832 13.925C13.2618 13.9754 13.1316 14.0012 13.0001 14.0012C12.8686 14.0012 12.7384 13.9754 12.6169 13.925C12.4954 13.8747 12.3851 13.801 12.2921 13.708L7.00008 8.41399L1.70808 13.708C1.6151 13.801 1.50472 13.8747 1.38325 13.925C1.26177 13.9754 1.13157 14.0012 1.00008 14.0012C0.86859 14.0012 0.73839 13.9754 0.616911 13.925C0.495432 13.8747 0.385054 13.801 0.292078 13.708C0.199102 13.615 0.125349 13.5046 0.0750313 13.3832C0.0247131 13.2617 -0.00118542 13.1315 -0.00118542 13C-0.00118542 12.8685 0.0247131 12.7383 0.0750313 12.6168C0.125349 12.4953 0.199102 12.385 0.292078 12.292L5.58608 6.99999L0.292078 1.70799C0.198952 1.6151 0.125066 1.50474 0.0746527 1.38325C0.0242398 1.26176 -0.00170898 1.13152 -0.00170898 0.999987C-0.00170898 0.868452 0.0242398 0.738209 0.0746527 0.616719C0.125066 0.495229 0.198952 0.384878 0.292078 0.291986Z" fill="currentColor" /></svg>',
  });
}

const initGallery = () => {
  const gallery = document.querySelector('.gallery');

  insertItems(gallery, images, createCard);
  initLightBox();
}

initGallery();