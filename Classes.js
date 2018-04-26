var Person = /** @class */ (function () {
    //Create constructor
    function Person(fn, ln, email, age) {
        this.firstName = fn;
        this.lastName = ln;
        this.email = email;
        this.age = age;
    }
    //Method inside class
    Person.prototype.getMyName = function () {
        console.log("My Name is " + this.firstName + " " + this.lastName);
    };
    return Person;
}());
var p = new Person('Amit', 'Timalsina', 'amity.timalsina@gmail.com', 26);
p.getMyName();
//# sourceMappingURL=Classes.js.map