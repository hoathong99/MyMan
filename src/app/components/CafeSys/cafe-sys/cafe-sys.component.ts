import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SplitterModule } from 'primeng/splitter';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
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
  ],
  templateUrl: './cafe-sys.component.html',
  styleUrl: './cafe-sys.component.css',
})
export class CafeSysComponent {
  searchKeyword : string = "";
  tabOption: string="";
  setTabOption(num :number){
    this.tabOption = num.toString();
    console.log("Change tab to"+this.tabOption);
  }
}
