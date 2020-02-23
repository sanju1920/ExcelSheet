export class ExcelCell{
    name:string;
    isReadOnly:boolean;
    isEditing:boolean;
    isDirty:boolean;
    formula:string;
    address:string;
    rowNumber:number;
    columnNumer:number;
    value:any;
    constructor(address:string){
            this.address = address;
            this.value = address;
    };

    setName(name:string):ExcelCell{
        this.name = name;
        return this;
    };

    getValue():any{
        return this.value;
    };

    setValue(value:any):ExcelCell{
        this.value = value;
        return this;
    };
    updateValue(value:any):ExcelCell{
            this.value = value;
            this.isDirty = true;
            return this;        
    };
}