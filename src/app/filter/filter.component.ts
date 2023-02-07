import { from, toArray, filter } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
    data;
    data2;
    data3;

    dataArr = [
        { id: 1, name: 'Anup', gender: 'Male' },
        { id: 2, name: 'Priyanka', gender: 'Female' },
        { id: 3, name: 'Ashish', gender: 'Male' },
        { id: 4, name: 'Vivek', gender: 'Male' },
        { id: 5, name: 'Janet', gender: 'Female' },
        { id: 6, name: 'Mounika', gender: 'Female' },
        { id: 7, name: 'Rajesh', gender: 'Male' },
        { id: 8, name: 'Sanjana', gender: 'Female' },
        { id: 9, name: 'Neha', gender: 'Female' },
        { id: 10, name: 'Sakshi', gender: 'Female' },
        { id: 11, name: 'Neeraj', gender: 'Male' },
        { id: 12, name: 'Pradeep', gender: 'Male' },
    ];
    constructor() { }

    ngOnInit(): void {

        const source = from(this.dataArr);

        // Ex - 01 - Filter by length

        source.pipe(
            filter(member => member.name.length > 6),
            toArray()
        )
        .subscribe(res => {
            console.log(res);
            this.data = res;
        });

        // Ex - 02 - Filter by gender

        source.pipe(
            filter(member => member.gender == 'Female'),
            toArray()
        )
        .subscribe(res => {
            console.log(res);
            this.data2 = res;
        })

        // Ex - 03 - Filter by nth Item

        source.pipe(
            filter(member => member.id <= 6),
            toArray()
        )
        .subscribe(res => {
            console.log(res);
            this.data3 = res;
        });
    }

}
