function handleMouseEnter() {
  this.classList.add('card--hovered');
  document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
  this.classList.remove('card--hovered');
  document.body.id = '';
}

function addEventListernersToCards() {
  const cardElements = document.getElementsByClassName('card');

  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  }
}

function changeSlide(element) {
  const selectedElement = element.id;
  const carousel = document.querySelector('.carousel-slider__wrapper');
  const transform = carousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYDeg = -120 * (Number(selectedElement) -1);
  const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

  carousel.style.transform = newTransform;

  const activeButton = document.querySelector('.controller__button--active');
  activeButton.classList.remove('controller__button--active');
  element.classList.add('controller__button--active');
}

document.addEventListener('DOMContentLoaded', addEventListernersToCards, false);