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
            console.log(r)
            console.log(req.body.key)
            if (r[0].keynum == req.body.key) {
                //good
                console.log("ok")
            }
        }).then(() => {
            console.log("knock resolved")
            res.status(200).send({msg:0})
        }).catch((e) => {
            console.log(e)
            res.status(200).send({msg:1})
        })
}
