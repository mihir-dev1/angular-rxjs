import { Component, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';
import { map } from 'rxjs/operators';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  // subscription
  subscriptionOne: Subscription;

  subscriptionTwo: Subscription;

  subscriptionThree: Subscription;

  // Message
  message: any;
  messageTwo: any;
  messageThree: any;

  constructor(private _common: CommonService) {}

  ngOnInit(): void {
    const videoBroadCast = interval(1000);
    // Example 01
    this.subscriptionOne = videoBroadCast
      .pipe(map((data) => 'Video' + +data))
      .subscribe((res) => {
        console.log(res, 'res');
        this.message = res;
      });

    setTimeout(() => {
      this.subscriptionOne.unsubscribe();
    }, 10000);

    setTimeout(() => {
      this.subscriptionTwo.unsubscribe();
    }, 10000);

    // Example 02
    this.subscriptionTwo = videoBroadCast
      .pipe(map((data) => 10 * data))
      .subscribe((res) => {
        this.messageTwo = res;
      });

    // Example 03
    const membersList = from([
      {
        id: 1,
        name: 'Mihir',
      },
      {
        id: 2,
        name: 'Reyesh',
      },
      {
        id: 3,
        name: 'Dhiraj',
      },
      {
        id: 4,
        name: 'Lucky',
      },
      {
        id: 5,
        name: 'Hardik',
      },
      {
        id: 6,
        name: 'Ram',
      },
      {
        id: 7,
        name: 'Kirshna',
      },
      {
        id: 8,
        name: 'Shive',
      },
    ]);

    membersList.pipe(map((data) => data.name)).subscribe((res) => {
      // elId
      this._common.addElement(res, 'elId');
    });
  }
}
