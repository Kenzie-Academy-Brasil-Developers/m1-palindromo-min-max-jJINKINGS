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
