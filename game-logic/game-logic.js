console.log('game-logic sanity check!');
let boxPattern = [1,2,3,4,5,4,3,2,1];

function boxToggle(id, dStart) {
  $(`#${id}`).delay(dStart).animate(
    { opacity: '1' }, 0, 'linear', function () { $(this).addClass('accent-1');
   });
  $(`#${id}`).delay(600).animate(
    { opacity: '1' }, 100, 'linear', function () { $(this).removeClass('accent-1');
  });
}

let i

function startGame(i){
  let boxActive = `#${boxPattern[i]}`;
  $.when($(boxActive)
    .animate({opacity: '1'}, 300, 'linear', function() {
      $(this).addClass('accent-1');
    })
    .animate({opacity: '1'}, 300, 'linear', function() {
      $(this).removeClass('accent-1')
    })
  ).done(function(){
    i++;
    if (i<boxPattern.length){
      startGame(i);
    }
  });
}

$('#start-btn').on('click', function() {
    i = 0;
    startGame(i);
  })
  //  boxToggle(1,0);
  //  boxToggle(2,800);
  //  boxToggle(3,1600);
  //  boxToggle(4,2400);
  //  boxToggle(5,3200);
  //  boxToggle(1,4000);
