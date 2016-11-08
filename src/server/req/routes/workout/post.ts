import createWorkout from "./../../models/workout/createWorkout";
import Workout from "./../../models/workout/workout";
export default function post(req : any, res : any,db : any) : void
{
    if(req.query.Workout_ID &&
    req.query.User_ID &&
    req.query.Workout_Name &&
    req.query.Date_Performed)
    {
        //looking for POST /api/workout?Workout_ID=123&User_ID=12&Workout_Name=something&Date_Performed=something
        var workout : Workout = new Workout();
        var success : boolean = createWorkout(workout,db);
        //...
    }
}