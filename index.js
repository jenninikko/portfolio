const backToTopButton = document.querySelector('.back-to-top');
const observerTarget = document.querySelector('#top'); // The element to observe for intersection

// as SCROLL is not good for performance, Intersection Observer API is used to detect when the user has scrolled
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) { // Show button when scrolled
            backToTopButton.classList.add("shown");
        } else {
            backToTopButton.classList.remove("shown");
        }
    })
});


observer.observe(observerTarget); // Start observing the target element
