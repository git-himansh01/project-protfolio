// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert('Form submitted! Thank you.');
// });

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Form validation
    if (!name || !email || !message) {
        alert('Please fill in all fields before submitting!');
        return;  // Stop submission if any field is empty
    }

    // You can add an AJAX request here to send the data to a server (if needed)
    // Example using Fetch API:
    /*
    fetch('/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);  // Handle server response here
    })
    .catch(error => console.error('Error:', error));
    */

    // Show success message (could be enhanced further as a modal or toast)
    const successMessage = document.createElement('div');
    successMessage.classList.add('alert', 'alert-success');
    successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
    
    // Add success message to the page (e.g., at the top of the form)
    document.getElementById('contact-form').prepend(successMessage);

    // Clear the form
    document.getElementById('contact-form').reset();

    // Optionally, hide the success message after a few seconds
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
});
