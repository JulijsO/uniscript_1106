$(document).ready(function () {
    $("body").click(function () {
        var windowWidth = $(window).width();
        console.log(windowWidth);
        var windowHeight = $(window).height();
        var elementWidth = $("#rand_pos").width();
        console.log(elementWidth);
        var elementHeight = $("#rand_pos").height();
        var actWidth = windowWidth - elementWidth;
        console.log(actWidth);
        var actHeight = windowHeight - elementHeight;
        var randPosX = Math.floor((Math.random() * actWidth));
        var randPosY = Math.floor((Math.random() * actHeight));
        // var posLog = document.getElementById('pos_log');
        // var posXY = 'x: ' + randPosX + '<br />' + 'y: ' + randPosY;

        $('#rand_pos').css('left', randPosX);
        $('#rand_pos').css('top', randPosY);

        // posLog.innerHTML = posXY



    })







});