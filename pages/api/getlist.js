

export default function getlist(req, res) {
    const db = require('knex')({
        client: process.env.SERV,
        connection: {
            host: process.env.HOST,
            port: process.env.DBPORT,
            user: process.env.USER,
            password: process.env.PW,
            database: process.env.DB
        }
    });
    let result={}
    db.select(process.env.NA,process.env.TO,process.env.TE,process.env.DE).from(process.env.TA)
    .then((r)=>{
       result = r
    })
    .then(()=>{ res.status(200).send(result)})
    .catch(e=>console.log(e))
}