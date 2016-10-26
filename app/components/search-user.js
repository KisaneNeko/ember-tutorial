import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['search-user'],
  value: '',

  init() {
    this._super(...arguments);
    this.get('filter')('').then(results => this.set('results', results));
    const model = this.get('model');
    console.log(model);

  },

  actions: {
    handleSearch() {
      let filterInputValue = this.get('value');
      let filterAction = this.get('filter');

      filterAction(filterInputValue).then(result => this.set('results', result));
    }
  }
});
