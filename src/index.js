var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// if(document.getElementsByClassName("protein").style.display = "block")
// create function to fetch based on what is on block

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("protein");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  let displayMeat = slides[slideIndex-1]
  return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${displayMeat.id}`)
    .then(res => res.json())
    .then(console.log)
}