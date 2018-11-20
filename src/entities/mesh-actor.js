import Actor from './actor';

class MeshActor extends Actor {
  constructor(props) {
    super(props);
    this.el.setAttribute('gltf-model', props.mesh);
    this.el.setAttribute('scale', props.scale || { x: 1, y: 1, z: 1 });
  }
}

export default MeshActor;
