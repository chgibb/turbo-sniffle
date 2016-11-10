var sqlite3 = require('sqlite3').verbose();
var jsonFile = require("jsonfile");

import runStatements from "../../runStatements";
import User from "./user";
export default function createUser(req : any,res : any,user : User,db : any) : boolean
{
    runStatements
    (
        "sql/queries/postUser.sql.json",
        [user.User_ID,user.First_Name,user.Last_Name,user.Created_At,user.Email],
        db,
        res
    );
    return true;
}
