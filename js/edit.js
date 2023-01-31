const ID = "63d976903d33d3fb68fe1f31"

async function events(){
    try{
    const inputName = document.querySelector("#nome")
    const inputBanner = document.querySelector("#banner")
    const inputAttractions = document.querySelector("#atracoes")
    const inputDescription = document.querySelector("#descricao")
    const inputSchedule = document.querySelector("#data")
    const inputTickets = document.querySelector("#lotacao")
    

    const res = await fetch(`https://soundgarden-api.deta.dev/events/${ID}`, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",    
        }
    })

    const data = await res.json()

    inputName.value = data.name
    inputBanner.value = data.poster
    inputAttractions.value = data.attractions
    inputDescription.value = data.description
    inputSchedule.value = data.scheduled
    inputTickets.value = data.number_tickets
    }catch(error){
        console.log(error)
    }   
}

events()

//Update Event

const eventName = document.querySelector("#nome")
const attractions = document.querySelector("#atracoes")
const description = document.querySelector("#descricao")
const scheduled = document.querySelector("#data")
const tickets = document.querySelector("#lotacao")
const btn = document.querySelector("#btn")

btn.addEventListener("click", async (event)=>{

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

    event.preventDefault()
    try {
        const response = await fetch(`https://soundgarden-api.deta.dev/events/${ID}`, {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(raw)
        })

        const resData = await response.json()

        console.log(resData)
        //alert("Evento atualizado")
    } catch (error) {
        console.log(error)
    }
})