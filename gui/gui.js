console.log('gui sanity check!');

$('.game-gui').on('mousedown', '.col', function () {
  if (uI)
    $(this).toggleClass('accent-1')
})
$('.game-gui').on('mouseup', '.col', function () {
  if (uI)
    $(this).toggleClass('accent-1')
    userPattern.push($(this).attr('id'));
    console.log(userPattern);
})

$('body').on('keydown keyup', function (e){
  hotKeysUpDown(e);
});

$('body').on('keypress', function (e) {
  hotKeysPress(e);
})

function hotKeysPress(e) {
  let keyAction = {
    119: '1',
    101: '2',
    97: '3',
    115: '5',
    100: '4',
  };
  let key = e.which;
  console.log(key);
  let keyID = keyAction[key];
  if (typeof keyID != 'undefined' && uI) {
    userPattern.push(keyID);
    console.log(userPattern);
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
  let key = e.which;
  let boxID = '#' + keyAction[key];
  if (typeof boxID != 'undefined' && uI) {
    $(boxID).toggleClass('accent-1');
  }
}
