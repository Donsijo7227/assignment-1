document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        form.querySelectorAll('input, textarea').forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = 'red';
            } else {
                field.style.borderColor = '#ccc';
            }
        });
        if (isValid) {
            alert('Form submitted successfully!');
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});