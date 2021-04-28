
function numberGenerator(min, max) {

  let localMin = min;
  let localMax = max - min + 1;
  return Math.floor(Math.random() * (localMax - localMin)) + localMin;

} // END OF FUNCTION numberGenerator

// -----------------------------------------------------------------------------

function vueInit() {

  new Vue({

    el: "#vueDanny",

    data: {
      "logoImg": "img/other-img/classic_shop_logo2x.png",
      "bigPic1": "img/other-img/winter_collection_bg.jpg",
      "bigPic2": "img/other-img/spring_collection_bg.jpg",
      "bigPic3": "img/other-img/autumn_collection_bg.jpg",

      navbar: [

        {
          "name":"Home",
          "chevron": true
        },
        {
          "name":"Shop",
          "chevron": true
        },
        {
          "name":"Products",
          "chevron": true
        },
        {
          "name":"Categories",
          "chevron": true
        },
        {
          "name":"News",
          "chevron": false
        },
        {
          "name":"Elements",
          "chevron": true
        },
        {
          "name":"Shop Now",
          "chevron": false
        }

      ], // END OF navbar

      slideImg: [
        {
          "picture": "img/other-img/black_elegant_leather_jacket.jpg",
          "kind": "Black Leather Jacket",
          "gender": "Men, Jackets, Jeans",
          "discount": true,
          "price": 200
        },
        {
          "picture": "img/other-img/black_leather_suit.jpg",
          "kind": "Black Leather Suit",
          "gender": "Men, Jackets",
          "discount": false,
          "price": 176
        },
        {
          "picture": "img/other-img/blue_jacket_and_white_stripe_tee.jpg",
          "kind": "Blue Jacket & White Stripe Tee",
          "gender": "Men, Jackets, Suits",
          "discount": false,
          "price": 580
        },
        {
          "picture": "img/other-img/modern_black_leather_suit.jpg",
          "kind": "Modern Black Leather Suit",
          "gender": "Men, Jackets",
          "discount": false,
          "price": 96
        },
      ]
    }, // END OF DATA

    methods: {

    }, // END OF METHODS

    computed: {

    } // END OF COMPUTED

  }) // END OF NEW VUE

} // END OF FUNCTION vueInit


// -----------------------------------------------------------------------------
function init() {

  vueInit();

} // END FUNCTION INIT

document.addEventListener('DOMContentLoaded', init);
