class Beverage{

    constructor(name, maker, vol, type, dop){
        this.name = name;
        this.maker = maker;
        this.vol = vol;
        this.type = type;
        this.dop = dop;
    
    }

    set dop(value){
        if (value === null) {
            this._dop = new Date();
            
        } else if(value.includes('/')){
            const dopArray = dop.split('/');                      //splitto le mie stringhe allo slash 
            const year = parseInt(dopArray[2])                    //all'indice DUE perché voglio il terzo elemento (l'anno) ma parto da 0
            const month = parseInt(dopArray[1]) - 1;
            const day = parseInt(dopArray[0]);                   
            this.dop = new Date(year, month, day);
    
        } else {
            this._dop = new Date(value);
        } 
    }
    
    get dop() {
        return this._dop;
    }
    

    toString(){
        const card = 'Name:' + this.name +
        'Produttore:' + this.maker + '\n' +
        'Gradazione alcolica:' + this.vol + '% /n' +
        'Tipologia:' + this.type + '\n' +
        'Data: ' + this.dop + '\n';

        return card;
    }

}