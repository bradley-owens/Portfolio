//************************************************* */
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
//********************************************* */
// smooth scrolling option with javascript

const scrollToSection = document.querySelectorAll(".smooth_scroll");
const section2 = document.querySelector(".two");
const section3 = document.querySelector(".three");
const section4 = document.querySelector(".four");
const section5 = document.querySelector(".five");
const section6 = document.querySelector(".six");

scrollToSection.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});
//******************************************/
// changing opacity of links when mouse over

const nav = document.querySelector(".nav");

const hoverOver = function (e, opac) {
  if (e.target.classList.contains("link-nav")) {
    // console.log("success");
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".link-nav");

    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = opac;
      }
    });
  }
};

nav.addEventListener("mouseover", function (e) {
  hoverOver(e, 0.5);
});

nav.addEventListener("mouseout", function (e) {
  hoverOver(e, 1);
});

//************************************************ */
/// Revealing sections animation
const allSections = document.querySelectorAll(".section");

const revealSections = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

//******************************************** */
// Opening and closing Mobile Nav//

const icons = document.querySelectorAll(".icon");
const mainNav = document.querySelector(".main-nav");
const linkContainer = document.querySelector(".link-container");

icons.forEach((button) =>
  button.addEventListener("click", function () {
    if (this.id === "close") {
      mainNav.classList.remove("nav-open");
      linkContainer.style.transition = "all 0.5s";
    } else {
      mainNav.classList.add("nav-open");
      linkContainer.style.transition = "all 0.5s";
    }
  })
);
