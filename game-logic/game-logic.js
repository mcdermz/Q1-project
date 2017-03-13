console.log('game-logic sanity check!');
let boxPattern = [1,2,3,4,5];

function boxToggle(id, dStart) {
  $(`#${id}`).delay(dStart).animate(
    { opacity: '1' }, 0, 'swing', function () { $(this).addClass('accent-1');
   });
  $(`#${id}`).delay(600).animate(
    { opacity: '1' }, 100, 'swing', function () { $(this).removeClass('accent-1');
  });
}

$('#start-btn').on('click', function() {
   boxToggle(1,0);
   boxToggle(2,800);
   boxToggle(3,1600);
   boxToggle(4,2400);
   boxToggle(5,3200);
})
