export default function borrar(req, res) {
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

    db.delete(process.env.A).from(process.env.TA)
    .then(()=>{ res.status(200).end()})
    .catch(e=>console.log(e))
}