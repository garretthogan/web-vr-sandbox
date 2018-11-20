class EntityManager {
  constructor(scene) {
    this.entities = [];
    this.scene = scene;
  }

  register(entities) {
    entities.forEach(e => {
      this.scene.appendChild(e.el);
    });
  }
}

export default EntityManager;
