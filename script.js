const button = document.getElementById('loveButton');

button.addEventListener('click', () => {
  alert('Eu te amo mais do que palavras conseguem explicar ❤️');
});

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  heart.innerHTML = '❤️';

  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
  heart.style.fontSize = (Math.random() * 20 + 10) + 'px';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);
