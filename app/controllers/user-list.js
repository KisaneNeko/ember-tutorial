import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByLastName(param) {
      if (param !== '') {
        return this.get('store').query('user', { lastName: param });
      } else {
        return this.get('store').findAll('user');
      }
    }
  }
});
