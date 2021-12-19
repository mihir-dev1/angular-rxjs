import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {

  // userList
  public userList1 = [
    'Angular 1',
    'Angular 2'
  ]

  public userList2 = [
  ]

  public userList3 = [
  ]

  // subscribe status
  public subscribeStatusTwo: boolean = false;
  public subscribeStatusThree: boolean = false;

  // this.subscription
  public subscriptionTwo: Subscription;
  public subscriptionThree: Subscription;
  public subscriptionToggle: Subscription;
  // toggleMethod

  public isToggle: boolean = false;

  constructor(private _common: CommonService) { }

  ngOnInit(): void {
    this._common.videoList.subscribe(res => {
      this.userList1.unshift(res);
    })
  }

  addVideoName(item) {
    if (item.value) {
      this._common.videoList.next(item.value);
      item.value = '';
    }
  }

  subscribeMethodTwo() {
    if (this.subscribeStatusTwo) {
      this.subscriptionTwo.unsubscribe()
    } else {
      this.subscriptionTwo = this._common.videoList.subscribe(res => {
        this.userList2.unshift(res);
      })
    }
    this.subscribeStatusTwo = !this.subscribeStatusTwo;
  }

  subscribeMethodThree() {
    if (this.subscribeStatusThree) {
      this.subscriptionThree.unsubscribe()
    } else {
      this.subscriptionThree = this._common.videoList.subscribe(res => {
        this.userList3.unshift(res);
      })
    }
    this.subscribeStatusThree = !this.subscribeStatusThree;
  }

  toggleMethod() {

    if (!this.isToggle) {
      let intervalValue = interval(1000);
      this.subscriptionToggle = intervalValue.subscribe(res => {
        this._common.videoList.next('Video' + res);
      })
    } else {
      this.subscriptionToggle.unsubscribe();
    }
    this.isToggle = !this.isToggle;
  }
}
