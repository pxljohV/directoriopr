export async function sender( _data ) {

    const res = await fetch(process.env.API_UP, {
        method: "POST",
        body: JSON.stringify(
            {
                _data
            }
        ),
        headers: {
            "content-type": "application/json",
        },
    }).catch((e) => console.log(e));

    const data = await res.json()
   
}