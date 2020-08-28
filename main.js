var slide = new Array("images/post2.jpg", "images/post3.jpg", "images/post4.jpg", "images/post5.jpg");
var numero = 0;


function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero < 0)
      numero = slide.length - 1;
  if (numero > slide.length -1)
      numero = 0;
  document.getElementById("slide").src = slide[numero];
}

document.addEventListener("keydown", function(e){
if(e.keyCode === 37){
    ChangeSlide(-1);
}
else if(e.keyCode === 39){
    ChangeSlide(1);
}
});

setInterval(ChangeSlide, 5000, 1);

// le 1 correspond à l'argument de la fonction ChangeSlide, c'est-à-dire le bouton 'suivant' (le 'sens').
