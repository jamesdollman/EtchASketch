const gridContainer = document.querySelector('.gridContainer');
const body = document.querySelector('body');
let box;
let resetButton;

drawGame();

function createDiv(){
    for(let i = 0; i < 256; i++){
        box = document.createElement('div');
        box.className = (i+1).toString();
        gridContainer.appendChild(box);
            box.addEventListener('mouseover', (event) => {
                event.target.classList.add("visited");
               }) 
   }   
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

function pixelatedEffect() {
    
}

function drawGame() {
    createDiv();
    createResetButton();
    
}


