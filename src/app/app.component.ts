import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { PrimeNGModule } from './modules/prime-ng.module';
import { TableCustomComponent } from './components/table-custom/table-custom.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeNGModule, TableCustomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'workshop-primeng';
  elementos: any;

  constructor(private primengConfig: PrimeNGConfig, private httpClient: HttpClient) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.fetch();
  }

  fetch(){
    return this.httpClient.get(
      `http://localhost:8080/treatment/list/?page=0&size=10`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnYW1lbSIsImV4cCI6MTcxMzIyNzc3MH0.jIs49ZscHXwWuryzp7-NDnVCzCvIItN7XaLbdibkdcAfph0gXTlIuIFqsj8wet4WyHXqOwxikkhyaCgbv0cIxQ`
        }
      }
    ).subscribe((response: any) => {
      this.elementos = response?.content;
    },
    (error) => console.error(error));
  }

}
