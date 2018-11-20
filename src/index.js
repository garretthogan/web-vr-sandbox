import components from './components';
import MeshActor from './entities/mesh-actor';
import EntityManager from './entity-manager';
import SkyBox from './entities/sky-box';

const TREE = '/assets/xmas-tree/xmas-tree.gltf';
const SNOWMAN = '/assets/snowman/snowman.gltf';
const CABIN = '/assets/winter-cabin/winter-cabin.gltf';

const christmasScene = [
  new SkyBox({
    src: '#skyTexture'
  }),
  new MeshActor({
    position: { x: 2, y: -1, z: -3 },
    mesh: TREE
  }),
  new MeshActor({
    position: { x: -1, y: 2, z: -2.2 },
    rotation: { x: 0, y: -45, z: 0 },
    mesh: SNOWMAN
  }),
  new MeshActor({
    position: { x: -1.7, y: 5.3, z: -7 },
    rotation: { x: 0, y: -180, z: 0 },
    mesh: CABIN,
    scale: { x: 3, y: 3, z: 3 }
  })
];

components.forEach(c => window.AFRAME.registerComponent(c.name, c));

window.addEventListener('load', () => {
  const scene = document.querySelector('a-scene');
  const entityManager = new EntityManager(scene);

  entityManager.register(christmasScene);
});
