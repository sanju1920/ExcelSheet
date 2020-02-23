import { Component } from "@angular/core";
import { ExcelBoard } from 'src/models/excelBoard';

@Component({
    selector:'app-board',
    templateUrl:'./board.component.html',
    styleUrls:['./board.component.css']
})

export class BoardComponent{
    board: ExcelBoard;

    constructor(){
        this.board = new ExcelBoard();
        this.board.addSheet('Test',20,10);
        this.board.addSheet('Demo',15,20);
        this.board.addSheet('Test 1',10,10);
    }

    setActiveSheet(name:string){
        this.board.setActiveSheet(name);
    };
    

}