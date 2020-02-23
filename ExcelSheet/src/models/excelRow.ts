import { ExcelCell } from './excelCell';
import { FormulaHelper } from 'src/excuteFormulas/FormulaHelper';

export class ExcelRow {
    name:string;
    rowNumber:number;
    isHidden:boolean;
    cells:ExcelCell[] =[];
    constructor(rowNumber:number , columnNumber:number){
        this.rowNumber= rowNumber;        
        for (let i = 1; i <= columnNumber; i++) {
            this.cells.push(new ExcelCell(FormulaHelper.getLetter(i)+rowNumber));           
        }               
    }
}