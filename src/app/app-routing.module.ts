import { CatchThrowComponent } from './catch-throw/catch-throw.component';
import { ZipComponent } from './zip/zip.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { SwitchMapSearchComponent } from './switch-map-search/switch-map-search.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { ConcatMapTwoComponent } from './concat-map-two/concat-map-two.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ConcatAndMergeComponent } from './concat-and-merge/concat-and-merge.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { ReplayComponentComponent } from './replay-component/replay-component.component';
import { SubjectComponent } from './subject/subject.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { RetryComponent } from './retry/retry.component';
import { TakeComponent } from './take/take.component';
import { TapComponent } from './tap/tap.component';
import { FilterComponent } from './filter/filter.component';
import { PluckComponent } from './pluck/pluck.component';
import { MapComponent } from './map/map.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { OffromComponent } from './offrom/offrom.component';
import { IntervalComponent } from './interval/interval.component';
import { ObservableListComponentComponent } from './observable-list-component/observable-list-component.component';
import { FromEventComponentComponent } from './from-event-component/from-event-component.component';
import { ObservableComponent } from './observable/observable.component';
import { ObservableVsPromiseComponent } from './observable-vs-promise/observable-vs-promise.component';
import { PromiseComponentComponent } from './promise-component/promise-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomComponent } from './custom/custom.component';

const routes: Routes = [
    { path: 'comparing', component:ObservableVsPromiseComponent},
    { path: 'promise', component:PromiseComponentComponent},
    { path: 'observable', component:ObservableComponent, children:[
        { path: '', component: ObservableListComponentComponent},
        { path: 'fromEvent', component: FromEventComponentComponent},
        { path: 'interval', component: IntervalComponent},
        { path: 'of-from', component: OffromComponent},
        { path: 'to-array', component: ToArrayComponent},
        { path: 'custom', component: CustomComponent},
        { path: 'map', component: MapComponent},
        { path: 'pluck', component: PluckComponent},
        { path: 'filter', component: FilterComponent},
        { path: 'tap', component: TapComponent},
        { path: 'take', component: TakeComponent},
        { path: 'retry', component: RetryComponent},
        { path: 'debouncetime', component: DebounceTimeComponent},
        { path: 'subject', component: SubjectComponent},
        { path: 'replay-subject', component: ReplayComponentComponent},
        { path: 'async-subject', component: AsyncSubjectComponent},
        { path: 'concat-and-merge', component: ConcatAndMergeComponent},
        { path: 'mergeMap', component: MergeMapComponent},
        { path: 'concatMap', component: ConcatMapComponent},
        { path: 'concatMapTwo', component: ConcatMapTwoComponent},
        { path: 'switchMap', component: SwitchMapComponent},
        { path: 'switchMapSearch', component: SwitchMapSearchComponent},
        { path: 'exhaustMap', component: ExhaustMapComponent},
        { path: 'share-replay', component: ShareReplayComponent},
        { path: 'combine-latest', component: CombineLatestComponent},
        { path: 'zip', component: ZipComponent},
        { path: 'catch-throw', component: CatchThrowComponent},
    ]},
    { path: '**', redirectTo:'comparing' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
