// CONDICIONALES

//a) mayor o menor de edad
const edad = 18;

if (edad >= 18) {
    console.log("Es mayor de edad")
}
else {
    console.log("Es menor de edad")
}

//b) par o impar
const numero = 1

if (numero % 2 == 0) {
    console.log("Es par")
}
else{
    console.log("Es impar")
}

//c) 
const nota = 8
if (nota <= 3) {
    console.log("Reprobado")
}
else if (nota >= 4 && nota <= 6) {
    console.log("Aprobado")
}
else {
    console.log("Excelente")
}

//2
//a)
for (let i=0; i <=10; i++)
    {
        console.log(i)
    }

//b)
for (let i=9; i >= 0; i--)
    {
        console.log(i)
    }

//c) 
for (let i=0; i <= 20; i++)
    {
        if (i % 2 == 0) {
            console.log(i + " es par")
        }
        else (
            console.log(i + " es impar")
        )
    }

//d) template literals `` sirve para interpolar valores
for (let i=0; i <= 20; i++)
    {
        if (i % 2 == 0) {
            console.log(`El numero ${i} es par`)
        }
        else (
            console.log(`El numero ${i} es impar`)
        )
    }