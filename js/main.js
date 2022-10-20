function onScroll() {
    if(scrollY > 0) {
        menuNav.classList.add('scroll');
    } else {
        menuNav.classList.remove('scroll');
    }
}