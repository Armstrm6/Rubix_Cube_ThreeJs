import { Loop } from '../Classes/createLoop.js';
import { AnimatedLoop } from '../SceneCreation/AnimatedLoop.js';


function main() {
  const container = document.querySelector('#scene-container');
  const animatedLoop = new AnimatedLoop(container);
  animatedLoop.start();

  window.addEventListener('mouseup', () => {
    console.log(window);
    animatedLoop.start();
  });

  window.addEventListener('mousedown', () => {
    animatedLoop.stop();
  });

  window.addEventListener('keyup', (event) => {
    if (event.code == 'Space') {
      animatedLoop.stop();
    }
  });
}
main();
