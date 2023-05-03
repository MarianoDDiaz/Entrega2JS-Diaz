const productos = [
  { nombre: "zapato", precio: 10000 },
  { nombre: "borcego", precio: 25000 },
  { nombre: "sandalia", precio: 5000 },
  { nombre: "mocasin", precio: 13000 },
];

let carrito = []

let sumartotal = 0;
let sumaZapato = 0;
let sumaBorcego = 0;
let sumaSandalia = 0;
let sumaMocasin = 0;
let medioDePago = 0;
let compra = 0;
let precio = 0;

function mostrarResultados() {
  alert(`usted ha comprado:
  ${sumaZapato} zapatos
  ${sumaBorcego} borcegos
  ${sumaSandalia} sandalias
  ${sumaMocasin} mocasines
  el total de la compra es de ${sumartotal} pesos.`);

  // Medios de pago //

  while (sumartotal != 0) {
    medioDePago = prompt(`
      Seleccione medio de pago:
      1 para efectivo 
      2 para 3 cuotas sin interes`);

    if (
      medioDePago == 1 ||
      medioDePago == 2 ||
      medioDePago == 3 ||
      medioDePago == 4
    ) {
      switch (medioDePago) {
        case "1":
          if (sumartotal >= 30000) {
            sumartotal = (sumartotal * 0.9).toFixed(1);
            alert(`Tiene un 10% de descuento en su compra y debera pagar ${sumartotal} pesos.
            Que tenga un buen dia!`);
          } else {
            alert(`Debera pagar ${sumartotal} pesos.
            Gracias por su compra!`);
          }
          break;
        case "2":
          sumartotal = (sumartotal / 3).toFixed(1);
          alert(`Debera pagar 3 cuotas de ${sumartotal} pesos.
          Gracias por su compra!`);
          break;
      }
      break;
    } else {
      alert("Debe ingresar un medio de pago valido");
      continue;
    }
  }
}

let seleccion = prompt("Bienvenido, desea iniciar su compra, si - no");

while (seleccion != "si" && seleccion != "no") {
  alert("Ingrese si o no");
  seleccion = prompt("Ingrese si o no");
}
if (seleccion == "si") {
  alert("A continuacion vera nuestra lista de productos");
  let listadeProductos = productos.map((producto) =>producto.nombre + " " + producto.precio + "$");
  alert(listadeProductos.join(" / "))
} else if (seleccion == "no"){
    alert("Lo esperamos pronto")
}

while (seleccion !="no") {
  compra = prompt(`seleccione lo que quiera comprar:
1 para zapato
2 para borcego
3 para sandalia 
4 para mocasin
y "fin" si desea terminar de comprar`);

  if (compra == "fin" || compra == "FIN") {
    alert(`el total es : ${sumartotal} pesos`);
    break;
  } else if (compra == 1) {
    precio = 10000;
    sumartotal += precio;
    sumaZapato += 1;
  } else if (compra == 2) {
    precio = 25000;
    sumartotal += precio;
    sumaBorcego += 1;
  } else if (compra == 3) {
    precio = 5000;
    sumartotal += precio;
    sumaSandalia += 1;
  } else if (compra == 4) {
    precio = 13000;
    sumartotal += precio;
    sumaMocasin += 1;
  } else {
    alert("opcion invalida, intente nuevamente");
    continue;
  }
  alert(`el total es : ${sumartotal} pesos.`);

}


mostrarResultados();
