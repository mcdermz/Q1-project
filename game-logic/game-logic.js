console.log('game-logic sanity check!');

// let storedPattern = [];
let i;
let uI;
let userRecord;
let userPattern;


let begin;
let end = 2;
let level = 1;
let initial = -1;


function reset() {
  $('.game-gui div.col').removeClass('accent-1')
  uI = true;
  userRecord = false;
  userPattern = [];
}

function nextLevel(){
  console.log('You win! Get ready for level ' + level + '!')
  window.boxPattern = patternIncrement(window.storedPattern)
}

function startUserPattern () {
  if (userPattern.length !== window.boxPattern.length){
    for (i in userPattern) {
      if (userPattern[i] != window.boxPattern[i]){
        console.log('You lose!')
        reset();
      }
    }
  } else if (userPattern[userPattern.length-1] != window.boxPattern[window.boxPattern.length-1]){
    console.log('You lose!')
    reset();
  }
  else {
    nextLevel();
    reset();
  }
}

function startGame(i){
  uI = false;
  let boxActive = `#${window.boxPattern[i]}`;
  $.when($(boxActive)
    .animate({opacity: '1'}, 300, 'linear', function() {
      $(this).toggleClass('accent-1');
    })
    .animate({opacity: '1'}, 300, 'linear', function() {
      $(this).toggleClass('accent-1')

    })
  ).done(function(){
    i++;
    if (i<window.boxPattern.length){
      startGame(i);
    } else{
      console.log('pattern is done, your turn!')
      uI = true;
      userRecord = true;
    }
  });
}
