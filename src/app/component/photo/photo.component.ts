import { Component, OnInit } from '@angular/core';
// import { forkJoin, map } from 'rxjs';
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
  public formats: Format[] = [];
  public papers: Paper[] = [];
  constructor(private readonly repository: PhotoRepository) {}

  ngOnInit(): void {
    this.getProducts();
    this.getFormats();
    this.getPapers();

    // forkJoin([this.products, this.formats, this.papers]).pipe(
    //   map(([products, formats, papers]) => {})
    // );
  }

  private getProducts(): void {
    this.repository.getProducts().subscribe((response: Products) => {
      this.products = response.products;
      console.log(this.products);
    });
  }

  private getFormats(): void {
    this.repository.getFormat().subscribe((response: Formats) => {
      this.formats = response.formats;
      console.log(this.formats);
    });
  }

  private getPapers(): void {
    this.repository.getPaper().subscribe((response: Papers) => {
      this.papers = response.papers;
      console.log(this.papers);
    });
  }
}
