var sqlite3 = require('sqlite3').verbose();
var jsonFile = require("jsonfile");

import Workout from "./workout";
export default function getWorkout(res : any,Workout_ID : number,User_ID : number,db : any) : void
{
    let queries : Array<Array<string>> = new Array<Array<string>>();
    if(Workout_ID)
        queries = jsonFile.readFileSync("sql/queries/getWorkout(Workout_ID).sql.json");
    if(User_ID)
        queries = jsonFile.readFileSync("sql/queries/getWorkout(User_ID).sql.json");
    console.log(queries);
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
                    [Workout_ID],
                    (err : string, row : Array<any>)=>
                    {
                        res.send(row);
                    }
                )
            };
        }
    );
}