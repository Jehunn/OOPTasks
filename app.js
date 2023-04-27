// Task 1
let nums = [10, 25, 5, 20, 40, 3, 35, 50]
function littleNum(arrs) {
    let num = arrs[0];
    if (Array.isArray(arrs) === true) {
        for (let i = 0; i < arrs.length; i++) {
            if (arrs[i] < arrs[0]) {
                num = arrs[i];
            }
        }
    }
    return num;
}
console.log(littleNum(nums));

// Task 2
let name1 = "Ceeeyhun"
function sameLetter(name1) {
    let sameLet = [];
    for (let i = 0; i < name1.length; i++) {
        for (let j = i + 1; j < name1.length; j++) {
            if (name1[i] == name1[j]) {
                if (sameLet.includes(name1[i])) {
                }
                else {
                    sameLet.push(name1[i])
                }
            }
        }
    }
    return sameLet;
}
console.log(sameLetter(name1.toLowerCase()));

// Task 3
let stc = "Cümlədə sözlərin sayını tapan alqoritm yazın.      "
let count = 1
let stc1 = stc.trim()
function StcNums() {
    for (let i = 0; i < stc1.length; i++) {
        if (stc1[i] == ' ') {
            count++;
        }
    }
    return count
}
console.log(StcNums(count))

// Task 4
let word = "col ot to loc"
let opStr = "";
function Polidroms() {
    for (let i = word.length - 1; i >= 0; i--) {
        opStr = opStr + word[i];
        if (opStr == word) {
            console.log("Polidromdur")
        }
    }
    if (opStr != word) {
        console.log("Polidrom deyil");
    }
}
console.log(Polidroms(word))

//Fibonacci
var nums = []
nums[0] = 0;
nums[1] = 1;
let a = 100;
for (var i = 2; i < a; i++) {
    nums[i] = nums[i - 1] + nums[i - 2]
    console.log(nums[i]);
}
