const slider = document.querySelector('.slider');
const list = document.querySelector('.list');
const thumbnail = document.querySelector('.thumbnail');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

// autoplays slider
let runAutoPlay = setTimeout(() => {
  next.click();
}, 3000);

// Membua event ketika button di klik
next.addEventListener('click', () => {
  initSlider('next')
});
prev.addEventListener('click', () => {
  initSlider('prev')
});


const initSlider = (type) => {
  const sliderItems = list.querySelectorAll('.item');
  const thumbnailItems = thumbnail.querySelectorAll('.item');

  if (type === 'next') {
    list.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    slider.classList.add('next');
  } else {
    const lasItemPosition = sliderItems.length-1;
    list.prepend(sliderItems[lasItemPosition]);
    thumbnail.prepend(thumbnailItems[lasItemPosition]);
    slider.classList.add('prev');
  }

  setTimeout(() => {
    slider.classList.remove('next');
    slider.classList.remove('prev');
  }, 2000);
  clearTimeout(runAutoPlay)
  let runAutoPlay = setTimeout(() => {
  next.click();
}, 3000);
};