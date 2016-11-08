var sqlite3 = require('sqlite3').verbose();
var jsonFile = require("jsonfile");

import User from "./user";
export default function createUser(req : any,res : any,user : User,db : any) : boolean
{
    let queries : Array<Array<string>> = new Array<Array<string>>();
    queries = jsonFile.readFileSync("sql/queries/postUser.sql.json");
    //get existing user
    db.serialize
    (
        ()=>
        {
            for(let i : number = 0; i != queries.length; ++i)
            {
                db.get
                (
                    queries[i].join("\n"),
                    [user.User_ID,user.First_Name,user.Last_Name,user.Created_At,user.Email],
                    (err : string, row : Array<any>)=>
                    {
                        //res.send(row);
                        if(err)
                        {
                            console.log(err);
                            return;
                        }
                        res.send(JSON.stringify(user));
                    }
                )
            };
        }
    );
    return true;
}
