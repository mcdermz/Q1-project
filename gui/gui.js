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
  hotKeys(e);
});

// $('body').on('keypress', function (e) {
//
// })


function hotKeys(e) {
  let keyAction = {
    87: '1',
    69: '2',
    65: '3',
    83: '5',
    68: '4',
  };
  let key = e.which;
  let keyID = '#' + keyAction[key];
  let boxID;
  if (typeof keyID != 'undefined' && uI) {
    boxID = keyID;
    $(boxID).toggleClass('accent-1');
  }
}
