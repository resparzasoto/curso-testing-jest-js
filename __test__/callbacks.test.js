import { callbackHell } from '../src/callbacks';

describe('TestACallback', () => {
    test('Callback', (done) => {
        function otherCallback(data) {
            expect(data).toBe('Hi JavaScripts!')
            done();
        }
        callbackHell(otherCallback);
    });
});