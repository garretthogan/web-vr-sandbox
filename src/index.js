import components from './components';
import MeshActor from './entities/mesh-actor';

const TREE = '/assets/xmas-tree/xmas-tree.gltf';
const SNOWMAN = '/assets/snowman/snowman.gltf';
const CABIN = '/assets/winter-cabin/winter-cabin.gltf';

const createTree = (x, y, z) => {
  return new MeshActor({
    position: { x, y, z },
    mesh: TREE
  }).el;
};

const createSnowman = (x, y, z, rot = 0) => {
  return new MeshActor({
    position: { x, y, z },
    rotation: { x: 0, y: rot, z: 0 },
    mesh: SNOWMAN
  }).el;
};

const createCabin = (x, y, z, rot = 0, scale = 1) => {
  return new MeshActor({
    position: { x, y, z },
    rotation: { x: 0, y: rot, z: 0 },
    scale: { x: scale, y: scale, z: scale },
    mesh: CABIN
  }).el;
};

components.forEach(c => window.AFRAME.registerComponent(c.name, c));

window.addEventListener('load', () => {
  const scene = document.querySelector('a-scene');
  scene.appendChild(createTree(2, -1, -3));
  scene.appendChild(createSnowman(-1, 2, -2.2, -45));
  scene.appendChild(createCabin(-1, 3.6, -5, -180, 2));
});
