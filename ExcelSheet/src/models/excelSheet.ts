import { ExcelRow } from './excelRow';

export class ExcelSheet{
    name:string;
    rows:ExcelRow[] =[];
    rowcount:number;
    columnCount:number;
    constructor(name:string, rowCount:number, columnCount:number){
        this.name = name;
        this.rowcount = rowCount;
        this.columnCount = columnCount;
        for (let i = 1; i <= rowCount; i++) {
            this.rows.push(new ExcelRow(i,columnCount));           
        }
    };
}