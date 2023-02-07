import { DesignUtilityService } from './../services/design-utility.service';
import { interval, take, map, concat, merge, delay, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-concat-and-merge',
  templateUrl: './concat-and-merge.component.html',
  styleUrls: ['./concat-and-merge.component.css']
})
export class ConcatAndMergeComponent implements OnInit, OnDestroy {

    constructor(private _du:DesignUtilityService) { }
    FinalObsConcatSub:Subscription;
    FinalObsMergeSub:Subscription;
    ngOnInit(): void {

        // Tech Videos
        const techVideos = interval(1000).pipe(
            take(5),
            map(res => 'Tech Video => ' + (res + 1) ),
            delay(3000)
        );

        // Comedy Videos
        const comedyVideos = interval(1000).pipe(
            take(3),
            map(res => 'Comedy Video => ' + (res + 1) ),
            delay(1000)
        )

        // News Videos
        const newsVideos = interval(1000).pipe(
            take(4),
            map(res => 'News Video => ' + (res + 1) ),
            delay(4000)
        )

        // Concat
        const FinalObsConcat = concat(techVideos, comedyVideos, newsVideos);

        this.FinalObsConcatSub = FinalObsConcat.subscribe(res => {
            console.log(res);
            this._du.print(res, 'elContainer')
        });

        // Merge
        const FinalObsMerge = merge(techVideos, comedyVideos, newsVideos);
        this.FinalObsMergeSub = FinalObsMerge.subscribe(res => {
            console.log(res);
            this._du.print(res, 'elContainer2')
        });
    }

    ngOnDestroy(): void {
        this.FinalObsConcatSub.unsubscribe();
        this.FinalObsMergeSub.unsubscribe();
    }

}
