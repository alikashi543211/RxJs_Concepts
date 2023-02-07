import { DesignUtilityService } from './../services/design-utility.service';
import { Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit, OnDestroy {
    techStatus = '';
    techStatus2 = '';
    techStatus3 = '';
    msg = '';
    sub2: Subscription;
    constructor(private _designUtlity:DesignUtilityService) { }

    ngOnInit(): void {

        // Ex - 1(Manual)

        const cusObs1 = Observable.create(observer =>{

            setTimeout(() => {
                observer.next('Angular');
            }, 1000)

            setTimeout(() => {
                observer.next('Typescript');
            }, 3000)

            setTimeout(() => {
                observer.next('Html and Css');
                // observer.error(new Error('Limit Exceed'));
            }, 5000)
            setTimeout(() => {
                observer.next('Vue JS');
                observer.complete();
            }, 7000)
        })

        cusObs1.subscribe(res => {
            // console.log(res);
            this._designUtlity.print(res, 'elContainer');
        },
        error => {
            this.techStatus = 'error';
        },
        () => {
            this.techStatus = 'completed';
        })

        // Ex - 02 (Custom Interval)
        const Arr2 = ['Angular', 'Javascript', 'Html', 'Css', 'Typescript'];
        const cusObs2 = Observable.create(observer => {
            let counter = 0;
            setInterval(() => {
                observer.next(Arr2[counter]);
                if(counter >= 2)
                {
                    // observer.error('Error Occur');
                }
                if(counter >= 3)
                {
                    observer.complete();
                }
                counter++;
            }, 1000)
        });

        this.sub2 = cusObs2.subscribe((res) => {
            this._designUtlity.print(res, 'elContainer2');
        },
        (error) => {
            this.techStatus2 = "error";
        },
        () => {
            this.techStatus2 = "completed";
        })

        // Ex - 03 (Random Names)
        const Arr3 = ['Anup', 'Shekhar', 'Sharma', 'Uxtrendz', 'John', 'Alex', 'Robert'];
        const cusObs3 = Observable.create(observer => {
            let counter = 0;
            setInterval(() => {
                observer.next(Arr3[counter]);
                if(counter >= 3)
                {
                    // observer.error('Random Name Emit Error');
                }
                if(counter >= 6)
                {
                    observer.complete();
                }
                counter++;
            }, 1000);
        })

        cusObs3.subscribe(
            res => {
                this.msg = res;
            },
            error => {
                this.techStatus3 = 'error';
            },
            () => {
                this.techStatus3 = 'completed';
            }
        );

    }

    ngOnDestroy(): void {
        this.sub2.unsubscribe();
    }

}
