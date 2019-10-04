const accum = str => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < i+1; j++) {
            if (j === 0) {
                result += str.charAt(i).toUpperCase();
            } else {
                result += str.charAt(i).toLowerCase();
            }
        }
        if (i < str.length-1) {
            result += '-';
        }
    }
    return result;
}