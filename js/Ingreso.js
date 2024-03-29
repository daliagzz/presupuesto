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

// Ingreso se exporta para ser utilizado en el archivo app.js
