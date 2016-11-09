import getUser from "./../../models/user/getUser";
import User from "./../../models/user/user";
export default function get(req : any, res : any,db : any) : void
{
    if(req.query.User_ID)
    {
        //looking for GET /api/user?User_ID=something
        getUser(res,req.query.User_ID,db);
        //...
    }
}