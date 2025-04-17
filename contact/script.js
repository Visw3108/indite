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

    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10,15}$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!phonePattern.test(phone)) {
      alert("Please enter a valid phone number (10 to 15 digits).");
      return;
    }

    popup.style.display = "flex";
    form.reset();
  });

  function closePopup() {
    popup.style.display = "none";
  }

  window.addEventListener("click", function (e) {
    if (e.target === popup) {
      closePopup();
    }
  });
  
  
  
  
  