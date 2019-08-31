(function () {
  "use strict";

  var LEFT = "left";
  var RIGHT = "right";
  var currentPosition = 0;
  // Query the current DOM for the carousel view element
  var view = document.querySelector("#carousel .view");

  // Listen for circles on the carousel buttons
  function handleCarouselButtonClick(event) {
    var target = event.target;
    var direction;

    // Use the className to determine if we should go left or right
    if (target.className === 'arrow left') {
      direction = LEFT;
    } else if (target.className === 'arrow right') {
      direction = RIGHT;
    }
    if (direction === LEFT) {
      currentPosition = currentPosition - 1;
    }
    if (direction === RIGHT) {
      currentPosition = currentPosition + 1;
    }
    // Update the carousel view and arrows
    updateCarousel();
  }

  function updateCarousel() {
    var leftArrow = document.querySelector("#carousel .left");

    if (currentPosition === 0) {
      leftArrow.style.display = 'none';
    } else {
      leftArrow.style.display = 'block';
    }
    var rightArrow = document.querySelector("#carousel .right");

    if (currentPosition === 3) {
      rightArrow.style.display = 'none';
    } else {
      rightArrow.style.display = 'block';
    }

    // Position each slide in the carousel to its left
    var slide = document.querySelector("#carousel .view li");
    var slideWidth = slide.offsetWidth;
    var viewLeft = -slideWidth * currentPosition;
    view.style.left = viewLeft + "px";
  }

  var buttons = document.querySelectorAll("#carousel .arrow");
  // get all the arrow button and add click event listeners to them
  buttons.forEach(function (button) {
    button.addEventListener('click', handleCarouselButtonClick)
  });

  updateCarousel();
})();