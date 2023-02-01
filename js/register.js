const btn = document.querySelector("#btn")
.addEventListener("click", async (event)=>{
    try {
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

        let res = await fetch(`https://soundgarden-api.deta.dev/events`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",    
            },
            body: JSON.stringify(raw)
        })
        let data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
})