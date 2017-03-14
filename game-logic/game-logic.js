console.log('game-logic sanity check!');

let boxPattern = [1,4,2,3];

let i;
let uI = true;

function startGame(i){
  uI = false;
  let boxActive = `#${boxPattern[i]}`;
  $.when($(boxActive)
    .animate({opacity: '1'}, 300, 'linear', function() {
      $(this).toggleClass('accent-1');
    })
    .animate({opacity: '1'}, 300, 'linear', function() {
      $(this).toggleClass('accent-1')
    })
  ).done(function(){
    i++;
    if (i<boxPattern.length){
      startGame(i);
    } else{
      alert('pattern is done, your turn!')
      uI = true;
    }
  });
}

$('#start-btn').on('click', function() {
    i = 0;
    startGame(i);
  });
