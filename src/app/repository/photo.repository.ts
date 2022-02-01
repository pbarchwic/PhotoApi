import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Formats, Papers, Products } from '../models/Photos.model';

@Injectable()
export class PhotoRepository {
  constructor(private readonly http: HttpClient) {}

  public getProducts(): Observable<Products> {
    const url = 'assets/products.json';
    return this.http
      .get<Products>(url)
      .pipe(map((response: Products) => response));
  }

  public getFormat(): Observable<Formats> {
    const url = 'assets/formats.json';
    return this.http
      .get<Formats>(url)
      .pipe(map((response: Formats) => response));
  }

  public getPaper(): Observable<Papers> {
    const url = 'assets/papers.json';
    return this.http.get<Papers>(url).pipe(map((response: Papers) => response));
  }
}
