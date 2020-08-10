jest.retryTimes(2);

describe('Get results', function () {
    test('Should Always Pass', () => {
        expect(1).toBe(1);
    });

    test('Should Sometimes Pass', () => {
        const someNum = Math.floor(Math.random() * 10);
        console.log('randomly chosen number: ' + someNum);
        expect(someNum).toBeGreaterThan(7);
    });

    test('Should Always Fail', () => {
        expect(2).toBe(1);
    });
});
