import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  type: undefined,
  title: undefined,
  description: undefined,
  events: null,

  initializeEvents: Ember.on('init', function () {
    this.set('events', Ember.A());
  }),

  actions: {
    handleTrixAction(jqEvent) {
      this.get('events').unshiftObject(Ember.Object.create({
        type: jqEvent.type
      }));
      this.set('descriptionValue', jqEvent.target.value);
    }
  }
});
