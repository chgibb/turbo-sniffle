var sqlite3 = require('sqlite3').verbose();
var jsonFile = require("jsonfile");

export default function runStatements
(
    file : string,
    objs : Array<number|string>,
    db : 
    {
        serialize : 
        (
            func : () => void
        ) => void,
        get : 
        (
            queries : string,
            objs : Array<number|string>,
            func : 
            (
                err : string,
                row : Array<number|string>
            ) => void
        ) => void
    },
    res? : 
    {
        send : (content : any) => void
    }
) : void
{
    let queries : Array<Array<string>> = new Array<Array<string>>();
    queries = jsonFile.readFileSync(file);
    db.serialize
    (
        ()=>
        {
            for(let i : number = 0; i != queries.length; ++i)
            {
                db.get
                (
                    queries[i].join("\n"),
                    objs,
                    (err : string, row : Array<number|string>)=>
                    {
                        if(res)
                            res.send(row);
                        if(err)
                        {
                            console.log(err);
                            return;
                        }
                        if(!err)
                        {
                            console.log("Succedded executing "+queries[i].join("\n"));
                        }
                    }
                );
            }
        }
    );
}