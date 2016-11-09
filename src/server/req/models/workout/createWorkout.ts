var sqlite3 = require('sqlite3').verbose();
var jsonFile = require("jsonfile");

import runStatements from "../../runStatements";
import Workout from "./workout";
export default function createWorkout(workout : Workout,db : any) : boolean
{
    runStatements
    (
        "sql/queries/postWorkout.sql.json",
        [workout.Workout_ID,workout.User_ID,workout.Workout_Name,workout.Date_Performed],
        db
    );
    /*let queries : Array<Array<string>> = new Array<Array<string>>();
    queries = jsonFile.readFileSync("sql/queries/postWorkout.sql.json");
    db.serialize
    (
        ()=>
        {
            for(let i : number = 0; i != queries.length; ++i)
            {
                db.get
                (
                    queries[i].join("\n"),
                    [workout.Workout_ID,workout.User_ID,workout.Workout_Name,workout.Date_Performed],
                    (err : string, row : Array<any>)=>
                    {
                        //res.send(row);
                        if(err)
                        {
                            console.log(err);
                            return;
                        }
                    }
                )
            };
        }
    );*/
    return true;
}