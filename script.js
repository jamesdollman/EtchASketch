const gridContainer = document.querySelector('.gridContainer');

let box;
let hovered = false;

drawGame();

function createDiv(){
    for(let i = 0; i < 256; i++){
        box = document.createElement('div');
        box.className = (i+1).toString();
        gridContainer.appendChild(box);
            box.addEventListener('mouseover', (event) => {
                console.log(event.target.className);
                event.target.classList.add("visited");
               })
        
   }   

   
}

function logBoxHovered(){
    return 
}

function pixelatedEffect() {
    
}

function drawGame() {
    createDiv();
}


