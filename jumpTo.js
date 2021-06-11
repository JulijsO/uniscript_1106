$(document).ready(function () {







    $("#sc-chapter-1").on("click", function () {
        $(".main-container").animate({
            scrollTop: $(".empfang").offset().top - $(".main-container").offset().top + $(".main-container").scrollTop()
        });


    });

    $("#sc-chapter-2").on("click", function () {
        $(".main-container").animate({
            scrollTop: $(".abstract").offset().top - $(".main-container").offset().top + $(".main-container").scrollTop()
        });


    });

    $("#sc-chapter-3").on("click", function () {
        $(".main-container").animate({
            scrollTop: $(".concept").offset().top - $(".main-container").offset().top + $(".main-container").scrollTop()
        });


    });

    $("#sc-chapter-4").on("click", function () {
        $(".main-container").animate({
            scrollTop: $(".example-area").offset().top - $(".main-container").offset().top + $(".main-container").scrollTop()
        });


    });

    $("#sc-chapter-5").on("click", function () {
        $(".main-container").animate({
            scrollTop: $(".anatomy").offset().top - $(".main-container").offset().top + $(".main-container").scrollTop()
        });


    });

    $("#sc-chapter-6").on("click", function () {
        $(".main-container").animate({
            scrollTop: $(".design-area").offset().top - $(".main-container").offset().top + $(".main-container").scrollTop()
        });


    });

    $("#sc-chapter-7").on("click", function () {
        $(".main-container").animate({
            scrollTop: $(".combination-area").offset().top - $(".main-container").offset().top + $(".main-container").scrollTop()
        });


    });

    $("#sc-chapter-8").on("click", function () {
        $(".main-container").animate({
            scrollTop: $(".generator-area").offset().top - $(".main-container").offset().top + $(".main-container").scrollTop()
        });


    });

    $("#sc-chapter-9").on("click", function () {
        $(".main-container").animate({
            scrollTop: $(".zeichensatz-area").offset().top - $(".main-container").offset().top + $(".main-container").scrollTop()
        });


    });

    $("#sc-chapter-10").on("click", function () {
        $(".main-container").animate({
            scrollTop: $(".abschied-area").offset().top - $(".main-container").offset().top + $(".main-container").scrollTop()
        });


    });




});