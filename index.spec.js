const { bind } = require('./index');

describe('bind', () => {
    test('shoud return a function', () => {
        const actual = bind(jest.fn());

        expect(actual).toBeInstanceOf(Function);
    });

    test('returned function should call original function', () => {
        const fn = jest.fn();
        const bound = bind(fn);

        bound();

        expect(fn).toHaveBeenCalled();
    });

    test('returned function should call original function with supplied arguments', () => {
        const fn = jest.fn();
        const args = [1, 2, 3];
        const bound = bind(fn, null, args);

        bound();

        expect(fn).toHaveBeenCalledWith(...args);
    });

    test('returned function should pass additional arguments to original function', () => {
        const fn = jest.fn();
        const args = [1, 2, 3];
        const bound = bind(fn);

        bound(...args);

        expect(fn).toHaveBeenCalledWith(...args);
    });

    test('returned function should call origianl passing supplied and additional arguments', () => {
        const fn = jest.fn();
        const suppliedArgs = [1, 2, 3];
        const additionalArgs = [4, 5, 6];
        const bound = bind(fn, null, suppliedArgs);

        bound(...additionalArgs);

        expect(fn).toHaveBeenCalledWith(...suppliedArgs, ...additionalArgs);
    });

    test('returned function shold call original with given context', () => {
        const bound = bind(function () { return this.foo; }, { foo: 'foo' });

        const actual = bound();

        expect(actual).toBe('foo');
    });
});