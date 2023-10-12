const gridContainer = document.querySelector('.gridContainer');
const body = document.querySelector('body');
const inputContainer = document.querySelector('.inputContainer');
let header;
let box;
let resetButton;
let NumberOfSquares = 0;
let clicked = false;
let squareSize;
let input;
let inputButton;

function getSquareSize() {
    input = document.createElement('input');
    input.className = "userInput";
    input.textContent = "How many squares do you want per side?";
    inputContainer.appendChild(input);
    inputButton = document.createElement('button');
    inputButton.className = "inputButton";
    inputButton.textContent = "Press me!";
    inputContainer.appendChild(inputButton);
    
    inputButton.addEventListener('click', () => {
        NumberOfSquares = input.value;
            if(NumberOfSquares > 0 && NumberOfSquares <= 64){
                squareSize = (100 / NumberOfSquares) + "%";
                console.log(squareSize);
                displayElements(); 
            }else if (NumberOfSquares > 64 || NumberOfSquares < 1){
                input.textContent = "";
                console.log("ERROR");
            }
        
    })
        

    
}


drawGame();

function drawGame() {
    getSquareSize();
      
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
        input.value = 0;
        const colouredBoxes = document.querySelectorAll('.visited');
        colouredBoxes.forEach(box => {
            box.classList.remove("visited");
            box.remove();
        });
    });

    
    
}




