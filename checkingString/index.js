const showSection = document.getElementById("checked")
const input = document.querySelector("input")
const alphabets = "abcdefghijklmnopqrstuvwxyz"
const checkUpperCase = alphabets.toUpperCase()
const checkLowerCase = alphabets.toLowerCase()
const checkNumbers = "0123456789";
const vowels = "aeiouAEIOU"


const checking = () => {


    let upper = 0
    for (k = 0; k < input.value.length; k++) {
        for (j = 0; j < checkUpperCase.length; j++) {
            if (input.value[k] === checkUpperCase[j]) {
                ++upper
            }
        }
    }

    let lower = 0
    for (let i = 0; i < input.value.length; i++) {
        for (let index = 0; index < checkLowerCase.length; index++) {
            if (input.value[i] === checkLowerCase[index]) {
                lower += 1
            }
        }
    }

    let num = 0
    for (let i = 0; i < input.value.length; i++) {
        for (let index = 0; index < checkNumbers.length; index++) {
            if (input.value[i] == checkNumbers[index]) {
                num += 1
            }
        }
    }
let vowelsCount = 0
    for (let i = 0; i < vowels.length; i++) {
        for (x = 0; x < input.value.length; x++) {
            if (vowels[i] === input.value[x]) {
                ++vowelsCount
            }
        }
    }


    let li = document.createElement("li")
    let sli = document.createElement("li")
    let tli = document.createElement("li")
    let fli = document.createElement("li")
    let upperText = document.createTextNode("The Numbers of Upper Alphabets is " + upper)
    let lowerText = document.createTextNode("The Numbers of Lower Alphabets is " + lower)
    let numText = document.createTextNode("The Numbers of Integers is " + num)
    let vowelsText = document.createTextNode("The Numbers of Vowels is " + vowelsCount)
    li.appendChild(upperText)
    sli.appendChild(lowerText)
    tli.appendChild(numText)
    fli.appendChild(vowelsText)


    if (input.value != "") {
    showSection.innerHTML = ""
    }


    if (input.value != "") {
        showSection.appendChild(li)
        showSection.appendChild(sli)
        showSection.appendChild(tli)
        showSection.appendChild(fli)
    }

    input.value = ""

}