import {
  BoxBufferGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  TextureLoader,
  Color,
} from 'https://cdn.skypack.dev/three@0.132.2';

function createCube(colorPick = null, rotation = null) {
  //color creation:
  //const orange1 = new Color(0xffa500);
  //const textureLoader = new TextureLoader();

  // create a geometry
  const geometry = new BoxBufferGeometry(1, 1, 1);
  // create a default (white) Basic material
  const material = new MeshStandardMaterial({ color: colorPick });
  //Design the six sides of the cube;
  const materials = [
    new MeshStandardMaterial({ color: 'red' }),
    new MeshStandardMaterial({ color: 'green' }),
    new MeshStandardMaterial({ color: 'yellow' }),
    new MeshStandardMaterial({ color: 'purple' }),
    new MeshStandardMaterial({ color: 'blue' }),
    new MeshStandardMaterial({ color: 'white' }),
  ];

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, materials);
  cube.rotation.set(0, 0, 0);
  cube.userData.draggable = true;
  cube.userData.name = 'CUBE';
  //cube tick for animated rotations
  //if (rotation != null) {
  cube.tick = () => {
    // increase the cube's rotation each frame
    cube.rotation.z += 0.0; //+ rotation;
    cube.rotation.x += 0.0; //+ rotation;
    cube.rotation.y += 0.0 + rotation;
  };
  //}

  return cube;
}

export { createCube };
