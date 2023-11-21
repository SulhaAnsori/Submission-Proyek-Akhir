/* eslint-disable import/prefer-default-export */
import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
    <article class="post-item">
        <img class="post-item__thumbnail" src="${
  CONFIG.BASE_IMAGE_URL + restaurant.pictureId
}" alt="${restaurant.name}" crossorigin="anonymous"/>
        <div class="post-item__content">
            <h1 class="name_restaurant"><a href="/#/detail/${restaurant.id}">${
  restaurant.name
}</a></h1>
            <h2 class="rating_restaurant">⭐${restaurant.rating}</h2>
            <h2 class="city_restaurant">🏠${restaurant.city}</h2>
            <p class="post-item__description">${restaurant.description}</p>
        </div>
    </article>`;

const createReviewItemTemplate = (review) => `
<div class="review__item">
<h4>${review.name}</h4>
<h4>${review.date}</h4>
<h4>${review.review}</h4>
</div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<article class="restaurant__description">
  <h1>${restaurant.name}</h1>
  <div class="description__overview"> 
  <img class="restaurant__poster" src="${
  CONFIG.BASE_IMAGE_URL + restaurant.pictureId
}" alt="${restaurant.name}" crossorigin="anonymous"/>
      <h3>Description</h3>
        <p>${restaurant.description}</p>
  </div>
</article>
  <div class="restaurant__info">
  <h2>Information</h2>
    <h3>Name Restaurant</h3>
    <p>${restaurant.name}</p>
    <h3>Addres</h3>
    <p>${restaurant.address}</p>
    <h3>City</h3>
    <p>🏠${restaurant.city}</p>
    <h3>Menu Makanan</h3>
    <p>${restaurant.menus.foods.map((v) => v.name).join(', ')}</p>
    <h3>Menu Minuman</h3>
    <p>${restaurant.menus.drinks.map((v) => v.name).join(', ')}</p>
    <h3>Rating</h3>
    <p>⭐${restaurant.rating}</p>
  </div>
  <div class="restaurant__reviews">
  <h3>Customer Reviews</h3>
    <p>${restaurant.customerReviews
    .map((v) => createReviewItemTemplate(v))
    .join('')}</p>
  </div>

`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
