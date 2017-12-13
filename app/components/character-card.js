import Component from '@ember/component';
import { task } from 'ember-concurrency';

export default Component.extend({
  character: undefined,
  editMode: false,

  updateCharacter: task(function *() {
    yield this.get('character').save();
    this.set('editMode', false);
  }),

  actions: {
    editCharacter() {
      this.set("editMode", true);
    },
    reset() {
      this.get('character').rollbackAttributes();
      this.set('editMode', false);
    }
  }
});
