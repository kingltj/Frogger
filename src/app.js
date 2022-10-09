const grid = document.querySelector('.grid');
const squares = createDivs();
const timeLeftDisplay = document.getElementById('time-left');
const resultDisplay = document.getElementById('result');
const startPauseButton = document.getElementById('start-pause-button');

let frogPosition = 76;
const gridWidth = 9;

startPauseButton.addEventListener('click', startPause);

function startPause(){
    document.addEventListener('keyup', moveFrog);
}

function createDivs(){
    for(let i = 0; i < 81; i++){    
        const div = document.createElement('div');
    
        if(i === 4)
            div.classList.add('ending-block');
        else if(i >= 18 && i <= 26)
            div.classList.add('log-left');
        else if(i >= 27 && i <= 35)
            div.classList.add('log-right');
        else if(i >= 45 && i <= 53)
            div.classList.add('car-left');
        else if(i >= 54 && i <= 62)
            div.classList.add('car-right');
        else if(i == 76){
            div.classList.add('starting-block');
            //div.classList.add('frog');
        }
    
        grid.appendChild(div);
    }

   return document.querySelectorAll('.grid div');

}

function moveFrog(e){

    switch (e.key) {
        case 'ArrowLeft':
            if(frogPosition % gridWidth !== 0) frogPosition--;
            
            break;
        case 'ArrowRight':
            if(frogPosition % gridWidth < gridWidth -1) frogPosition++;
            
            break;
            
        case 'ArrowUp':
            frogPosition -= gridWidth;
            break;
            
        case 'ArrowDown':
            frogPosition += gridWidth;
            
            break;
    
        default:
            break;
    }
    squares[frogPosition].classList.add('frog');
}
