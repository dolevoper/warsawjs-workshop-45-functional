const bind = (fn, thisArg, preArgs = []) => (...args) => fn.call(thisArg, ...preArgs, ...args);

exports.bind = bind
exports.apply = (fn, thisArg, ...preArgs) => bind(fn, thisArg, preArgs);