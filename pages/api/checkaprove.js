
import { k } from "../../Components/k"
export default function handler(req, res) {
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

    db.select("*").from(process.env.TA).where({ email: req.body.email, number: req.body.num })
        .then((r) => {
            console.log(r.length)
            if (r.length < 1) {
                console.log("you are doing something wrong.")
                res.status(200).send({ msg: "BAD" })
            } else {
                console.log("checking")
                db(process.env.TA).where({ email: req.body.email }).update({ approved: 1, keynum: k() })
                    .then(() => {
                        db.select(process.env.KY).from(process.env.TA).where({email: req.body.email})
                        .then(
                            (n)=>{
                                //k
                                res.status(200).send({msg:"GOOD", k: n[0].keynum})
                            })
                    })
            }
        }).then(()=>{})
        .catch((e) => { console.log(e + " : BAD"); return })
}
