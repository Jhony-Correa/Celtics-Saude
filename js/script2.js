var setas = document.getElementById('setas');
var seta1 = document.getElementById('seta1');
var seta2 = document.getElementById('seta2');
var video = document.getElementById('video');

seta1.style.visibility = 'visible';
video.style.visibility = 'hidden';

seta1.addEventListener("click", function() {
  seta1.style.visibility = 'hidden';
  video.style.visibility = 'visible';
  seta2.style.visibility = 'visible';
});
seta2.addEventListener("click", function() {
  seta2.style.visibility = 'hidden';
  video.style.visibility = 'hidden';
  seta1.style.visibility = 'visible';
});