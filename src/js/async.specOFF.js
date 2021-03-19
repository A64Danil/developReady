// import Ajax from "./async";
const Ajax  = require('./async');

describe('Ajax echo function', ()=> {
    test('should return value async', async ()=> {
        const result = await Ajax.echo('some data');
        expect(result).toBe('some data');
    });

    test('should return value with Promise', () => Ajax.echo('some data').then(data => {
            expect(data).toBe('some data');
        }));

    test('should catch erorr with Promise', async() => {
        try {
            await Ajax.echo();
        } catch (e) {
            // eslint-disable-next-line jest/no-conditional-expect,jest/no-try-expect
            expect(e.message).toBe('error');
        }
    });
});