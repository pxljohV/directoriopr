import Router from "next/router";

export async function knock() {
    // Send a fetch request to Backend API.
    const res = await fetch(process.env.API_RKNCK, {
        method: "POST",
        body: JSON.stringify(
            {
                key: localStorage.k
            }
        ),
        headers: {
            "content-type": "application/json",
        },
    }).catch((e) => console.log(e));
    const data = await res.json()
    if (data.msg === 1) {
        Router.push("/")
        return false
    } else {
        if (data.msg === 0) {
            console.log("we good")
            return true
        }
    }
}

//enia la llave
//verifica is tabla tiene la llave
//dar acceso
// else llevar al principio