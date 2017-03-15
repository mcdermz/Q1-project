console.log('gui sanity check!');

$(document).on('load', function () {
  reset();
})

$('#start-btn').on('click', function () {
  i = 0;
  reset();
  startGame(i);
});

$('.game-gui').on('mousedown', '.col', function () {
  if (uI)
    $(this).toggleClass('accent-1')
});

$('.game-gui').on('mouseup', '.col', function () {
  if (uI)
    $(this).toggleClass('accent-1')
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

function hotKeysPress(e) {
  let keyAction = {
    119: '1',
    101: '2',
    97: '3',
    115: '5',
    100: '4',
    87: '1',
    69: '2',
    65: '3',
    83: '5',
    68: '4',
  };
  let keyID = keyAction[e.which];
  if (typeof keyID != 'undefined' && uI) {
    userPattern.push(keyID);
  }
}

function hotKeysUpDown(e) {
  let keyAction = {
    87: '1',
    69: '2',
    65: '3',
    83: '5',
    68: '4',
  };
  let boxID = '#' + keyAction[e.which];
  if (typeof boxID != 'undefined' && uI) {
    $(boxID).toggleClass('accent-1');
  }
}
