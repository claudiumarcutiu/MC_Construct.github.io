/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.trim().toLowerCase();

        if (searchTerm === '') {
            clearHighlights();
            return;
        }

        const paragraphs = document.querySelectorAll('body p');
        let firstMatchedParagraph = null;

        paragraphs.forEach(function (paragraph) {
            const paragraphText = paragraph.innerText.toLowerCase();
            const matches = getMatches(paragraphText, searchTerm);

            if (matches.length > 0 && !firstMatchedParagraph) {
                firstMatchedParagraph = paragraph;
            }

            if (matches.length > 0) {
                highlightMatches(paragraph, matches);
            } else {
                clearHighlights(paragraph);
            }
        });

        if (firstMatchedParagraph) {
            centerInViewport(firstMatchedParagraph);
        }
    });

    function getMatches(text, searchTerm) {
        const regex = new RegExp(searchTerm, 'gi');
        return text.match(regex) || [];
    }

    function highlightMatches(paragraph, matches) {
        const originalText = paragraph.innerText;
        const highlightedText = originalText.replace(new RegExp(`(${matches.join('|')})`, 'gi'), match => `<span class="highlight">${match}</span>`);

        paragraph.innerHTML = highlightedText;
    }

    function clearHighlights(paragraph) {
        if (paragraph) {
            paragraph.innerHTML = paragraph.innerText;
        } else {
            const highlightedElements = document.querySelectorAll('.highlight');
            highlightedElements.forEach(function (el) {
                el.outerHTML = el.innerHTML; // Remove the <span> element but keep its content
            });
        }
    }

    function centerInViewport(element) {
        const rect = element.getBoundingClientRect();
        const scrollOffset = window.pageYOffset || document.documentElement.scrollTop;

        const centerOffset = (rect.top + rect.bottom) / 2 + scrollOffset - window.innerHeight / 2;
        window.scrollTo({ top: centerOffset, behavior: 'smooth' });
    }
});


window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });
    

});

function myFunct(){
    var element= document.body
    element.classList.toggle("dark-mode");
    var navbar = document.body.querySelector('#mainNav');
    navbar.classList.toggle("dark-mode")
 }

