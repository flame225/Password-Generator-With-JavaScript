const empty = ""
const uCase = "ASDFJGHJKOUPYTREWQZXCVBNM"
const iCase = "asdffghjkjpoyutrewqzxcbv";
const number = "0123456789";
const symbol = "!@#$%^&*()_+";

const pLength = document.getElementById("p-length");
const uppercase = document.getElementById("p-uppercase");
const lowercase = document.getElementById("p-lowercase");
const pNumber = document.getElementById("p-number");
const pSymbol = document.getElementById("p-symbol");
const submit = document.getElementById("submit");
const password = document.getElementById("password");

submit.addEventListener("click", () =>{
    let initialPassword = empty;
    (uppercase.checked) ? initialPassword += uCase : "";
    (lowercase.checked) ? initialPassword += iCase : "";
    (pNumber.checked) ? (initialPassword += number) : "";
    (pSymbol.checked) ? (initialPassword += symbol) : "";

    password.value = generatePassword(pLength.value, initialPassword)
})

function generatePassword(l,initialPassword) {
    let pass = "";
    for (let i = 0; i < l; i++){
        pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length))
    }

    return pass;
}

// copy password to cliboard

const copy = document.getElementById("copy");

copy.addEventListener("click", ()=>{
    if(password.value ==""){
        alert("NDUBUISI AGUGHARA Say generate a Password")
    }
    else {
        password.select();
        document.execCommand("copy");
        alert("password has been copied to clipboard")
    }
})
