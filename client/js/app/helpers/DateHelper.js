class DateHelper{

    constructor(){
        throw new Error('DateHelper não pode ser instanciada');
    }

    static textoParaData(texto){
        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto)) 
            throw new Error('Deve esar no formato aaaa-mm-dd');

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

    static dataParaTexto(Data){  
        return `${Data.getDate()}/${Data.getMonth()+1}/${Data.getFullYear()}`   
    }
}