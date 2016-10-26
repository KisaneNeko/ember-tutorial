import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  'last-name': DS.attr(),
  birthDate: DS.attr(),
  personalIn: DS.attr(),
  city: DS.attr(),
  phone: DS.attr(),
  email: DS.attr()
});
