const grid = document.querySelector('.grid');
const squares = createDivs();
const logLefts =  document.querySelectorAll('.log-left');
const logRights =  document.querySelectorAll('.log-right');
const carLefts =  document.querySelectorAll('.car-left');
const carRights =  document.querySelectorAll('.car-right');
const timeLeftDisplay = document.getElementById('time-left');
const resultDisplay = document.getElementById('result');
const startPauseButton = document.getElementById('start-pause-button');

let frogPosition = 76;
const gridWidth = 9;

startPauseButton.addEventListener('click', startPause);

function startPause(){
    setInterval(autoMoveElements, 1000);
    document.addEventListener('keyup', moveFrog);
}

function createDivs(){
    let el = 1;

    function log(div, cl, max = 5){
        if(el > max){el=1;}
        
        div.classList.add(cl);
        div.classList.add(cl[0] + el++);
    }

    for(let i = 0; i < 81; i++){    
        const div = document.createElement('div');
    
        if(i === 4)
            div.classList.add('ending-block');
        else if(i >= 18 && i <= 26){ log(div, "log-left", 5); }
        else if(i >= 27 && i <= 35){ log(div, "log-right", 5); }
        else if(i >= 45 && i <= 53){ log(div, "car-left", 3); }
        else if(i >= 54 && i <= 62){ log(div, "car-right", 3); }
        else if(i == 76){
            div.classList.add('starting-block');
            div.classList.add('frog');
        }
    
        grid.appendChild(div);
    }

   return document.querySelectorAll('.grid div');

}

function moveFrog(e){
    squares[frogPosition].classList.remove('frog');

    switch (e.key) {
        case 'ArrowLeft':
            if(frogPosition % gridWidth !== 0)
                frogPosition--;
            
            break;
        case 'ArrowRight':
            if(frogPosition % gridWidth < gridWidth -1)
                frogPosition++;
            
            break;
            
        case 'ArrowUp':
            if(frogPosition - gridWidth >= 0)
                frogPosition -= gridWidth;
            break;
            
        case 'ArrowDown':
            if(frogPosition + gridWidth < gridWidth * gridWidth)
                frogPosition += gridWidth;
            
            break;
    
        default:
            break;
    }

    squares[frogPosition].classList.add('frog');
}

function autoMoveElements(){
    logLefts.forEach( (ll) => { moveElement(ll, "log-left", 5);});
    logRights.forEach( (lr) => { moveElement(lr, "log-right", 5);});
    carLefts.forEach( (cl) => { moveElement(cl, "car-left", 3);});
    carRights.forEach( (cr) => { moveElement(cr, "car-right", 3);});
}

function moveElement(div, element, max){
 
    if(element[4] === "l"){
        for(let el = 1; el <= max; el++){
            if(div.classList.contains(element[0] + el)){        
                div.classList.remove(element[0] + el++);
                if(el > max){el = 1};
                div.classList.add(element[0] + el);

               break;
          }
        }
    }
    else{
        for(let el = max; el >= 1; el--){
            if(div.classList.contains(element[0] + el)){        
                div.classList.remove(element[0] + el--);
                if(el < 1){el = max};
                div.classList.add(element[0] + el);

               break;
          }
        }
    }
}
