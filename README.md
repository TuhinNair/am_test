### Notes

## Expander
    - Although the actual algorithm was pretty straightforward I was delayed by a rather embarassing error. I forgot to locally scope the `reverseParans` variables which became apparent after a I added an example with an extra layer of nesting.

## Grouper
    - In hindsight I could probably bucket words based on length during the first array traversal to segment the search space. I intitially rejected the idea while typing it out because the spec didn't specify groups being unique by length (although the example data was). The current implementation also has a exponential asymptotic complexity in terms of operations.

    - The choice to chain `map -> filter` as oppossed to `reduce` is surprisingly because of how JS is interpreted. Read here: http://code.kylebaker.io/2018/03/16/stack-overflow/#What-about-performance