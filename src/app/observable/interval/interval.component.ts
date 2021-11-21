import { Component, OnInit } from '@angular/core';
import { interval, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  // msgBroadcastx = Subscription; 

  constructor() { 
    let msgBroadcast = interval(2000)

    msgBroadcast.subscribe(item => {
      console.log(item,'xc')
      // if(item == 10) {
      //   this.msgBroadcastx.
      // }
    })
  }

  ngOnInit(): void {
  }

}
