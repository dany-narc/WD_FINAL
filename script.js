
function redirectTo(url) {
    window.location.href = url;
}

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const responseDiv = document.getElementById('response');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        responseDiv.innerHTML = '';

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        setTimeout(function() {
            const responseMessage = `Thank you, ${name}! Your message has been received.`;
            responseDiv.innerHTML = `<p>${responseMessage}</p>`;

            contactForm.reset();
        }, 1000); 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = location.href;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
    });
});