export class ExcelCell{
    name:string;
    isReadOnly:boolean;
    isEditing:boolean = false;
    address:string;
    rowNumber:number;
    columnNumer:number;
    value:any;
    constructor( name){
            this.name = name;
            this.value = name;
    };

    getValue:any =()=>{
        return this.value;
    };
    setValue=(value:any):any=>{
        this.value = value;
        return this;
    }
    updateValue = (value:any)=> {
            this.value = value;
            this.isReadOnly = true;
            return this;        
    }
}