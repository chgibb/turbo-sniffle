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
    return true;
}