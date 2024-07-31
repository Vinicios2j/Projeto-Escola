//Login

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const pesquisa = document.getElementById('pesquisa');
    
    // Outra maneira de desativar o autocomplete via JavaScript
    pesquisa.setAttribute('autocomplete', 'off');


    const secBottomHeader = document.getElementById('secBottomHeader');
    const headerOffsetTop = secBottomHeader.offsetTop;

    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= headerOffsetTop) {
            secBottomHeader.classList.add('fixed');
            this.document.getElementById('busca').style.top = '10px'
            this.document.getElementById('menuOpen').style.top = '50px';
            this.document.getElementById('menuNav').style.height = '50vh';
            this.document.querySelector('.menu-container').style.top = '15px'
        } else {
            secBottomHeader.classList.remove('fixed');
            this.document.getElementById('busca').style.top = '50px'
            this.document.getElementById('menuNav').style.height = '40vh';
            this.document.getElementById('menuOpen').style.top = '90px';
            this.document.querySelector('.menu-container').style.top = '55px'
        }
    });
});

const buttonOpenPageLogin = document.getElementById("buttonOpenPageLogin");
buttonOpenPageLogin.addEventListener('click', () => {
    const abaLogin = document.getElementById('login');
    const abaPrincipal = document.getElementById('principal');
    abaLogin.style.display = 'flex';
    abaPrincipal.style.display = 'none';

    const buttonVoltar = document.getElementById('logoJornal');
    buttonVoltar.addEventListener('click', () => {
        abaLogin.style.display = 'none';
        abaPrincipal.style.display = 'flex';
    })
})



let buttonOpenMenu = document.getElementById('openMenu');

buttonOpenMenu.addEventListener("click", toggleMenu);

function toggleMenu() {
    let menu = document.getElementById('menuOpen');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}