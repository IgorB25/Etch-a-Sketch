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
    
    let reset = document.querySelectorAll(".cell");
    reset.forEach(cell => cell.remove())
    CreateBoard();
}

reset.addEventListener('click',ResetBoard)



CreateBoard();