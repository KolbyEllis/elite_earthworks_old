// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');
    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    for (const item of dropDowns) {
        const onClick = () => {
        item.classList.toggle('cs-active')
    }
    item.addEventListener('click', onClick)
    }
                            
    <script>
// JavaScript code to handle dynamic background size on scroll
document.addEventListener('DOMContentLoaded', function() {
    var quoteSection = document.getElementById('quote-561');
    var container = document.querySelector('#quote-561 .cs-container');
    var backgroundSize = 150; // Initial background size percentage

    // Update background size on scroll
    window.addEventListener('scroll', function() {
        var scrollPercentage = (window.scrollY / window.innerHeight) * 100;
        backgroundSize = 100 + scrollPercentage; // Adjust this value based on your preference

        quoteSection.style.backgroundSize = backgroundSize + '%';
        container.style.backgroundColor = 'rgba(0, 0, 0, ' + (0.8 * (1 - scrollPercentage / 100)) + ')';
    });
});
</script>