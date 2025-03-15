// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // Contact form submission handler
    document.querySelector("form").addEventListener("submit", event => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert("Thank you, " + name + "! Your message has been sent successfully.");
            document.querySelector("form").reset();
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });
});
