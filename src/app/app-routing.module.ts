import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { ConcatMobileNotificationComponent } from './observable/concat-mobile-notification/concat-mobile-notification.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { ConcatmapComponent } from './observable/concatmap/concatmap.component';
import { CustomComponent } from './observable/custom/custom.component';
import { DebouncetimeComponent } from './observable/debouncetime/debouncetime.component';
import { FilterComponent } from './observable/filter/filter.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ListComponent } from './observable/list/list.component';
import { MapComponent } from './observable/map/map.component';
import { MergeComponent } from './observable/merge/merge.component';
import { MergemapComponent } from './observable/mergemap/mergemap.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';
import { RetryComponent } from './observable/retry/retry.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { SwitchMapSearchComponent } from './observable/switch-map-search/switch-map-search.component';
import { SwitchMapComponent } from './observable/switch-map/switch-map.component';
import { TakeComponent } from './observable/take/take.component';
import { TapComponent } from './observable/tap/tap.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  {
    path: '',
    component: ObservableComponent
  },
  {
    path: 'promise',
    component: PromiseComponent
  },
  {
    path: 'observable',
    component: ObservableComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'fromEvent',
        component: FromEventComponent
      },
      {
        path: 'interval',
        component: IntervalComponent
      },
      {
        path: 'of-from',
        component: OfFromComponent
      },
      {
        path: 'to-array',
        component: ToArrayComponent
      },
      {
        path: 'custom',
        component: CustomComponent
      },
      {
        path: 'map',
        component: MapComponent
      },
      {
        path: 'pluck',
        component: PluckComponent
      },
      {
        path: 'filter',
        component: FilterComponent
      },
      {
        path: 'tap',
        component: TapComponent
      },
      {
        path: 'take',
        component: TakeComponent
      },
      {
        path: 'retry',
        component: RetryComponent
      },
      {
        path: 'debouncetime',
        component: DebouncetimeComponent
      },
      {
        path: 'subject',
        component: SubjectComponent
      },
      {
        path: 'replay',
        component: ReplaySubjectComponent
      },
      {
        path: 'async-subject',
        component: AsyncSubjectComponent
      },
      {
        path: 'concat',
        component: ConcatComponent
      },
      {
        path: 'merge',
        component: MergeComponent
      },
      {
        path: 'mergeMap',
        component: MergemapComponent
      },
      {
        path: 'concatMap',
        component: ConcatmapComponent
      },
      {
        path: 'mobile-notification',
        component: ConcatMobileNotificationComponent
      },
      {
        path: 'switch-map',
        component: SwitchMapComponent
      },
      {
        path:'switch-map-search',
        component:SwitchMapSearchComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'observable'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
