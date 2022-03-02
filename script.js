const reset = document.querySelector('.reset');
const board = document.querySelector('#board');
const menu = document.querySelector('.menu');
let SizeValue;

SizeButton.addEventListener('click',() =>{
    
    SizeValue = SizeInput.value;
    ResetBoard();
    CreateBoard(SizeValue);
})

    



function CreateBoard(SizeValue){
    

    for(let i = 0;i <SizeValue*SizeValue; i++){

        let cell = document.createElement('div');
        board.appendChild(cell).classList = ('cell');
        board.style.gridTemplateColumns = "repeat(SizeValue, 1fr)";
        board.style.gridTemplateRows = "repeat(SizeValue, 1fr)";
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



CreateBoard(SizeValue);