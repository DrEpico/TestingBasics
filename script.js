function getOne(){
    return 1;
}
console.log(getOne());

function capitalise(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string){
    let newString = "";
    for(let i = string.length - 1; i >= 0; i--){
        newString += string[i];
    }
    return newString;
}

const calculator = {
    sum: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    divide: function(a, b) {
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        return a / b;
    },
    multiply: function(a, b) {
        return a * b;
    }
};


module.exports = { getOne, capitalise, reverseString, calculator };