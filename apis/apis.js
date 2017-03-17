console.log('apis sanity!!!');

window.storedPattern;


let begin;
let end = 2;
let level = 1;
let initial = -1;

getStoredPattern(true);

function getStoredPattern (bool) {
  level = 1;
  initial = -1;
  return (bool) ? callRandomAPI() : getBackup();
}

function patternIncrement(p) {
  console.log(initial);
  begin = level + initial;
  end = begin + level + 1;
  initial = begin;
  level++;
  console.log(p.slice(begin, end));
  return p.slice(begin, end);
}

function pseudoRandomArr (num) {
  let newArr = [];
  for (let j = 0; j < num; j++) {
    let pseudoRand = Math.floor(1 + Math.random() * 5);
    newArr.push(pseudoRand.toString())
  }
  return newArr;
}

function getBackup () {
  window.storedPattern = pseudoRandomArr(55)
  window.boxPattern = patternIncrement(window.storedPattern);
}

function getRandomPattern (data) {
  window.storedPattern = data.result.random.data;
  window.boxPattern = patternIncrement(window.storedPattern);
  if (data.result.requestsLeft < 50000){
    console.error('Requests left: ' + data.result.requestsLeft);
  }
  if (data.result.bitsLeft < 100000) {
    console.error('WARNING! Bits left: ' + data.result.bitsLeft);
  }
}

function callRandomAPI () {
  $.ajax({
    method: 'POST',
    url: 'https://api.random.org/json-rpc/1/invoke',
    data: '{"jsonrpc":"2.0","method":"generateIntegers","params":{"apiKey":"00000000-0000-0000-0000-000000000000","n":55,"min":1,"max":5,"replacement":true,"base":10},"id":8072}',
    dataType: 'json',
  }).then( function (data){
    getRandomPattern(data);
  }).catch(function (err) {
    console.log(err);
  });
};
