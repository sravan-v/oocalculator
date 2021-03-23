// take 2 inputs and operator

// class with constructor 
class Calculator {
    constructor(val1, val2, operator) {
        this.x = val1;
        this.y = val2;
        this.z = operator;
    }
}

Calculator.prototype.eval = function () {
    switch (this.z) {
        case 'add':
            res = this.x + this.y;
            break;
        case 'sub':
            res = this.x - this.y;
            break;
        case 'mul':
            res = this.x * this.y;
            break;
        case 'div':
            res = this.z / this.y;
            break;
        default:
            res = 'Invalid expression'
            break;
    }
    return res;
};

// calc is an instance of Calculator
let calc = new Calculator(3, 4, 'add');

// print 
console.log(calc.eval());