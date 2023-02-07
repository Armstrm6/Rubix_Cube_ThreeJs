import { createCamera } from '../Classes/camera.js';
import { createCube } from '../Classes/cube.js';
import { createScene } from '../Classes/scene.js';

import { createRenderer } from '../Classes/renderer.js';
import { Resizer } from '../Classes/Resizer.js';
import { createLights } from '../Classes/createLights.js';

//module scoped
let camera;
let renderer;
let scene;

//World class
class World {
  // 1. Create an instance of the World app
  constructor(container) {
    console.log(container);
    this.camera = createCamera();
    this.scene = createScene();
    this.renderer = createRenderer();
    container.append(this.renderer.domElement);

    //Object and Light creation
    const cube = createCube();
    const light = createLights();
    const resizer = new Resizer(container, this.camera, this.renderer);

    //Scene manipulation
    this.scene.add(cube, light);
    //cube.position.z = -5;
    //cube.position.y = 2;
  }

  render() {
    // draw a single frame
    this.renderer.render(this.scene, this.camera);
  }
}

export { World };
