//Types
let firstName: any = 0;
firstName = "Sara";
console.log("any type: " + firstName);

let x: undefined = undefined;
console.log("undefined gets: " + x);

//Array
const names: string[] = ["ahmed", "mohamed", "john"];
names.push("Mona");
console.log("Array string: " + names);

// tuples 
const user: [string, number, string] = ["ahmed", 100 , "john"];
console.log("tuples: " + user);

// enum 
enum Roles {
    Admin = "Admin",
    Author = "Author",
    User = "User"
}

console.log("enum type1: " + Roles.Admin);

enum StatusCodes {
    NotFound= 404,
    Success = 200,
    BadRequest = 400
}

console.log("enum type2: " + StatusCodes.Success);

