import { ProductService } from './../services/product.service';
import { catchError, map, Observable, shareReplay, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DesignUtilityService } from './../services/design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catch-throw',
  templateUrl: './catch-throw.component.html',
  styleUrls: ['./catch-throw.component.css']
})
export class CatchThrowComponent implements OnInit {

    constructor(private _du:DesignUtilityService, private http: HttpClient, private _productService:ProductService) { }

    productList;
    error;

    ngOnInit(): void {
        // All Products
        this._productService.getProducts().subscribe( (res) => {
            this.productList = res;
        }, (error) => {
            this.error = error
        });
    }

}
