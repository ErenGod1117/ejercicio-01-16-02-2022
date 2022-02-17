const button1 = document.getElementById('button-1')
const cards = document.getElementById('cards')
const API = "https://jsonplaceholder.typicode.com/users";

const resultadosData = (api) => {
    fetch(api)
    .then ((responsive) =>{
        return responsive.json()
    })
    .then ((datos) =>{
        button1.onclick = function(){
            mostrarCards(datos)
        }
    })
    .catch((error) =>{
        console.log(error)
    })
}

const mostrarCards = (datos) => {
    let Mcards = ''
    let i = 1
    datos.forEach((item) => {
        Mcards += `<div class="col-6 mt-3 d-flex justify-content-center">
            <div class="card">
                <img  height="100px"  style="border-radius: 10px;" src="./image/${1}.PNG">
                <h6 class=" mt-3 text-center">Mi nombre es: ${item['name']}</h6>
                <p class="text-center">Mi Correo electronico es: ${item['email']}</p>
                <p class="text-center">Vivo en: ${item['address']['street']}</p>
            </div>
        </div>`
        i++
        cards.innerHTML = Mcards
    })
}
resultadosData(API)