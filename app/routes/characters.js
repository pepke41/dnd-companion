import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  session: service(),
  model: function() {
    if (this.get("session.isAuthenticated")) {
      return this.store.findAll("character");
    }
  }
});
