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
class LinearAlgebra {
  // 1. Create an instance of the World app
  constructor(container) {
    console.log(container);
    this.camera = createCamera();
    this.scene = createScene();
    this.renderer = createRenderer();
    container.append(this.renderer.domElement);

    //Vector creation
    const origin = new Vector3();

    //Object and Light creation
    const light = new createLights();
    const geometry1 = new BoxBufferGeometry(2, 2, 2);
    const geometry2 = new BoxBufferGeometry(2, 2, 2);
    const material1 = new MeshStandardMaterial({ color: 'purple' });
    const material2 = new MeshStandardMaterial({ color: 'green' });
    const meshA = new Mesh(geometry1, material1);
    // const meshB = new Mesh(geometry2, material2);
    const mesh = new Mesh(geometry2, material2);
    //resizer to adjust objects to be proportional to the screen / div size.
    const resizer = new Resizer(container, this.camera, this.renderer);

    //Scene manipulation
    this.scene.add(mesh, light);
    this.scene.add(meshA);
    meshA.rotation.set(-2, -2, -2);
    mesh.position.x = 0;
    meshA.position.x = 0;
    mesh.rotation.set(2, 2, 2);
    this.scene.add(meshB, light);
    meshB.position.x = -3;
  }

  render() {
    // draw a single frame
    this.renderer.render(this.scene, this.camera);
  }
}

export { LinearAlgebra };
