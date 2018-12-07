const { Sample } = require('../src/index')

test('sample hello', (t) => {
  const mick = new Sample('Mick')
  t.is(mick.hello(), 'Hello Mick')
})

test('sample hello', () => {
  const mick = new Sample('Mick')
  expect(mick.hello()).toBe('Hello Mick')
})