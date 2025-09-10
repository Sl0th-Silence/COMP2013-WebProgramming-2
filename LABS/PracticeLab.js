//Ternary operators
//        Condition               True                        False
result = (6 < 3)? "That doesn't add up" : "No, 6 is greater than 3!";
console.log(result);

const numArray = [1, 2, 4, 6, 4, 7];
const numArrayMultiple = []

//hard way
for (let ctr = 0; ctr < numArray.length; ctr++)
{
    numArrayMultiple.push(numArray[ctr] * 5)
}

console.log(numArrayMultiple);

//Easy way
const numArrayMap = numArray.map((num) => num * 5) //Lambda
console.log(numArrayMap)