console.log('Sample JavaScript #5 HW #17');

let indicator = null;

function createCarousel(slidesCount = 5) {
  // ваш код здесь
  createContainer();
  container = document.querySelector('#carousel');
  createSlides(slidesCount);
  createIndicators(slidesCount);
  createControls();
  createStyle();
  listeners();
}
function createContainer() {
  element = document.createElement('div');
  element.setAttribute('id', 'carousel');
  element.setAttribute('class', 'carousel');
  document.querySelector('body').appendChild(element);
  container = document.querySelector('#carousel');
}
function createSlides(n) {
  slidesContainer = document.createElement('ul');
  slidesContainer.setAttribute('class', 'slides');
  for (i = 0; i < n; i++) {
    let slidesItem = document.createElement('li');
    let slidesLink = document.createElement('a');
    slidesItem.setAttribute('class', i === 0 ? 'slides__item active' : 'slides__item');
    slidesItem.appendChild(slidesLink);
    slidesLink.setAttribute('href', '#');
    slidesContainer.appendChild(slidesItem);
  }
  container.appendChild(slidesContainer);
}
function createIndicators(n) {
  indicatorsContainer = document.createElement('div');
  indicatorsContainer.setAttribute('class', 'indicators');
  for (i = 0; i < n; i++) {
    let indicatorsItem = document.createElement('span');
    indicatorsItem.setAttribute('class', i === 0 ? 'indicators__item active' : 'indicators__item');
    indicatorsItem.setAttribute('data-slide-to', i);
    indicatorsContainer.appendChild(indicatorsItem);
  }
  container.appendChild(indicatorsContainer);
}
function createControls() {
  controlsContainer = document.createElement('div');
  controlsContainer.setAttribute('class', 'controls');
  for (i = 0; i < 3; i++) {
    let controlsItem = document.createElement('div');
    let controlsIcon = document.createElement('i');
    switch (i) {
      case 0:
        controlsItem.setAttribute('class', 'controls__item controls__prev');
        controlsIcon.setAttribute('class', 'fas fa-chevron-left');
        break;
      case 1:
        controlsItem.setAttribute('class', 'controls__item controls__next');
        controlsIcon.setAttribute('class', 'fas fa-chevron-right');
        break;
      case 2:
        controlsItem.setAttribute('class', 'controls__item controls__pause');
        controlsIcon.setAttribute('class', 'fas fa-play');
        break;
    }
    controlsItem.appendChild(controlsIcon);
    controlsContainer.appendChild(controlsItem);
  }
  container.appendChild(controlsContainer);
}
function createStyle() {
  styleContainer = document.createElement('style');
  let style =
    `.controls,.slides {position:relative;}
  .indicators{display:flex;justify-content:center;}
  .indicators__item{width:20px;height:5px;background-color:yellow;margin:10px;}
  li{list-style:none;}
  .slides{height:300px;}
  .controls{display:flex;justify-content:center;}
  .controls__item{margin:30px;}`;
  styleContainer.innerHTML = style;
  container.appendChild(styleContainer);
}
function indicatorsContact(event) {
  let target = event.target;
  if (target.classList.contains('indicators__item')) {
    target.style.backgroundColor = 'red';
    if (indicator !== null) indicator.removeAttribute('style');
    indicator = target;
  }

}
function listeners() {
  indicatorsContainer = document.querySelector('div.indicators');
  indicatorsContainer.addEventListener('click', indicatorsContact);
}

createCarousel(4);