import Dato from "./Dato.js"

class Egreso extends Dato{
    static contadorEgresos=0;
    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++Egreso.contadorEgresos;
    }
    get id(){
        return this._id;
    }
}

export default Egreso;

//Egreso se exporta para ser utilizado en el archivo app.js