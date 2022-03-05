const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const tikusjahat = document.querySelectorAll(".tikus-jahat");
const papanSkor = document.querySelector('.papan-skor');
const papanSkorCredit = document.querySelector('.papan-skor-credit');
const pop = document.querySelector('#pop');

let tanahSebelumnya;
let selesai;
let skor = 0;

var randomMuncul = Math.round(Math.random()* 10);


function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomTanah(tanah) {
  const t = Math.floor(Math.random() * tanah.length);
  const tRandom = tanah[t];
 
  if (tRandom == tanahSebelumnya) {
    randomTanah(tanah);
  }
  tanahSebelumnya = tRandom;
  return tRandom;
}


function munculkanTikus() {
  const tRandom = randomTanah(tanah);
  const wRandom = randomWaktu(300, 700);
  tRandom.classList.add('muncul');

  setTimeout(() => {
    tRandom.classList.remove('muncul');
    if (!selesai) {
      randomMuncul = Math.round(Math.random()* 10);
      if (randomMuncul <= 8) {
        munculkanTikusJahat();
        if (skor == 25) {
          selesai = true;
          Creditbtn.onclick();
        }
      } else {
        munculkanTikus();
        if (skor == 25) {
          selesai = true;
          Creditbtn.onclick();
        }
      }
      //munculkanTikus();
    }
  }, wRandom);
}

function munculkanTikusJahat() {
  const tRandom = randomTanah(tanah);
  const wRandom = randomWaktu(300, 1100);
  tRandom.classList.add('munculin');

  setTimeout(() => {
    tRandom.classList.remove('munculin');
    if (!selesai) {
      randomMuncul = Math.round(Math.random()* 10);
      
      if (randomMuncul <= 8) {
        munculkanTikusJahat();
        if (skor == 25) {
          selesai = true;
          Creditbtn.onclick();
        }
      } else {
        munculkanTikus();
        if (skor == 25) {
          selesai = true;
          Creditbtn.onclick();
        }
      }
      //munculkanTikusJahat();
    }
  }, wRandom);
}

function mulai() {
  selesai = false;
  skor = 0;
  papanSkor.textContent = 0;

  if (randomMuncul <= 8) {
    munculkanTikusJahat();
  } else {
    munculkanTikus();
  }
  
  /*if (skor == 0) {
    selesai = true;
    Creditbtn.onclick();
  }*/
  /*  setTimeout(() => {
      selesai = true;
      Creditbtn.onclick();
    }, 10000);*/ 
}

function pukul() {
  if (randomMuncul <= 8) {
    skor++;
    this.parentNode.classList.remove('munculin');
  } else {
    skor--;
    this.parentNode.classList.remove('muncul');
  }
  pop.play();
  papanSkor.textContent = skor;
}

tikus.forEach(t => {
  t.addEventListener('click', pukul);
});

tikusjahat.forEach(t => {
  t.addEventListener('click', pukul);
});

//-------------------CREDIT---------------------
// Get the modal
var creditModal = document.getElementById("myCredit-modal");

// Get the button that opens the modal
var Creditbtn = document.getElementById("myCredit-btn");

// Get the <span> element that closes the modal
var clsBtn = document.getElementsByClassName("credit-close")[0];

// When the user clicks on the button, open the modal
Creditbtn.onclick = function() {
  creditModal.style.display = "block";
  papanSkorCredit.textContent = skor;
}

// When the user clicks on <span> (x), close the modal
clsBtn.onclick = function() {
  creditModal.style.display = "none";
  papanSkor.textContent = 0;
}

//---------------MODAL----------------------
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
tutorialBtn.onclick = function() {
  modal.style.display = "block";
}

//automatic modal open when page load on
setTimeout(tutorialBtn.onclick,0);

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

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

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
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
}