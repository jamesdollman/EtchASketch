const gridContainer = document.querySelector('.gridContainer');

let div;

for(let i = 0; i < 256; i++){
     div = document.createElement('div');
     gridContainer.appendChild(div);
}