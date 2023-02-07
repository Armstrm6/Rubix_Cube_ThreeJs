import { PerspectiveCamera } from 'https://cdn.skypack.dev/three@0.132.2';

function createCamera(container) {
  const camera = new PerspectiveCamera(
    200, // fov = Field Of View
    100, // aspect ratio (dummy value)
    .1, // near clipping plane
    2000 // far cliping plane
  );

  // move the camera back so we can view the scene
  camera.position.set(0, -.5, 1);

  return camera;
}

export { createCamera };
