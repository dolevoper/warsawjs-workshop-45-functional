const {
    head,
    tail,
    push,
    pop,
    unshift,
    shift,
    concat,
    reduce,
    map,
    filter,
    flat,
    flatMap
} = require('./array');

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

        expect(actual).toEqual([1, 2, 3]);
    });

    test('should not change original array', () => {
        const actual = [1, 2];

        push(3, actual);

        expect(actual).toEqual([1, 2]);
    });
});

describe('pop', () => {
    test('should return an array without last element', () => {
        const actual = pop([1, 2, 3]);

        expect(actual).toEqual([1, 2]);
    });

    test('should not change original array', () => {
        const actual = [1, 2, 3];

        pop(actual);

        expect(actual).toEqual([1, 2, 3]);
    });

    test('should return empty array fo array with only 1 member', () => {
        const actual = pop([1]);

        expect(actual.length).toBe(0);
    });
});

describe('unshift', () => {
    test('should return an array with added element at the beginning', () => {
        const actual = unshift(1, [2, 3]);

        expect(actual).toEqual([1, 2, 3]);
    });

    test('should not change original array', () => {
        const actual = [1, 2];

        unshift(3, actual);

        expect(actual).toEqual([1, 2]);
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

        expect(actual).toEqual([1, 2, 3]);
    });

    test('should return empty array fo array with only 1 member', () => {
        const actual = shift([1]);

        expect(actual.length).toBe(0);
    });
});

describe('concat', () => {
    test('should return array containing both arrays', () => {
        const actual = concat([1, 2], [3, 4]);

        expect(actual).toEqual([1, 2, 3, 4]);
    });

    test('should not change original arrays', () => {
        const arr1 = [1, 2];
        const arr2 = [3, 4];

        concat(arr1, arr2);

        expect(arr1).toEqual([1, 2]);
        expect(arr2).toEqual([3, 4]);
    });
});

describe('reduce', () => {
    test('should reduce an array', () => {
        expect(reduce((x, y) => x + y, 0, [1, 2, 3])).toBe(6);
    });

    test('should return the initializer for an empty array', () => {
        expect(reduce((x, y) => x + y, 0, [])).toBe(0);
    });

    test('should not change the original array', () => {
        const actual = [1, 2, 3];

        reduce((x, y) => x + y, 0, actual);

        expect(actual).toEqual([1, 2, 3]);
    });
});

describe('map', () => {
    test('should return array with projected values', () => {
        expect(map(x => x + 1, [1, 2, 3])).toEqual([2, 3, 4]);
    });

    test('should not change original array', () => {
        const actual = [1, 2, 3];

        map(x => x + 1, actual);

        expect(actual).toEqual([1, 2, 3]);
    });
});

describe('filter', () => {
    test('should return array only with items matching predicate', () => {
        expect(filter(x => x % 2 === 0, [1, 2, 3])).toEqual([2]);
    });

    test('should not change original array', () => {
        const actual = [1, 2, 3];

        filter(x => x % 2 === 0, actual);

        expect(actual).toEqual([1, 2, 3]);
    });
});

describe('flat', () => {
    test('should flat an array 1 level', () => {
        expect(flat([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4]);
    });

    test('should not change original array', () => {
        const actual = [[1], [2], [3]];

        flat(actual);

        expect(actual).toEqual([[1], [2], [3]]);
    });
});

describe('flatMap', () => {
    test('should return array of concated results', () => {
        expect(flatMap(x => [x, x], [1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3]);
    });

    test('should not change original array', () => {
        const actual = [1, 2, 3];

        flatMap(x => [x, x], actual);

        expect(actual).toEqual([1, 2, 3]);
    });
});