import { OrbitalControlsInput } from '../SceneCreation/OrbitalControls_Input.js';
function main() {
  const container = document.querySelector('#scene-container');
  const orbitalControls_Input = new OrbitalControlsInput(container);
  orbitalControls_Input.render();
}
main();
