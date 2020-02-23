import {Component, Input} from '@angular/core';
import { ExcelCell } from 'src/models/excelCell';

@Component({
    selector:'app-cell',
    templateUrl:'./excelCell.component.html',
    styleUrls:['./excelCell.component.css']
})

export class ExcelCellComponent{
    @Input() cell:ExcelCell;  
    
    editorOpen($event){
        //this.cell.isEditing = true;
    }
    closeEditor(){
        //this.cell.isEditing =false;
    }
}