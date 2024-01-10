button = document.querySelector('#cookie_button');
counter = 1;
button.addEventListener('click', () => {
  console.log('lol');
  document.querySelector('#counter').innerHTML = counter++;
});

console.log(counter);
