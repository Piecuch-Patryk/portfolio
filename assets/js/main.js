/*
*   Scroll
*/
function scroll(e) {
    const anchor = $(this).attr('href').split('#')[1];
    const destination = $(`#${anchor}`).offset().top;
    const $isThisBtn = $(this).attr('data-link-btn');
    let scrollVal;

    if (anchor === 'header') scrollVal = 0;
    else scrollVal = destination;

    if (!$isThisBtn) toggleNavigation();
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
    const $closeBtn = $('button[data-btn=close]');

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
    const $modal = $(this).attr('data-modal-id');
    $(`#${$modal}`).toggleClass('show');
}


/*
*   DOM loaded
*/
$(document).ready(() => {
    // Scroll
    $('[data-link=true]').each((i, el) => $(el).on('click', scroll));

    // Modal
    $('button[data-modal=toggle]').each((i, el) => $(el).on('click', toggleModal));
    
    // Navigation
    $('button[data-nav=toggle]').each((i, el) => $(el).on('click', toggleNavigation));
});
