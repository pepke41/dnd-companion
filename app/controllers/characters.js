import Controller from "@ember/controller";

export default Controller.extend({
  addInfoDialog: false,
  actions: {
    addCharacter: function() {
      var newCharacter = this.store.createRecord("character", {
        character_name: this.get("name"),
        max_health: this.get("max_health"),
        current_health: this.get("current_health")
      });
      return newCharacter.save().then(() => {
        this.set("name", undefined);
        this.set("max_health", undefined);
        this.set("current_health", undefined);
        this.set("addInfoDialog", false);
      });
    },
    openDialog() {
      this.set("addInfoDialog", true);
    },
    closeDialog() {
      this.set("addInfoDialog", false);
    }
  }
});
