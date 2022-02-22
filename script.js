const reset = document.querySelector('.reset');
const board = document.querySelector('#board');

function CreateBoard(){
    for(let i = 0;i < 256; i++){

        let cell = document.createElement('div');
        board.appendChild(cell).classList = ('cell');
        cell.addEventListener('mouseover',() =>{
            cell.style.cssText = 'background-color: black'
        })
    }
};

function ResetBoard(){
  let cell = document.querySelectorAll('.cell');
  cell.style.cssText = 'background-color: black';
};

reset.addEventListener('click',ResetBoard)



CreateBoard();