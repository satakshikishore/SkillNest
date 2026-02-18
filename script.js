// About and Signup button navigation
const aboutButton = document.querySelector('button[onclick="window.location.href=\'about.html\'"]');
const signupButton = document.querySelector('button[onclick="window.location.href=\'signup.html\'"]');

if (aboutButton) {
    aboutButton.addEventListener('click', () => {
        window.location.href = 'about.html';
    });
}

if (signupButton) {
    signupButton.addEventListener('click', () => {
        window.location.href = 'signup.html';
    });
}

// Skill Cards Hover Effect
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Skill Search Functionality
const searchInput = document.getElementById('search-input');

if (searchInput) {
    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        skillCards.forEach(card => {
            const skillName = card.querySelector('h3') ? card.querySelector('h3').textContent.toLowerCase() : '';
            card.style.display = skillName.includes(query) ? 'block' : 'none';
        });
    });
}

// Form Handling (Feedback or Signup)
// Separate forms based on their IDs or structure

const feedbackForm = document.getElementById('feedback-form');
const signupForm = document.getElementById('signup-form');

// Feedback form validation
if (feedbackForm) {
    feedbackForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = this.querySelector('input[name="name"]').value.trim();
        const email = this.querySelector('input[name="email"]').value.trim();
        const feedback = this.querySelector('textarea[name="feedback"]').value.trim();

        if (name && email && feedback) {
            alert(`Thank you for your feedback, ${name}!`);
            this.reset();
        } else {
            alert('Please fill all the fields before submitting.');
        }
    });
}

// Signup form validation
if (signupForm) {
    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirm-password').value.trim();

        if (!username || !email || !password || !confirmPassword) {
            alert('Please fill in all fields.');
            return;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        alert('Signup successful!');
        this.reset();
    });
}

// Request Skill and Upload Skill Button Alerts
const allButtons = document.querySelectorAll('button');

allButtons.forEach(button => {
    if (button.textContent.trim() === "Request Skill") {
        button.addEventListener('click', (e) => {
            const skillCard = e.target.closest('.skill-card');  // Get the closest parent .skill-card
            const requestForm = skillCard.querySelector('.request-skill-form');  // Get the request form
            const uploadForm = skillCard.querySelector('.upload-skill-form');  // Get the upload form

            // Toggle the visibility of the request form
            if (requestForm.style.display === 'none' || requestForm.style.display === '') {
                requestForm.style.display = 'block'; // Show the request form
                uploadForm.style.display = 'none';   // Hide the upload form
            } else {
                requestForm.style.display = 'none'; // Hide the request form
            }
        });
    }

    if (button.textContent.trim() === "Upload Skill") {
        button.addEventListener('click', (e) => {
            const skillCard = e.target.closest('.skill-card');  // Get the closest parent .skill-card
            const requestForm = skillCard.querySelector('.request-skill-form');  // Get the request form
            const uploadForm = skillCard.querySelector('.upload-skill-form');  // Get the upload form

            // Toggle the visibility of the upload form
            if (uploadForm.style.display === 'none' || uploadForm.style.display === '') {
                uploadForm.style.display = 'block'; // Show the upload form
                requestForm.style.display = 'none'; // Hide the request form
            } else {
                uploadForm.style.display = 'none'; // Hide the upload form
            }
        });
    }
});
