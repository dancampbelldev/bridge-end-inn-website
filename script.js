const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".mobile-nav-container");
const navMenu = document.querySelector(".nav-bar-container-vis");
const bars = document.querySelector(".toggle-container");
const width = window.innerWidth;

// Paragraph animation variable
const paragraphs = document.querySelectorAll('.paragraph');


// Paragraph animation

document.addEventListener('scroll', function() {
  paragraphs.forEach((paragraph) => {
    if(isInView(paragraph)) {
      paragraph.classList.add('paragraph--visible');
    }
  });
});

function isInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom > 0 && rect.top < (window.innerHeight - 150 
                || document.documentElement.clientHeight - 150)
    );
}

//Paragraph animation end

menu.addEventListener("click", function() {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
  navMenu.classList.toggle("not-vis");
  
  if (bars.classList.contains("fixed")) {
    bars.classList.remove("fixed");
  } else {
    bars.classList.add("fixed");
  }
})


const carouselButtons = document.querySelectorAll("[data-carousel-button]");

carouselButtons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  })
})


document.querySelectorAll(".photos-container img").forEach(image => {
  image.onclick = () => {
    document.querySelector(".popup-image").style.display = 'block';
    document.querySelector(".popup-image img").src = image.getAttribute('src');
  }
});

document.querySelector(".popup-image span").onclick = () => {
  document.querySelector(".popup-image").style.display = 'none';
}
