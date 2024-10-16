let firstItemInSwitch = document.querySelector('.switch-btn__content_first');
let secondItemInSwitch = document.querySelector('.switch-btn__content_second');
$('.switch-btn').click(function () {
    $(this).toggleClass('switch-on');
    if ($(this).hasClass('switch-on')) {
        firstItemInSwitch.style.color = '#F1F1F1'; /*докрутить сюда таймаут какой-нибудь */
        secondItemInSwitch.style.color = '#151515';
    } else {
        firstItemInSwitch.style.color = '#151515';
        secondItemInSwitch.style.color = '#F1F1F1';
    }
});