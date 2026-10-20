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

// 2) a)
console.log("-----1------")
const saludar = () => {
    console.log("Hola, bienvenido!")
}

saludar();


//b)
console.log("-----2------")
const comparar = (n1, n2) => {
    if (n1 < n2) {
        console.log(`El numero ${n1} es menor que ${n2}`)
    }
    else if (n1 === n2) {
        console.log(`El numero ${n1} es igual que ${n2}`)
    }
    else {
        console.log(`El numero ${n1} es mayor que ${n2}`)
    }
}

const n1 = 5

for (let i = 0; i < 10; i++) {
    comparar(i, n1);
}


//3) a)
console.log("-----1------")
const operacion = (p1, p2, callback) => {
    if (typeof p1 !== "number" || typeof p2 !== "number") {
        console.log("Debe ingresar solo números.");
    }
    callback(p1, p2)
} 

const suma = (p1, p2) => {
    const resultado = p1 + p2
    console.log(`El resultado de la suma es ${resultado}`)
}

const resta = (p1, p2) => {
    const resultado = p1 - p2
    console.log(`El resultado de la resta es ${resultado}`)
}

p1 = 10
p2 = 5
// p2 = '5'

operacion(p1, p2, suma)
operacion(p1, p2, resta)

console.log("-----2------")
