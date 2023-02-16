import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSortModule,
  ],
  exports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSortModule,
  ]
})
export class MaterialModule { }
