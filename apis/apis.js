console.log('apis sanity!!!')
window.storedPattern

// function $randPattern () {
  $.ajax({
    method: 'POST',
    url: 'https://api.random.org/json-rpc/1/invoke',
    data: '{"jsonrpc":"2.0","method":"generateIntegers","params":{"apiKey":"00000000-0000-0000-0000-000000000000","n":55,"min":1,"max":5,"replacement":true,"base":10},"id":8072}',
    dataType: 'json',
  }).then((data) => {
    window.storedPattern = data.result.random.data
    window.boxPattern = patternIncrement(window.storedPattern)

  }).catch((err) => {
    console.log(err);
  });
// };
function patternIncrement (p){
  begin = level + initial;
  end = begin + level + 1;
  initial = begin;
  level++;
  return p.slice(begin, end)
}
