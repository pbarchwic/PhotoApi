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
            this.getFormats(product, formats);
            this.getPaper(product, papers);
          });
          return products;
        })
      )
      .subscribe({
        next: (data) => {
          console.log(data.products);
          this.products = data.products;
          this.isError = false;
        },
        error: () => {
          this.isError = true;
        },
      });
  }

  private getFormats(product: Product, formats: Formats): void {
    product.format = formats.formats.find(
      (format) => format.id === product.formatId
    )?.format;
    product.typeName = formats.formats.find(
      (format) => format.typeId === product.typeId
    )?.typeName;
  }

  private getPaper(product: Product, papers: Papers): void {
    product.nameType = papers.papers.find(
      (paper) => paper.id === product.paperId
    )?.nameType;
  }
}
