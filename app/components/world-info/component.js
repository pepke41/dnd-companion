import Component from '@ember/component';

export default Component.extend({
  infoType: undefined,

  name: undefined,

  list: undefined,

  'on-submit': undefined,

  actions: {
    submit() {
      const nameValue = this.get('nameValue');
      const descriptionValue = this.get('descriptionValue');

      this['on-submit'](nameValue, descriptionValue).then(() => {
        this.set('nameValue', undefined);
        this.set('descriptionValue', undefined);
      });
    },
  }
});
