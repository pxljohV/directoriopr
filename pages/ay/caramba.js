import React from 'react'

export  async function aycaramba() {
    const d =await fetch("../api/borrar")
    .then(()=>{console.log("aycaramba"); return})
}
export default  function caramba() {
    aycaramba()
}