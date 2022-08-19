const N = 3;
const R = [2, 1, 0, 2];
const C = [0, 2, 1, 2];

function check(R, C, i, j) {
    for (m = 0; m < R.length; m++) {
        if (R[m] == i && C[m] == j) {
            return 'B'
        }
    }
    let result = 0
    for (m = 0; m < R.length; m++) {
        if (Math.abs(R[m] - i) <= 1 && Math.abs(C[m] - j) <= 1) {

            result++;
            console.log({result});
        }
    }
    return result
}

function print(N, R, C) {
    for (i = 0; i < N; i++){
        let str = ""
        for (j = 0; j < N; j++) {
            let result = check(R, C, i, j)
            str += result
        }
        console.log(str)
    }
    
}

print(N, R, C);