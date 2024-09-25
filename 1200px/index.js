$(document).ready(() => {
    const input = document.querySelector('#phone');
    window.intlTelInput(input, {
        containerClass: 'phone-input',
        initialCountry: 'it',
        utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@24.5.0/build/js/utils.js',
    });

    $("#term").ionRangeSlider({
        skin: 'round',
        grid: true,
        values: ['1 month', '3 month', '6 month', '9 month', '12 month'],
    });
    $("#sum").ionRangeSlider({
        skin: 'round',
        grid: true,
        grid_num: 4,
        postfix: ' €',
        min: 300,
        max: 15000,
        from: 2000,
    });

    new Glide('.glide', {
        type: 'carousel',
        focusAt: 'center',
        autoplay: 4500,
        animationDuration: 1000,
    }).mount();
});
