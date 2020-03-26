// SCRIPT ANIMATION DU TEXTE <h1> 
var typed = new Typed('#typed', {
    strings: ["le contenu.", "l'essentiel.", "le style bro'.", "git push"],
    typeSpeed : 50,
    backSpeed : 50,
    loop: true,
    showCursor: true
})
// FIN SCRIPT ANIMATION DU TEXTE <h1> 


// SCRIPT TOGGLE 
const checkbox = document.querySelector('input[name=theme]');
const currentTheme = localStorage.getItem('data-theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'light') {
        checkbox.checked = true;
    }
}
        checkbox.addEventListener('change', function() {
            if(this.checked) {
                trans()
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('data-theme', 'light');
            } else {
                trans()
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('data-theme', 'dark');
            }
        })

        let trans = () => {
            document.documentElement.classList.add('transition');
            window.setTimeout(() => {
                document.documentElement.classList.remove('transition')
            }, 1000)
        }
// FIN SCRIPT TOGGLE 


// SCRIPT BURGER 
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Apparition menu 
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // Apparition liens
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
            
        });

        // Animation burger menu
        burger.classList.toggle('burgerShut');
    });
}

navSlide();
// FIN SCRIPT BURGER 

// SCRIPT BOUTONS COULEURS

const iChangeColors = () => {
    // Const qui sélectionne tout les bg-color
    const everyBackgroundColor = document.querySelectorAll('.backgroundChange');

    const everyBorderColor = document.querySelectorAll('.borderChange');

    const everyTextColor = document.querySelectorAll('.textChange');

    // Const qui sélectionnent les boutons switch
    const toGreen = document.querySelector('.toGreen');
    const toPink = document.querySelector('.toPink');
    const toYellow = document.querySelector('.toYellow');
    const toBlue = document.querySelector('.toBlue');

    toGreen.addEventListener('click', () => {
        everyBackgroundColor.forEach(function (everyBackgroundColorElem) {
            everyBackgroundColorElem.style.backgroundColor = '#00FF0C';
        });
        everyBorderColor.forEach(function (everyBorderColorElem) {
            everyBorderColorElem.style.borderColor = '#00FF0C';
        });
        everyTextColor.forEach(function (everyTextColorElem) {
            everyTextColorElem.style.color = '#00FF0C';
        });
    });

    toPink.addEventListener('click', () => {
        everyBackgroundColor.forEach(function (everyBackgroundColorElem) {
            everyBackgroundColorElem.style.backgroundColor = '#FB28FF';
        });
        everyBorderColor.forEach(function (everyBorderColorElem) {
            everyBorderColorElem.style.borderColor = '#FB28FF';
        });
        everyTextColor.forEach(function (everyTextColorElem) {
            everyTextColorElem.style.color = '#FB28FF';
        });
    });

    toYellow.addEventListener('click', () => {
        everyBackgroundColor.forEach(function (everyBackgroundColorElem) {
            everyBackgroundColorElem.style.backgroundColor = '#FFFB28';
        });
        everyBorderColor.forEach(function (everyBorderColorElem) {
            everyBorderColorElem.style.borderColor = '#FFFB28';
        });
        everyTextColor.forEach(function (everyTextColorElem) {
            everyTextColorElem.style.color = '#FFFB28';
        });
    });

    toBlue.addEventListener('click', () => {
        everyBackgroundColor.forEach(function (everyBackgroundColorElem) {
            everyBackgroundColorElem.style.backgroundColor = '#28FFFB';
        });
        everyBorderColor.forEach(function (everyBorderColorElem) {
            everyBorderColorElem.style.borderColor = '#28FFFB';
        });
        everyTextColor.forEach(function (everyTextColorElem) {
            everyTextColorElem.style.color = '#28FFFB';
        });
    });
};

iChangeColors();
// FIN SCRIPT BOUTONS COULEURS