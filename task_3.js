

const reverseStr = (str) => {
    return str.split("").reverse().join("");
}

let inputStr = prompt("Введите предложение");
let outputStr = reverseStr(inputStr);
alert(outputStr);