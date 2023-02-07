import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js';
import { DragControls } from ' https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/DragControls.js';

function createOrbitalControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.1;
  controls.enableZoom = true;
  controls.autoRotate = true;
  controls.tick = () => controls.update();
  return controls;
}

function createDragControls(objects, camera, canvas) {
  console.log(objects)
  const dragControls = new DragControls(objects, camera, canvas);
  dragControls.addEventListener('dragstart', function (event) {
    console.log('eee')
    event.object.material.emissive.set(0xaaaaaa);
  });

  dragControls.addEventListener('dragend', function (event) {
    event.object.material.emissive.set(0x000000);
  });
}

export { createOrbitalControls, createDragControls };
