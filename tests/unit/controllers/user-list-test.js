import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:user-list', 'Unit | Controller | user list', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let ctrl = this.subject();

  ctrl.set('name', 'foo');
  ctrl.set('lastname', 'foo');
  ctrl.set('birthdate', 'foo');
  ctrl.set('personalin', 'foo');
  ctrl.set('city', 'foo');
  ctrl.set('phone', 'foo');
  ctrl.set('email', 'foo');
  ctrl.set('store', {
    createRecord: (prop, data) => {
        assert.equal(prop, 'user');
        assert.deepEqual(data, {
          name: 'foo',
          lastname: 'foo',
          birthdate: 'foo',
          personalin: 'foo',
          city: 'foo',
          phone: 'foo',
          email: 'foo'
        });
      return {
        save: () => assert.equal(true, true)
      };
    }
  });

  ctrl.send('addUser');
});
