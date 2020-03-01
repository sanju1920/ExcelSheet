import { ExcelSheet } from './excelSheet';

export class ExcelBoard{
    sheets:ExcelSheet[] =[];
    cellAddress:string;
    cellFormula: string;
    activeSheet:ExcelSheet;
    
    addSheet(name:string, rowCount:number, columnCount:number):void{
        
        this.sheets.push(new ExcelSheet(name,rowCount,columnCount));
    };

    getActiveSheet():ExcelSheet{
        return this.activeSheet;
    };

    setActiveSheet(name:string):void{
        this.activeSheet = this.sheets.find((x)=>{return x.name === name});
    };
}