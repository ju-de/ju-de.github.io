function label(item) {
  let display = document.getElementById('display');
  display.innerText = item.id;

}

function reset() {
  console.log('reset');
  let display = document.getElementById('display');
  display.innerText = 'hello!';
}