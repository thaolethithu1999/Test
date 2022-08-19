function solution(A) {
    const length = A.length;
    sum = 0;
    lastIdx = 0;
    let term = 0;
    for (i = 0; i < length; i++) {
        for (j = length; j > lastIdx; j--) {
            if (A[i] === A[j]) {
                lastIndex = j;
                if (lastIndex > i) {
                    const a = A.slice(i, lastIndex + 1);
                    console.log({a}); 
                    const b = a.reduce((a, b) => a + b);
                    console.log({b});
                    term = A.slice(i, lastIndex + 1).reduce((a, b) => a + b)
                    if (term > sum) {
                        sum = term
                    }
                } 
            }
        }
    }
    if(sum > 0){
        return sum;
    } return -1;
}

const A = [1,3,6,1,6,6,9,9]

console.log(solution(A));
