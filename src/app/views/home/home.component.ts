import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TableCustomComponent } from '../../components/table-custom/table-custom.component';
import { TablePageEvent } from 'primeng/table';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [TableCustomComponent]
})
export class HomeComponent implements OnInit {
  elementos: any;
  total: number = 0;
  first: number = 0;
  rows: number = 10;

  constructor(private httpClient: HttpClient){}
  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    return this.httpClient.get(`https://dummyjson.com/products/?limit=${this.rows}&skip=${this.first}`).subscribe((response: any) => {
      this.elementos = response.products;
      this.total = response.total;
    })
  }


  onPageChange(event: TablePageEvent){
    this.first = event.first;
    this.rows = event.rows;
    this.fetchProducts();
  }
}
