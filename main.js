const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const myCarouselElement = document.querySelector('#carouselExampleCaptions')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 3000, 
  touch: false
})
