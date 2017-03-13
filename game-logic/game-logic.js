console.log('game-logic sanity check!');
let boxPattern = [1,2,3,4,5];

function boxToggle(id, delay) {
  $(`#${id}`).delay(0).animate(
    { opacity: '1' }, 0, 'swing', function () { $(this).addClass('accent-1');
   });
  $(`#${id}`).delay(delay).animate(
    { opacity: '1' }, 0, 'swing', function () { $(this).removeClass('accent-1');
  });
}

$('#start-btn').on('click', function() {
   boxToggle(1,500);
   boxToggle(2,500);
   boxToggle(3,500);
   boxToggle(4,500);
   boxToggle(5,500);
})
