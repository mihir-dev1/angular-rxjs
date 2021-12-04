import { Component, OnInit } from '@angular/core';
import { interval, Subscriber, Subscription, timer } from 'rxjs';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
}) 
export class IntervalComponent implements OnInit {

  obsMsg: any;
  videoSubscription?: Subscription;

  constructor(private _common:CommonService) {
    
    // let msgBroadcast = interval(1000);
    // timer(delay, time)
    let msgBroadcast = timer(2000,1000);

    this.videoSubscription = msgBroadcast.subscribe(item => {
      this.obsMsg = item;
      this._common.addElement('Video '+item,'ElContainerId');
      this._common.addElement('Video '+item,'ElContainerId2');
      this._common.addElement('Video '+item,'ElContainerId3');
      if (item == 5) {
        this.videoSubscription?.unsubscribe();
      }
    })
  }

  ngOnInit(): void {
  }

}
