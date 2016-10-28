//import { moduleForComponent, test } from 'ember-qunit';
//import hbs from 'htmlbars-inline-precompile';
//
//moduleForComponent('search-user', 'Integration | Component | search user', {
//  integration: true
//});
//
//test('it renders', function(assert) {
//  // Set any properties with this.set('myProperty', 'value');
//  // Handle any actions with this.on('myAction', function(val) { ... });
//
//  this.render(hbs`{{search-user}}`);
//
//  assert.equal(this.$().text().trim(), '');
//
//  // Template block usage:
//  this.render(hbs`
//    {{#search-user}}
//      template block text
//    {{/search-user}}
//  `);
//
//  assert.equal(this.$().text().trim(), 'template block text');
//});
//
//test('it filters', function (assert) {
//  this.set('userFilter', searchString => {
//    let expected = 'foo';
//    assert.isEqual(searchString, expected, 'entered search string is passed to filter');
//  });
//
//  this.render(hbs`{{search-user filter=(action userFilter) }}`);
//
//  this.$('input').val('foo');
//  this.$('input').change();
//
//  assert.equal(false, true);
//  assert.equal(this.get('results'), 'foo');
//});
