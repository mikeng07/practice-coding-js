


console.log("Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93");

 var ages = [3,9,23,64,2,8,28,93];

console.log("1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array •	Do not use numbers to reference the last element, find it programmatically, •	ages[7] – ages[0] is not allowed!");

ages[ages.length-1] -= ages[0];


console.log("1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).")

ages.push(29);
ages[ages.length-1] -= ages[0];

for(let i = 0 ; i<ages.length;i++){
    console.log(ages[i]);
}


console.log("	Use a loop to iterate through the array and calculate the average age. ");


let sum = 0;
for(let i = 0 ; i<ages.length;i++){
    sum += ages[i];
}
console.log("the average age: "+ sum/ages.length);


console.log("2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.");

var names = ["Sam","Tommy","Tim","Sally","Buck","Bob"];

console.log("2a.	Use a loop to iterate through the array and calculate the average number of letters per name. ");

let sum1 = 0;
for (let i = 0; i< names.length;i++)
{
    sum1 += names[i].length;
}
console.log("Average Number of Letter: "+ sum1/names.length);

console.log("2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.") 
let names2 = "";
for (let i = 0; i<names.length;i++){
    names2 += names[i] + " ";
}

console.log("new concatenate name: "+names2);

console.log("3.	How do you access the last element of any array?");
console.log("answer:  pass last index of array");
let last_elelemt = names[names.length-1];

console.log("4.	How do you access the first element of any array?");
console.log("answer: pass first index of array");
let first_element = names[0];
console.log("5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.");
/*For example
namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array
*/

let nameLengths = [];
for (let i = 0; i < names.length;i++){
    nameLengths.push(names[i].length);
}

for(let i = 0 ; i<nameLengths.length;i++){
    console.log(nameLengths[i]);
}




console.log("6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. ")
let sum3=0;
for (let i = 0; i< nameLengths.length;i++){
    sum3 +=nameLengths[i];
}
console.log (sum3);
//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function concatItself(n,k){
    let concatWord = "";
    for (let i = 0 ; i < k ; i ++){
        concatWord += n;
    }
    return concatWord;
}

console.log(concatItself("hello",3));
console.log("8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.•	The full name should be the first and the last name separated by a space.");


function name(firstName, lastName){
    return firstName + " " + lastName;
}

console.log ("Mike","Ng");

console.log("9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.");
function check_numbers(arr){
    let sum4 = 0;
    for (let i = 0; i< arr.length;i++){
        sum4 +=arr[i];
    }
    return (sum4>100);
}
let arr = [70,20,80];
console.log(check_numbers(arr));
console.log("10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.")
function averageNumber(arr){
    let sum = 0; 
    for (var i of arr){
        sum += i ;
    }
    return sum/arr.length;
}

console.log(averageNumber(arr));
console.log("11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.");
function check_arr(arr1,arr2){
   let sum1 = 0;
    let sum2 = 0;
    for (let i of arr1){
        sum1 += i;
    }
    for (let i of arr2){
        sum2 +=i;
    }
    return sum1 > sum2;
    
}

let arr1 =[1,2,30];
let arr2=[4,5,6];
console.log(check_arr(arr1,arr2));
console.log("12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.");
function willBuyDrink(isHotOutside,moneyInPocket){
    return (isHotOutside&&moneyInPocket>10.5);
}

console.log(willBuyDrink(true,10));
console.log("13.	Create a function of your own that solves a problem. •	In comments, write what the function does and why you created it.");


function willBeSuccessul(isInAction, isDiscipline, isRightBehavior){
    return (isDiscipline&&isInAction&&isRightBehavior);
}

console.log (willBeSuccessul(true,true,true));
//this function will tell if a person will be sucessful if he has all of these three :action, behavior,discipline 