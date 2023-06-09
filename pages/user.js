import React from 'react'
import Link from 'next/link'
import tachyons from 'tachyons'
import Loading from '../Components/loading'
import UserEdit from '../Components/useredit'
import { useEffect, useState } from 'react'
import { knock } from '../Components/knock'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../Components/footer'
import List from '../Components/list'

import styles from '../styles/Home.module.css'
import logo from '../Components/assets/logo.svg'

function ok(){
  return (
    <div className="flex justify-center w-100">
      <UserEdit />
    </div>
  )
}
export default function User() {

  const [load, setLoad] = useState(false)

  useEffect(
    () => {
      const r = knock()
      .then((r)=>{setLoad(r);
      console.log(r)
    })
    
    }, [])

  if (load) {
    return ok()
  }
  

  return (
    <div className="flex justify-center w-100">
      <Loading />
    </div>
  )
}


