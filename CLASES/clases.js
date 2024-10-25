class Persona {

    constructor(nombre,apellido){
        this._nombre = nombre
        this._apellido = apellido;
    }
    
    get nombre(){
        return this._nombre;
    }

    set nombre(nuevoNombre){
        return this._nombre = nuevoNombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(nuevoApellido){
        return this._apellido = nuevoApellido;
    }

    presentar(){
        console.log("Hola me llamo " + this.nombre + " " + this.apellido);
    }
}

const persona1 = new Persona("Emiliano","Esteban Diaz");
persona1.presentar();