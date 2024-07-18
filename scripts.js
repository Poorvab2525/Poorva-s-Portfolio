// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scrolling and add glow class when about section is in view
function handleScroll() {
    const aboutContent = document.querySelector('.about-content');
    
    if (isInViewport(aboutContent)) {
        aboutContent.classList.add('glow');
    } else {
        aboutContent.classList.remove('glow');
    }
}

// Event listener for scroll events
document.addEventListener('scroll', handleScroll);
