var sqlite3 = require('sqlite3').verbose();
var jsonFile = require("jsonfile");

import User from "./user";
export default function getUser(res : any,User_ID : number,db : any) : void
{
    let queries : Array<Array<string>> = new Array<Array<string>>();
    queries = jsonFile.readFileSync("sql/queries/getUser.sql.json");
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
                    [User_ID],
                    (err : string, row : Array<any>)=>
                    {
                        res.send(row);
                    }
                )
            };
        }
    );
}
