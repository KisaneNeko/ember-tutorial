import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterBylastname(param) {
      if (param !== '') {
        return this.get('store').query('user', { lastname: param });
      } else {
        return this.get('store').findAll('user');
      }
    }
  }
});
