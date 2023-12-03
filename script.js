// Toggle navbar menu on mobile devices
const toggleButton = document.querySelector('.navbar-toggle');
const menu = document.querySelector('.navbar-menu');

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  menu.classList.toggle('active');
});



// Toggle navbar menu on mobile devices
const toggleButton1 = document.querySelector('.navbar-toggle-1');
const menu1 = document.querySelector('.navbar-menu-1');

toggleButton1.addEventListener('click', () => {
  toggleButton1.classList.toggle('active');
  menu1.classList.toggle('active');
});



var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
