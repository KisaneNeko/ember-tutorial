import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  actions: {
    delete(id) {
      this.get('delete')(id);
    },

    close() {
      this.set('isActive', false);
    },

    open() {
      this.set('isActive', true);
    }
  },

  init() {
    this._super(...arguments);
    const user = this.get('user');
    this.userId = this.get('user.id');
    this.set('isActive', false);
    this.set('labels', Object.keys(user.toJSON()));
  }
});
