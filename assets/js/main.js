/*
*   Scroll
*/
function scroll(e) {
    const anchor = $(this).attr('href').split('#')[1];
    const destination = $(`#${anchor}`).offset().top;
    const navHeight = $('#nav-wrap').outerHeight();
    const scrollVal = destination - navHeight;

    e.preventDefault();
    $('html, body').animate({
        scrollTop: `${scrollVal}px`,
    }, 500);
}

/*
*   Toggle navigation
*/
function toggleNavigation() {
    const $nav = $('#nav-wrap');
    const $closeBtn = $('.inner-btn-toggle-nav');

    if (!$($nav).hasClass('toggle-nav')) {
        $($closeBtn).addClass('spin');
        $($closeBtn).on('animationend', () => $($closeBtn).removeClass('spin'));
    }else {
        if ($($closeBtn).hasClass('spin')) $($closeBtn).removeClass('spin');
    }
    $($nav).toggleClass('toggle-nav');
}

/*
*   Toggle modal
*/
function toggleModal() {
    const $modal = $(this).closest('.project-wrap').find('.modal');
    $($modal).toggleClass('animate');
}


/*
*   DOM loaded
*/
$(document).ready(() => {
    // Scroll
    $('a[data-link=true]').each((i, el) => $(el).on('click', scroll));

    // Modal
    $('button[data-toggle=modal]').each((i, el) => $(el).on('click', toggleModal));
    
    // Navigation
    $('button[data-toggle=nav]').each((i, el) => $(el).on('click', toggleNavigation));
});
