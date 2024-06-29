let button = document.querySelector('#check-btn');

button.addEventListener('click', () => {
  check();
});
var inputbox = document.querySelector('#text-input');
inputbox.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    check();
  }
});
function check() {
  
  var input = inputbox.value;
  if (input == "") {
    alert("Please input a value");
  }
  else {
    let word = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    document.querySelector('#result').innerHTML = word === word.split('').reverse().join('') ? input + " is a palindrome" : input + " is not a palindrome";

  }

inputbox.value="";
}