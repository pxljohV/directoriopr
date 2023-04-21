import React from 'react'
import Link from 'next/link'
export default function About() {
    return (
        <div className="vh-75  flex flex-wrap justify-center items-center w-100">
            <h2 className="mb0 pa0 ba pa4">
                "FOTOGRAFOS DE PUERTO RICO" es un directorio para boricuas que ejercen dicha profesión. Un de varios proyectos personales que intenta ayudar a mi gente de esta isla.
            </h2>
            <Link href={"/"} className="ma0 pa0 light-purple underline"><p> ←Volver</p></Link>
        </div>
    )
}
