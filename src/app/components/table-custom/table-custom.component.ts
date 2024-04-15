import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PrimeNGModule } from '../../modules/prime-ng.module'
import { TablePageEvent } from 'primeng/table';

@Component({
  selector: 'app-table-custom',
  standalone: true,
  imports: [PrimeNGModule],
  templateUrl: './table-custom.component.html',
  styleUrl: './table-custom.component.scss',
})
export class TableCustomComponent {
  @Input() colunas: string[] = [];
  @Input() dados: string[] = [];
  @Input() elementos: any;
  @Input() total: number = 0;

  @Output() onPageChange = new EventEmitter();

  pageChange(event: TablePageEvent) {
    this.onPageChange.emit(event);
  }
}
