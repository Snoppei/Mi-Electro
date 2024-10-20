let firstItemInSwitch = document.querySelector('.switch-btn__content_first');
let secondItemInSwitch = document.querySelector('.switch-btn__content_second');
$('.switch-btn').click(function () {
    $(this).toggleClass('switch-on');
});

const imageUrls = [
    './assets/speedModes.png',
    './assets/batteryRecoverySystem.png',
    './assets/highCapacityBattery.png'
];

$('.features-card_first').click(function () {
    smootlyChangeFeaturesCardsBG(imageUrls[0], imageUrls[1]);
});

$('.features-card_second').click(function () {
    smootlyChangeFeaturesCardsBG(imageUrls[1], imageUrls[2]);
});

$('.features-card_third').click(function () {
    smootlyChangeFeaturesCardsBG(imageUrls[2], imageUrls[0]);
});

function smootlyChangeFeaturesCardsBG(imgUrlToChangeCurrent, imgUrlToChangeNext) {
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
}