import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(currentTime => {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(currentTime)
    );
  }, 1000)
);

const currentTime =
  JSON.parse(localStorage.getItem('videoplayer-current-time'))?.seconds ?? 0;

player.setCurrentTime(currentTime);
