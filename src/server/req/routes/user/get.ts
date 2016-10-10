import getUser from "./../../getUser";
import User from "./../../user";
export default function get(req : any, res : any) : void
{
    if(req.query.User_ID)
    {
        //looking for GET /api/user?User_ID=something
        var success : User = getUser(req.query.User_ID);
        //...
    }
}