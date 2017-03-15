console.log('gui sanity check!');


$(document).on('load', function () {
  reset();
})

$('#start-btn').on('click', startButton);

$('#hint-btn').on('click', hintButton)

$('.game-gui').on('mousedown', '.col', function () {
  if (uI)
    $(this).toggleClass('lighten-5')
});

$('.game-gui').on('mouseup', '.col', function () {
  if (uI)
    $(this).toggleClass('lighten-5')
  if (userRecord) {
    userPattern.push($(this).attr('id'));
    startUserPattern();
  }
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
  $('#hint-btn').text('hints left: 2').removeClass('scale-out').addClass('scale-in');
  $(this).addClass('scale-out').removeClass('scale-in');
}

function hintButton() {
  startGame(i);
  hints--;
  $(this).text('hints left: ' + hints);
  if (hints <= 0) {
    $(this).removeClass('scale-in').addClass('scale-out')
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
  let boxID = '#' + keyAction[e.which];
  if (typeof boxID != 'undefined' && uI) {
    $(boxID).toggleClass('lighten-5');
  }
}
