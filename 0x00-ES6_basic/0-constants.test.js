import { taskFirst, getLast, taskNext } from './0-constants';

describe('test 0-constants.js functions', () => {
  it('taskFirst should return the correct string', () => {
    expect.hasAssertions();
    expect(taskFirst()).toBe('I prefer const when I can.');
  });

  it('getLast should return the correct strign', () => {
    expect.hasAssertions();
    expect(getLast()).toBe(' is okay');
  });

  it('taskNext should return the correct concatenated string', () => {
    expect.hasAssertions();
    expect(taskNext()).toBe('But sometimes let is okay');
  });
});
