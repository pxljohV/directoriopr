import React from "react";
import Router from 'next/router'
import Link from 'next/link'
import { useEffect } from "react";
let step1 = React.createRef()
let step2 = React.createRef()
let inputEmail = React.createRef()
let inputNum = React.createRef()

async function handler1(e) {

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
}


export default function Join() {
    useEffect(() => {
        step1.current.addEventListener("keydown", (e) => {
            if (e.code == "Enter") {
                handler1(e)
                console.log("pressed enter 1")
            }
        });
        step2.current.addEventListener("keydown", (e) => {
            if (e.code == "Enter") {
                handler2(e)
                console.log("pressed enter 2")
            }
        });
    }, [step1,step2])
    return (
        <div className="vh-75 w-100 flex items-center flex-wrap" >
            <form id="form" className=" flex w-100 flex-wrap" >
                <div className=" w-100 white" ref={step1}>
                    <p className="email center  mw5  pa2  tc white" id="email">¿Cual es tu correo electrónico?</p>
                    <div>
                        <input type="email" name="email" placeholder="ejemplo@email.com" className="pa2 bg-white-10 b--black-20 ba " ref={inputEmail} required/>
                        <input type="submit" value=" ➤ " className="pa2 bg-black w3 pointer grow white" onClick={handler1}/>
                    </div>
                </div>
                <div className=" w-100 dn" ref={step2} >
                    <p className="email tl pa2 tc yellow" id="num">Verifica to inbox.</p>
                    <input type="text" name="num" placeholder="_ _ _ _ _ _" className="pa2 bg-white-10 b--black-20 " ref={inputNum} required />
                    <input type="submit" value=" ➤ " className="pa2 bg-black w3 pointer grow  white" onClick={handler2} required inputMode="numeric"/>

                </div>
                <Link href="/" className="light-purple underline ma0 w-100 mt5">←regresar</Link>
            </form >

        </div >
    )
}
