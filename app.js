// let gameState = {
//   grid: [
//     { 
//       isUp: false,
//       isCivilian: false
//     },
//     // ...
//   ],
//   points: 0,
// }

// alert('You must survive 30 seconds without killing 3 civilians or letting 10 moles get away! Good Luck!')

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

getRandomInt(64)

let difficultyLevel = 5;

function difficultyTimer() {

  for (var i = 0; i < difficultyLevel; i++){
  civMaker();
  moleMaker();
  }
}

civMaker();
moleMaker();

function civMaker() {

  //before add civillian is civilian or enemy? if is pick a new one
  //let equivalentToStringInterpolation = "#" + getRandomInt(64)
  const civElm = $(`#${getRandomInt(64)}`);
  if (!(civElm.hasClass('civilian')|| civElm.hasClass('mole'))) {
    civElm
      .addClass('civilian')
      .click(onCivilianClick);
      
      setInterval(() => {
        civElm.removeClass('civilian');
      }, 5000)
  }
}



function moleMaker() {
  
  const civElm = $(`#${getRandomInt(64)}`);
  if (!(civElm.hasClass('mole'))) {
    civElm
      .addClass('mole')
      .click(onMoleClick);
      
      setInterval(() => {
        civElm.removeClass('mole');
      }, 5000)
  }
}




function makeGrid() {
  const gridElement = $('.grid');

  for (let i = 0; i < 64; i++) {
    //let equivalentToStringInterpolation = '<div id=' + i + ' class="cell"></div>'
    let cell = $(`<div id=${i} class="cell"></div>`);
    cell.append(cell);
    gridElement.append(cell);
  }
}
makeGrid();
civMaker();
moleMaker();


let counter = 0;
let escapedMoleCount = 0;



function onMoleClick() {
  if ($(this).hasClass('mole')) {
    $(this).removeClass('mole');
    $(this).unbind('click');
  }
}


function onCivilianClick() {
  if ($(this).hasClass("civilian")) {
    $(this).removeClass('civilian')
    $(this).unbind('click');

    counter++;    
    $('.scoreboard').text('Strike: ' + counter + "!");
    if(counter >= 3){
      alert('3 Civilians have died. Better luck next time!')
    }
  }
}


setInterval(() => {
  difficultyLevel++;
  difficultyTimer();
}, 5000)

setInterval(() => {
 alert("Congratulations! You've won. Please refresh page.")
}, 45000)

let timer = 30;
setInterval(() => {
  timer--;
  $('.timer').text(timer);
}, 1500)
