import { Subscription } from 'rxjs';
import { DesignUtilityService } from './../services/design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {

    constructor(private _du:DesignUtilityService) { }
    data;
    subscribeChannel:Subscription;

    ngOnInit(): void {
        this.subscribeChannel = this._du.asyncVideoEmit.subscribe(res => {
            this.data = res;
        })
    }

    sendVideo(video)
    {
        console.log(video);
        this._du.asyncVideoEmit.next(video);
    }

    completeSubscription()
    {
        this._du.asyncVideoEmit.complete();
    }

}
