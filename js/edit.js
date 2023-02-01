const params = new URLSearchParams(window.location.search)
const id = params.get("id")

async function eventId(){
    let inputName = document.querySelector("#nome")
    let inputBanner = document.querySelector("#banner")
    let inputAttractions = document.querySelector("#atracoes")
    let inputDescription = document.querySelector("#descricao")
    let inputScheduled = document.querySelector("#data")
    let inputTickets = document.querySelector("#lotacao")

    try{
    let res = await fetch(`https://soundgarden-api.deta.dev/events/${id}`)
    let data = await res.json()

    inputName.value = data.name
    inputBanner.value = data.poster
    inputAttractions.value = data.attractions
    inputDescription.value = data.description
    inputScheduled.value = data.scheduled
    inputTickets.value = data.number_tickets
    }catch(error){
        console.log(error)
    }
}

eventId()

//update Event

const btn = document.querySelector("#btn")
.addEventListener('click', async (event)=>{
    event.preventDefault()

    let eventName = document.querySelector("#nome")
    let attractions = document.querySelector("#atracoes")
    let description = document.querySelector("#descricao")
    let scheduled = document.querySelector("#data")
    let tickets = document.querySelector("#lotacao")

    let raw = {
        "name": eventName.value,
        "poster": "link da imagem",
        "attractions": [
            attractions.value
        ],
        "description": description.value,
        "scheduled": new Date().toISOString(),
        "number_tickets": Number(tickets.value) 
    }

    try {
        let res = await fetch(`https://soundgarden-api.deta.dev/events/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json",    
            },
            body: JSON.stringify(raw)
        })
        let data = await res.json()
        
        alert("Evento atualizado!")
    } catch (error) {
        console.log(error)
    }
})