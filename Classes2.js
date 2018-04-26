var Person2 = /** @class */ (function () {
    //Create constructor and Declare Variable as well.
    function Person2(firstName, lastName, email, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }
    //Method inside class
    Person2.prototype.getMyName = function () {
        console.log("My Name is " + this.firstName + " " + this.lastName);
    };
    return Person2;
}());
var p2 = new Person2('Amit', 'Timalsina', 'amity.timalsina@gmail.com', 26);
p2.getMyName();
//# sourceMappingURL=Classes2.js.map