import { createCamera } from '../Classes/camera.js';
import { createCube } from '../Classes/createCube.js';
import { createScene } from '../Classes/scene.js';

import { createRenderer } from '../Classes/renderer.js';
import { Resizer } from '../Classes/Resizer.js';
import { createLights } from '../Classes/createLights.js';
import { Loop } from '../Classes/createLoop.js';
import {
  createOrbitalControls,
  createDragControls,
} from '../Classes/controls.js';

import {
  Vector2,
  Raycaster,
  Group,
  Object3D,
} from 'https://cdn.skypack.dev/three@0.132.2';

class basicRubixCube {
  //global variables

  constructor(container) {
    //Class specific elements. Must be defined with "this."
    console.log(container);
    this.camera = createCamera();
    this.scene = createScene();
    this.renderer = createRenderer();

    this.loop = new Loop(this.camera, this.scene, this.renderer);

    //interaction with the screen
    this.controls = new createOrbitalControls(
      this.camera,
      this.renderer.domElement
    );

    this.mouse = {
      x: 1.0,
      y: 0.0,
    };
    this.rayCaster = new Raycaster();
    this.Group = new Group();
    container.append(this.renderer.domElement);

    //object and light creation
    const light = new createLights();
    const resizer = new Resizer(container, this.camera, this.renderer);
    const rotation = 0.0;
    let cubes = [];
    this.scene.add(light);

    //Create 3x3 matrix of cubes
    for (let i = 0; i < 3; i++) {
      const cube1 = new createCube(null, rotation);
      cube1.position.set(-1.2, 0 + i + i * 0.2, -1.2);
      const cube2 = new createCube(null, rotation);
      cube2.position.set(0, 0 + i + i * 0.2, -1.2);
      const cube3 = new createCube(null, rotation);
      cube3.position.set(1.2, 0 + i + i * 0.2, -1.2);
      const cube4 = new createCube(null, rotation);
      cube4.position.set(-1.2, 0 + i + i * 0.2, 0);
      const cube5 = new createCube(null, rotation);
      cube5.position.set(0, 0 + i + i * 0.2, 0);
      const cube6 = new createCube(null, rotation);
      cube6.position.set(1.2, 0 + i + i * 0.2, 0);
      const cube7 = new createCube(null, rotation);
      cube7.position.set(-1.2, 0 + i + i * 0.2, 1.2);
      const cube8 = new createCube(null, rotation);
      cube8.position.set(0, 0 + i + i * 0.2, 1.2);
      const cube9 = new createCube(null, rotation);
      cube9.position.set(1.2, 0 + i + i * 0.2, 1.2);
      cubes.push(cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9);
      this.scene.add(
        cube1,
        cube2,
        cube3,
        cube4,
        cube5,
        cube6,
        cube7,
        cube8,
        cube9
      );
      // Animations
      this.loop.updatables.push(
        this.controls,
        cube1,
        cube2,
        cube3,
        cube4,
        cube5,
        cube6,
        cube7,
        cube8,
        cube9
      );
    }

    //

    console.log(cubes);
    //GAME FUNCTIONALIY

    window.addEventListener('mousedown', this.cubeSelect, false);
  }

  render() {
    // draw a single frame
    this.rayCaster.setFromCamera(this.mouse, this.camera);
    this.renderer.render(this.scene, this.camera);
  }

  start() {
    this.loop.start();

    this.controls.addEventListener('change', () => {
      this.render();
    });
  }

  stop() {
    this.loop.stop();
  }

  //GAME FUNCTIONALITY!!!!

  //Cube selection and color change.
  cubeSelect = (event) => {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1.25;
    console.log(window);
    this.selectedCube();
  };

  selectedCube() {
    //for (let x = 0; x < 3; x++) {
    this.rayCaster.setFromCamera(this.mouse, this.camera);
    const INTERSECTS = this.rayCaster.intersectObjects(
      this.scene.children,
      false
    );
    console.log(INTERSECTS);
    for (let i = 0; i < INTERSECTS.length; i++) {
      if (INTERSECTS[0].object.userData.draggable == true) {
        console.log(INTERSECTS[0].object.userData.name);
      }
      // console.log(
      //   INTERSECTS[0].object.position.x,
      //   INTERSECTS[0].object.position.y,
      //   INTERSECTS[0].object.position.z
      // );
    }
  }
}

export { basicRubixCube };
