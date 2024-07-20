document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        const scrollPos = window.scrollY;
        const blurThreshold = 100; // Adjust this value based on when you want the blur to start

        if (scrollPos > blurThreshold) {
            document.body.classList.add("scrolled");
        } else {
            document.body.classList.remove("scrolled");
        }
    });
});
