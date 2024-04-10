function generatedPassword (passwordLength, 
includeNumbers, includeUpper, includeLower,
includeSymbol){
    const lowerCaseChars = "abcdsbesdjsdjsweiowinfdf"; 
    const upperCaseChars = "ABCDEFHJKIOWJSUIIEMFHPIWKZ"; 
    const numberChars="0123456789"
    const symbolChars = "!@#$%^&*()-_=+"

    let isAllowedChars='';
    let password = ""

    isAllowedChars+= includeLower ? lowerCaseChars : ""; 
    isAllowedChars += includeUpper ? upperCaseChars : ""; 
    isAllowedChars += includeNumbers ? numberChars: ""; 
    isAllowedChars += includeSymbol ? symbolChars : ""; 

    if(passwordLength <=0){
        return 'password length must be at least 1'; 
    }

    if(isAllowedChars.length === 0){
        return `at least one set of characters need to be selected`
    }
    console.log(isAllowedChars)
    for(let i = 0; i<passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * isAllowedChars.length); 
        password +=isAllowedChars[randomIndex]; 
    }
    return password; 
}



const passwordLength = 12; 

const lowerCase = true; 
const upperCase = true; 
const includeNumbers = true; 
const includeSymbol = true; 

const password = generatedPassword(passwordLength,includeNumbers,upperCase, lowerCase,
includeSymbol)

console.log(`generated password ${password}`)