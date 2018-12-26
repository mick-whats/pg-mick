const Sample = require('..')

test('sample hello', () => {
  const mick = new Sample('Mick')
  expect(mick.hello()).toBe('Hello Mick')
})
