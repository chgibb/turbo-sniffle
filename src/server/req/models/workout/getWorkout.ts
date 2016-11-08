var sqlite3 = require('sqlite3').verbose();

import Workout from "./workout";
export default function getWorkout(Workout_ID : number,db : any) : Workout
{
    //get existing workout
    var workout : Workout = new Workout();
    return workout;
}