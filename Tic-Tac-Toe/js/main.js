let game = new Game();

let squircles = document.querySelectorAll('.squircle');


squircles.forEach(squircle=>{

    squircle.addEventListener('click', function(e){

      game.play(e.target.getAttribute('data-index'))

    });

  });


function playAudio(url) {
  new Audio(url).play();
}