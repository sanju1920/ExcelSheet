import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import{ FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExcelSheetComponent } from '../board/excelSheet/excelSheet.component';
import {ExcelCellComponent} from '../board/excelCell/excelCell.component';
import { BoardComponent } from 'src/board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    ExcelSheetComponent,
    ExcelCellComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
