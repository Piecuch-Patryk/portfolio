/*
*   Scroll
*/
function scroll(e) {
    const anchor = $(this).attr('href').split('#')[1];
    const destination = $(`#${anchor}`).offset().top;
    const navHeight = $('.nav-bar').outerHeight();
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
    const $nav = $('div[data-nav=drop]');
    const $closeBtn = $('button[data-nav=close]');

    if (!$($nav).hasClass('show')) {
        $($closeBtn).addClass('spin');
        $($closeBtn).on('animationend', () => $($closeBtn).removeClass('spin'));
    }else {
        if ($($closeBtn).hasClass('spin')) $($closeBtn).removeClass('spin');
    }
    $($nav).toggleClass('show');
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
    $('button[data-nav=toggle]').each((i, el) => $(el).on('click', toggleNavigation));
});
