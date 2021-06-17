
function countProbs(range) {
    let start = 0;
    let end = 0;
    let temp = ''
    for (let i = 0; i < range.length; i++) {
        if (i < 6) {
            temp += range[i];
        } else if (range[i] === '-') {
            start = parseInt(temp);
            temp = ''
        } else {
            temp += range[i];
        }
        if (i === range.length - 1) {
            end = parseInt(temp)
        }
    }
    let count = 0;
    for (let i = start; i <= end; i++) {
        let num = String(i);
        let isEqual = false;
        let isIncrease = false;
        for (let x = 0; x <= 5; x++) {
            if (num[x] === num[x + 1]) {
                isEqual = true;
            }
            if (x !== num.length - 1) {
                if (num[x] <= num[x + 1]) {
                    isIncrease = true
                } 
                else {
                    isIncrease = false;
                    break;
                }
            }
        }
        if (isIncrease && isEqual) {
            count++
        }
    }
    console.log(count)
}

countProbs("347312-805915")
// countProbs("347897-347899")
// countProbs("805899-805911")