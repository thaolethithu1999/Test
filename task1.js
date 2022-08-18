
const A = [];

//const N = Math.round(Math.random() * 10) + 2;
const N = 5;

const renderArray = (N, max) => {
    for (let i = 1; i <= N; i++) {
        A.push(Math.round(Math.random() * max))
    }
    return A;

}

renderArray(N, 10);

const solution = (A) => {
    console.log({ A });

    const selected = A[Math.floor(Math.random() * A.length)];
    console.log({ selected });

    const quantity = Math.floor(Math.random() * 5) + 1;
    console.log({ quantity });

    const arrLength = Math.floor(Math.random() * A.length);
    console.log({ arrLength });

    const r = [];

    if (arrLength != 0 && quantity != 0 && selected != 0) {
        for (let k = 0; k < quantity; k++) {
            let rs = [];
            for (let i = 1; i < A.length; i++) {
                if (A[i] === selected) {
                    rs.unshift(selected);
                    for (let j = 1; j < arrLength - 1; j++) {
                        rs.push(A[Math.floor(Math.random() * A.length)]);
                    }
                    rs = [...rs, A[i]];
                    console.log({ rs });
                }
            }
            r.push(rs)
        }
        console.log({ r });
    } else {
        return -1;
    }

    const list = [];
    let max = 0;
    let arrHasMaxSum = [];
    for (let i = 0; i < r.length; i++) {
        let sumSub = 0;
        for (let j = 0; j < r[i].length; j++) {
            sumSub += r[i][j];
        }
        list.push(sumSub);
        console.log({ list });
        max = list[0];
        if (sumSub > max || sumSub === max) {
            max = sumSub;
            arrHasMaxSum = r[i];
        }
    }
    console.log(arrHasMaxSum);
}

solution(A);