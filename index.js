// This is mindGame function, where I execute some math operations and return the final output.
// Error Massage: If i put string value instead of number that would be error for this function, the input should be a number.
function mindGame(inputNumber){
    const multiplication = inputNumber *3;
    const sum = multiplication + 10;
    const divide = sum/2;
    const minus = divide-5;
    return minus;   
}
mindGame(7);

// This is evenOdd function, where I'm finding out the even or odd string numbers and return the final output.
// Error Massage: If i put number instead of string value that would be error for this function, the input should be string. 

function evenOdd(inputString){
    if(inputString.length/2){
       return 'even';
    // console.log('even')
    }else{
        return 'odd';
        // console.log('odd')
    }
}

evenOdd('Alavy Khan');
console.log(evenOdd('alavy khan'));

// This is isLGSeven function, where I put a value and operate with 7 and return the final output.
// Error Massage: If i put string value or any other parameter instead of number that would be error for this function, the input parament should be a number.

function isLGSeven(lgValue){
    const findValue = lgValue -7;
    if(findValue<7){
        return findValue;
    }else{
        return lgValue *2;
    }
}

isLGSeven(13);

// This is findingBadData function, where I'm finding out the negative values form the array of the function and return the number of negative values.
// Error Massage: If i put object, string, or a single number instead of array that would be error for this function, the input parament should be an array.

function findingBadData(ageNumbers){
    const onlyNegativeAges=[]
    for(let i =0; i<ageNumbers.length; i++){
        let index = i;
        const element = ageNumbers[index];
        if(element<0){
            onlyNegativeAges.push(element);
        }
    }
    return onlyNegativeAges.length;
}

const friendsAge=[28, 30, 0, -5, -30, -32];
const negativeAges =findingBadData(friendsAge);


// This is gemsToDiamond function, where I put three parameters and multiply with given numbers and follow other instruction of the assignment and return the final output. 
// Error Massage: If i put string values instead of number to any of these parament, that would be error for this function, the input parameters should be a number.

function gemsToDiamond(num1, num2, num3){
    const firstNumber = num1 * 21;
    const secondNumber = num2 * 32;
    const thirdNumber = num3 * 43;
    const totalNumber = firstNumber + secondNumber + thirdNumber;
    if(totalNumber>1000*2){
        return totalNumber -2000;
    }else{
       return totalNumber;
    }
}

gemsToDiamond(30, 40, 50);
