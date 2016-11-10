import * as fs from "fs";

var sqlite3 = require('sqlite3').verbose();
var jsonFile = require("jsonfile");

import runStatements from "./runStatements";
export default function loadDDL(file : string,db : any) : boolean
{
    runStatements
    (
        "sql/DDL.sql.json",
        [],
        db
    );
    /*let rawDDL : Array<Array<string>> = new Array<Array<string>>();
    rawDDL = jsonFile.readFileSync("sql/DDL.sql.json");
    db.serialize
    (
        ()=>
        {
            for(let i : number = 0; i != rawDDL.length; ++i)
            {
                db.run
                (
                    rawDDL[i].join("\n"),
                    [],(err : string)=>
                    {
                        if(err)
                        {
                            console.log("In DDL.ts");
                            console.log(err);
                        }
                    }
                );
            }
        }
    );*/
    db.serialize
    (
        ()=>
        {
            db.run
            (
                "insert into User values(000001,'erik', 'tillberg', '2016-Nov-02', 'swag@lakeheadu.ca');"
                ,[],(err : string)=>
                {
                    console.log("In DDL.ts");
                    console.log(err);
                }
            );
            db.run
            (
                "insert into Workout values(000001,000001, 'Push Ups Workout', '2016-Nov-02')"
                ,[],(err : string)=>
                {
                    console.log("In DDL.ts");
                    console.log(err);
                }
            );
        }
    );
    return true;
}