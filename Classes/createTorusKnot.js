import {
  TorusKnotBufferGeometry,
  Mesh,
  MeshStandardMaterial,
} from 'https://cdn.skypack.dev/three@0.132.2';

function createTorusKnot(
  radius = 1,
  tube = 3,
  tubularSeg = 100,
  radialSeg = 16,
  colorPick,
  rotation = null
) {
  // create a geometry
  const geometry = new TorusKnotBufferGeometry(
    radius,
    tube,
    tubularSeg,
    radialSeg
  );

  // create a default (white) Basic material
  const material = new MeshStandardMaterial({ color: colorPick });

  // create a Mesh containing the geometry and material
  const torusKnot = new Mesh(geometry, material);
  torusKnot.rotation.set(-0.5, -0.1, 0.8);

  //cube tick for animated rotations
  torusKnot.tick = () => {
    // increase the cube's rotation each frame
    torusKnot.rotation.z += 0.0 + rotation;
    torusKnot.rotation.x += 0.0 + rotation;
    torusKnot.rotation.y += 0.0 + rotation;
  };

  return torusKnot;
}

export { createTorusKnot };
