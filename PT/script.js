// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {

    /* ---------------------------
       Button Alerts + Redirects
    ---------------------------- */
    const contactButtons = document.querySelectorAll(".btn-success, .btn-primary");

    contactButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault(); // Stop default navigation temporarily
            const url = button.href; // get the link to redirect

            if (button.classList.contains("btn-success")) {
                alert("Opening WhatsApp...");
            } else if (button.classList.contains("btn-primary")) {
                alert("Opening Instagram...");
            }

            // Redirect to the URL after alert
            window.location.href = url;
        });
    });

    /* ---------------------------
       Back-to-Top Button
    ---------------------------- */
    const backToTop = document.getElementById("back-to-top");

    if (backToTop) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) { // show after scrolling 300px
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ---------------------------
       Form Validation (optional)
       Only triggers if you add a form
    ---------------------------- */
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent page refresh

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill out all fields before submitting.");
                return;
            }

            // Simple email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            alert(`Thank you for contacting us, ${name}! We will get back to you soon.`);
            contactForm.reset();
        });
    }

});
