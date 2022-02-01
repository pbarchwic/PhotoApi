import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PhotoRepository {
  constructor(private readonly http: HttpClient) {}

  public getProducts(): Observable<any> {
    const url = `https://www.empikfoto.pl/product/list`;
    return this.http
      .get<Response<any>>(url)
      .pipe(
        map((response: Response<OrganizationUserProfile>) => response.result)
      );
  }

  public getFormat(
    userId: number | string
  ): Observable<OrganizationUserProfile> {
    const url = `https://www.empikfoto.pl/product/format`;
    return this.http
      .get<Response<OrganizationUserProfile>>(url)
      .pipe(
        map((response: Response<OrganizationUserProfile>) => response.result)
      );
  }

  public getPaper(
    userId: number | string
  ): Observable<OrganizationUserProfile> {
    const url = `https://www.empikfoto.pl/product/papers`;
    return this.http
      .get<Response<OrganizationUserProfile>>(url)
      .pipe(
        map((response: Response<OrganizationUserProfile>) => response.result)
      );
  }
}
