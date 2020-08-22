const inputs = ["foo(bar)", "(bar)", "foo(bar)blim", "foo(foo(bar))blim"]
const expected = ["foorab", "rab", "foorabblim", "foobaroofblim"]

function reverseParans(input) {
    firstLeftParans = input.indexOf('(')
    lastRightParans = input.lastIndexOf(')')

    if (firstLeftParans == -1 ) {
        if (lastRightParans > -1) {
            return ['<MALFORMED>']
        } else {
            return input.reverse()
        }
    } else {
        if (lastRightParans == -1) {
            return ['<MALFORMED>']
        } else {
            to_reverse = input.slice(0, firstLeftParans).concat(reverseParans(input.slice(firstLeftParans+1, lastRightParans)));
            return to_reverse.reverse();
        }
    }
}

function process(str) {
    let input = str.split('');
    let firstLeftParans = input.indexOf('(');
    let lastRightParans = input.lastIndexOf(')');

    if (firstLeftParans == -1 && lastRightParans == -1) {
        return input
    } else if ((firstLeftParans > -1 && lastRightParans == -1) || (lastRightParans > -1 && firstLeftParans == -1)) {
        return "<MALFORMED>"
    }
    result = input.slice(0, firstLeftParans).concat(reverseParans(input.slice(firstLeftParans+1, lastRightParans)), input.slice(lastRightParans+1))
    return result.join('')
}


function prettyPrint() {
    inputs.forEach((i, idx) => {
        res = process(i)
        console.log(`Input: ${i}   Result: ${res}   Expected:  ${expected[idx]}  Pass: ${res === expected[idx]}`)
    })
}

prettyPrint()