
































/*function filterProjects(category) {
    // Hide all projects
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.style.display = 'none';
    });

    // Show projects of the selected category
    const selectedProjects = document.querySelectorAll(`.project[data-category="${category}"]`);
    selectedProjects.forEach(project => {
        project.style.display = 'block';
    });
}


//new
// Get the modal
const modal = document.getElementById('projectModal');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on a project, open the modal
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
    project.addEventListener('click', () => {
        modal.style.display = 'block';
    });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // You'd need to add code here to handle the form submission, such as sending an email or storing in a database.
    // This might involve using AJAX or other techniques.
});
*/