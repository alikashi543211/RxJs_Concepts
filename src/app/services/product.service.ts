import { ErrorService } from './error.service';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    constructor(private http:HttpClient, private _errorService:ErrorService) { }

    url = 'http://127.0.0.1:8008/api/product/error-listing';

    getProducts():Observable<any>
    {
        return this.http.post<any>(this.url, '').pipe(
            catchError(this._errorService.handleError)
        );
    }
}
