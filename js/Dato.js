class Dato{
    constructor(descripcion, valor){
        this._descripcion = descripcion;
        this._valor = valor;
    }

    get descripcion(){
        return this._descripcion;
    }
    set descripcion(nDescripcion){
        //if(nDescripcion===)
        this._descripcion = nDescripcion;
    }
    get valor(){
        return this._valor;
    }
    set valor(nValor){
        this._valor = nValor;
    }
}

export default Dato;
//module.exports Dato;