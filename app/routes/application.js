import Ember from "ember";
export default Ember.Route.extend({
  session: Ember.inject.service(),
  beforeModel: function() {
    return this.get("session")
      .fetch()
      .catch(function() {});
  },
  accessDenied: function() {
    this.transitionTo("logged-out");
  },
  actions: {
    signIn: function() {
      this.get("session")
        .open("firebase", { provider: "google" })
        .then(() => {
          this.transitionTo("player-handbook");
        });
    },
    signOut: function() {
      this.get("session")
        .close()
        .then(() => {
          this.accessDenied();
        });
    },
    accessDenied: function() {
      this.accessDenied();
    }
  }
});
