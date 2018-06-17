import DS from "ember-data";

export default DS.Model.extend({
  character_name: DS.attr("string"),
  current_health: DS.attr("number"),
  max_health: DS.attr("number")
});
