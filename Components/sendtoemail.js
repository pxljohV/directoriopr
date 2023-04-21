
import emailjs from '@emailjs/browser';


export function SendToEmail(_email, _num) {
  const serviceID = process.env.NEXT_PUBLIC_EM_SERV;
  const templateID =process.env.NEXT_PUBLIC_EM_TEMP;
  const pk = process.env.NEXT_PUBLIC_EM_PK;

  emailjs.send(serviceID, templateID, { to_email: _email, num: _num }, pk)
    .then(() => {

      console.log("Sent!");
    }, (err) => {
      console.log(err);
    });

}
