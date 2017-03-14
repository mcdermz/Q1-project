console.log('game-logic sanity check!');

let storedPattern = [1,2,3,4,5,4,3,2,1];
let i;
let uI;
let userRecord;
let userPattern;


let begin;
let end = 2;
let level = 1;
let initial = -1;
let boxPattern = patternIncrement(storedPattern)

function patternIncrement (p){
  begin = level + initial;
  end = begin + level + 1;
  initial = begin;
  level++;
  return p.slice(begin, end)
}

function reset() {
  $('.game-gui div.col').removeClass('accent-1')
  uI = true;
  userRecord = false;
  userPattern = [];
}

function nextLevel(){
  console.log('You win! Get ready for level ' + level + '!')
  boxPattern = patternIncrement(storedPattern)
}

function startUserPattern () {
  if (userPattern.length !== boxPattern.length){
    for (i in userPattern) {
      if (userPattern[i] != boxPattern[i]){
        console.log('You lose!')
        reset();
      }
    }
  } else if (userPattern[userPattern.length-1] != boxPattern[boxPattern.length-1]){
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
  let boxActive = `#${boxPattern[i]}`;
  $.when($(boxActive)
    .animate({opacity: '1'}, 300, 'linear', function() {
      $(this).toggleClass('accent-1');
    })
    .animate({opacity: '1'}, 300, 'linear', function() {
      $(this).toggleClass('accent-1')

    })
  ).done(function(){
    i++;
    if (i<boxPattern.length){
      startGame(i);
    } else{
      console.log('pattern is done, your turn!')
      uI = true;
      userRecord = true;
    }
  });
}
