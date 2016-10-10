//Third-party Javascript dependencies
var express = require("express");
var bodyParser = require("body-parser");
var sqlite3 = require('sqlite3').verbose();

//First-party Typescript dependencies
import postUser from "./req/routes/user/post";
import getUser from "./req/routes/user/get";

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
        postUser(req,res);
    }
).get
(
    function(req : any,res : any)
    {
        getUser(req,res);
    }
);

app.use('/api',router);
app.listen(port);
