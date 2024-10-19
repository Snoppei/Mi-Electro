let firstItemInSwitch = document.querySelector('.switch-btn__content_first');
let secondItemInSwitch = document.querySelector('.switch-btn__content_second');
$('.switch-btn').click(function () {
    $(this).toggleClass('switch-on');
});

$('.features-card_first').hover(function(){
    $('.features-image_current').css("background-image", "url(assets/speedModes.png)");
    $('.features-image_next').css("background-image", "url(assets/batteryRecoverySystem.png)");
});

$('.features-card_second').hover(function(){
    $('.features-image_current').css("background-image", "url(assets/batteryRecoverySystem.png)");
    $('.features-image_next').css("background-image", "url(assets/highCapacityBattery.png)");
});

$('.features-card_third').hover(function(){ // в гугле такая конструкция работает стремно, а в мозилле вообще не работает...
    $('.features-image_current').css("background-image", "url(assets/highCapacityBattery.png)");
    $('.features-image_next').css("background-image", "url(assets/speedModes.png)");
});