import { ResponsiveScene } from '../SceneCreation/ResponsiveScene_ResizeWindow.js';
function main() {
  const container = document.querySelector('#scene-container');
  const responsiveScene = new ResponsiveScene(container);
  responsiveScene.render();
}
main();
