// GENERATING ROW ODDS

// This will generate all odds of a row of length three
// But it's not possible to make it dynamic
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        for (let m = 0; m < 3; m++) {
            console.log([ i + 1, j + 1, m + 1 ]);
        }
    }
}

// This will do the same of the above block accept it's possible to make it dynamic
let i = 0, j = 0, m = 0;
while(i < 3) {
    if (m >= 3) (m = 0), (j += 1);
    if (j >= 3) (j = 0), (i += 1);
    if (i >= 3) continue;

    console.log([i + 1, j + 1, m + 1]);

    m += 1;
}

// This will do the same that the while block do but using recursion
function recursive(i = 0, j = 0, m = 0) {
    if (m >= 3) m = 0, j += 1;
    if (j >= 3) j = 0, i += 1;
    if (i >= 3) return;

    console.log([i + 1, j + 1, m + 1]);

    recursive(i, j, m + 1)
}

// This will generate a dynamic row odds using recursion
// Each item in the `loopArr` represent index in the row
let loopArr = [0, 0, 0];
function recursive1(_loopArr) {
    // Loop for the row indexes
    for (let i = _loopArr.length - 1; i >= 0; i--) {
        if (i > 0) {
            if (_loopArr[i] >= _loopArr.length) {
                _loopArr[i] = 0;
                _loopArr[i - 1] += 1;
            }
        }

        if (i == 0) {
            if (_loopArr[i] >= _loopArr.length) {
                _loopArr[i] = 0;
                return
            };
        }
    }

    let sequence = new Array();
    _loopArr.forEach(num => sequence.push(num + 1));
    console.log(sequence);
    _loopArr[_loopArr.length - 1] += 1;
    recursive1(_loopArr);
}
