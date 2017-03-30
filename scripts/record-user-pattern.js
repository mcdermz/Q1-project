let recordVars = {
  isArmed: userRecord,
  userPattern: [],
}

$('#playback-btn').click(playbackButton)

$('#clear-btn').click(clearButton)

function playbackButton() {
  let $playback = $('#playback-btn');
  $playback.toggleClass('start-playback');
  if ($('#user-record').prop('checked')){
    $('#user-record').prop('checked', false)
  }

  if ($playback.hasClass('start-playback')){
    $playback.text('stop playback');
    startPlayback(0);
  } else {
    $playback.text('start playback');
    gameVars.uI = true;
  }
}

function clearButton() {
  $('#playback-btn').removeClass('start-playback');
  recordVars.userPattern = [];
  $('#playback-btn, #clear-btn').addClass('disabled');
  gameVars.uI = true;
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
