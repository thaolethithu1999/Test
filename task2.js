

const N = Math.floor(Math.random() * 20) + 1;
let s = '';

const generateString = (length) => {
    const characters = '-H';
    for (let i = 0; i < length; i++) {
        s += characters.charAt(Math.floor(Math.random() * (characters.length)));
    }
    return s;
}

//minimum tanks
const solution = (N) => {
    //generateString(N);
    console.log({ s });
    s = 'H'
    lastT = -2;
    result = 0;
    length = s.length
    if(length === 1 ){
        return -1;
    }
    if ((s[0] === 'H' && s[1] === 'H') || (s[length - 1] === 'H' && s[length - 2] === 'H')) {
        return -1;
    }
    for (i = 0; i < length; i++) {
        if (s[i] === 'H') {
            if (i - 1 === lastT) {
                continue;
            }
            if (s[i + 1] === 'H') {
                if (s[i + 2] === 'H') {
                    return -1;
                }
                lastT = i + 2;
            } else if (s[i + 1] === '-') {
                lastT = i + 1;
            }
            result += 1;
        }
    }
    return result;



}
console.log(solution(N));

