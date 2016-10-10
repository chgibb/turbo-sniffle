import createUser from "./../../models/user/createUser";
import User from "./../../models/user/user";
export default function post(req : any, res : any) : void
{
    if(req.query.First_Name &&
    req.query.Last_Name &&
    req.query.Email)
    {
        //looking for POST /api/user?First_Name=foo&Last_Name=bar&Email=Something
        var user : User = new User();
        var success : boolean = createUser(user);
        //...
    }
}