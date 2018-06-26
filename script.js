const slides = document.querySelectorAll('.slides .slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = 'slide';
  dots[currentSlide].className = 'dot';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'slide showing';
  dots[currentSlide].className = 'dot active';
}

const pauseButton = document.querySelector('.play');
let playing = true;

function pauseSlideshow() {
  pauseButton.innerHTML = 'Play'; 
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow() {
  pauseButton.innerHTML = 'Pause'; 
  playing = true;
  slideInterval = setInterval(nextSlide, 2000);
}

pauseButton.onclick = function () {
  if (playing) { pauseSlideshow(); }
  else { playSlideshow(); }
};

const next = document.querySelector('.next');
const previous = document.querySelector('.prev');

next.onclick = function () {
  pauseSlideshow();
  nextSlide();
};
previous.onclick = function () {
  pauseSlideshow();
  previousSlide();
};
