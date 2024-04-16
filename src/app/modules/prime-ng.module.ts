import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';
import { BadgeModule } from 'primeng/badge';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    AccordionModule,
    ToastModule,
    BadgeModule,
    MenuModule,
  ],
  exports: [
    CommonModule,
    TableModule,
    ButtonModule,
    AccordionModule,
    ToastModule,
    BadgeModule,
    MenuModule,
  ]
})
export class PrimeNGModule { }
