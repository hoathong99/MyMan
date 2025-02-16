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
import { TabsModule } from 'primeng/tabs';
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
  ],
  templateUrl: './cafe-sys.component.html',
  styleUrl: './cafe-sys.component.css',
})
export class CafeSysComponent {
  searchKeyword: string = '';
  tabOption: string = '';
  tabs: { title: string; value: number; content: string }[] = [];
  
  ngOnInit() {
    this.tabs = [
        { title: 'Tab 1', value: 0, content: 'Tab 1 Content' },
        { title: 'Tab 2', value: 1, content: 'Tab 2 Content' },
        { title: 'Tab 3', value: 2, content: 'Tab 3 Content' },
    ];
}
  setTabOption(num: number) {
    this.tabOption = num.toString();
    console.log('Change tab to' + this.tabOption);
  }
}

export class MenuItem {
  name: string = '';
  price: number = 0;
  icon: string = '';
  count: number = 0;
  color: string = '';
  constructor(
    name?: string,
    price?: number,
    icon?: string,
    count?: number,
    color?: string
  ) {}
  addCount(n: number) {
    this.count += n;
  }
}

export class Table {
  id: string = '';
  name: string = '';
  area: string = '';
  icon: string = '';
  bill: Bill = new Bill();
  color: string = '';
  constructor() {}
}

export class Bill {
  id: string = '';
  listArray: ItemServing[] = [];
  subTotal: number = 0;
  total: number = 0;
  VAT: number = 0;
  status: number = 0;
  method: number = 0;
  constructor(id?: string, list?: ItemServing[]) {}
}

export class ItemServing {
  name: string = '';
  price: number = 0;
  id: string = '';
  image: string = '';
  constructor(id?: string, name?: string, price?: number, image?: string) {}
}
