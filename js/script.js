
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
      // FOOTER
      "avadaPic": "img/other-img/classic_shop_logo_footer.png",
      "hover1": false,
      "hover2": false,
      "hover3": false,
      "hover4": false,
      // CREDIT CARD SECTION IN FOOTER
      "creditCard": "img/other-img/payment_cards_footer.png",

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

      // (FIRST SLIDER IMG)
      slideImg: [
        {
          "picture": "img/other-img/black_elegant_leather_jacket.jpg",
          "kind": "Black Leather Jacket",
          "gender": "Men, Jackets, Jeans",
          "discount": true,
          "fullprice": 235,
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
      ],

      // (SECOND SLIDER IMG)
      smallSliderImg: [
        {
          "picture": "img/other-img/spring_printed_dress-400x520.jpg",
          "kind": "Spring Painted Dress",
          "gender": "Dress, Women",
          "discount": false,
          "price": 47
        },
        {
          "picture": "img/other-img/modern_love_tee-400x520.jpg",
          "kind": "Modern Love Tee",
          "gender": "T - Shirts, Women",
          "discount": false,
          "price": 68
        },
        {
          "picture": "img/other-img/black_leather_jacket-400x520.jpg",
          "kind": "Black Jacket",
          "gender": "Women, Jackets",
          "discount": false,
          "price": 580
        },
        {
          "picture": "img/other-img/black_elegant_leather_jacket-400x520.jpg",
          "kind": "Black Leather Jacket",
          "gender": "Men, Jackets, Jeans",
          "discount": true,
          "fullprice": 235,
          "price": 200
        },
        {
          "picture": "img/other-img/hipster_black_top-400x520.jpg",
          "kind": "Hipster Black Top",
          "gender": "T - Shirts, Women",
          "discount": false,
          "price": 57
        }
      ],

      // (THIRD SLIDER IMG)
      biggestSliderImg: [
        {
          "picture": "img/other-img/black_elegant_leather_jacket.jpg",
          "kind": "Black Leather Jacket",
          "gender": "Men, Jackets, Jeans",
          "discount": true,
          "fullprice": 235,
          "price": 200
        },
        {
          "picture": "img/other-img/hipster_black_top.jpg",
          "kind": "Hipster Black Top",
          "gender": "T - Shirts, Women",
          "discount": false,
          "price": 57
        },
        {
          "picture": "img/other-img/black_leather_suit.jpg",
          "kind": "Black Leather Suit",
          "gender": "Men, Jackets",
          "discount": false,
          "price": 176
        },
        {
          "picture": "img/other-img/spring_printed_dress.jpg",
          "kind": "Spring Painted Dress",
          "gender": "Dress, Women",
          "discount": false,
          "price": 47
        },
        {
          "picture": "img/other-img/modern_love_tee.jpg",
          "kind": "Modern Love Tee",
          "gender": "T - Shirts, Women",
          "discount": false,
          "price": 68
        }
      ],

      // BRANDS IN FOOTER
      sponsorLogos: [
        {
            "picture": "img/other-img/b_logotype_6.png"
        },
        {
            "picture": "img/other-img/b_logotype_7.png"
        },
        {
            "picture": "img/other-img/b_logotype_1.png"
        },
        {
            "picture": "img/other-img/b_logotype_2.png"
        },
        {
            "picture": "img/other-img/b_logotype_3.png"
        }
      ],

      // footer
      starSectionFooter: [
        {
            "name": "Leather Gloves",
            "stars": 5,
            "price": 45,
            "image": "img/other-img/leather_gloves-120x156.jpg"
        },
        {
            "name": "Balck Leather Jacket",
            "stars": 5,
            "originalPrice": 235,
            "price": 200,
            "image": "img/other-img/black_elegant_leather_jacket-120x156.jpg"
        },
        {
            "name": "Spring Painted Dress",
            "stars": 5,
            "price": 47,
            "image": "img/other-img/spring_printed_dress-120x156.jpg"
        }
      ],

      boxesInFooter: [
        {
            "boxName": "Black"
        },
        {
            "boxName": "boots"
        },
        {
            "boxName": "Brown"
        },
        {
            "boxName": "casual"
        },
        {
            "boxName": "D&D"
        },
        {
            "boxName": "Fabric"
        },
        {
            "boxName": "flowers"
        },
        {
            "boxName": "Grey"
        },
        {
            "boxName": "hat"
        },
        {
            "boxName": "Hipster"
        },
        {
            "boxName": "lines"
        },
        {
            "boxName": "Multi-Purpose"
        },
        {
            "boxName": "New York"
        },
        {
            "boxName": "Outdoor"
        },
        {
            "boxName": "Red"
        },
        {
            "boxName": "responsive"
        },
        {
            "boxName": "summer"
        },
        {
            "boxName": "sweater"
        },
        {
            "boxName": "Travel"
        },
        {
            "boxName": "Warm"
        },
        {
            "boxName": "White"
        },
        {
            "boxName": "winter"
        }

      ],

    }, // END OF DATA

    methods: {

      getStar: function(stars) {
        return 5;
      }, // END OF getStar FUNCTION
      
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
