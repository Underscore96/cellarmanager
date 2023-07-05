class Wine extends Beverage{
    constructor(name, maker, vol, type, dop, region, vine){
        super(name, maker, vol, type, dop);
        this.region = region;
        this.vine = vine;
}

toString(){
    return 'Vino:\n' + super.toString() +
    'regione: ' + this.region + '\n' +
    ' vigna: ' + this.vine + '\n';
}

}