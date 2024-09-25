$(document).ready(() => {
    const iti = window.intlTelInput($('#phone')[0], {
        containerClass: 'phone-input',
        initialCountry: 'it',
        utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@24.5.0/build/js/utils.js',
    });

    $('#term').ionRangeSlider({
        skin: 'round',
        grid: true,
        values: ['1 month', '3 month', '6 month', '9 month', '12 month'],
    });
    $('#sum').ionRangeSlider({
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

    $('#auth').on('submit', function (e) {
        e.preventDefault();

        const isPhoneValid = iti.isValidNumber();
        
        if (!isPhoneValid) {
            $('.phone-input').addClass('invalid');
            setTimeout(() => $('.phone-input').removeClass('invalid'), 250);
        } else {
            this.submit();
        }
    });
});
