// get refernce to the form and display
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var Education = document.getElementById('Education').value;
    var Skills = document.getElementById('Skills').value;
    var Experience = document.getElementById('Experience').value;
    // Generate the resume content dynamically
    var resumeHTML = "<h2><b>Resume</b></h2> \n<h3>Personal Information</h3> <p><b>name:</b>".concat(name, "</p> <p><b>email:</b>").concat(email, "</p> <p><b>phone:</b>").concat(phone, "</p> <h3><b>Education</b></h3> <p>").concat(Education, "</p><h3> <b>Experience</b></h3> <p>").concat(Experience, "</p> <h3><b>Skills</b></h3> <p>").concat(Skills, "</p>");
    // display the resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume display element is missing');
    }
});
