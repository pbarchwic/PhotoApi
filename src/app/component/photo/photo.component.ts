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
import { PhotoRepository } from 'src/app/repository';

@Component({
  selector: 'photo',
  templateUrl: 'photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit {
  public products: Product[] = [];

  constructor(
    private readonly repository: PhotoRepository,
    private readonly http: HttpClient
  ) {}

  ngOnInit(): void {
    const products = this.http.get<Products>('assets/products.json');
    const formats = this.http.get<Formats>('assets/formats.json');
    const papers = this.http.get<Papers>('assets/papers.json');
    // this.getProducts.pipe(map());
    // this.getFormats();
    // this.getPapers();

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
        },
        error: (msg) => console.log(msg),
      });
  }

  //   private getProducts(): void {
  //     this.repository.getProducts().subscribe((response: Products) => {
  //       this.products = response.products;
  //     });
  //   }

  //   private getFormats(): void {
  //     this.repository.getFormat().subscribe((response: Formats) => {
  //       this.formats = response.formats;
  //     });
  //   }

  //   private getPapers(): void {
  //     this.repository.getPaper().subscribe((response: Papers) => {
  //       this.papers = response.papers;
  //     });
  //   }
}
