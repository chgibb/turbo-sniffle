import createWorkout from "./../../models/workout/createWorkout";
import Workout from "./../../models/workout/workout";
export default function post(req : any, res : any,db : any) : void
{
    var success : boolean = false;
    if(req.query.Workout_ID &&
    req.query.User_ID &&
    req.query.Workout_Name &&
    req.query.Date_Performed)
    {
        //looking for POST /api/workout?Workout_ID=123&User_ID=12&Workout_Name=something&Date_Performed=something
        var workout : Workout = new Workout();
        workout.Workout_ID = req.query.Workout_ID;
        workout.User_ID = req.query.User_ID;
        workout.Workout_Name = req.query.Workout_Name;
        workout.Date_Performed = req.query.Date_Performed;
        success = createWorkout(workout,db);
        //...
    }
    res.send(success);
    if(success)
    {
        console.log("Succeeded posting");
        console.log(JSON.stringify(success));
    }
}