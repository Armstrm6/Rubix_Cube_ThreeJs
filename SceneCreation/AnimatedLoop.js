import { createCamera } from '../Classes/camera.js';
import { createCube } from '../Classes/createCube.js';
import { createScene } from '../Classes/scene.js';

import { createRenderer } from '../Classes/renderer.js';
import { Resizer } from '../Classes/Resizer.js';
import { createLights } from '../Classes/createLights.js';
import { Loop } from '../Classes/createLoop.js';

//module scoped
let camera;
let renderer;
let scene;

//World class
class AnimatedLoop {
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

    const cube = new createCube('purple', 0.01);
    const cube2 = new createCube('green');
    const cube3 = new createCube('blue', -0.001);
   
    //resizer to adjust objects to be proportional to the screen / div size.
    const resizer = new Resizer(container, this.camera, this.renderer);

    //UPDATE ANIMATED LOOP AFTER ADDING TICK CLASS TO CUBE AND ANIMATION:
    this.loop.updatables.push(cube, cube2, cube3);

    //scene manipulation
    this.scene.add(cube, cube2, cube3, light, resizer);
    cube.rotation.set(2, 2, 2);
  }

  render() {
    // draw a single frame
    this.renderer.render(this.scene, this.camera);
  }

  start() {
    this.loop.start();
  }

  stop() {
    this.loop.stop();
  }
}

export { AnimatedLoop };
