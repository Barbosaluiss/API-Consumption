const btn = document.querySelector("#btn")
btn.addEventListener("click", (event)=>{
    event.preventDefault()
    register()
})

function popUp(){
    return alert("Evento criado")
}

async function register(){
    try{
    const eventName = document.querySelector("#nome")
    const attractions = document.querySelector("#atracoes")
    const description = document.querySelector("#descricao")
    const scheduled = document.querySelector("#data")
    const tickets = document.querySelector("#lotacao")
    
    let raw = {
        "name": eventName.value,
        "poster": "link da imagem",
        "attractions": [
            attractions.value
        ],
        "description": description.value,
        "scheduled": "2022-03-24T00:57:37.761Z",
        "number_tickets": Number(tickets.value) 
    }

    const res = await fetch("https://soundgarden-api.deta.dev/events", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",    
        },
        body: JSON.stringify(raw)
    })

    const data = await res.json()
    console.log(data)

    popUp()

    } catch(error){
        console.log(error)
    }
}