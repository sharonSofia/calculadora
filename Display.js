 class Display{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAterior = '';
        this.signos={
            sumar:'+',
            dividir:'%',
            multiplicar:'x',
            restar:'-',
        }
    
    }
    borrar() {
this.displayValorActual = this.displayValorActual.toString().slice(0, -1);
this.imprimirValores();
}
borrarTodo(){
    this.valorActual = '';
    this.valorAterior = '';
    this.tipoOperacion = undefined;
    this.imprimirValores();
}
computar(tipo){
    this.tipoOperacion !== 'igual' && this.calcular();
    this.tipoOperacion = tipo;
    this.valorAterior = this.valorActual || this.valorAterior;
    this.valorActual = '';
    this.imprimirValores ();
}
    agregarNumero(numero){
        if(numero === '.' && this.displayValorActual.includes('.')) return
        this.valorActual =  this.valorActual.toString() + numero.toString() ;
        this.imprimirValores();
    }
    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAterior} ${this.signos[this.tipoOperacion] ||'' }`;
    }
    calcular() {
        const valorAterior = parseFloat(this.displayValorAnterior);
        const valorActual = parseFloat(this.displayValorActual);

        if( isNaN(valorActual) || isNaN(valorAterior))return
       this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
 }