import Component from '@ember/component';
import { task } from 'ember-concurrency';

export default Component.extend({
  character: undefined,
  editMode: false,

  updateCharacter: task(function *() {
    const currentHealth = this.get('current_health');
    const character = this.get('character');

    character.set('current_health', currentHealth);

    yield character.save();

    this.reset();
  }),

  reset() {
    this.setProperties({
      editMode: false,
      current_health: undefined
    });
  },

  actions: {
    editCharacter() {
      this.set("editMode", true);
    },
    reset() {
      this.reset();
    }
  }
});
