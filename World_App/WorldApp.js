// import { container } from 'webpack';
import { World } from '../SceneCreation/World.js';
function main() {
  const container = document.querySelector('#scene-container');
  const world = new World(container);
  world.render();
}
main();
