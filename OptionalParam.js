function add(num1, num2, num3) {
    var total = num1 + num2;
    if (num3 != undefined) {
        total += num3;
    }
    return total;
}
var answer = add(12, 23, 22);
console.log("adding three numbers" + answer);
answer = add(32, 18);
console.log("adding two numbers" + answer);
//# sourceMappingURL=OptionalParam.js.map