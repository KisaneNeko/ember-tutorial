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
      const name = this.get('name');
      const lastname = this.get('lastname');
      const birthdate = this.get('birthdate');
      const personalin = this.get('personalin');
      const city = this.get('city');
      const phone = this.get('phone');
      const email = this.get('email');
      const newUser = this.store.createRecord('user', {
        name,
        lastname,
        birthdate,
        personalin,
        city,
        phone,
        email
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
      })
    }
  }
});
