var close = document.getElementById('close');
var popup = document.getElementById('popup');
var imagem1 = document.getElementById('imagem1');	
var imagem2 = document.getElementById('imagem2');
var pg1 = document.getElementById('pg1');
var pg2 = document.getElementById('pg2');
	
	
popup.style.background = 'rgba(0, 0, 0, 0.5)';
imagem1.style.visibility = 'visible';

pg1.addEventListener("click", function() {
	imagem1.style.visibility = 'visible';
	imagem2.style.visibility = 'hidden';
});

pg2.addEventListener("click", function() {
  imagem1.style.visibility = 'hidden';
  imagem2.style.visibility = 'visible';
});


close.addEventListener("click", function() {
  popup.style.display = 'none';
});