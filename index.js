// #1
/*function pickPropArray(array, property) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i][property] != undefined) {
            output.push(array[i][property]);
        }
    }
    return output;
}

const students = [
   { name: 'Павел', age: 20 },
   { name: 'Иван', age: 20 },
   { name: 'Эдем', age: 20 },
   { name: 'Денис', age: 20 },
   { name: 'Виктория', age: 20 },
   { age: 40 },
];
const result = pickPropArray(students, 'name');
console.log(result);*/


// #2 
/*function createCounter() {
    let a = 0;
     return function () {
         console.log(++a);
  }
}

counter1 = createCounter();
counter1();
counter1();*/

// #3
/*function spinWords(input) {
    output = "";

    words = input.split(" ");
    for (i = 0; i < words.length; i++) {
        if (i) {
            output += " ";
        }
        if (words[i].length >= 5) {
            for (let j = words[i].length - 1; j >= 0; j--) {
                output += words[i][j];
            }
        }
        else {
            output += words[i];
        }
    }
    return output;
}

console.log(spinWords("Привет от Legacy"));
console.log(spinWords("This is a test"));*/

// #4
/*function getSumIndexes(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}

array = [9, 7, 11, 15, -4, 22, 5, 2, 22];
console.log(getSumIndexes(array, 9));*/

// #5

function getLongestCommonSubstr(strings) {
    if (strings.length == 0) return "";
    if (strings.length == 1) return strings[0];

    let findLen = 2,
        foundString = "";
    first = strings[0];

    for (let i = 0; i <= strings[0].length - findLen; i++) {
        //console.log(strings[0].slice(i, i + findLen))
        outer: while (i + findLen <= strings[0].length) {
                //console.log(strings[0].slice(i, i + findLen))
                let existEverywhere = true;
                for (let j = 1; j < strings.length; j++) {
                    if (strings[j].indexOf(strings[0].slice(i, i + findLen)) == -1) {
                        existEverywhere = false;
                        break outer;
                    }                        
                }
                if (existEverywhere) {
                    //console.log(i);
                    //console.log(findLen);
                    foundString = strings[0].slice(i, i + findLen);
                    findLen++;
                }
            }
        }
    return foundString;
}

//strs = ["цветок","поток","хлопок"]
strs = ["цветокаопрпр","потокащпрпр","хлопокайцупрпр"]
//strs = ["цветококацув","потококафыв","хлопококаячс"];
//strs = ["собака","гоночная машина","машина"]
console.log(getLongestCommonSubstr(strs));


