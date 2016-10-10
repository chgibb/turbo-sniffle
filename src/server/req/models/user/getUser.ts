var sqlite3 = require('sqlite3').verbose();

import User from "./user";
export default function getUser(User_ID : number) : User
{
    //get existing user
    var user : User = new User();
    return user;
}
