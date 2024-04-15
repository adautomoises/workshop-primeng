import { Component, Input, OnInit } from '@angular/core';
import { PrimeNGModule } from '../../modules/prime-ng.module';

@Component({
  selector: 'app-table-custom',
  standalone: true,
  imports: [PrimeNGModule],
  templateUrl: './table-custom.component.html',
  styleUrl: './table-custom.component.scss',
})
export class TableCustomComponent<M> implements OnInit {
  @Input() elementos: M[] = [];

  ngOnInit(): void {
    this.filter();
  }

  filter() {
    console.log("teste");
    console.log(this.elementos);
  }
}
