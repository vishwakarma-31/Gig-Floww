function validateForm(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const category = document.getElementById('category').value;
    const portfolio = document.getElementById('portfolio').value.trim();

    // Get error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const categoryError = document.getElementById('categoryError');
    const portfolioError = document.getElementById('portfolioError');

    // Validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const urlPattern = /^(https?:\/\/)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;

    let isValid = true;

    // Validate name
    if (name.length < 2) {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Validate email
    if (!emailPattern.test(email)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Validate category
    if (category === '') {
        categoryError.style.display = 'block';
        isValid = false;
    } else {
        categoryError.style.display = 'none';
    }

    // Validate portfolio URL
    if (!urlPattern.test(portfolio)) {
        portfolioError.style.display = 'block';
        isValid = false;
    } else {
        portfolioError.style.display = 'none';
    }

    // Validate Submit
    if (isValid) {
        window.location.href = "./thankyou.html"; 
    }

    return false; 
}
