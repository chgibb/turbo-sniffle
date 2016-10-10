import createUser from "./../..//createUser";
export default function post(req : any, res : any) : void
{
    if(req.query.First_Name &&
    req.query.Last_Name &&
    req.query.Email)
    {
        //looking for POST /api/user?First_Name=foo&Last_Name=bar&Email=Something
        var success : boolean = createUser(req.query.First_Name,req.query.Last_Name,req.query.Email);
        //...
    }
}