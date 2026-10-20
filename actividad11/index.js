//1a) sin retorno de valor
console.log("-----1------")
function saludarNormal(){
    console.log("Hola, bienvenido!") 
}
saludarNormal();


//b)
console.log("-----2------")
const saludarPersona = (nombre) => {
    console.log(`Hola ${nombre}, bienvenido `)
}

const nombre = "Geronimo"
saludarPersona(nombre);


//c
console.log("-----3------")
const esMayorDeEdad = (edad) => {
    let bandera = true
    if (edad >= 18)  {
        console.log(bandera)
    }
    else {
        bandera = false
        console.log(bandera)    
    }
}

const edad = 13
esMayorDeEdad(edad);

// 2)
console.log("-----1------")
const saludar = () => {
    console.log("Hola, bienvenido!")
}

saludar();