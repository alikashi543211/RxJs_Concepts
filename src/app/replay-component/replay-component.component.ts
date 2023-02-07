import { Subscription, interval } from 'rxjs';
import { DesignUtilityService } from './../services/design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-replay-component',
    templateUrl: './replay-component.component.html',
    styleUrls: ['./replay-component.component.css']
})
export class ReplayComponentComponent implements OnInit {

    constructor(private _du:DesignUtilityService) { }

    user1List = [
        'Angular 1',
        'Angular 2'
    ];

    user2List = [];

    user3List = [];

    // SubscribeModes
    subscribeMode2:boolean = false;
    subscribeMode3:boolean = false;
    subscribeUser2:Subscription;
    subscribeUser3:Subscription;

    methodInterval:boolean = false;
    toggleSubscribe:Subscription;

    ngOnInit(): void {
        this._du.videoEmit.subscribe( (res) => {
            this.user1List.push(res);
        });
    }

    subscribeUserTwo()
    {
        if(!this.subscribeMode2)
        {
            this.subscribeUser2 = this._du.videoEmit.subscribe(res => {
                this.user2List.push(res);
            });
            this.subscribeMode2 = true;
        }else{
            this.subscribeUser2.unsubscribe();
            this.subscribeMode2 = false;
        }

    }

    subscribeUserThree()
    {
        if(!this.subscribeMode3)
        {
            this.subscribeUser3 = this._du.videoEmit.subscribe(res => {
                this.user3List.push(res);
            });
            this.subscribeMode3 = true;
        }else{
            this.subscribeUser3.unsubscribe();
            this.subscribeMode3 = false;
        }
    }

    onVideoAdd(video)
    {
        this._du.videoEmit.next(video)
    }

    // Toggle Method
    toggleMethod()
    {
        const broadCastVideo = interval(1000);
        if(!this.methodInterval)
        {
            this.toggleSubscribe = broadCastVideo.subscribe( (res) => {
                this._du.videoEmit.next('Video ' + res);
            });
        }else{
            this.toggleSubscribe.unsubscribe();
        }
        this.methodInterval = !this.methodInterval;
    }

}
