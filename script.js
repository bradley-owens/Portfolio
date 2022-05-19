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

// smooth scrolling option with javascript

const scrollToSection = document.querySelectorAll(".smooth_scroll");
const section2 = document.querySelector(".two");
const section3 = document.querySelector(".three");
const section4 = document.querySelector(".four");
const section5 = document.querySelector(".five");
const section6 = document.querySelector(".six");

// scrollToSection.forEach((el) => {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

//Event Delegation

const scrollToLinks = document.querySelector(".links");

scrollToLinks.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("smooth_scroll")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
