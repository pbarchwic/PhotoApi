import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import {
  Format,
  Formats,
  Paper,
  Papers,
  Product,
  Products,
} from 'src/app/models/Photos.model';

@Component({
  selector: 'photo',
  templateUrl: 'photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit {
  public products: Product[] = [];
  public isError: boolean = false;

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    const products = this.http.get<Products>('assets/products.json');
    const formats = this.http.get<Formats>('assets/formats.json');
    const papers = this.http.get<Papers>('assets/papers.json');

    forkJoin([products, formats, papers])
      .pipe(
        map(([products, formats, papers]) => {
          products.products.map((product) => {
            console.log(product);
          });
          return products;
        })
      )
      .subscribe({
        next: (data) => {
          this.products = data.products;
          console.log(data.products);
          this.isError = false;
        },
        error: (msg) => {
          this.isError = true;
        },
      });
  }
}
