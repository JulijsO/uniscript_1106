var mainHeight = $(".main").height();
var mainContainerHeight = $(".main-container").height();
var scrollHeight = mainHeight - mainContainerHeight;
var onePercent = scrollHeight / 100;

var mainScroll = $(".main-container").scrollTop();
var scrollPercentage = mainScroll / onePercent;

var scrollIndex = 0;
var newScrollIndex = 0;

var scrollBarHeight = $(".chapter-container").height();
var dotHeight = $(".scroll-dot").height();
var actBarHeight = scrollBarHeight - dotHeight;
var scrollBarOnePercent = actBarHeight / 100;

// console.log(scrollPercentage);
// console.log(scrollHeight);

// console.log(scrollBarHeight);
// console.log(dotHeight);
// console.log(actBarHeight);

// console.log(mainHeight);




$(window).on("resize load", function () {
    mainHeight = $(".main").height();
    mainContainerHeight = $(".main-container").height();
    scrollHeight = mainHeight - mainContainerHeight;
    onePercent = scrollHeight / 100;
    // console.log(mainHeight);
    // console.log(mainContainerHeight);
    // console.log(onePercent);

    scrollBarHeight = $(".chapter-container").height();
    dotHeight = $(".scroll-dot").height();
    actBarHeight = scrollBarHeight - dotHeight;
    scrollBarOnePercent = actBarHeight / 100;

})


$(".main-container").on("scroll", function () {
    mainScroll = $(".main-container").scrollTop();
    scrollPercentage = mainScroll / onePercent;
    // console.log(scrollPercentage);

    var pointPosition = scrollPercentage * scrollBarOnePercent;
    // console.log(pointPosition);
    $(".scroll-dot").css("margin-top", pointPosition);

    if (scrollPercentage >= 0 && scrollPercentage <= 10) {
        newScrollIndex = 0;
        if (scrollIndex !== newScrollIndex) {
            scrollIndex = 0;
            $(".statement-container").empty();
            $(".statement-container").html(" <span class='statement'>Hast du schonmal an der Bedeutungeines Buchstabens gezweifelt?</span>");

        }
    }

    if (scrollPercentage >= 10 && scrollPercentage <= 20) {
        newScrollIndex = 1;
        if (scrollIndex !== newScrollIndex) {
            scrollIndex = 1;
            // console.log("add");
            $(".statement-container").empty();
            $(".statement-container").html(" <span class='statement_2'>Verstehst du wie Schrift funktioniert?</span>");
        }

    }

    if (scrollPercentage >= 20 && scrollPercentage <= 30) {
        newScrollIndex = 2;
        if (scrollIndex !== newScrollIndex) {
            scrollIndex = 2;
            // console.log("add");
            $(".statement-container").empty();
            $(".statement-container").html(" <span class='statement_3'>Das ist Nonsens.</span>");

        }

    }

    if (scrollPercentage >= 30 && scrollPercentage <= 40) {
        newScrollIndex = 3;
        if (scrollIndex !== newScrollIndex) {
            scrollIndex = scrollIndex++;
            // console.log("add");
        }

    }



    // console.log(newScrollIndex);





})

var scrollBarHeight = $(".chapter-container").height();
var scrollBarOnePercent = scrollBarHeight / 100;


$(window).on("resize", function () {
    var scrollBarHeight = $(".chapter-container").height();
    var scrollBarOnePercent = scrollBarHeight / 100;
})



$(".main-container").on("scroll", function () {
    var pointPosition = scrollPercentage * scrollBarOnePercent;
    // console.log(scrollPercentage);
});