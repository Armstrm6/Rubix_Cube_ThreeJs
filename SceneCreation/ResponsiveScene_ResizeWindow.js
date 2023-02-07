import { createCamera } from '../Classes/camera.js';
import { createCube } from '../Classes/cube.js';
import { createScene } from '../Classes/scene.js';

import { createRenderer } from '../Classes/renderer.js';
import { Resizer } from '../Classes/Resizer.js';
import { createLights } from '../Classes/createLights.js';
import {
  Mesh,
  BoxBufferGeometry,
  MeshStandardMaterial,
  Vector3,
} from 'https://cdn.skypack.dev/three@0.132.2';

//module scoped
let camera;
let renderer;
let scene;

//World class
class ResponsiveScene {
  // 1. Create an instance of the World app
  constructor(container) {
    console.log(container);
    this.camera = createCamera();
    this.scene = createScene();
    this.renderer = createRenderer();
    container.append(this.renderer.domElement);

    //Object and Light creation
    const light = new createLights();
    const geometry1 = new BoxBufferGeometry(2, 2, 2);
    const material1 = new MeshStandardMaterial({ color: 'purple' });
    const meshA = new Mesh(geometry1, material1);

    //resizer to adjust objects to be proportional to the screen / div size.
    const resizer = new Resizer(container, this.camera, this.renderer);

    //IF WINDOW SIZE CHANGES, THE OBJECT SIZE WILL CHANGE WITH IT.
    resizer.onResize = () => {
      this.render();
    };
    //Scene manipulation
    this.scene.add(meshA, light);
    meshA.rotation.set(2, 2, 2);
    meshA.position.x = 0;
    // this.scene.add(meshB, light);
    // meshB.position.x = -3;
  }

  render() {
    // draw a single frame
    this.renderer.render(this.scene, this.camera);
  }
}

export { ResponsiveScene };
