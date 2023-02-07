import {
  AmbientLight,
  DirectionalLight,
  HemisphereLight,
} from 'https://cdn.skypack.dev/three@0.132.2';

function createLights() {
  // Create a directional light
  const light1 = new HemisphereLight('white', 20);
  const light2 = new HemisphereLight('white', 20);
  const light3 = new AmbientLight('skyblue', 3);
  // move the light right, up, and towards us
  light1.position.set(0, 10, 0);
  light2.position.set(0, -10, -0);

  return light3;
}

export { createLights };
