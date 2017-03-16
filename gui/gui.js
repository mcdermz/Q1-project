console.log('gui sanity check!');


$(document).on('load', function () {
  reset();
});

$('#start-btn').on('click', startButton);

$('#hint-btn').on('click', hintButton);

$(' .game-gui').on('mousedown', '.col', function () {
  if (uI) {
    $(this).addClass('lighten-5 clicked');
    playTone(toneObject[$(this).attr('id')]);
    if ($(this).hasClass('clicked')) {
      $(this).mouseleave(function () {
        stopTone(toneObject[$(this).attr('id')]);
        $(this).removeClass('lighten-5 clicked');
      });
    }
  }
});

$('.game-gui').on('mouseup', '.col', function () {
  if (uI && $(this).hasClass('clicked')) {
    stopTone(toneObject[$(this).attr('id')]);
    $(this).removeClass('lighten-5 clicked');
  }
  if (userRecord) {
    userPattern.push($(this).attr('id'));
    startUserPattern();
  }
});

$('.game-gui').on('mouseleave', '.col', function () {
  stopTone(toneObject[$(this).attr('id')])
});

$('body').on('keydown keyup', function (e) {
  hotKeysUpDown(e);
});

$('body').on('keyup', function (e) {
  if (userRecord) {
    hotKeysPress(e);
    startUserPattern();
  }
});

function startButton() {
  i = 0;
  reset();
  startGame(i);
  $('#hint-btn')
    .text('hints left: 2')
    .removeClass('scale-out')
    .addClass('scale-in');
  $('#start-btn')
    .addClass('scale-out')
    .removeClass('scale-in');
}

function hintButton() {
  startGame(i);
  hints--;
  $('#hint-btn').text('hints left: ' + hints);
  if (hints <= 0) {
    $('#hint-btn')
      .removeClass('scale-in')
      .addClass('scale-out');
  }
}

function hotKeysPress(e) {
  let keyAction = {
    65: '1',
    83: '2',
    68: '3',
    70: '4',
    71: '5',
  };
  let keyID = keyAction[e.which];
  if (typeof keyID != 'undefined' && uI) {
    userPattern.push(keyID);
  }
}

function hotKeysUpDown(e) {
  let keyAction = {
    65: '1',
    83: '2',
    68: '3',
    70: '4',
    71: '5',
  };
  let boxNum = keyAction[e.which]
  let boxID = '#' + boxNum;
  if (uI) {
    $(boxID).toggleClass('lighten-5');
    if (e.type === 'keydown' && boxNum !== undefined) {
      playTone(toneObject[boxNum]);
    } else if (boxNum !== undefined) {
      stopTone(toneObject[boxNum]);
    }
  }
}
