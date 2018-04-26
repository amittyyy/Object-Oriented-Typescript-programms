class Person 
{
    public firstName: string;
    public lastName : string;
    public email: string;
    public age: number;
//Create constructor
    constructor(fn:string,ln:string,email:string,age:number)
    {
        this.firstName = fn;
        this.lastName  = ln;
        this.email     = email;
        this.age       = age;
    }

    //Method inside class
    getMyName()
    {
        console.log(`My Name is ${this.firstName} ${this.lastName}` );
    }
}

let p = new Person('Amit','Timalsina','amity.timalsina@gmail.com',26);
p.getMyName();
