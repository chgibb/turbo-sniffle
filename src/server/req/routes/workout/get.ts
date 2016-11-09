import getWorkout from "./../../models/workout/getWorkout";
import Workout from "./../../models/workout/workout";
export default function get(req : any, res : any,db : any) : void
{
    if(req.query.Workout_ID)
    {
        //looking for GET /api/workout?Workout_ID=something
        getWorkout(res,req.query.Workout_ID,req.query.User_ID,db);
    }
}