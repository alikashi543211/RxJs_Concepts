import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable-vs-promise',
  templateUrl: './observable-vs-promise.component.html',
  styleUrls: ['./observable-vs-promise.component.css']
})
export class ObservableVsPromiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hpAvailable()
    {
        return false;
    }

    dellAvailable()
    {
        return true;
    }

    notAvil()
    {
        return false;
    }

    async simpleMessage()
    {
        return "This is simple message function";
    }

    testAsyncAwait()
    {
        var result = this.simpleMessage;
        console.log(result);
    }
    testPromise()
    {
        const promise = new Promise<string>((resolve, reject) => {
            console.log("Pr Done");
            setTimeout(() => {
                if(this.hpAvailable())
                {
                    resolve("Hp Laptop is available on store");
                }else if(this.dellAvailable())
                {
                    resolve("Dell Laptop is available on store");
                }else if(this.notAvil())
                {
                    reject("Not available");
                }
                    resolve("Promise is resolved");
            }, 2000);
        });
        promise.then( res => "Then Code => " + console.log(res)).catch(res => "Catch Code => " + console.log(res));
    }

    testPromiseCounter()
    {
        const promise = new Promise((resolve, reject) => {
            let counter = 0;
            setInterval(()=>{
                counter += 1;
                console.log('counter inside ' + counter);
                resolve(counter);
            }, 1000);
        });
        const sub = promise.then( res => "Then Code => " + console.log(res)).catch(res => "Catch Code => " + console.log(res));
    }

    testObservable()
    {
        const obs = new Observable( (observer) => {
            console.log("Obs Done");

            setTimeout( () => {
                observer.next("yep obs");
                observer.next("Second Value");
            }, 2000);
        });

        setTimeout(() => {
            obs.subscribe(console.log);
        }, 3000);

    }

    myHttp(consumer:any, isPromise = false)
    {
        const url  = 'https://jsonplaceholder.typicode.com/posts';

        const http = new XMLHttpRequest();

        const onload = function () {
            if(http.status == 200 && http.readyState == 4)
            {
                if(isPromise){
                    consumer(http.response);
                } else {
                    consumer.next(http.response);
                }
            }
        };

        http.addEventListener('load', onload);
        http.open('GET', url);
        http.send();

        return () => {
            http.removeEventListener('load', onload);
            http.abort();
        }
    }

    callMyHttpWithPrmise()
    {
        const pr = new Promise( (resolve) => {
            console.log("Starting promise");
            this.myHttp(resolve, true);
        });

        setTimeout( () => {
            pr.then(console.log);
        }, 9000)
    }

    callMyHttpWithObservable()
    {
        const obs = new Observable( (observer) => {
            console.log("Observable is starting");
            this.myHttp(observer);
        });

        const sub = obs.subscribe(console.log);
        sub.unsubscribe();
    }

}
