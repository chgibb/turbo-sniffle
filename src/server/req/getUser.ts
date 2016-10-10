var sqlite3 = require('sqlite3').verbose();

import User from "./user";
export default function getUser(First_Name : string,Last_Name : string,Email : string) : User
{
    //get existing user
    var user : User = new User();
    return user;
}