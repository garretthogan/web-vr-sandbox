class SkyBox {
  constructor(props) {
    const el = document.createElement('a-sky');
    el.setAttribute('height', props.height || 2048);
    el.setAttribute('radius', props.radius || 30);
    el.setAttribute('src', props.src);
    el.setAttribute('theta-length', props.thetaLength || 90);
    el.setAttribute('width', props.width || 2048);

    this.el = el;
  }
}

export default SkyBox;
