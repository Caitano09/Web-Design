(function(){
    const $body = document.querySelector('body')
    $body.classList.remove('no-js')
    $body.classList.add('js')

    const menu = new Menu({
        container: '.header-nav',
        toggleBtn: '.header-btnMenu',
        widthEnabled: 1024 /*Tamanho da media query no css: "@media screen and (min-width: 1024px)" */
    })

    const carouselImg = new Carousel({
        container: '.laptop-slider .slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })

    const carouselQuotes = new Carousel({
        container: '.quote-slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })

})()