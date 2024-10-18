let firstItemInSwitch = document.querySelector('.switch-btn__content_first');
let secondItemInSwitch = document.querySelector('.switch-btn__content_second');
$('.switch-btn').click(function () {
    $(this).toggleClass('switch-on');
});