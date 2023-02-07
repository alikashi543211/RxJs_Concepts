import { fromEvent, concatMap, exhaustMap, tap } from 'rxjs';
import { DesignUtilityService } from './../services/design-utility.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-exhaust-map',
    templateUrl: './exhaust-map.component.html',
    styleUrls: ['./exhaust-map.component.css']
})
export class ExhaustMapComponent implements OnInit, AfterViewInit {

    constructor(private http: HttpClient, private _du:DesignUtilityService) { }
    num = 0;
    saveRequest;
    fetching = false;
    url = 'http://127.0.0.1:8008/api/skill/store';
    fetchUrl = 'http://127.0.0.1:8008/api/skill/listing';

    @ViewChild('btn') btn:ElementRef;

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        fromEvent(this.btn.nativeElement, 'click')
        .pipe(
            tap(() => this.fetching = true),
            exhaustMap(() => this.onSave(this.num++))
        )
        .subscribe(res => {
            console.log(res)
            this.onFetch();
            this.fetching = false;
        });
    }

    btnClick()
    {
        this.num++;
        this.onSave(this.num).subscribe(res => {
            console.log(res);
        });
    }

    onFetch()
    {
        return this.http.post<any>(this.fetchUrl, '').subscribe(res => {
            this.saveRequest = res.data;
        });
    }

    onSave(num)
    {
        return this.http.post(this.url, {title: this.num});
    }

}
