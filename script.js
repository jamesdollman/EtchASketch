const gridContainer = document.querySelector('.gridContainer');
const body = document.querySelector('body');
let header;
let box;
let resetButton;
let NumberOfSquares;
let clicked = false;
let squareSize;

function getSquareSize() {
    while(true){
        NumberOfSquares = prompt("How many squares do you want per side?");
        if(NumberOfSquares > 0 && NumberOfSquares <= 64){
            break;
        }else{}
    }   
    squareSize = (100 / NumberOfSquares) + "%";
}


drawGame();

function drawGame() {
    getSquareSize();
    displayElements();   
}

function displayElements(){
    for(let i = 0; i < NumberOfSquares*NumberOfSquares; i++){
        box = document.createElement('div');
        box.className = (i+1).toString();
        box.style.width = squareSize;
        box.style.height = squareSize;
        gridContainer.appendChild(box);
        box.addEventListener('click', () =>{
            startDrawing();
            clicked = true;
        })

            box.addEventListener('mouseover', (event) => {
                if(clicked){
                    event.target.classList.add("visited");
                }
               }) 
        }
   createResetButton();
}

function startDrawing() {
    
}

function createResetButton(){
    resetButton = document.createElement('button');
    resetButton.className = "resetButton";
    resetButton.textContent = "Reset the board";
    body.appendChild(resetButton);
    resetBoard();
}

function resetBoard() {
    resetButton.addEventListener('click', () => {
        const colouredBoxes = document.querySelectorAll('.visited');
        colouredBoxes.forEach(box => {
            box.classList.remove("visited");
        });
    });
    
}




