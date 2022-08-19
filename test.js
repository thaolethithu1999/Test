let dummyString = "T-H"
let indexPosition = 1
finalString = dummyString.slice(0, indexPosition) + dummyString.slice(indexPosition + 1) 
console.log("Original String: "+ dummyString )
console.log("Final String: "+ finalString)

const 

    s = '-HH-H-----HH----';
    s = 'H---'
   
    const rs = 0;
    let count = 0;
    switch (s.length) {
        case 1:
            if (s === 'H' || s === '-') {
                return -1;
            }
            break;
        case 2:
            if (s === 'HH' || s === '--') {
                return -1;
            } else if (s === '-H' || s === 'H-') {
                for (let i = 0; i < s.length; i++) {
                    if (s[i].includes('-')) {
                        s = s.replace('-', 'T');

                    }
                }
                console.log(s);
                for (let i = 0; i < s.length; i++) {
                    if (s[i] === 'T') {
                        count += 1;
                    }
                }
                return count;
            }
            break;
        case 3:
            if (s === 'HHH' || s === '---' || s === '-HH' || s === 'HH-') {
                return -1;
            } else if (s === '--H' || s === '-H-' || s === 'H--') {
                for (let i = 0; i < s.length; i++) {
                    for (let j = 1; j < s.length; j++) {
                        if ((s[i] === '-' && s[j] === 'H') || (s[i] === 'H' && s[j] === '-')) {
                            s = s.replace('-', 'T');
                            const tmp = s.indexOf('-');
                            s = s.slice(0, tmp) + s.slice(tmp + 1);
                        }
                    }
                }
                return s;
            } else {
                for (let i = 0; i < s.length; i++) {
                    if (s[i].includes('-')) {
                        s = s.replace('-', 'T');
                        return s;
                    }
                }
                return s;
            }
        default:
            console.log("default");
            let count = 0;
            let arr = [];
            for (let i = 0; i < s.length - 1; i++) {
                for (let j = 1; j < s.length; j++) {
                    if ((s[i] === s[j])) {
                        if(s[i] === 'H' && s[j] === 'H'){
                            arr.push(s[i]);
                        }
                    } 
                }
            }

            // last = 0;
            // result = 0;
            // for (let i = 0; i < s.length - 1; i++) {
            //     if (s[i] == 'H') {
            //         if (s[i + 1] === 'H') {
            //             if (s[i + 2] === 'H') {
            //                 return -1
            //             };
            //         } else  {

            //         };

            //     }
            // }
            // console.log({ arr });
            // return s;



    }