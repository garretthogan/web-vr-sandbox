export default {
  name: 'back-up-on-hover',
  init: function() {
    const el = this.el;
    el.addEventListener('mouseenter', () => {
      this.isTargeted = true;
    });
    el.addEventListener('mouseleave', () => {
      this.isTargeted = false;
    });
  },
  tick: function() {
    if (!this.isTargeted) return;

    this.backUp();
  },
  backUp: function() {
    const el = this.el;
    const currentPosition = el.getAttribute('position');
    console.log({ currentPosition });
    el.setAttribute(
      'position',
      Object.assign({}, currentPosition, { z: currentPosition.z - 0.0025 })
    );
  }
};
