// Example Data
// This data would be taken from a database that stores all form values
// This would require the use of backend, so I have decided to hard code the form values
// Therefore the submitted form values may differ from the actual form values that you have chosen

var formData = {
    experience : '8',
    amtRight : 'just-right',
    willVisit : true,
    course : 'DIT',
    page : 'Home',
    comments : 'This website is great and informative.',
    email : 'example@gmail.com'
}

// Setting the values of the form to the values input by user
document.getElementById('experience-submitted').value = formData.experience;
document.getElementById(`${formData.amtRight}`).checked = true;
document.getElementById(`${formData.amtRight}`).style.backgroundColor = 'green';
document.getElementById('visit').checked = formData.willVisit;
document.getElementById('course').value = formData.course;
document.getElementById('page').value = formData.page;
document.getElementById('comments').value = formData.comments;
document.getElementById('email').value = formData.email;