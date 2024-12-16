const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



let randomPassword1 = document.getElementById("randompassword1")
let randomPassword2 = document.getElementById("randompassword2")


let passwordlength = 15


function  getrandomCharacter(){
    let randomCharacter = Math.floor(Math.random()*characters.length)
    return characters[randomCharacter]
}

function getrandomNumber(){
    let randomNumber = ""
    for(let i=0; i<passwordlength; i++){
        randomNumber += getrandomCharacter()
    }
    return randomNumber
}
function generatePassword(){    
    randomPassword1.textContent = getrandomNumber()
    randomPassword2.textContent = getrandomNumber()
   
}