const classesAndUrls = [
    [
        '.features-point_first',
        './assets/speedModes.png',
        './assets/batteryRecoverySystem.png',
        'feature'
    ],
    [
        '.features-point_second',
        './assets/batteryRecoverySystem.png',
        './assets/highCapacityBattery.png',
        'feature'
    ],
    [
        '.features-point_third',
        './assets/highCapacityBattery.png',
        './assets/speedModes.png',
        'feature'
    ],
    [
        '.safety-point_first',
        './assets/safety-first.png',
        './assets/safety-second.png',
        'safety'
    ],
    [
        '.safety-point_second',
        './assets/safety-second.png',
        './assets/safety-third.png',
        'safety'
    ],
    [
        '.safety-point_third',
        './assets/safety-third.png',
        './assets/safety-fourth.png',
        'safety'
    ],
    [
        '.safety-point_fourth',
        './assets/safety-fourth.png',
        './assets/safety-first.png',
        'safety'
    ]
]

$(document).ready(function () {

    let firstItemInSwitch = document.querySelector('.switch-btn__content_first');
    let secondItemInSwitch = document.querySelector('.switch-btn__content_second');
    $('.switch-btn').click(function () {
        $(this).toggleClass('switch-on');
    });

    $(`${classesAndUrls[0][0]}`).click(function () {
        smootlyChangeFeaturesCardsBG(classesAndUrls[0][1], classesAndUrls[0][2], classesAndUrls[0][3]);
    });

    $(`${classesAndUrls[1][0]}`).click(function () {
        smootlyChangeFeaturesCardsBG(classesAndUrls[1][1], classesAndUrls[1][2], classesAndUrls[0][3]);
    });

    $(`${classesAndUrls[2][0]}`).click(function () {
        smootlyChangeFeaturesCardsBG(classesAndUrls[2][1], classesAndUrls[2][2], classesAndUrls[0][3]);
    });

    $(`${classesAndUrls[3][0]}`).click(function () {
        smootlyChangeFeaturesCardsBG(classesAndUrls[3][1], classesAndUrls[3][2], classesAndUrls[3][3]);
    });

    $(`${classesAndUrls[4][0]}`).click(function () {
        smootlyChangeFeaturesCardsBG(classesAndUrls[4][1], classesAndUrls[4][2], classesAndUrls[4][3]);
    });

    $(`${classesAndUrls[5][0]}`).click(function () {
        smootlyChangeFeaturesCardsBG(classesAndUrls[5][1], classesAndUrls[5][2], classesAndUrls[5][3]);
    });

    $(`${classesAndUrls[6][0]}`).click(function () {
        smootlyChangeFeaturesCardsBG(classesAndUrls[6][1], classesAndUrls[6][2], classesAndUrls[6][3]);
    });

});

function smootlyChangeFeaturesCardsBG(imgUrlToChangeCurrent, imgUrlToChangeNext, section) {
    if (section == 'feature') {
        $('.features-image_current').css('opacity', '0');
        $('.features-image_next').css('opacity', '0');
        setTimeout(function () {
            $('.features-image_current').css("background-image", `url(${imgUrlToChangeCurrent})`);
            $('.features-image_next').css("background-image", `url(${imgUrlToChangeNext})`);
        }, 300);
        setTimeout(function () {
            $('.features-image_current').css('opacity', '1');
            $('.features-image_next').css('opacity', '1');
        }, 500);
    } else {
        $('.safety-image_current').css('opacity', '0');
        $('.safety-image_next').css('opacity', '0');
        setTimeout(function () {
            $('.safety-image_current').css("background-image", `url(${imgUrlToChangeCurrent})`);
            $('.safety-image_next').css("background-image", `url(${imgUrlToChangeNext})`);
            if(imgUrlToChangeCurrent == "./assets/safety-fourth.png") {
                $('.safety-image_next').css('background-position', 'right');
                $('.safety-image_current').css('background-position', 'center');
            } else {
                $('.safety-image_next').css('background-position', 'center');
                $('.safety-image_current').css('background-position', 'right');
            }
        }, 300);
        setTimeout(function () {
            $('.safety-image_current').css('opacity', '1');
            $('.safety-image_next').css('opacity', '1');
        }, 500);
    }
}
$(function() {
    $('.single-item').slick({
        infinite: true,
        dots: true,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        draggable: true
    });
})
