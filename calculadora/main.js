class Calculadora {
    constructor() {
        // inicia val com 0
        this.valor = '0'
    }

    //adicionar num ao visor
    adicionarNumero(numero){
        // se val atual = 0, substitui o 0
        if(this.valor === '0'){
            this.valor = numero
        } else {
            //senao, add num ao fim do val atual EX: 15
            this.valor += numero
        }

        this.atualizarVisor();
    }

    //adicionar operação ao visor
    adicionarOperacao(operacao){
        // se ultimo caracter for operação, substitui pela nova operação
        if(this.valor.slice(-1) === '+' ||
        this.valor.slice(-1) === '-' ||
        this.valor.slice(-1) === '*' ||
        this.valor.slice(-1) === '/') {
            this.valor = this.valor.slice(0, -1) + operacao
        } else {
            // se n add op no fim 
            this.valor += operacao
        }
        this.atualizarVisor()
    }

    resultado(){
        try{
            // usa func eval pra calc result expressed no visor
            this.valor = eval(this.valor).toString()
        } catch (e) {
            // caso erre na express, exibe mensagem de erro
            this.valor = 'Erro'
        }

        this.atualizarVisor()
    }

    limpar(){
        //reseta valor pra 0
        this.valor = '0'
        this.atualizarVisor()
    }

    atualizarVisor(){
        document.getElementById('visor').value = this.valor
    }
}

let calculadora = new Calculadora()