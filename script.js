function menuShow() {
    let menuMobile = document.querySelector('.menu__mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/icons8-excluir-30.png"
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/icons8-cardápio-35.png"
    }
}