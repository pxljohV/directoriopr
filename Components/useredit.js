import { sender } from '../Components/sender'
import Router from 'next/router';
import React from 'react';
import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../Components/footer'
import tachyons from 'tachyons/css/tachyons.css'
import styles from '../styles/Home.module.css'
import logo from '../Components/assets/logo.svg'

const inputName = React.createRef();
const inputTown = React.createRef();
const inputTel = React.createRef();
const inputDesc = React.createRef();
const inputImg = React.createRef();
const inputButton = React.createRef()
export default function UserEdit() {
    const [data, setData] = useState({})
    function handler(e) {
        e.preventDefault();
        const telRegx = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
        if (inputTel.current.value.length < 12 && inputTel.current.value.length > 0) {

            if (inputTel.current.value.length < 12) {
                inputTel.current.classList.add("ba", "b--red", "bg-red")
            }
        } else {
            if (telRegx.test(inputTel.current.value) || inputTel.current.value.length < 1) {
                let data = {
                    name: inputName.current.value,
                    town: inputTown.current.value,
                    tel: inputTel.current.value,
                    desc: inputDesc.current.value,
                    key: localStorage.k,
                }
                sender(data)
                    .then(inputButton.current.classList.add("bg-green"))
                    .then(setTimeout(() => { Router.push("/") }, 5000 / 60))
            }
        }
    }
    return (
        <div className=" w-100 ">
            <Head>
                <title>Directorio</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <nav className="pa2 flex justify-between bg-black bb b--white-10 ">
                    <div className="flex items-center">
                        <a href="/"><Image src={logo} alt="logo" width={40} heigth={40} /></a>
                        <p className="b roboto dn db-m db-l">FOTOGRAFOSDEPUERTORICO</p>
                    </div>
                    <div className="  pa2 flex justify-around ">
                        <a href="join" className="ba tc pa2 mr3 pointer flex items-center white-50">EDITAR</a>
                        <a href="about" className="ba tc pa2 pinter flex items-center white">NOSOTROS</a>
                    </div>
                </nav>
            </header>
            <main className="">
                <form action="POST" className="mw6 center bg-black pa4">
                    <p className="mb5 f3  roboto b" >Panel del usuario:</p>
                    <p className="center tc f5 i white-60">*Solo llena la información que desees actualizar.</p>
                    <input type="text" placeholder="nombre" className="w-100 pa2" ref={inputName} />
                    <select name="municipalities" id="hora" className="w-40 pa1 mb2 mt3 pa2 w-100" ref={inputTown} >
                        <option value="seleccione pueblo">Seleccione Pueblo</option>
                        <option value="Adjuntas">Adjuntas</option>
                        <option value="Aguada">Aguada</option>
                        <option value="Aguadilla">Aguadilla</option>
                        <option value="Aguas Buenas">Aguas Buenas</option>
                        <option value="Aibonito">Aibonito</option>
                        <option value="Arecibo">Arecibo</option>
                        <option value="Arroyo">Arroyo</option>
                        <option value="Añasco">Añasco</option>
                        <option value="Barceloneta">Barceloneta</option>
                        <option value="Barranquitas">Barranquitas</option>
                        <option value="Bayamón">Bayamón</option>
                        <option value="Cabo Rojo">Cabo Rojo</option>
                        <option value="Caguas">Caguas</option>
                        <option value="Camuy">Camuy</option>
                        <option value="Canóvanas">Canóvanas</option>
                        <option value="Carolina">Carolina</option>
                        <option value="Cataño">Cataño</option>
                        <option value="Cayey">Cayey</option>
                        <option value="Ceiba">Ceiba</option>
                        <option value="Ciales">Ciales</option>
                        <option value="Cidra">Cidra</option>
                        <option value="Coamo">Coamo</option>
                        <option value="Comerío">Comerío</option>
                        <option value="Corozal">Corozal</option>
                        <option value="Culebra">Culebra</option>
                        <option value="Dorado">Dorado</option>
                        <option value="Fajardo">Fajardo</option>
                        <option value="Florida">Florida</option>
                        <option value="Guayama">Guayama</option>
                        <option value="Guayanilla">Guayanilla</option>
                        <option value="Guaynabo">Guaynabo</option>
                        <option value="Gurabo">Gurabo</option>
                        <option value="Guánica">Guánica</option>
                        <option value="Hatillo">Hatillo</option>
                        <option value="Hormigueros">Hormigueros</option>
                        <option value="Humacao">Humacao</option>
                        <option value="Isabela">Isabela</option>
                        <option value="Jayuya">Jayuya</option>
                        <option value="Juana Díaz">Juana Díaz</option>
                        <option value="Juncos">Juncos</option>
                        <option value="Lajas">Lajas</option>
                        <option value="Lares">Lares</option>
                        <option value="Las Marías">Las Marías</option>
                        <option value="Las Piedras">Las Piedras</option>
                        <option value="Loiza">Loiza</option>
                        <option value="Luquillo">Luquillo</option>
                        <option value="Manatí">Manatí</option>
                        <option value="Maricao">Maricao</option>
                        <option value="Maunabo">Maunabo</option>
                        <option value="Mayagüez">Mayagüez</option>
                        <option value="Moca">Moca</option>
                        <option value="Morovis">Morovis</option>
                        <option value="Naguabo">Naguabo</option>
                        <option value="Naranjito">Naranjito</option>
                        <option value="Orocovis">Orocovis</option>
                        <option value="Patillas">Patillas</option>
                        <option value="Peñuelas">Peñuelas</option>
                        <option value="Ponce">Ponce</option>
                        <option value="Quebradillas">Quebradillas</option>
                        <option value="Rincón">Rincón</option>
                        <option value="Rio Grande">Rio Grande</option>
                        <option value="Sabana Grande">Sabana Grande</option>
                        <option value="Salinas">Salinas</option>
                        <option value="San Germán">San Germán</option>
                        <option value="San Juan">San Juan</option>
                        <option value="San Lorenzo">San Lorenzo</option>
                        <option value="San Sebastián">San Sebastián</option>
                        <option value="Santa Isabel">Santa Isabel</option>
                        <option value="Toa Alta">Toa Alta</option>
                        <option value="Toa Baja">Toa Baja</option>
                        <option value="Trujillo Alto">Trujillo Alto</option>
                        <option value="Utuado">Utuado</option>
                        <option value="Vega Alta">Vega Alta</option>
                        <option value="Vega Baja">Vega Baja</option>
                        <option value="Vieques">Vieques</option>
                        <option value="Villalba">Villalba</option>
                        <option value="Yabucoa">Yabucoa</option>
                        <option value="Yauco">Yauco</option>

                    </select>
                    <input type="text" placeholder="telefono ej: 787-555-4444" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="w-100 mt2 pa2" ref={inputTel} maxLength="14" />
                    <textarea type="textarea" placeholder="descipción" className="w-100 mt3 h4" ref={inputDesc} maxLength="600" />
                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" className="dn pa4 ba bb b--white-20 tc w-100 mt3" ref={inputImg} />

                    <input type="submit" value="guardar" className="w-100 mt2 pa2 bg-orange b mt5" onClick={handler} ref={inputButton} />
                </form>
            </main>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}





