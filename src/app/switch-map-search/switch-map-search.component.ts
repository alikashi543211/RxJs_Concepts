import { AppSearchService } from './../app-search.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounce, debounceTime, map, tap, distinctUntilChanged, switchMap, pluck, concatMap, filter } from 'rxjs';
@Component({
  selector: 'app-switch-map-search',
  templateUrl: './switch-map-search.component.html',
  styleUrls: ['./switch-map-search.component.css']
})
export class SwitchMapSearchComponent implements OnInit, AfterViewInit {

    searchResults;
    searchResultsCount;
    constructor(private _searchService: AppSearchService) { }
    // Uxtrendz Videos Api List
    // https://my-json-server.typicode.com/Uxtrendz/apis/videoList

    @ViewChild('searchForm') searchForm: NgForm
    ngOnInit(): void {
    }

    ngAfterViewInit(): void {

        const formValue = this.searchForm.valueChanges;

        formValue.pipe(
            // map(data => data.searchTerm),
            filter( ()=> this.searchForm.valid),
            pluck('searchTerm'),
            debounceTime(500),
            distinctUntilChanged(),
            switchMap(data => this._searchService.getSearches(data)),
        )
        .subscribe(res => {
            // console.log(res)
            this.searchResults = res;
            this.searchResultsCount = Object.keys(res).length;
        });
    }


}
