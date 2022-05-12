let dat1 = document.getElementById("dato1");
let dat2 = document.getElementById("dato2");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let btnEnviar = document.getElementById("enviar");

rotulo1.innerHTML = "ingrese el primer numero";
rotulo2.innerHTML = "ingrese el segundo numero";

btnEnviar.addEventListener("click", () => {
  let numero1: number = Number(dat1.value);
  let numero2: number = Number(dat2.value);

  if (numero1 > numero2) {
    console.log("El mayor es: " + numero1 + ", osea el primero");
  } else {
    console.log("El mayor es: " + numero2);
  }
});
