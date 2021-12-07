function Menu(config){
    this.nav = (typeof config.container === 'string') ? 
    document.querySelector(config.container) : config.container

    this.btn = (typeof config.toggleBtn === 'string') ? 
    document.querySelector(config.toggleBtn) : config.toggleBtn

    this.MaxWidth = config.widthEnabled || false

    let _opened = false
    const _this = this/*Dependendo do contexto o this pode mudar, por isso fixamos aqui */

    this.btn.removeAttribute('style')

    if(this.MaxWidth){//Consertando bug do menu desaperencendo quando a tela é redimensionada
        window.addEventListener("resize", e =>{
            if(window.innerWidth > _this.MaxWidth){
                _this.nav.removeAttribute("style")
                _opened = true
            }else if(!this.nav.getAttribute('style')){
                closeMenu()
            }
        })
        if(window.innerWidth <= _this.MaxWidth){
            closeMenu()
        }
    }

    this.btn.addEventListener('click',  openOrClose)

    function openOrClose(){
        if(!_opened){
            openMenu()
        }else{
            closeMenu()
        }
    }

    function openMenu(){        
        const _top = _this.nav.getBoundingClientRect().top + 'px'
        const _style = {
            maxHeight: 'calc(100vh - '+ _top+')',
            overflow: 'hidden'
        }
        applyStyleToNav(_style)
        _opened = true
    }

    function closeMenu(){        
        const _style = {
            maxHeight: '0px',
            overflow: 'hidden'
        }
        applyStyleToNav(_style)

        _opened = false 
    }

    function applyStyleToNav(_style){
        Object.keys(_style).forEach( stl =>{
            _this.nav.style[stl] = _style[stl]        
        })
    }

}   