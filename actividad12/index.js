// 1) a)
/*
const numeros = [];

for (let i = 0; i < 5; i++) {
    const numero = +prompt("Ingresar numero: ")
    numeros.push(numero)
}
console.log(numeros)

//b)

for (let i = 0; i < 5; i++) {
    const numero = +prompt("Ingresar numero: ")
    if (numero % 2 !== 0) {
        numeros.push(numero)
    }    
}
console.log(numeros)
//c)
const frutas = ["peras", "manzana", "banana", "durazno"]

frutas.forEach((fruta, i) => {
    frutas[i] = fruta.toUpperCase()
})
 
console.log(frutas)


//d)
const frutas = ["peras", "manzana", "banana", "durazno"]
const mayusculas = frutas.map((fruta) => fruta.toUpperCase())
 
console.log(mayusculas)


//e)
const frutas = ["peras", "manzana", "banana", "durazno"]

const frutasNa = frutas.filter((fruta) => 
    fruta.includes("na"));
 
console.log(frutasNa)
*/


// ------- 2 --------
//a)
const producto = {
    nombre: "Remera",
    precio: 0,
    stock: 12,
    talles: ["S", "M"]
}
//b) 
const productos = [
  {
    nombre: "Remera",
    precio: 10500,
    stock: 0,
    talles: ["S", "M"],
  },

  {
    nombre: "Pantalón",
    precio: 25000,
    stock: 16,
    talles: ["38", "40", "42"],
  },

  {
    nombre: "Campera",
    precio: 3,
    stock: true,
    talles: ["M", "L", "XL"],
  },

  {
    nombre: "Zapatillas",
    precio: 1,
    stock: false,
    talles: ["40", "41", "42", "43"],
  },

  {
    nombre: "Gorra",
    precio: 8,
    stock: true,
    talles: ["Único"],
  }
]


productos.forEach((productos) => {
    if (productos.stock < 5) {
        console.log(producto)
    }
})


//c)
const productosConDescuento = productos.map((producto) => {
  return {
    ...producto,
    precio: producto.precio * 0.9,
  }
})

console.log(productosConDescuento)


//d) 
const productosMayoresA10 = productos.filter((producto) => producto.precio > 10)

console.log(productosMayoresA10)