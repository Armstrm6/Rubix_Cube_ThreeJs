import { createCamera } from '../Classes/camera.js';
import { createCube } from '../Classes/createCube.js';
import { createScene } from '../Classes/scene.js';

import { createOrbitalControls } from '../Classes/controls.js';
import { createRenderer } from '../Classes/renderer.js';
import { Resizer } from '../Classes/Resizer.js';
import { createLights } from '../Classes/createLights.js';
import { Loop } from '../Classes/createLoop.js';

//module scoped
let camera;
let renderer;
let scene;

//World class
class OrbitalControlsInput {
  // 1. Create an instance of the World app
  constructor(container) {
    //Class specific elements. Must be defined with "this."
    console.log(container);
    this.camera = createCamera();
    this.scene = createScene();
    this.renderer = createRenderer();
    this.loop = new Loop(this.camera, this.scene, this.renderer);

    container.append(this.renderer.domElement);

    //Object and Light creation
    const light = new createLights();
    const cube = new createCube();

    //system dependant resource creation.
    const resizer = new Resizer(container, this.camera, this.renderer);

    const controls = new createOrbitalControls(
      this.camera,
      this.renderer.domElement
    );

    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;

    this.loop.updatables.push(controls);

    this.loop.start()
    //scene manipulation
    this.scene.add(cube, light, resizer);
    cube.rotation.set(-1, 3, 2);

  } 

  render() {
    // draw a single frame
    this.renderer.render(this.scene, this.camera);
  }
}

export { OrbitalControlsInput };
