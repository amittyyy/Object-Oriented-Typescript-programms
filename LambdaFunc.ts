function multiply(num1:number, num2:number): number
{
    return num1 * num2;
}

var multValue = multiply(10,5);

var lambdaExpression = (num1:number, num2:number) => num1 * num2;

console.log("Normal Function Multiplcation result: " + multValue);
console.log("Lambda Expression Multiplication result: " + lambdaExpression(5,10));