//Third-party Javascript dependencies
var express = require("express");
var bodyParser = require("body-parser");
var sqlite3 = require('sqlite3').verbose();

//First-party Typescript dependencies
import postUser from "./req/routes/user/post";
import getUser from "./req/routes/user/get";
import postWorkout from "./req/routes/workout/post";
import getWorkout from "./req/routes/workout/get";

import loadDDL from "./req/DDL";

let defaultMode : number = sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE;

  let db : any = new sqlite3.Database("database", defaultMode, function(err : any) {
    if (err) {
      console.log('Error opening database:', err, err.stack);
      return;
    }
    console.log('Database was opened successfully');
  });
loadDDL("sql/DDL.sql",db);

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
        //POST /api/user?First_Name=foo&Last_Name=bar&Email=Something
        postUser(req,res,db);
    }
).get
(
    function(req : any,res : any)
    {
        //GET /api/user?User_ID=something
        getUser(req,res,db);
    }
);

router.route('/workout').post
(
    function(req : any,res : any)
    {
        //POST /api/workout?Workout_ID=123&User_ID=12&Workout_Name=something&Date_Performed=something
        postWorkout(req,res,db);
    }
).get
(
    function(req : any,res : any)
    {
        //GET /api/workout?Workout_ID=something
        getWorkout(req,res,db);
    }
);

app.use('/api',router);
app.listen(port);
