export class Auto {

constructor(_id = '', marca = '',modelo = 0,km = 0,precio = 0,contacto = 0){
    this._id = _id;
    this.marca = marca;
    this.modelo = modelo;
    this.km = km;
    this.precio = precio;
    this.contacto = contacto;
}

    _id: string;
    marca: string;
    modelo: number;
    km: number;
    precio: number;
    contacto: number;

}
