// $('.game-gui').on('mousedown', function () {
//   playTone(toneObject['3'])
// })
//
// $('.game-gui').on('mouseup', function () {
//     stopTone(toneObject['3'])
// })

let toneObject = {
  // boxID : toneID
  1 : '#c1',
  2 : '#e1',
  3 : '#g1',
  4 : '#b1',
  5 : '#c8',
}

function playTone (toneID) {
  $(toneID)[0].play();
}

function stopTone (toneID) {
  $(toneID)[0].animate({volume: 0}, 200);
  setTimeout(function () {$(toneID)[0].pause()},300);
  setTimeout(function () {$(toneID)[0].currentTime = 0},301)
}
