console.log('game-logic sanity check!');

let gameVars = {
  hints: 2,
  uI: true,
  userRecord: false,
  userPattern: [],
  level: 1,
  initial: -1,
}

function reset() {
  gameVars.uI = true;
  gameVars.userRecord = false;
  gameVars.userPattern = [];
}

function winGame() {
  if (gameVars.level === 11){
    alert('YOU WIN');
  }
}

function nextLevel() {
  let level = gameVars.level;
  console.log('You win! Get ready for level ' + level + '!')
  $('#start-btn').removeClass('scale-out').addClass('scale-in').text('LEVEL ' + level + ': GO!');
  $('#hint-btn').removeClass('scale-in').addClass('scale-out');
  $('.user-score').addClass('scale-in').removeClass('scale-out');
  setTopScore();
  winGame();
  gameVars.hints = 2;
  window.boxPattern = patternIncrement(window.storedPattern, gameVars.level)
}

function startUserPattern() {
  let userPattern = gameVars.userPattern;
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

function startPlayback(marker, speed) {
  let s = speed || 450;
  gameVars.uI = false;
  let boxNum = window.boxPattern[marker]
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
    marker++;
    if (marker < window.boxPattern.length) {
      startPlayback(marker, s);
    } else {
      console.log('pattern is done, your turn!')
      gameVars.uI = true;
      gameVars.userRecord = true;
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
  getStoredPattern(false);
  $('#start-btn').addClass('scale-in').removeClass('scale-out').text('START');
  $(this).addClass('scale-out').removeClass('scale-in');
}

function setTopScore() {
  let topScore = gameVars.topScore;
  let level = gameVars.level;
  topScore = localStorage.getItem('topScore') || 1;
  $('#top-score').text(`level ${topScore}`);
  if (level > topScore) {
    localStorage.setItem('topScore', level);
  }
}
