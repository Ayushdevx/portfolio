const jobTitleElement = document.querySelector('#job-title');
const jobTitles = [
    'Full Stack Developer', 'Web Developer', 'Software Engineer', 
    'Problem Solver', 'Computer Science Student', 'Designer', 
    'App Developer', 'Artificial Intelligence', 'Machine Learning', 
    'Data Scientist', 'Cyber Security', 'Ethical Hacker', 
    'Blockchain Developer', 'Cloud Computing', 'DevOps Engineer', 
    'Game Developer', 'Mobile App Developer', 'Frontend Developer', 
    'Backend Developer', 'Deep Learning', 'Full Stack Developer', 
    'Web Developer', 'UI/UX', 'Video Editor'
];
let currentJobTitle = '';
let index = 0;
let isDeleting = false;

const typeWriter = () => {
    const fullText = jobTitles[index];
    
    if (isDeleting) {
        currentJobTitle = fullText.substring(0, currentJobTitle.length - 1);
    } else {
        currentJobTitle = fullText.substring(0, currentJobTitle.length + 1);
    }

    jobTitleElement.textContent = currentJobTitle;

    let delay = isDeleting ? 50 : 100;

    if (!isDeleting && currentJobTitle === fullText) {
        delay = 2000; // Pause before starting to delete
        isDeleting = true;
    } else if (isDeleting && currentJobTitle === '') {
        isDeleting = false;
        index = (index + 1) % jobTitles.length;
        delay = 500; // Pause before starting to type next job title
    }

    setTimeout(typeWriter, delay);
};

document.addEventListener('DOMContentLoaded', typeWriter);

document.addEventListener('DOMContentLoaded', function() {
    const aboutHeader = document.querySelector('.about-header');
    const aboutContent = document.querySelector('.about-content');

    aboutHeader.addEventListener('click', function() {
        aboutContent.classList.toggle('hidden');
        aboutHeader.classList.toggle('active');
    });
});

document.querySelector('#contact-form').addEventListener('submit', function(e) {
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        e.preventDefault();
    }
});
