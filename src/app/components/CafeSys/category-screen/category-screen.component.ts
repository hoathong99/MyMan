import { Component, EventEmitter, Output } from '@angular/core';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Category } from '../Dto/Dtos';
@Component({
  selector: 'app-category-screen',
  imports: [
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    FormsModule,
    FloatLabelModule,
  ],
  templateUrl: './category-screen.component.html',
  styleUrl: './category-screen.component.css',
})
export class CategoryScreenComponent {
  searchKeyword: string = '';
  @Output() selectedCategory = new EventEmitter<string>();
  
}
