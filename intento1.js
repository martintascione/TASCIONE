
//VARIABLES
let dolares = prompt ("Selecciona el tipo de cambio: \n 1) Dolar Tarjeta \n 2) Dolar Qatar \n 3) Dolar Blue")
let cantidad = parseInt(prompt ("AHORA SELECCIONA UNA CANTIDAD"))
let dolarTarjeta = 445;
let dolarQatar = 509;
let dolarBlue = 484;



//FUNCIONES

if (dolares == "1"){
    let total = (cantidad*dolarTarjeta)
    alert (total)
}
else if (dolares == "2"){
    let total = (cantidad*dolarQatar)
    alert (total)
}
else if (dolares == "3"){
    let total = (cantidad*dolarBlue)
    alert (total)
}
