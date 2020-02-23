import{Component} from '@angular/core';
import { ExcelCell } from 'src/models/excelCell';

@Component({
    selector: 'app-sheet',
    templateUrl: './excelSheet.component.html',
    styleUrls: ['./excelSheet.component.css']
})

export class ExcelSheetComponent {
    cells=[ new ExcelCell('A1'),
            new ExcelCell('B1'),
            new ExcelCell('C1'),
            new ExcelCell('D1'),
            new ExcelCell('E1'),
            new ExcelCell('F1'),
            new ExcelCell('G1'),
            new ExcelCell('H1'), 
            new ExcelCell('I1'),
            new ExcelCell('K1'),
            new ExcelCell('A1'),
            new ExcelCell('B1'),
            new ExcelCell('C1'),
            new ExcelCell('D1'),
            new ExcelCell('E1'),
            new ExcelCell('F1'),
            new ExcelCell('G1'),
            new ExcelCell('H1'), 
            new ExcelCell('I1'),
            new ExcelCell('K1'),
    ];
    
    
}