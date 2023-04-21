import { createNumber } from "../../Components/createnumber"
//import sendMail from '@emailjs/browser';
//import { SendToEmail } from "../../Components/sendtoemail";
global.XMLHttpRequest = require('xhr2');
//import emailjs from '@emailjs/browser';
const emailjs = require('@emailjs/browser');

export default function handler(req, res) {
  const db = require('knex')({
    client: process.env.SERV,
    connection: {
      host: process.env.HOST,
      port: process.env.PORT,
      user: process.env.USER,
      password: process.env.PW,
      database: process.env.DB
    }
  })
  db.select(process.env.EM).from(process.env.TA).where(process.env.EM, req.body.email)
    .then((r) => {
      const num = createNumber();
      if (r.length < 1) {
        //empty
        db.raw(`insert into ${process.env.TA}  (${process.env.EM}, ${process.env.NU}, approved) values('${req.body.email}', ${num}, 0)`)
          //.then(() => { SendToEmail(req.body.email, num) })
          .then(() => {
            db.select("*").from(process.env.TA)
              .then((result) => {
                res.status(200).send({ msg: 0 })
              })
          }).catch((e) => { console.log(e) })
      } else {
        console.log("that one already exist. Updating approval number")
        db('lagente').where({ email: req.body.email }).update({ number: num })
          .then(() => {
            const serviceID = process.env.DEFAULT;
            const templateID = process.env.TEMPLATE;
            const pk = process.env.PK;
            let p = Promise.resolve("RESOLUTION");
            p.then(() => { emailjs.send(serviceID, templateID, { to_email: req.body.email, num: num }, pk) })
              .then(() => {
                console.log("Sent!");
              }, (err) => {
                console.log(err);
              });
          })
          .then(() => console.log("number updated"))
          .catch(e => console.log(e))
      }
    }).then(res.status(200).send({ msg: 0 }))
    .catch(e => console.log(e))
}