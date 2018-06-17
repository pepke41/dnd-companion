import Component from "@ember/component";

export default Component.extend({
  infoType: undefined,

  name: undefined,

  list: undefined,

  itemEdited: undefined,

  "on-submit": undefined,

  actions: {
    submit() {
      const nameValue = this.get("nameValue");
      const descriptionValue = this.get("descriptionValue");

      this["on-submit"](nameValue, descriptionValue).then(() => {
        this.set("nameValue", undefined);
        this.set("descriptionValue", undefined);
      });
    },
    editItem(item) {
      this.set("itemEdited", item);
    },
    updateItem(name, description) {
      var item = this.get("itemEdited");
      item.set("name", name);
      item.set("description", description);
      item.save().then(() => {
        this.set("itemEdited", undefined);
      });
    },
    closeDialog() {
      this.set("itemEdited", undefined);
    }
  }
});
