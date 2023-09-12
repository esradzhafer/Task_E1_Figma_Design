$(document).ready(function () {
  //sticky class to second-nav after a delay
  setTimeout(function () {
    $("#secondNav").addClass("sticky");
  }, 1000);

  // Show the button container after a delay
  setTimeout(function () {
    $("#buttonContainer").css("display", "flex");
  }, 2000);
});

let scrollPosition = 0;
const imageContainer = document.querySelector(".image-container");

function scrollImages(direction) {
  const imageWidth = 220; // Adjust based on your image width and spacing
  scrollPosition += direction * imageWidth;
  scrollPosition = Math.max(scrollPosition, 0);
  scrollPosition = Math.min(
    scrollPosition,
    imageContainer.scrollWidth - imageContainer.clientWidth
  );
  imageContainer.scrollTo({ left: scrollPosition, behavior: "smooth" });
}

// JavaScript code to create an automatic image slider
const imageSlider = document.querySelector(".custom-image-container");
const imageItems = document.querySelectorAll(".custom-image-item");
const prevButton = document.querySelector(".custom-prev");
const nextButton = document.querySelector(".custom-next");

let currentIndex = 0;
const autoSlideDelay = 3000; 
const transparency = 0.7; 

// Функция за показване на текущия слайд и анимиране на предходния и следващия слайд
const showSlide = (index) => {
  imageItems.forEach((item, i) => {
    const distance = i - index;
    const opacity = 1 - Math.abs(distance) * transparency; 
    item.style.opacity = opacity;
    item.style.transform = `translateX(${distance * 10}%)`;
  });
};

// Функция за преминаване към следващ слайд
const nextSlide = () => {
  currentIndex = (currentIndex + 1) % imageItems.length;
  showSlide(currentIndex);
};

// Функция за преминаване към предишен слайд
const prevSlide = () => {
  currentIndex = (currentIndex - 1 + imageItems.length) % imageItems.length;
  showSlide(currentIndex);
};

// Функция за стартиране на автоматичното превключване
const startAutoSlide = () => {
  setInterval(nextSlide, autoSlideDelay);
};

// Attach click event listeners to the previous and next buttons
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

// Start auto-sliding
startAutoSlide();




let mySlideIndex = 0;
showMySlides();

function showMySlides() {
    let mySlides = document.getElementsByClassName("my-slide");
    let myDots = document.getElementsByClassName("my-dot");
    for (let i = 0; i < mySlides.length; i++) {
        mySlides[i].style.display = "none";
        myDots[i].classList.remove("my-active");
    }
    mySlideIndex++;
    if (mySlideIndex > mySlides.length) {
        mySlideIndex = 1;
    }
    mySlides[mySlideIndex - 1].style.display = "block";
    myDots[mySlideIndex - 1].classList.add("my-active");
    setTimeout(showMySlides, 2000); 
}

