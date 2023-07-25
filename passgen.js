const upperSet = "ABCDEFGHIJKLMNOPQRSTUVZXYZ"
const lowerSet  = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbolSet = "!@#$&*_+"

//selector
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerinput = document.getElementById("lower-case")
const numberInput = document.getElementById("number")
const specalInput = document.getElementById("special-char")



const getRandomData = (dataSet) =>{
    return dataSet[Math.floor(Math.random()*dataSet.length)]
     
}
 
const generatePassword = (password="")=>{
    if(upperInput.checked){
        password+=getRandomData(upperSet)
    }
    if(lowerinput.checked){
        password+=getRandomData(lowerSet)
    }
    if(numberInput.checked){
        password+=getRandomData(number)
    }
    if(specalInput.checked){
        password+=getRandomData(symbolSet)
    }
    if(password.length < totalChar.value){
         return generatePassword(password);
    }
    passBox.innerText=(truncateString(password,totalChar.value));
}
//  generatePassword();
function truncateString(str,num){
    if(str.length > num){
        let subStr = str.substring(0,num);
        return subStr;
    }else{
        return str;
    }
}