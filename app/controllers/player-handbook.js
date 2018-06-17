import Controller from "@ember/controller";
import { computed } from "@ember/object";

export default Controller.extend({
  friendly: computed.filterBy("model", "type", "friendly"),
  enemy: computed.filterBy("model", "type", "enemy"),
  other: computed.filterBy("model", "type", "other"),
  addInfoDialog: false,
  infoType: "",

  actions: {
    appendToList(nameValue, descriptionValue) {
      var newInfo = this.store.createRecord("world-info", {
        name: nameValue,
        description: descriptionValue,
        type: this.get("infoType")
      });
      return newInfo.save().then(() => {
        this.set("addInfoDialog", false);
        this.set("nameValue", undefined);
        this.set("descriptionValue", undefined);
      });
    },
    openDialog(name) {
      this.set("addInfoDialog", true);
      this.set("infoType", name);
    },
    closeDialog() {
      this.set("addInfoDialog", false);
    },
    deleteItem(item) {
      item.destroyRecord();
    }
  }
});
