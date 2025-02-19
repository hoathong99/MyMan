import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SplitterModule } from 'primeng/splitter';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DividerModule } from 'primeng/divider';
import { Tab, TabsModule } from 'primeng/tabs';
import { TableScreenComponent } from '../table-screen/table-screen.component';
import { BillScreenComponent } from '../bill-screen/bill-screen.component';
import { Table } from '../Dto/Dtos';
import { CategoryScreenComponent } from '../category-screen/category-screen.component';
@Component({
  selector: 'app-cafe-sys',
  imports: [
    MatCardModule,
    SplitterModule,
    AppHeaderComponent,
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    FloatLabelModule,
    FormsModule,
    DividerModule,
    TabsModule,
    TableScreenComponent,
    BillScreenComponent,
    CategoryScreenComponent
  ],
  templateUrl: './cafe-sys.component.html',
  styleUrl: './cafe-sys.component.css',
})
export class CafeSysComponent {
  searchKeyword: string = '';
  tabOption: string = '';
  tableInput: Table = new Table();
  ngOnInit() {}
  setTabOption(num: number) {
    this.tabOption = num.toString();
    console.log('Change tab to' + this.tabOption);
  }
  setTable(table: Table) {
    this.tableInput = table;
    console.log('Change tab to' + this.tableInput);
  }

  setTableAndOpenMenu(bool: boolean) {
    // this.tableInput = table;
    if (bool == true) {
      this.tabOption = '3';
      console.log('taboption ' + this.tabOption);
    }
    // console.log('Change tab to' + this.tableInput + " And open menu");
  }
}
