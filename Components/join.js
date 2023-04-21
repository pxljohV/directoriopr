import React from "react";
import Router from 'next/router'
let step1 = React.createRef()
let step2 = React.createRef()
let inputEmail = React.createRef()
let inputNum = React.createRef()

async function handler(e) {
   
    e.preventDefault()
    // Send a fetch request to Backend API.
    const res = await fetch(process.env.API_PR, {
        method: "POST",
        body: JSON.stringify(
            {
                email: inputEmail.current.value,
            }
        ),
        headers: {
            "content-type": "application/json",
        },
    }).catch((e) => console.log(e));
    step1.current.classList.add("dn")
    step2.current.classList.remove("dn")
}
async function handler2(e) {
    e.preventDefault()
    // Send a fetch request to Backend API.
    const res = await fetch(process.env.API_CHECK, {
        method: "POST",
        body: JSON.stringify(
            {
                email: inputEmail.current.value,
                num: inputNum.current.value
            }
        ),
        headers: {
            "content-type": "application/json",
        },
    }).catch((e) => console.log(e));
    const data = await res.json()
    console.log(await data.msg)
    if (data.msg == "BAD") {
        alert("Intentalo denuevo")
        Router.reload("/")
    } else {
        if (data.msg == "GOOD") {
            localStorage.k = data.k
            Router.push('/user')
        }
    }
    step1.current.classList.add("dn")
    step2.current.classList.remove("dn")
}


export default function Join() {
    return (
        <div className="vh-75 w-100 flex items-center " >
            <form id="form" className=" flex w-100">
                <div className=" w-100 " ref={step1}>
                    <p className="email center  mw5  pa2  tc" id="email">¿Cual es tu correo electrónico?</p>
                    <div>
                        <input type="text" name="email" placeholder="ejemplo@email.com" className="pa2 bg-white-10 b--black-20 ba " ref={inputEmail} />
                        <input type="submit" value=" ➤ " className="pa2 bg-black w3 pointer grow" onClick={handler} />
                    </div>

                </div>
                <div className="dn w-100" ref={step2}>
                    <p className="email tl pa2 tc yellow" id="email">Verifica to inbox.</p>
                    <input type="text" name="email" placeholder="_ _ _ _ _ _" className="pa2 bg-white-10 b--black-20 " ref={inputNum} />
                    <input type="submit" value=" ➤ " className="pa2 bg-black w3 pointer grow" onClick={handler2} />
                </div>
            </form>
        </div>
    )
}
