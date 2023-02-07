import { map, Observable, shareReplay, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DesignUtilityService } from './../services/design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-share-replay',
    templateUrl: './share-replay.component.html',
    styleUrls: ['./share-replay.component.css']
})
export class ShareReplayComponent implements OnInit {

    constructor(private _du:DesignUtilityService, private http: HttpClient) { }

    productList:Observable<any>;
    activeProductList:Observable<any>;
    notActiveProductList:Observable<any>;
    error;

    url = 'http://127.0.0.1:8008/api/product/listing';

    ngOnInit(): void {
        // All Products
        this.productList = this.http.post<any>(this.url, '').pipe(
            shareReplay()
        );

        // Active Yes Product List
        this.activeProductList = this.productList.pipe(
            map(data => data.filter(filterData => filterData.is_active == true && filterData.is_buy_now == true))
        );

        // Buy Now Yes Product List
        this.notActiveProductList = this.productList.pipe(
            map(data => data.filter(filterData => filterData.is_active == false && filterData.is_buy_now == false))
        );
    }

}
