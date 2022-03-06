const reset = document.querySelector('.reset');
const board = document.querySelector('#board');
const menu = document.querySelector('.menu');
let SizeValue = 2;



    



function CreateBoard(){
    
    console.log(SizeValue);
    for(let i = 0;i <SizeValue*SizeValue; i++){
        
        let cell = document.createElement('div');
        board.appendChild(cell).classList = ('cell');
        board.style.gridTemplateColumns = `repeat(${SizeValue}, 1fr)`;
        board.style.gridTemplateRows = `repeat(${SizeValue}, 1fr)`;
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



SizeButton.addEventListener('click',() =>{
    SizeValue = SizeInput.value;
    if(SizeValue > 100 || SizeValue < 2){
        alert("Size must be between 2 and 100")
    }
        else
        ResetBoard();
        
})

CreateBoard();