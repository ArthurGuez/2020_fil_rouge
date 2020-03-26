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
const currentTheme = null;

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

    const everyTextHoveredColor = document.querySelectorAll('.textHoveredChange');

    // Const qui sélectionnent les boutons switch
    const toGreen = document.querySelector('.toGreen');
    const toPink = document.querySelector('.toPink');
    const toYellow = document.querySelector('.toYellow');
    const toBlue = document.querySelector('.toBlue');


    let setColor = function(color) {
        everyBackgroundColor.forEach(function (everyBackgroundColorElem) {
            everyBackgroundColorElem.style.backgroundColor = color;
        });
        everyBorderColor.forEach(function (everyBorderColorElem) {
            everyBorderColorElem.style.borderColor = color;
        });
        everyTextColor.forEach(function (everyTextColorElem) {
            everyTextColorElem.style.color = color;
        });

        document.querySelectorAll(".textHoveredChange").forEach(function(elem) {
            elem.addEventListener('mouseover', function() {
                this.style.color = color;
            });

            elem.addEventListener('mouseout', function() {
                this.style.color = 'white';
            });
        }, this);
    };

    toGreen.addEventListener('click', function() { setColor('green') });
    toPink.addEventListener('click', function() { setColor('pink') });
    toYellow.addEventListener('click', function() { setColor('yellow') });
    toBlue.addEventListener('click', function() { setColor('blue') });
};

iChangeColors();
// FIN SCRIPT BOUTONS COULEURS