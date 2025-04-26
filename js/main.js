

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







/* function startInfiniteScroll(containerId, direction = 'left', speed = 1) {
  const container = document.getElementById(containerId);
  const clone = container.cloneNode(true);
  container.parentElement.appendChild(clone);

  let x = 0;
  function animate() {
    x += (direction === 'left' ? -speed : speed);
    container.style.transform = `translateX(${x}px)`;
    clone.style.transform = `translateX(${x + container.offsetWidth}px)`;

    if (Math.abs(x) >= container.offsetWidth) {
      x = 0;
    }

    requestAnimationFrame(animate);
  }

  animate();
}

document.addEventListener('DOMContentLoaded', () => {
  startInfiniteScroll('carousel-row-1', 'left', 0.5);
  startInfiniteScroll('carousel-row-2', 'right', 0.5);
}); */




let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial__item');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  testimonials.forEach((item, i) => {
    item.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  currentIndex = index;
}

function moveSlide(direction) {
  let newIndex = currentIndex + direction;
  if (newIndex < 0) newIndex = testimonials.length - 1;
  if (newIndex >= testimonials.length) newIndex = 0;
  showSlide(newIndex);
}

function currentSlide(index) {
  showSlide(index);
}

// Auto move slide every 5 seconds
setInterval(() => {
  moveSlide(1);
}, 5000);

 

