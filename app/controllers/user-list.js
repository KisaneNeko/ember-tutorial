import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterBylastname(param) {
      if (param !== '') {
        return this.get('store').query('user', { lastname: param });
      } else {
        return this.get('store').findAll('user');
      }
    },
    addUser() {
      const newUser = this.store.createRecord('user',
        {
          name: this.get('name'),
          lastname: this.get('lastname'),
          birthdate: this.get('birthdate'),
          personalin: this.get('personalin'),
          city: this.get('city'),
          phone: this.get('phone'),
          email: this.get('email')
      });

      newUser.save();
      this.setProperties({
        name: '',
        lastname: '',
        birthdate: '',
        personalin: '',
        city: '',
        phone: '',
        email: ''
      });
    },

    deleteUser(id) {
      this.store.findRecord('user', id).then(user => {
         user.destroyRecord();
      });
    }
  }
});
