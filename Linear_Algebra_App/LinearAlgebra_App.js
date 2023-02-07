import { LinearAlgebra } from '../SceneCreation/LinearAlgebra.js';
function main() {
  const container = document.querySelector('#scene-container');
  const linearAlgebra = new LinearAlgebra(container);
  linearAlgebra.render();
}
main();
