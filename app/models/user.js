import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  lastname: DS.attr(),
  birthdate: DS.attr(),
  personalin: DS.attr(),
  city: DS.attr(),
  phone: DS.attr(),
  email: DS.attr()
});
