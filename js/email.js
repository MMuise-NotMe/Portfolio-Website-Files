function createEmail() {
    var emailBody = "";

    // Get the values from the input fields
    var name = document.getElementById('name-input').value;
    var email = document.getElementById('email-input').value;
    var subject = document.getElementById('subject-input').value;
    var message = document.getElementById('message-input').value;

    // make the emailBody
    emailBody = 
    `
    Message: ${message}
    `;

    // mailto
    window.open(
        `mailto:kingwye.business@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`,
        '_blank'
      );
}

function addEmailFunction() {
    const emailBtn = document.querySelectorAll(".email-btn-con");

    emailBtn[0].addEventListener("click", function () {
        createEmail();
    });
}

//addEmailFunction();