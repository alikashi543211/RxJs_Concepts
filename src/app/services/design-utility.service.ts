import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

    exclusive = new Subject<boolean>();

    // username = new Subject<string>();

    username = new BehaviorSubject<string>('Anup');

    videoEmit = new ReplaySubject<string>(3, 2000);

    asyncVideoEmit = new AsyncSubject<string>();

    constructor() { }

    print(message, containerId)
    {
        let li_elem = document.createElement('li');
        li_elem.innerText = message;
        let elContainer = document.getElementById(containerId);
        elContainer.append(li_elem);
    }

    print2(message, containerId)
    {
        let li_elem = document.createElement('div');
        li_elem.setAttribute('class', 'item');
        li_elem.innerHTML = message;
        let elContainer = document.getElementById(containerId);
        elContainer.prepend(li_elem);
    }

}
