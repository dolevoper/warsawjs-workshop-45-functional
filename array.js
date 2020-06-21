exports.head = ([first]) => first;
exports.tail = (arr) => arr[arr.length - 1];

exports.push = (value, arr) => [...arr, value];
const pop = ([x, ...xs]) => xs.length ? [x, ...pop(xs)] : [];

exports.pop = pop;

exports.unshift = (value, arr) => [value, ...arr];
const shift = ([_, ...xs]) => xs;

exports.shift = shift;

const concat = (arr1, arr2) => [...arr1, ...arr2];
exports.concat = concat;

const reduce = (reducer, init, arr) => arr.reduce(reducer, init);
exports.reduce = reduce;

const map = (fn, arr) => arr.map(fn);
exports.map = map;

exports.filter = (fn, arr) => arr.filter(fn);

const flat = arr => reduce(concat, [], arr);
exports.flat = flat;

exports.flatMap = (fn, arr) => flat(map(fn, arr));