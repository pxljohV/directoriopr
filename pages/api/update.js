

export default function sender(req, res) {
    const data = req.body._data
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

    if (data.name.length > 0) {
        db(process.env.TA).where({ keynum: data.key }).update({ name: data.name }).then(() => { })
        .catch(e=>{res.end()})
    }
    if (data.town.length > 0 && data.town != "seleccione pueblo") {
        db(process.env.TA).where({ keynum: data.key }).update({ town: data.town }).then(() => { })
        .catch(e=>{res.end()})
    }
    if (data.tel.length > 0) {
        db(process.env.TA).where({ keynum: data.key }).update({ tel: data.tel }).then(() => { })
    }
    if (data.desc.length > 0) {
        db(process.env.TA).where({ keynum: data.key }).update({ desc: data.desc }).then(() => { })
        .catch(e=>{res.end()})
    }

    setTimeout(() => {
        res.status(200).send({ msg: 0 })
    }, 4000 / 60);

}