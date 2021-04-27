
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
      "logoImg": "img/other-img/classic_shop_logo2x.png"
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
