AFRAME.registerComponent('change-color-on-hover', {
  schema: {
    color: { default: 'red', type: 'string' }
  },

  init: function() {
    const el = this.el;
    const data = this.data;
    var defaultColor = el.getAttribute('material').color;

    el.addEventListener('mouseenter', function() {
      el.setAttribute('color', data.color);
      console.log('COLOR: ', el.getAttribute('color'));
    });
    el.addEventListener('mouseleave', function() {
      el.setAttribute('color', defaultColor);
      console.log('COLOR: ', el.getAttribute('color'));
    });
    console.log({ data, el });
  },

  update: function() {
    const el = this.el;
    const data = this.data;
  }
});
