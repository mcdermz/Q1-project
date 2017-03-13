console.log('gui sanity check!');

$('.game-gui').on('mousedown', '.col', function (){
  $(this).toggleClass('accent-1')
})
$('.game-gui').on('mouseup', '.col', function (){
  $(this).toggleClass('accent-1')
})

$('body').on('keydown keyup', function (e){
  let keyAction = {
    87 : '#1',
    69 : '#2',
    65 : '#3',
    83 : '#5',
    68 : '#4',
  };
  let key = e.which;
  let keyID = keyAction[key];
  let boxID;
  if (typeof keyID != 'undefined'){
    boxID = keyID;
    $(boxID).toggleClass('accent-1');
  }
})
