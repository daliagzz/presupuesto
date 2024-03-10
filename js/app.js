import Egreso from "./Egreso.js";
import Ingreso from "./Ingreso.js";
//import Dato from "./Dato.js";

const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2,
        maximumFractionDigits:2
    });
};
//Rutina para convertir "un valor" a porcentaje c/2 dígitos
const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-MX', {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
};

// let egresos=[
//     900,
//     400,
// ]
// let ingresos=[
//     9000,
//     400,
// ]


//_----------------------
// let ingresos = [
//     new Ingreso ("Salario", 22000),
//     new Ingreso ("Venta auto", 50000),
// ]

// let egresos = [
//     new Egreso ("Renta", 4700),
//     new Egreso("Ropa", 890),
// ]---------------------------------

let ingresos =[
    new Ingreso('Salario', 20000),
//    new Ingreso('Venta auto', 50000),//CHAT -- mzo5
//    new Ingreso('Venta de productos', 500),
    new Ingreso('Intereses', 100),
];
ingresos.push(new Ingreso('Bonificación', 300))//CHAT ---acaba mzo5

let egresos=[
    new Egreso('Renta', 4000),
//    new Egreso('Ropa', 800)
];
egresos.push(new Egreso('Tururu', 4333))



const d = document;

const cargarCabecero=()=>{

    const totalIngresos=()=>{
        let totalIngreso=0;
        for (let i of ingresos) {
            totalIngreso += i.valor;
        }
        return totalIngreso;
    }

    const totalEgresos=()=>{
        let totalEgreso=0;
        for (let egreso of egresos) {
            totalEgreso += egreso.valor;
        }
        return totalEgreso;
    }

    let presupuesto=(totalIngresos()-totalEgresos());
    let porcentajeEgreso= (totalEgresos()/totalIngresos());

d.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
d.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
d.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
d.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());


// console.log(presupuesto);
console.log(porcentajeEgreso);
// console.log(totalIngresos());
// console.log(totalEgresos());

// console.log(formatoMoneda(presupuesto));
console.log(formatoPorcentaje(porcentajeEgreso));
// console.log(formatoMoneda(totalIngresos()));
// console.log(formatoMoneda(totalEgresos()));

return {totalIng: totalIngresos};

}
//cargarCabecero();


//Secc para CARGAR INGRESOS DINAMICAMENTE... pag 2 act 4

function crearIngresoHTML(ingreso) {
    let ingresoHTML = `
    <div id="lista_ingresos"
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn" onclick="eliminarIngreso(${ingreso.id})">
                        <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `;
    return ingresoHTML;
};

function cargarIngresos() {
    let ingresosHTML='';
    for (let ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    const listaIngresos=d.getElementById('lista_ingresos').innerHTML = ingresosHTML;

    cargarEgresos();
}


//función de pag 4 de 6 avance 4
function eliminarIngreso(id){
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id ===id);
    if(indiceEliminar !== -1){
        ingresos.splice(indiceEliminar, 1);
        cargarCabecero();
        cargarIngresos();
        cargarEgresos();
    }
};



//--------------EGRESOS DINAMICAMENTE----


function crearEgresoHTML(egreso) {

    var cC = cargarCabecero();

    let egresoHTML = `
    <div id="lista_egresos"
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${egreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
                <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/cC.totalIng())}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                        <ion-icon name="close-circle-outline" onclick="eliminarEgreso(${egreso.id})"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `;
    return egresoHTML;
};

function cargarEgresos() {
    let egresosHTML='';
    for (let egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso);
    }
    const listaEgresos=d.getElementById('lista_egresos').innerHTML = egresosHTML;
}

//---------funcion pag 4 de 6 avance 4 de proyecto------

function eliminarEgreso(id){
    let indiceEliminar = egresos.findIndex(egreso => egreso.id ===id);
    if(indiceEliminar !== -1){
        egresos.splice(indiceEliminar, 1);
        cargarCabecero();
        cargarEgresos();
    }
}





//---------------------- para el html--------
// const btnAgregar = d.querySelector('.agregar_btn');
// btnAgregar.onclick = () =>{
//     agregarDato();
// }
//para el html--------------------------






function agregarDato() {
//     // Recuperar el formulario y los valores
    const forma = d.getElementById('forma');
    const tipo = forma.querySelector('#tipo').value;
    const descripcion = forma.querySelector('#descripcion').value;
    const valor = forma.querySelector('#valor').value;
    
//     // Validar que los campos no estén vacíos
    if (descripcion.trim() !== '' && valor.trim() !== '') {
//         // Agregar el dato al arreglo correspondiente
        if (tipo === 'ingreso') {
        ingresos.push(new Ingreso(descripcion, parseFloat(valor)));
        cargarCabecero();
        cargarIngresos();
        } else if (tipo === 'egreso') {
        egresos.push(new Egreso(descripcion, parseFloat(valor)));
        cargarCabecero();
        cargarEgresos();
        }
    }
    
//     // Limpiar el formulario
//    forma.reset();
    
//     // Evitar que se recargue la página
//    return false;
};



const cargarApp=()=>{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
//    agregarDato();
};


window.cargarApp = cargarApp;
window.eliminarEgreso = eliminarEgreso;
window.eliminarIngreso = eliminarIngreso;
window.agregarDato = agregarDato;

// const cargarApp=()=>{
//         cargarCabecero();
//         cargarIngresos();
//         cargarEgresos();
//     //    agregarDato();
    
//     agregarDato();
//     eliminarIngreso();
//     eliminarEgreso();
// };
//     cargarApp();