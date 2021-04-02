class Game {

    constructor(){

    this.players = [

        new Player("X"),
        new Player("O")

    ];
    
    this.board = new Array(9).fill(null);
    this.playerTurn = this.players[0];

    }


    play(i){

    event.target.textContent = this.playerTurn.letter;
    event.target.style.pointerEvents = 'none';
   
    this.board.splice(i, 1, this.playerTurn.letter);
    

    if (this.findWinCon()) {
      document.querySelector('.container').style.pointerEvents = 'none';
      alert(`${this.playerTurn.letter} a gagné !`);
    }
    else if(!this.findWinCon() && !this.board.includes(null)){
      alert('Egalité !')
    }
    else
    {
    this.switchPlayerTurn()
    }

    }

    

    switchPlayerTurn(){

        if (this.playerTurn.letter == 'X') {
          this.playerTurn = this.players[1]
        }
        else {
          this.playerTurn = this.players[0]
        }

    }


    findWinCon() {
      const winCon = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
      ];

      for (const combination of winCon) {
          const [a, b, c] = combination;

          if (this.board[a] && (this.board[a] === this.board[b] && this.board[a] === this.board[c])) {
              return combination;
          }
      }

      return null;
  }

}

