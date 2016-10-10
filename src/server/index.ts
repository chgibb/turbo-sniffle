//Third-party Javascript dependencies
var express = require("express");
var bodyParser = require("body-parser");
var sqlite3 = require('sqlite3').verbose();

//First-party Typescript dependencies
import User from "./req/user";
import createUser from "./req/createUser";
import getUser from "./req/getUser";

var app = express();

var port = 8080;

app.use("/public",express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

app.get('/', function(req : any, res : any)
{
	res.sendFile(process.cwd()+'/index.html');
});

router.route('/user').post
(
    function(req : any,res : any)
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
).get
(
    function(req : any,res : any)
    {
        if(req.query.User_ID)
        {
            //looking for GET /api/user?User_ID=something
            var success : User = getUser(req.query.User_ID);
            //...
        }
    }
);

app.use('/api',router);
app.listen(port);
