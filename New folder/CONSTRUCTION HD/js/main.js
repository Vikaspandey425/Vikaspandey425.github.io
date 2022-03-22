$(document).ready(function () {
    var dropdown = $(".search-dropdown");
    var toogleBtn = $(".search-dropdown .dropdown-toggle");

    // Toggle search and close icon for search dropdown
    dropdown.on("show.bs.dropdown", function (e) {
        toogleBtn.toggleClass("d-none");
    });
    dropdown.on("hide.bs.dropdown", function (e) {
        toogleBtn.addClass("d-none");
        toogleBtn.first().removeClass("d-none");
    });
});
// 


/// sh_product_slider_2 TYPO3 10.* site 
$(document).ready(function(){
    $('.sh_product_slider2').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      centerMode: false,
      variableWidth: true,
      infinite: true,
      focusOnSelect: true,
      cssEase: 'linear',
      touchMove: true,
      prevArrow:'<button class="slick-prev"> < </button>',
      nextArrow:'<button class="slick-next"> > </button>',
               responsive: [                        
                   {
                     breakpoint: 600,
                       settings: {
                       centerMode: false,
                       variableWidth: true,
                       slidesToShow: 1,
                       slidesToScroll: 1,
                       autoplay: true,
                       autoplaySpeed: 2500,
                       swipeToSlide: true,
                       pauseOnHover: true, 
                       pauseOnFocus: true,
                       arrows:false,
                       touchMove: true,
                       focusOnSelect: true,
                       swipeToSlide: true
                     }
                   }
               ]
    });
      });
    
// 
