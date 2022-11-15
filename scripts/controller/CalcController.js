class CalcController {

    constructor () {
        this._displayCalc = 0;  //underline trata objeto privado
        this._currentDate; //this torna acessivel dentro da classe objeto privado.
        this.initialize();
    }

    initialize(){

        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "1234";
        dateEl.innerHTML = "2022/11/15";
        timeEl.innerHTML = "13:20";

    }
    
    get displayCalc (){
        return this._displayCalc;   //getters => obtem valor dum objeto.
    }

    set displayCalc (valor){        //funcao inserir valor ao objeto/variavel passando um parametro dentro da funcao
        this._displayCalc = valor;   //dai voce muda valor deste elemento. ** atribuição de valor
    }
    get currentDate (){
    return this._currentDate;   
    }

    set currentDate (valor){        
        this._currentDate  = valor; 
    }
}