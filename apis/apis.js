console.log('apis sanity!!!');

window.storedPattern;

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

let begin;
let end = 2;
let level = 1;
let initial = -1;

function patternIncrement(p) {
  begin = level + initial;
  end = begin + level + 1;
  initial = begin;
  level++;
  return p.slice(begin, end);
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
