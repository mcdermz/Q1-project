console.log('game-logic sanity check!');

$('.game-gui').on('mousedown', '.col', function (){
  $(this).toggleClass('accent-1')
})
$('.game-gui').on('mouseup', '.col', function (){
  $(this).toggleClass('accent-1')
})
