class Actor {
  constructor(props) {
    const el = document.createElement('a-entity');
    el.setAttribute('position', props.position || { x: 0, y: 0, z: 0 });
    el.setAttribute('rotation', props.rotation || { x: 0, y: 0, z: 0 });

    this.el = el;
  }
  register = scene => {
    scene.appendChild(this.el);
  };
}

export default Actor;
