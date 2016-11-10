import createUser from "./../../models/user/createUser";
import User from "./../../models/user/user";
export default function post(req : any, res : any,db : any) : void
{
    let success : boolean = false;
    if(req.query.First_Name &&
    req.query.Last_Name &&
    req.query.Email)
    {
        //looking for POST /api/user?First_Name=foo&Last_Name=bar&Email=Something
        let user : User = new User();
        user.First_Name = req.query.First_Name;
        user.Last_Name = req.query.Last_Name;
        user.Email = req.query.Email;
        user.User_ID = Math.floor(Math.random()*1000000);
        user.Created_At = new Date().toDateString();
        success = createUser(req,res,user,db);
        
    }
    res.send(success);
    if(success)
    {
        console.log("Succeeded posting");
        console.log(JSON.stringify(success));
    }
}