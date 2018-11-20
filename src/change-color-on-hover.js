export default {
  schema: {
    color: {
      default: 'red'
    }
  },
  init: function() {
    const data = this.data;
    const el = this.el;
    const defaultColor = el.getAttribute('material').color;

    el.addEventListener('mouseenter', function() {
      el.setAttribute('color', data.color);
    });

    el.addEventListener('mouseleave', function() {
      el.setAttribute('color', defaultColor);
    });
    console.log('INIT');
  }
};
