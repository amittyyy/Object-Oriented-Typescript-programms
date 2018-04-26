function addit(num1, num2, num3) {
    if (num3 === void 0) { num3 = 0; }
    var total = num1 + num2 + num3;
    return total;
}
var answers = addit(12, 18, 50);
console.log("Adding three numbers: " + answers);
answers = addit(12, 18);
console.log("Adding two NUmbers: " + answers);
//# sourceMappingURL=DefaultParam.js.map