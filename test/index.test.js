const test = require('ava').test;
const Sample = require('../lib/index');

test('sample hello', (t) => {
  const mick = new Sample('Mick');
  t.is(mick.hello(), 'Hello Mick');
});
