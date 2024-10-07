import { taskFirst, taskNext } from './0-constants';

describe('test 0-constants.js functions', () => {
  it('tasks are correctly defined', () => {
    expect.hasAssertions();
    expect(`${taskFirst()} ${taskNext()}`).toStrictEqual('I prefer const when I can. But sometimes let is okay');
  });
});
