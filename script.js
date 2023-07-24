//task 1
function getAverageOfNumbers(initialArra) {
    let sum = 0;
    let quantity = 0;
    let result = 0;
    for (let i = 0; i < initialArra.length; i++) {
        if (typeof initialArra[i] === "number") {
            sum = sum + initialArra[i];
            quantity++;
        }
    }
    result = sum / quantity;
    console.log(`середнє арифметичне лише числових елементів даного масиву: ${result}`)
    return result;
}

getAverageOfNumbers(['w', 1, 3, 1, 'eeee', '8']);


//task 2
x = parseFloat(prompt("Set value of X (task2) : "));
y = parseFloat(prompt("Set value of Y (task2) : "));
znak = prompt("Set value of ZNAK (task2) +, -, *, /, %, ^  : ");
doMath(x, znak, y);

function doMath(x, znak, y) {
    let result = 0;
    switch (znak) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = y !== 0 ? (x / y) : (y / x);
            break;
        case '%':
            result = x % y;
            break;
        case '^':
            result = Math.pow(x, y);
            break;
        default:
            console.log("Inappropriate behaviour")
    }
    console.log(`результат математичної дії, вказаної в змінній znak: ${result}`);

}

//task 3
function fillDimenArray(baseLength, internalLength) {
    let array = new Array(baseLength);
    let x;
    for (let i = 0; i < baseLength; i++) {
        array[i] = new Array(internalLength);
        for (let j = 0; j < internalLength; j++) {
            x = prompt(`input value of element  for position in array  i-row j-column: ${i} ${j} :`);
            array[i][j] = x;

        }
        console.log(` ${array[i]}`)
    }
    console.log('\n')
}

console.log(`Result array task3: `);
fillDimenArray(2, 4);

//task 4

function removeElements(inputString, elementsToRemovedAll) {
    console.log(`Task 4: inputString : ${inputString}`);
    if (Array.isArray(elementsToRemovedAll)) {
        for (let j = 0; j < elementsToRemovedAll.length; j++) {
            if (inputString.indexOf(elementsToRemovedAll[j]) !== -1) {

                inputString = inputString.replaceAll(elementsToRemovedAll[j], '');
            }

        }

    } else {
        inputString = inputString.replaceAll(elementsToRemovedAll, "");
    }
    console.log(`Task 4: outputString : ${inputString}`);

}

removeElements(" hello world", ['l', 'd']);
removeElements("yyyssssyyjjjjj", 'j');


