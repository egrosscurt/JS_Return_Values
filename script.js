//Checking if a number is big
const checkNumber = function(number){
    if (number > 100) {
        return true;
    } else {
    return false;
    }
}    

const result = checkNumber(110);
console.log(result);


//Bouncer at a club
const bouncerCheck = function (maxPeople, currentPeople, age){
    if (age < 18){
        return "this is a club for adults"
    }
    if (maxPeople - currentPeople > 0){
        return "come in"
    } else {
        return "its too busy now, come back later"
    }
}

const result2 = bouncerCheck(50,100,26);
console.log(result2);


//Calculating the average
const calculateAverage = function(number1, number2, number3, number4, number5){
    const total = number1 + number2 + number3 + number4 + number5;
    const average = total/5;
    return Math.round(average);
}

const result3 = calculateAverage(3,8,23,1,8)
console.log(result3);
