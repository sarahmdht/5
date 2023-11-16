"use strict";
let firstName = 0;
firstName = "Sara";
console.log("any type: " + firstName);
let x = undefined;
console.log("undefined gets: " + x);
const names = ["ahmed", "mohamed", "john"];
names.push("Mona");
console.log("Array string: " + names);
const user = ["ahmed", 100, "john"];
console.log("tuples: " + user);
var Roles;
(function (Roles) {
    Roles["Admin"] = "Admin";
    Roles["Author"] = "Author";
    Roles["User"] = "User";
})(Roles || (Roles = {}));
console.log("enum type1: " + Roles.Admin);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log("enum type2: " + StatusCodes.Success);
