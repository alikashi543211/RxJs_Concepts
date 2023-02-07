import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromiseComponentComponent } from './promise-component/promise-component.component';
import { ObservableVsPromiseComponent } from './observable-vs-promise/observable-vs-promise.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ObservableComponent } from './observable/observable.component';
import { FromEventComponentComponent } from './from-event-component/from-event-component.component';
import { ObservableListComponentComponent } from './observable-list-component/observable-list-component.component';
import { IntervalComponent } from './interval/interval.component';
import { OffromComponent } from './offrom/offrom.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { CustomComponent } from './custom/custom.component';
import { MapComponent } from './map/map.component';
import { PluckComponent } from './pluck/pluck.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';
import { RetryComponent } from './retry/retry.component';
import { HttpClientModule } from '@angular/common/http';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { SubjectComponent } from './subject/subject.component';
import { Comp1Component } from './comps/comp1/comp1.component';
import { Comp2Component } from './comps/comp2/comp2.component';
import { Comp3Component } from './comps/comp3/comp3.component';
import { ReplayComponentComponent } from './replay-component/replay-component.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { ConcatAndMergeComponent } from './concat-and-merge/concat-and-merge.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ConcatMapTwoComponent } from './concat-map-two/concat-map-two.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { SwitchMapSearchComponent } from './switch-map-search/switch-map-search.component';
import { FormsModule } from '@angular/forms';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ZipComponent } from './zip/zip.component';
import { CatchThrowComponent } from './catch-throw/catch-throw.component';
@NgModule({
  declarations: [
    AppComponent,
    PromiseComponentComponent,
    ObservableVsPromiseComponent,
    NavbarComponent,
    ObservableComponent,
    FromEventComponentComponent,
    ObservableListComponentComponent,
    IntervalComponent,
    OffromComponent,
    ToArrayComponent,
    CustomComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceTimeComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplayComponentComponent,
    AsyncSubjectComponent,
    ConcatAndMergeComponent,
    MergeMapComponent,
    ConcatMapComponent,
    ConcatMapTwoComponent,
    SwitchMapComponent,
    SwitchMapSearchComponent,
    ExhaustMapComponent,
    ShareReplayComponent,
    CombineLatestComponent,
    ZipComponent,
    CatchThrowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
