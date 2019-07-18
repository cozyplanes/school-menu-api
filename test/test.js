const assert = require('assert');

const responseCache = require('../api/responseCache');
const menuExample = require('./menu-example.json');

describe('responseCache', function() {
  this.timeout(10000);

  it('fetches and returns array of menus', done => {
    responseCache('high', 'K100000460', 2018, 7)
    .then(data => {
      assert.deepStrictEqual(data.schoolMenu, menuExample);
      done();
    })
    .catch(err => {
      assert.ifError(err);
      done();
    });
  });
});