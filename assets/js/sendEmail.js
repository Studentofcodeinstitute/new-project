contactForm.name.value = "";
contactForm.emailaddress.value = "";
contactForm.projectsummary.value = "";

function sendMail(contactForm) {
    emailjs.send("service_d9rcs0c", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.projectsummary.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;  // To block from loading a new page
}


