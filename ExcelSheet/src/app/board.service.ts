import { Injectable } from '@angular/core';
import { ExcelBoard } from 'src/models/excelBoard';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  board: ExcelBoard;

  addSheet(name:string):void{
    let sheetName = name || `Test${this.board.sheets.length}`;
    this.board.addSheet(sheetName,20,20);
    this.board.setActiveSheet(sheetName);
  }
  
  constructor() {
    this.board = new ExcelBoard();
    this.board.addSheet('Test', 20, 10);
    this.board.addSheet('Demo', 15, 20);
    this.board.addSheet('Test 1', 10, 10);
    this.board.activeSheet = this.board.sheets[0];
  }

}
