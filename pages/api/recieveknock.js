import React from 'react'

export default function recieveknock(req, res) {
    const db = require('knex')({
        client: process.env.SERV,
        connection: {
            host: process.env.HOST,
            port: process.env.DBPORT,
            user: process.env.USER,
            password: process.env.PW,
            database: process.env.DB
        }
    })
    let response = { msg: 0 };
    db.select(process.env.KY).from(process.env.TA).where(process.env.KY, req.body.key)
        .then((r) => {
            if (r[0].keynum == req.body.key) {
                //good
                response.msg = 1;
            } else {
                response.msg = 0;
            }

        }).then(() => {
            console.log("knock resolved")
            res.status(200).send(response.msg)
        }).catch((e) => {
            console.log(e)
        })
}
