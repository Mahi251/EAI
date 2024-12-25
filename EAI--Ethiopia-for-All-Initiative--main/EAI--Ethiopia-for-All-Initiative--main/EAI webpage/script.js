





///////First page slideshow/////////////////////


  let slideIndex = 0;
  let slides = document.getElementsByClassName("slides");
  let timeout;

  showSlides();

  // Show the first slide and start automatic slideshow
  function showSlides() {
      for (let i = 0; i < slides.length; i++) {
          slides[i].classList.remove('slide-in', 'slide-out', 'slide-in-left', 'slide-out-right');
          slides[i].style.display = "none"; // Hide all slides
      }

      slideIndex++;
      if (slideIndex > slides.length) {
          slideIndex = 1; // Reset to the first slide
      }

      // Slide out the previous image
      let prevIndex = slideIndex === 1 ? slides.length - 1 : slideIndex - 2;
      slides[prevIndex].style.display = "block"; // Show the previous slide
      slides[prevIndex].classList.add('slide-out'); // Add slide-out animation to the previous slide

      // Show the current slide
      slides[slideIndex - 1].style.display = "block"; // Show the current slide
      slides[slideIndex - 1].classList.add('slide-in'); // Add slide-in animation

      timeout = setTimeout(showSlides, 4000); // Change image every 4 seconds
  }

  // Manually change slides
  function plusSlides(n) {
      clearTimeout(timeout); // Stop the automatic slideshow temporarily
      if (n === 1) {
          showSpecificSlide(slideIndex += n, 'right');
      } else {
          showSpecificSlide(slideIndex += n, 'left');
      }
  }

  // Show a specific slide
  function showSpecificSlide(n, direction) {
      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length }

      for (let i = 0; i < slides.length; i++) {
          slides[i].classList.remove('slide-in', 'slide-out', 'slide-in-left', 'slide-out-right');
          slides[i].style.display = "none"; // Hide all slides
      }

      // Slide out the current image
      if (direction === 'left') {
          let prevIndex = slideIndex === 1 ? slides.length - 1 : slideIndex - 2;
          slides[prevIndex].style.display = "block"; // Show the previous slide
          slides[prevIndex].classList.add('slide-out-right'); // Add slide-out animation to the previous slide

          // Show the current slide
          slides[slideIndex - 1].style.display = "block"; // Show the current slide
          slides[slideIndex - 1].classList.add('slide-in-left'); // Add slide-in animation from the left
      } else {
          let prevIndex = slideIndex === 1 ? slides.length - 1 : slideIndex - 2;
          slides[prevIndex].style.display = "block"; // Show the previous slide
          slides[prevIndex].classList.add('slide-out'); // Add slide-out animation to the previous slide

          // Show the current slide
          slides[slideIndex - 1].style.display = "block"; // Show the current slide
          slides[slideIndex - 1].classList.add('slide-in'); // Add slide-in animation from the right
      }

      timeout = setTimeout(showSlides, 4000); // Restart automatic slideshow after manual change
  }

  ////////////////////////////////////////////////////////////////






  let items = document.querySelectorAll('.slider .item');
  let next = document.getElementById('next');
  let prev = document.getElementById('prev');
  
  let active = 3;
  function loadShow(){
      let stt = 0;
      items[active].style.transform = `none`;
      items[active].style.zIndex = 1;
      items[active].style.filter = 'none';
      items[active].style.opacity = 1;
      for(var i = active + 1; i < items.length; i++){
          stt++;
          items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
          items[i].style.zIndex = -stt;
          items[i].style.filter = 'blur(5px)';
          items[i].style.opacity = stt > 2 ? 0 : 0.6;
      }
      stt = 0;
      for(var i = active - 1; i >= 0; i--){
          stt++;
          items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
          items[i].style.zIndex = -stt;
          items[i].style.filter = 'blur(5px)';
          items[i].style.opacity = stt > 2 ? 0 : 0.6;
      }
   }
  loadShow();
  next.onclick = function(){
      active = active + 1 < items.length ? active + 1 : active;
      loadShow();
  }
  prev.onclick = function(){
      active = active - 1 >= 0 ? active - 1 : active;
      loadShow();
  }
////////////////////////////////////////////




document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropdownBtn = document.querySelector('.menu-button'); // Updated selector to match your HTML
    const body = document.body;

    // Toggle dropdown and scroll disabling
    dropdownBtn.addEventListener('click', () => {
        dropdown.classList.toggle('active');
        if (dropdown.classList.contains('active')) {
            body.style.overflow = 'hidden'; // Disable scroll
        } else {
            body.style.overflow = ''; // Enable scroll
        }
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target) && !dropdownBtn.contains(event.target)) {
            dropdown.classList.remove('active');
            body.style.overflow = ''; // Enable scroll
        }
    });
});

