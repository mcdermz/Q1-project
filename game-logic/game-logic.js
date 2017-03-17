console.log('game-logic sanity check!');

let hints = 2;
let i;
let uI = true;
let userRecord;
let userPattern;
let topScore;

function reset() {
  uI = true;
  userRecord = false;
  userPattern = [];
}

function winGame() {
  if (level === 11){
    alert('YOU WIN');
  }
}

function nextLevel() {
  console.log('You win! Get ready for level ' + level + '!')
  $('#start-btn').removeClass('scale-out').addClass('scale-in').text('LEVEL ' + level + ': GO!');
  $('#hint-btn').removeClass('scale-in').addClass('scale-out');
  $('.user-score').addClass('scale-in').removeClass('scale-out');
  setTopScore();
  winGame();
  hints = 2;
  window.boxPattern = patternIncrement(window.storedPattern)
}

function startUserPattern() {
  if (userPattern.length !== window.boxPattern.length) {
    for (let i in userPattern) {
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

function startPlayback(i, speed) {
  let s = speed || 450;
  uI = false;
  let boxNum = window.boxPattern[i]
  let boxActive = `#${boxNum}`;
  $.when($(boxActive)
    .animate({
      opacity: '1'
    }, s, 'linear', function () {
      startBoxAction($(boxActive))
    })
    .animate({
      opacity: '1'
    }, s, 'linear', function () {
      endBoxAction($(boxActive))
    })
  ).done(function () {
    i++;
    if (i < window.boxPattern.length) {
      startPlayback(i, s);
    } else {
      console.log('pattern is done, your turn!')
      uI = true;
      userRecord = true;
    }
  });
}

function loseGame() {
  console.log('You lose!');
  reset();
  $('#hint-btn').addClass('scale-out').removeClass('scale-in');
  $('#loser-btn').addClass('scale-in').removeClass('scale-out').on('click', youLoseBtn);
}

function youLoseBtn() {
  // reset();
  getStoredPattern(false);
  $('#start-btn').addClass('scale-in').removeClass('scale-out').text('START');
  $(this).addClass('scale-out').removeClass('scale-in');
}

function setTopScore() {
  topScore = localStorage.getItem('topScore') || 1;
  $('#top-score').text(`level ${topScore}`);
  if (level > topScore) {
    localStorage.setItem('topScore', level);
  }
}
