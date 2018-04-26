class Person2 
{
    
//Create constructor and Declare Variable as well.
    constructor(public firstName: string,
                public lastName : string,
                public email: string,
                public age: number){ }

    //Method inside class
    getMyName()
    {
        console.log(`My Name is ${this.firstName} ${this.lastName}` );
    }
}

let p2 = new Person2('Amit','Timalsina','amity.timalsina@gmail.com',26);
p2.getMyName();
