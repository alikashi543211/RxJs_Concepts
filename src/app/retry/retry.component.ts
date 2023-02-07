import { retry, retryWhen, delay, scan } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {

    person;
    fetching = false;
    status = 'No Data';
    statusClass = '';
    constructor(private http:HttpClient) { }

    ngOnInit(): void {

    }

    fetchDetails()
    {
        this.fetching = true;
        this.status = "Fetching Data..."
        const httpGetObs = this.http.get('https://jsonplaceholder.typicode.com/users/1');
        httpGetObs.pipe(
            // retry(4),
            retryWhen(error => error.pipe(
                delay(3000),
                scan(counter => {
                    if(counter >= 5)
                    {
                        throw error;
                    }
                    counter++;
                    this.status = 'Retrying Attempt #' + counter;
                    return counter;

                }, 0)
            ))
        )
        .subscribe(res => {
            console.log(res);
            this.person = res;
            this.fetching = false;
            this.statusClass = 'text-success';
            this.status = "Data Fetched";
        }, error => {
            this.fetching = false;
            this.status = "Problem Fetching Data"
            this.statusClass = "text-danger";
        })
    }

}
