let recordVars = {
  isArmed: userRecord,
  userPattern: [],
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
