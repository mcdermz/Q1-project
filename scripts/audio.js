let toneObject = {
  // boxID : toneID
  1 : '#c1',
  2 : '#e1',
  3 : '#g1',
  4 : '#b1',
  5 : '#c8',
}

function playTone (toneID) {
  if (toneID)
    $(toneID)[0].play();
}

function stopTone (toneID) {
  if (toneID){
    $(toneID)[0].animate({volume: 0}, 100);
    setTimeout(function () {$(toneID)[0].pause()},100);
    setTimeout(function () {$(toneID)[0].currentTime = 0},101)
  }
}
