import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    AccordionModule,
    ToastModule,
  ],
  exports: [
    CommonModule,
    TableModule,
    ButtonModule,
    AccordionModule,
    ToastModule,
  ]
})
export class PrimeNGModule { }
