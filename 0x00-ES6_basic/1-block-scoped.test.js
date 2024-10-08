import taskBlock from './1-block-scoped';

// eslint-disable-next-line jest/require-top-level-describe, jest/prefer-expect-assertions
test('returns the right values', () => {
  expect(taskBlock(true)).toStrictEqual([false, true]);
  expect(taskBlock(false)).toStrictEqual([false, true]);
});
