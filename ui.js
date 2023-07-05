class UI {
    constructor() {

        const data = Storage.loadData();
        if (data !== null) {
            
            this.cellar = Cellar.fromDbObject(data);
        } else {
            this.cellar = new Cellar();
        }



    
    }

    startApp() {
        while (true) {
            const firstChoice = prompt(
                "Ciao utente la nostra cantina ha a dispozione" + this.cellar.beverageCount + 
                " bevande.\n" +
                "Hai 4 opzioni:\n" +
                    "1)Guarda la lista delle bevande\n" +
                    "2)Aggiungi bevanda\n" +
                    "3)rimuovi bevanda\n" +
                    "4)Esci\n" +
                    "inserisci il numero della scelta"
            );
            if (firstChoice === "1") {
                this.showBeverages();
            } else if (firstChoice === "2") {
                this.insertBeverage();
            } else if (firstChoice === "3") {
                this.deleteBeverage();
            } else if (firstChoice === "4") {
                break;
            } else {
                alert("hai sbagliato ad inserire l'opzione");
            }
        }
    }

    showBeverages() {
        const allBeverages = this.cellar.getAllBeverages();
        alert(allBeverages);
    }

    insertBeverage() {

        const insertChoice = prompt('Vuoi inserire una birra o un vino?')

        if(insertChoice !== 'birra' && insertChoice !== 'vino'){
            alert('non puoi inserire altri tipi di bebande');
            return;
        }
        const name = prompt("inserisci titolo");
        const maker = prompt("Inserisci il produttore");
        const vol = parseInt(prompt("inserisci la gradazione alcolica"));
        const type = prompt("inserisci il tipo");
        const dop = prompt("inserisci la data");

        if (insertChoice === 'birra'){
            const malt = prompt('inserisci il tipo di malto');
            const beer = new Beer(name, maker, vol, type, dop, malt);
            this.cellar.addBeverage(beer);
        } else {
            const region = prompt ('inserisci la regione');
            const vine = prompt ('inserisci la vigna');
            const wine = new Wine(name, maker, vol, type, dop, region, vine);
            this.cellar.addBeverage(wine);
        }

        Storage.saveData(this.cellar.beverageArray)

        // const beverage = new Beverage();
        // this.cellar.addBeverage(beverage);
        // console.log(this.cellar);
    }

    deleteBeverage() {
        const humanIndex = prompt ('inserisci numero per eliminare')
        const i = humanIndex -1;

        this.cellar.removeBeverage(i);
        console.log(this.cellar);

        Storage.saveData(this.cellar.beverageArray)
    }


    
}
