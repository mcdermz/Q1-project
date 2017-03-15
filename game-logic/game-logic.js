console.log('game-logic sanity check!');

let hints = 2;
let i;
let uI = true;
let userRecord;
let userPattern;

function reset() {
  uI = true;
  userRecord = false;
  userPattern = [];
  $('.game-gui div.col').removeClass('lighten-5');
}

function nextLevel() {
  console.log('You win! Get ready for level ' + level + '!')
  $('#start-btn').removeClass('scale-out').addClass('scale-in').text('LEVEL ' + level + ': GO!');
  $('#hint-btn').removeClass('scale-in').addClass('scale-out');
  hints = 2;
  window.boxPattern = patternIncrement(window.storedPattern)
}

function startUserPattern() {
  if (userPattern.length !== window.boxPattern.length) {
    for (i in userPattern) {
      if (userPattern[i] != window.boxPattern[i]) {
        loseGame();
      }
    }
  } else if (userPattern[userPattern.length - 1] != window.boxPattern[window.boxPattern.length - 1]) {
    loseGame();
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
    }, 450, 'linear', function () {
      $(this).toggleClass('lighten-5');
    })
    .animate({
      opacity: '1'
    }, 450, 'linear', function () {
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

function loseGame() {
  console.log('You lose!');
  $('#hint-btn').addClass('scale-out').removeClass('scale-in');
  $('#loser-btn').addClass('scale-in').removeClass('scale-out').on('click', function () {
    reset();
    level = 1;
    $('#start-btn').addClass('scale-in').removeClass('scale-out').text('START');
    $(this).addClass('scale-out').removeClass('scale-in');
  });
}
