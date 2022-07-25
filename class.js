class Issue{
    static contador= 0;
    constructor(titulo,descripcion,severity,delegado){
          this._titulo= titulo;
          this._descripcion= descripcion;
          this._severity= severity;
          this._delegado= delegado;
          this._id= ++Issue.contador;
        
    }
 
    get titulo(){
        return this._titulo;
    }
 
    set titulo(titulo){
      this._titulo=titulo;
    }
 
    get descripcion(){
        return this._descripcion;
    }
 
    set descripcion(descripcion){
       this._descripcion=descripcion;
    }
    
    get severity(){
        return this._severity;
    }
    set severity(severity){
       this._severity= severity;
    }
 
    get delegado(){
        return this._delegado;
    }
 
    set delegado(delegado){
        this._delegado=delegado;
    }
 
   get id(){
    return this._id;
   }
 
 }
 