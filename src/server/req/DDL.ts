import * as fs from "fs";

var sqlite3 = require('sqlite3').verbose();
var jsonFile = require("jsonfile");

import runStatements from "./runStatements";
export default function loadDDL(file : string,db : any) : boolean
{
    runStatements
    (
        "sql/DDL.sql.json",
        [],
        db
    );
    runStatements
    (
        "sql/insertTestData.sql.json",
        [],
        db
    );
    return true;
}