function isPalindrome(str){
    str = str.replaceAll(" ","").toLowerCase();
    console.log(str)
    strReversa = str.split("").reverse().join("");
    console.log(strReversa);

    for(let i = 0; i < str.length-1; i++) {
        if(str === strReversa) {
            return true;
        }
    }

    return false;
}

function arrayMaxMin(arr){
    let novoArr = [];
    let numeroMaior = arr[0];
    let numeroMenor = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > numeroMaior) {
            numeroMaior = arr[i]
        }
        if(arr[i] < numeroMenor) {
            numeroMenor = arr[i]
        }
    }
    novoArr.push(numeroMenor, numeroMaior);

    return novoArr;
}
