const amigos = [

    {
        nombre: "Xavier",
        apellido: "Nochelli",
        provincia: "Mendoza"
    },

    {
        nombre: "Julian",
        apellido: "Godoy",
        provincia: "Mendoza"
    },

    {
        nombre: "Federico",
        apellido: "Val",
        provincia: "Buenos Aires"
    },

    {
        nombre: "Alvaro",
        apellido: "Orquera",
        provincia: "La Rioja"
    },

    {
        nombre: "Marcelo",
        apellido: "Puga",
        provincia: "Mendoza"
    }

]  

// for each
amigos.forEach(amigo => {
    console.log(amigo.apellido);
})

function presentar(amigo){

    console.log("Hola soy: " + amigo.nombre)
}

amigos.forEach(presentar)

// map
const nombre = amigos.map(amigo => amigo.nombre)
console.log(nombre)


// for of
for (const amigo of nombre) {
    console.log(amigo[0])
}

// filter
const buscar = "Alvaro"

const filtrar = amigos.filter(amigo => amigo.nombre.includes(buscar))
console.log(filtrar)

// find
const elPrimero = amigos.find(amigo => amigo.provincia)?.provincia
console.log(elPrimero)