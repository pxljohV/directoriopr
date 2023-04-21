import React from "react";
import Router from 'next/router'
import logo from '../Components/assets/logo.svg'
import Image from 'next/image'
import { useEffect, useState } from "react";
export default function List() {
   
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(process.env.API_1)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
                localStorage.k=0
            })
    }, [])
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
    return (
        <div className="center  bg-black ">
            {
                data.map((i, index) => {
                    return (
                        <div key={index} className="w-100-ns  pa4-ns bt b--white-30 center mb3">

                            <div className=" pa  bg-white-10 ">
                                <div className="bg-white " style={{ width: '160px', height: '160px' }}>
                                    a
                                </div>

                            </div>

                            <div className="w-100">
                                <div className="flex justify-between items-center relative w-80-ns w-80-m pa2 ">
                                    <h1 className="name b f2  f3-m f2-ns tl  ma0">{i.name}</h1>
                                </div>
                                <div className="w-100 flex items-center">
                                    < a href={`tel:${i.tel}`} className="w-50">
                                        <p className="b mw5-ns  pa1 ma0 pointer bg-light-purple br2 flex justify-center w-100-m w-100 black">✆ {i.tel}
                                        </p>
                                    </a>
                                    <p className=" i  pa2 ma0 w-60 tl white-90">📍{i.town}</p>
                                </div>

                                
                                <p className="white-90 ma0 tl pv2 bb  pa2 i bt" style={{wordBreak: 'break-all'}}>{i.desc}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
