const { memberExpression } = require("@babel/types");

exports.head = ([first]) => first;
exports.tail = (arr) => arr[arr.length - 1];

exports.push = (value, arr) => [...arr, value];
const pop = ([x, ...xs]) => xs.length ? [x, ...pop(xs)] : [];

exports.pop = pop;

exports.unshift = (value, arr) => [value, ...arr];
const shift = ([x, ...xs]) => xs;

exports.shift = shift;