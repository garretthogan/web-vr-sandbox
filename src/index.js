import components from './components';

components.forEach(c => window.AFRAME.registerComponent(c.name, c));
