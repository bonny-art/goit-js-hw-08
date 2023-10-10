// В завданні 2 домашньої роботи уважно читаємо ТЗ,
// щоб правильно використати потрібні методи бібліотеки,
// а саме метод on() з подією timeupdate і метод
// setCurrentTime() для встановлення часу після
// перезавантаження сторінки.

// Також не забуваємо перевіряти
// наявність данних, коли читаєте з localStorage. Якщо
// в localStorage немає ключа, який ви намагаєтесь прочитати,
// метод getItem(key) поверне вам null.

import Vimeo from '@vimeo/player';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', function (currentTime) {
  console.log(currentTime);
  localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
});

const currentTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
).seconds;

console.log(currentTime);

player.setCurrentTime(currentTime);
