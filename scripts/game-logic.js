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
  if (gameVars.level === 11) {
    alert('YOU WIN');
  }
}

function nextLevel() {
  let level = gameVars.level;
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
    userPattern.some(incorrectGuess)
  } else if (userPattern[userPattern.length - 1] != window.boxPattern[window.boxPattern.length - 1]) {
    loseGame();
  } else {
    nextLevel();
    reset();
  }
}

function incorrectGuess(el, i, arr) {
  if (arr[i] != window.boxPattern[i])
    return loseGame();
}

function startPlayback(marker, speed = 450) {
  gameVars.uI = false;
  let boxNum = window.boxPattern[marker]
  let boxActive = `#${boxNum}`;
  $.when($autoPlayBox(boxActive, speed))
    .done(function () {
      marker++;
      autoPlayNext(marker, speed);
    });
}

function autoPlayNext(marker, speed) {
  if (marker < window.boxPattern.length) {
    startPlayback(marker, speed);
  } else {
    gameVars.uI = true;
    gameVars.userRecord = true;
  }
}

function $autoPlayBox(boxActive, speed) {
  return $(boxActive)
    .animate({
      opacity: '1'
    }, speed, 'linear', function () {
      startBoxAction($(boxActive))
    })
    .animate({
      opacity: '1'
    }, speed, 'linear', function () {
      endBoxAction($(boxActive))
    })
}

function loseGame() {
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
  if (level > topScore)
    localStorage.setItem('topScore', level);
}
