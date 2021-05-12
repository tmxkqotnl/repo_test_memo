function t() {
    let a = "1000";
    const b = `this is template a = ${a} `;
    console.log(b);
}

t();
t``; // tagged template literal

var taste = "good";
var point = 100;

function t2(string, p, ta) {
    //string[0] = 'my point is .. '
    //string[1] = ' '
    //string[2] = ' !!'

    return string[0] + p + string[1] + ta + string[2];
}
var r = t2`my point is .. ${point} ${taste} !!`;
console.log(r);

// example 2
function t3(strings, ...keys) {
    return (function (...values) {
        var dict = values[values.length - 1] || {};
        var result = [strings[0]];
        keys.forEach(function (key, i) {
            var value = Number.isInteger(key) ? values[key] : dict[key];
            result.push(value, strings[i + 1]);
        });
        return result.join('');
    });
}

var t1Closure = t3`${0}${1}${0}!`;
console.log(t1Closure('Y', 'A'));  // "YAY!"
var t2Closure = t3`${0} ${'foo'}!`;
console.log(t2Closure('Hello', { foo: 'World' }));  // "Hello World!"