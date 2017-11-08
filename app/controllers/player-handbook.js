import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

  friendly: computed.filterBy('model', 'type', 'friendly'),
  enemy: computed.filterBy('model', 'type', 'enemy'),
  other: computed.filterBy('model', 'type', 'other'),

  actions: {
    appendToList(type, name, description) {
      var newInfo = this.store.createRecord('world-info', {
        name: name,
        description: description,
        type: type
      });
      return newInfo.save();
    }
  }
});
