const inputs = ["foo(bar)", "(bar)", "foo(bar)blim", "foo(foo(bar))blim", "foo(foo(bar)ddas)blim", "foo(foo(b(tu)ar)ddas)blim"]
const expected = ["foorab", "rab", "foorabblim", "foobaroofblim", "foosaddbaroofblim", "foosaddbutaroofblim"]

function reverseParans(input) {
    const firstLeftParans = input.indexOf('(')
    const lastRightParans = input.lastIndexOf(')')

    if (firstLeftParans == -1) {
        if (lastRightParans > -1) {
            return ['<MALFORMED>']
        } else {
            return input.reverse()
        }
    } else {
        if (lastRightParans == -1) {
            return ['<MALFORMED>']
        } else {
            let left = input.slice(0, firstLeftParans)
            let right = input.slice(lastRightParans+1).slice()
            let middle = reverseParans(input.slice(firstLeftParans + 1, lastRightParans))
            return [...left, ...middle, ...right].reverse()
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
    let result = input.slice(0, firstLeftParans).concat(reverseParans(input.slice(firstLeftParans + 1, lastRightParans)), input.slice(lastRightParans + 1))
    return result.join('')
}



function prettyPrint() {
    inputs.forEach((i, idx) => {
        let res = process(i)
        console.log(`Input: ${i}   Result: ${res}   Expected:  ${expected[idx]}  Pass: ${res === expected[idx]}`)
    })


}

prettyPrint()