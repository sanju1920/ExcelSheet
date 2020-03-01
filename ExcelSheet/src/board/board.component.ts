import { Component } from "@angular/core";
import { ExcelBoard } from 'src/models/excelBoard';
import { BoardService } from 'src/app/board.service';
 

@Component({
    selector:'app-board',
    templateUrl:'./board.component.html',
    styleUrls:['./board.component.css']
})

export class BoardComponent{
    board: ExcelBoard;

    constructor(private boardService:BoardService){ 
        this.board = boardService.board;     
    }

    setActiveSheet(name:string){
        this.board.setActiveSheet(name);
    };
    addSheet(){
        this.boardService.addSheet(null);
    }
}