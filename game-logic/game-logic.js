console.log('game-logic sanity check!');

let i;
let uI = true;
let userRecord;
let userPattern;

function reset() {
  $('.game-gui div.col').removeClass('lighten-5')
  uI = true;
  userRecord = false;
  userPattern = [];
}

function nextLevel() {
  console.log('You win! Get ready for level ' + level + '!')
  $('#start-btn').text('LEVEL ' + level + ': GO!')
  window.boxPattern = patternIncrement(window.storedPattern)
}

function startUserPattern() {
  if (userPattern.length !== window.boxPattern.length) {
    for (i in userPattern) {
      if (userPattern[i] != window.boxPattern[i]) {
        console.log('You lose!')
        reset();
      }
    }
  } else if (userPattern[userPattern.length - 1] != window.boxPattern[window.boxPattern.length - 1]) {
    console.log('You lose!')
    reset();
  } else {
    nextLevel();
    reset();
  }
}

function startGame(i) {
  uI = false;
  let boxActive = `#${window.boxPattern[i]}`;
  $.when($(boxActive)
    .animate({
      opacity: '1'
    }, 300, 'linear', function () {
      $(this).toggleClass('lighten-5');
    })
    .animate({
      opacity: '1'
    }, 300, 'linear', function () {
      $(this).toggleClass('lighten-5')

    })
  ).done(function () {
    i++;
    if (i < window.boxPattern.length) {
      startGame(i);
    } else {
      console.log('pattern is done, your turn!')
      uI = true;
      userRecord = true;
    }
  });
}
