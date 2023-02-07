import { basicRubixCube } from '../SceneCreation/BasicRubixCube.js';
function main() {
  const container = document.querySelector('#scene-container');
  const basic_RubixCube = new basicRubixCube(container);
  basic_RubixCube.start();
}
main();
