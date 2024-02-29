document.addEventListener("DOMContentLoaded", () => {

  var wymoweczki = [
    "aha.mp3",
    "co-kurwa.mp4",
    "jebac-go.mp4",
    "ogarnij-sie.mp4",
    "pedau.mp4",
  ];

  const section = document.querySelector(".section");

  const btn_tak = document.querySelector(".section .row button[att='tak']");
  const btn_nie = document.querySelector(".section .row button[att='nie']");

  btn_nie.addEventListener('click', function() {

    function getRandomIndex(max) {
      return Math.floor(Math.random() * max);
    }

    const losowaWymowka = getRandomIndex(wymoweczki.length);
    const wymowka = wymoweczki[losowaWymowka];

    var clickSound = new Audio(wymowka);

    clickSound.play();

    const newDiv = document.createElement("div");
    newDiv.classList.add("nope-img");

    const newImage = document.createElement("img");
    newImage.src = "nie-grasz.jpg";

    newDiv.appendChild(newImage);

    section.appendChild(newDiv);

    document.querySelector(".nope-img img").addEventListener('click', function() {
      section.removeChild(newDiv);
    });

  });

  btn_tak.addEventListener('click', function() {

    var clickSound = new Audio('no-witam.mp4');

    clickSound.play();

    section.innerHTML = `
      <img src="gramy-gramy.jpg">
    `;

  });

});
