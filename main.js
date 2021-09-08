$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 430,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});



// let member = document.querySelector(".register");

// member.addEventListener("click", () => {
//     confirm("Are you under 18 yrs. OLD");
// })
