export  class FormulaHelper{
     static getLetter(number:number):string{
        debugger
        if(number ===0){return;}
        let rem = number%26;
        let letter = String.fromCharCode(64 + rem);
        number = Math.floor(number /26);
        this.getLetter(number);
        return letter;
    }
}