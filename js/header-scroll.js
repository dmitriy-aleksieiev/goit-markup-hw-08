window.onscroll = () => changeHeaderBackground();

function changeHeaderBackground() {
    const header = document.querySelector('[data-header]');
    const headerOffsetTrigger = header.offsetTop;

    const arrow = document.querySelector('[data-arrow]');
    const arrowOffsetTrigger = arrow.offsetTop;

    const pageOffset = window.pageYOffset;

    if (pageOffset > headerOffsetTrigger) {
        header.classList.add('no-transparency');
        arrow.classList.add('no-transparency');
    } else {
        header.classList.remove('no-transparency');
        arrow.classList.remove('no-transparency');
    }
}