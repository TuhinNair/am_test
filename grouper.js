const input = ['AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA', 'ESPONJA', 'RAMO', 'JAPONES', 'ARMO', 'MOJAN', 'MARO', 'ORAM', 'MONJA', 'ALEXIS'];


function process(input) {
    let processed_inputs =
        input.map(i => {
            return {
                original: i,
                constituents: i.split('').sort(),
                processed: false,
            }
        });

    while (processed_inputs.length !== 0) {
        let [head, ...tail] = processed_inputs;
        let wordGroup = [head.original];

        processed_inputs = tail;

        processed_inputs = processed_inputs.map(e => {
            if (naiveArrayMatch(e.constituents, head.constituents)) {
                wordGroup.push(e.original)
                return { ...e, processed: true }
            }
            return e
        })

        console.log(wordGroup)

        processed_inputs = processed_inputs.filter(e => !e.processed)
    }

}

function naiveArrayMatch(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    };

    arr1.forEach((e, i) => {
        if (e !== arr2[i]) {
            return false
        }
    });

    return true
}

process(input);