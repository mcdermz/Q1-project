let recordVars = {
  isArmed: userRecord,
  userPattern: [],
}

$('#playback-btn').click(playbackButton)

function playbackButton() {
  let $playback = $('#playback-btn');
  $playback.toggleClass('start-playback');
  if ($playback.hasClass('start-playback')){
    $playback.text('stop playback')
    startPlayback(0);
  } else {
    $playback.text('start playback')
  }
}

function userRecord() {
 if ($('#user-record').prop('checked')){
   gameVars.isPlaying = false;
   return true;
 } else {
   return false;
 }
}

function recordToPattern (boxNum){
  let userPattern = recordVars.userPattern
  if (recordVars.isArmed() && boxNum !== undefined) {
    userPattern.push(boxNum);
    console.log(userPattern);
  }
  if (userPattern.length > 0){
    $('#playback-btn, #clear-btn').removeClass('disabled')
  }
}
