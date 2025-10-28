const verifyStatus = document.getElementById("verifyStatus");
let otpCode = document.getElementById("otp-code");
let otpInput = document.getElementById("otp");
const getNewCode = document.getElementById("get-new-code");
const verifyBtn = document.getElementById("verifyBtn");

let minCode = 111111;
let maxCode = 999999;
let generateCode;


// otp generator
getNewCode.addEventListener("click", function(){
    generateCode = Math.floor(Math.random()*(maxCode-minCode+1))+minCode
    otpCode.textContent = generateCode; 
    
})

// otp verify
verifyBtn.addEventListener("click",function(){

    let code = Number(otpInput.value);
    if(generateCode === code){
        
        window.location.href="opay.html";   
    }
    else{
        verifyStatus.textContent = "Invaild Code"; 
    }
})

