import {Component, Input} from '@angular/core';
import { ExcelCell } from 'src/models/excelCell';
import { BoardService } from 'src/app/board.service';
import { ParseExpression } from 'src/excuteFormulas/parseExpression';

@Component({
    selector:'app-cell',
    templateUrl:'./excelCell.component.html',
    styleUrls:['./excelCell.component.css']
})

export class ExcelCellComponent{
    @Input() cell:ExcelCell;  
    
    constructor(private boardService:BoardService){

    }
    editorOpen($event){
        //this.cell.isEditing = true;
    }
    closeEditor(){
        if(this.cell.value[0] =='='){
            this.cell.formula = this.cell.value;
            let parse = new ParseExpression();
            this.cell.value = parse.parseFormula(this.cell.value.substring(1))
        }
    }
    selectCell(){
        this.boardService.board.cellAddress = this.cell.address;
        this.boardService.board.cellFormula = this.cell.formula || this.cell.value;
    }
}