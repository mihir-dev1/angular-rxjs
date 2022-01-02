import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay, mergeMap } from 'rxjs/operators';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-concat-mobile-notification',
  templateUrl: './concat-mobile-notification.component.html',
  styleUrls: ['./concat-mobile-notification.component.scss']
})
export class ConcatMobileNotificationComponent implements OnInit {

  notifyData = [
    {
      name: 'Facebook',
      icon: './assets/fb.png',
      time: '4 Second Ago',
      img: 'https://placeimg.com/50/50/tech/4',
      strong: 'Mihir Trivedi',
      p: 'You got First super start in your family #mihirisonilne you are yhe best.'
    },
    {
      name: 'Twitter',
      icon: './assets/twitter.png',
      time: '3 Second Ago',
      img: 'https://placeimg.com/50/50/tech/3',
      strong: 'Elon Musk',
      p: 'You got First super start in your family #taslsPower you are yhe best. #spaceX'
    },
    {
      name: 'Facebook',
      icon: './assets/fb.png',
      time: '2 Second Ago',
      img: 'https://placeimg.com/50/50/tech/2',
      strong: 'Mihir Trivedi',
      p: 'You got First super start in your family #mihirisonilne you are yhe best.'
    },
    {
      name: 'Twitter',
      icon: './assets/twitter.png',
      time: '1 Second Ago',
      img: 'https://placeimg.com/50/50/tech/1',
      strong: 'Elon Musk',
      p: 'You got First super start in your family #taslsPower you are yhe best. #spaceX'
    },
  ]

  constructor(private _common: CommonService) { }

  ngOnInit(): void {
    from(this.notifyData).pipe(
      concatMap(res => this.getHtml(res))
      // mergeMap(res => this.getHtml(res))

    ).subscribe(res => {
    this._common.notification(res, 'elContainer')

    })
    // this.getHtml(this.notifyData)
  }

  getHtml(data) {
    return of(`
    <div class="header">
    <div class="app">
        <img src="${data.icon}" alt="fb" width="20">
        Facebook
    </div>
    <div class="time">${data.time}</div>
</div>
<div class="body">
    <img src="${data.img}" alt="item" class="item-img">
    <strong>${data.strong}</strong>
    <p>${data.p}</p>
</div>
    `).pipe(delay(2000))
  }

}
