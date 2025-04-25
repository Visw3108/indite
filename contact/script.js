// Sticky Header Effect
function stickyHeader() {
  const header = document.getElementById("header");
  if (window.scrollY > 10) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
}
window.addEventListener("scroll", stickyHeader);

// Mobile menu toggle
const toggleBtn = document.getElementById("header-toggle");
const menu = document.getElementById("header-menu");
const overlay = document.createElement("div");
overlay.classList.add("menu-overlay");
document.body.appendChild(overlay);

function toggleMenu() {
  menu.classList.toggle("show-menu");
  toggleBtn.classList.toggle("active");
  overlay.classList.toggle("active");

  document.body.style.overflow = menu.classList.contains("show-menu") ? "hidden" : "auto";
}

overlay.addEventListener("click", () => {
  menu.classList.remove("show-menu");
  toggleBtn.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "auto";
});

toggleBtn.addEventListener("click", toggleMenu);


  
  
const form = document.getElementById("contactForm");
const popup = document.getElementById("thankYouPopup");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const fields = [
    { id: "firstName", pattern: /.+/, errorMsg: "First name is required" },
    { id: "lastName", pattern: /.+/, errorMsg: "Last name is required" },
    {
      id: "email",
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      errorMsg: "Valid email is required",
    },
    {
      id: "phone",
      pattern: /^\d{10,15}$/,
      errorMsg: "Phone number (10-15 digits) is required",
    },
    /* {
      id: "service",
      pattern: /.+/,
      errorMsg: "Please select a service",
    }, */
   /*  {
      id: "message",
      pattern: /.+/,
      errorMsg: "Message is required",
    }, */
  ];

  let valid = true;

  fields.forEach((field) => {
    const input = document.getElementById(field.id);
    const errorText = input.nextElementSibling;
    if (!field.pattern.test(input.value.trim())) {
      input.classList.add("input-error", "shake");
      errorText.style.display = "block";
      valid = false;

      setTimeout(() => input.classList.remove("shake"), 500);
    } else {
      input.classList.remove("input-error");
      errorText.style.display = "none";
    }
  });

  if (valid) {
    popup.style.display = "flex";
    form.reset();
  }
});

function closePopup() {
  popup.style.display = "none";
}

window.addEventListener("click", function (e) {
  if (e.target === popup) {
    closePopup();
  }
});
  
  
  