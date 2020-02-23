import{Component, Input} from '@angular/core';
import { ExcelCell } from 'src/models/excelCell';
import { ExcelSheet } from 'src/models/excelSheet';
import { FormulaHelper } from 'src/excuteFormulas/FormulaHelper';

@Component({
    selector: 'app-sheet',
    templateUrl: './excelSheet.component.html',
    styleUrls: ['./excelSheet.component.css']
})

export class ExcelSheetComponent {
    @Input() sheet:ExcelSheet; 
    
    getLetter(number:number):string{
        return FormulaHelper.getLetter(number);
    }
}