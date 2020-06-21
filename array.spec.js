const { head, tail, push, pop, unshift, shift } = require('./array');

describe('head', () => {
    test('should return first element of an array', () => {
        expect(head([1, 2 ,3])).toBe(1);
    });

    test('should return undefined for empty array', () => {
        expect(head([])).toBeUndefined();
    });
});

describe('tail', () => {
    test('should return last element of an array', () => {
        expect(tail([1, 2, 3])).toBe(3);
    });

    test('should return undefined for empty array', () => {
        expect(tail([])).toBeUndefined();
    });
});

describe('push', () => {
    test('should return an array with added element at the end', () => {
        const actual = push(3, [1, 2]);

        expect(actual).toEqual(expect.arrayContaining([1, 2, 3]));
    });

    test('should not change original array', () => {
        const actual = [1, 2];

        push(3, actual);

        expect(actual).toEqual(expect.arrayContaining([1, 2]));
    });
});

describe('pop', () => {
    test('should return an array without last element', () => {
        const actual = pop([1, 2, 3]);

        expect(actual).toEqual(expect.arrayContaining([1, 2]));
    });

    test('should not change original array', () => {
        const actual = [1, 2, 3];

        pop(actual);

        expect(actual).toEqual(expect.arrayContaining([1, 2, 3]));
    });

    test('should return empty array fo array with only 1 member', () => {
        const actual = pop([1]);

        expect(actual.length).toBe(0);
    });
});

describe('unshift', () => {
    test('should return an array with added element at the beginning', () => {
        const actual = unshift(1, [2, 3]);

        expect(actual).toEqual(expect.arrayContaining([1, 2, 3]));
    });

    test('should not change original array', () => {
        const actual = [1, 2];

        unshift(3, actual);

        expect(actual).toEqual(expect.arrayContaining([1, 2]));
    });
});

describe('shift', () => {
    test('should return an array without first element', () => {
        const actual = shift([1, 2, 3]);

        expect(actual).toEqual(expect.arrayContaining([2, 3]));
    });

    test('should not change original array', () => {
        const actual = [1, 2, 3];

        shift(actual);

        expect(actual).toEqual(expect.arrayContaining([1, 2, 3]));
    });

    test('should return empty array fo array with only 1 member', () => {
        const actual = shift([1]);

        expect(actual.length).toBe(0);
    });
});