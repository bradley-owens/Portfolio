// Send Email function

function sendEmail() {
  let tempParameters = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    from_phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_t0fv5m8", "template_2byut5t", tempParameters)
    .then(function (response) {
      console.log("sucess", response.status);
      alert("Your message has been sent! I'll be in touch as soon as I can! ");
    });
}
