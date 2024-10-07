import { taskFirst, getLast, taskNext } from './0-constants';

describe('Test 0-constants.js functions', () => {
    test('taskFirst should return the correct string', () => {
        expect(taskFirst()).toBe('I prefer const when I can.');
    });
    
    test('getLast should return the correct strign', () => {
        expect(getLast()).toBe('is okay');
    });

    test('taskNext should return the correct concatenated string', () => {
        expect(taskNext()).toBe('but sometimes let is okay');
    });
})