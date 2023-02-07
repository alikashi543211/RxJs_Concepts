import { Observable, pipe, delay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Search } from './appinterface/search.interface';

@Injectable({
  providedIn: 'root'
})
export class AppSearchService {

    constructor(private http: HttpClient) { }
    url = "https://my-json-server.typicode.com/Uxtrendz/apis/videoList";

    getSearches(searchTerm): Observable<Search>{
        return this.http.get<Search>(this.url + '?q=' + searchTerm)
    }
}
