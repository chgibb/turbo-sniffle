var sqlite3 = require('sqlite3').verbose();

export default function initDB(name : string, mode : number) : any
{
    let db : any = new sqlite3.Database
    (
        name,
        mode,
        (err : any) =>
        {
            if(err)
            {
                console.log("Error opening database: ", err, err.stack);
                return;
            }
            console.log("Successfully opened "+name);
        }
    );
    return db;
}