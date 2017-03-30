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
  if (recordVars.isArmed() && boxNum !== undefined) {
    recordVars.userPattern.push(boxNum);
    console.log(recordVars.userPattern);
  }
}
