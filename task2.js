

const N = Math.floor(Math.random() * 20) + 1;
let s = '';

const generateString = (length) => {
    console.log({ length });
    const characters = '-H';
    for (let i = 0; i < length; i++) {
        s += characters.charAt(Math.floor(Math.random() * (characters.length)));
    }
    return s;
}

//minimum tanks
const solution = (N) => {
    generateString(N);
    console.log({ s });
    if(s.length === 1){
        if(s === 'H' || s === '-'){
            return -1;
        }
    } else {
        for (let i = 0; i < s.length; i++){
            for(let j = 0 ; j < s.length; j++){
                if(s[i] === s[j]){
                    console.log();
                }
            }
        }
    }
    

    return -1;
}

console.log(solution(N));

