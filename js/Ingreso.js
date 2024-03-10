import Dato from "./Dato.js";

const d = document;

class Ingreso extends Dato{
    static contadorIngresos=0;
    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++Ingreso.contadorIngresos;
    }
    get id(){
        return this._id;
    }
}
export default (Ingreso);


// const crearIngresoHTML = (ingreso) => {
//     let ingresoHTML = `
//     <div class="elemento limpiarEstilos">
//         <div class="elemento_descripcion">${ingreso.descripcion}</div>
//         <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
//         <ion-icon name="close-circle-outline" onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
//     </div>
//     `;
//     return ingresoHTML;
// };

// const cargarIngresos = () => {
//     let ingresosHTML='';
//     for (let ingreso of ingresos) {
//         ingresosHTML += crearIngresoHTML(ingreso);
//     }
//     const listaIngresos=d.getElementById('lista_ingresos').innerHTML = ingresosHTML;
// }
// cargarIngresos();


