button = document.querySelector('#cookie_button');

counter = 2;
let jumpSound = new Audio('sounds/jump.mp3');
button.addEventListener('click', () => {
  jumpSound.volume = 0.2;
  jumpSound.play();
  document.querySelector('img').classList.add('jump');
  console.log('lol');
  document.querySelector('#counter').innerHTML = counter++;
  setTimeout(() => {
    document.querySelector('img').classList.remove('jump');
  }, 200);
});

console.log(counter);
