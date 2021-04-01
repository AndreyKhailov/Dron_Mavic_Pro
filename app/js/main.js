$(function() {

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    $(".description__slider").slick({    //!!!!
        prevArrow: " ",                  //!!!!
        nextArrow: " ",                  //!!!!
        infinite: false,                 //!!!!
    })                                   //!!!!
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    $(".questions__article-title").on("click", function() {
        $(".questions__article").removeClass("questions__article--active")
        $(this).parent().addClass("questions__article--active")
    })

})
