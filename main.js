// ==UserScript==
// @name     Live ladok reaction
// @version  1
// @description Shows a GIF of a cat laughing at you if you have recently failed a course on Ladok.
// @author   https://github.com/SimonCantCode
// @include  https://www.student.ladok.se/student/app/studentwebb/start
// @grant    none
// ==/UserScript==

// Check if the website is loaded and has a new test result notification
window.addEventListener('load', function () {
  let i = 0;
  const intervalId = setInterval(() => {
    let descriptionList = document.querySelector('.row.mt-2.mb-0');
    if (descriptionList) {
    	clearInterval(intervalId);
    	main(descriptionList);
  	}

    if (i==4) {
      clearInterval(intervalId);
      // Give up :(
    }
    i++;
  }, 200);
});

function main(descriptionList) {
  const descriptions = descriptionList.querySelectorAll('.col-lg-8');

  // Check if grade is F
  if (descriptions[2].textContent == " Underkänd, F ") { // Change this if you use a diffirent language than Swedish
    descriptions[2].textContent = " F, Uruselt nollan! ";

    const img = document.createElement('img');
    img.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.tenor.com%2FaSkdq3IU0g0AAAAC%2Flaughing-cat.gif&f=1&nofb=1&ipt=c2a769e782ac8ed1098271fdfc886fa6c9af3164c83e0d99628948aeec950f05';
    img.style = "width: 25%;"; // I hate web development.
    descriptions[2].insertAdjacentElement('afterend', img);
  } else { // You can add more conditions here if you like :p
    const img = document.createElement('img');
    img.src = 'https://media1.tenor.com/m/cS5jqwPsXAwAAAAd/high-five-walter-white.gif';
    img.style = "width: 50%;"; // I hate web development.
    descriptions[2].insertAdjacentElement('afterend', img);
  }
}
