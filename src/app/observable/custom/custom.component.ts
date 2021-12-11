import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit, OnDestroy {

  public listStatus: any;
  public customIntervalStatus: any;
  public subscription2: Subscription;
  public currentName: any;
  public badgeStatus: any;
  constructor(private _common: CommonService) { }

  ngOnInit(): void {
    // Ex 01 (Manual)

    const cusObj1 = Observable.create(observer => {
      // observer.next();
      // observer.error();
      // observer.complete();

      setTimeout(() => {
        observer.next('Angular');
      }, 1000);
      setTimeout(() => {
        observer.next('Typescript');
      }, 2000);
      // setTimeout(() => {
      //   observer.error('Javascript');
      // }, 3000);
      setTimeout(() => {
        observer.next('Html & Css');
      }, 4000);
      setTimeout(() => {
        observer.next('Java');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('Jquery');
      }, 6000);
      // observer.next('Data Emit 1');
      // observer.next('Data Emit 2');
      // observer.next('Data Emit 3');
    })

    cusObj1.subscribe(res => {
      // console.log(res,'asd');
      this._common.addElement(res, 'customContainer');
    }, error => {
      // console.log(error);

      this.listStatus = 'error';
    }, () => {
      this.listStatus = 'completed';
    })

    // Example 02 (Custom Interval)


    const arrayList = ['Mihir', 'Kumar', 'Trivedi','Ram','Krishna','Laskhman'];
    const customObject2 = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(arrayList[count]);

        if (count >= 3) {
          observer.error('error in js')
        }

        if (count >= 4) {
          observer.complete()
        }
        count++;
      }, 1000);
    })

    this.subscription2 = customObject2.subscribe(res => {
      // console.log(res, 'asd');
      this._common.addElement(res, 'customInterval');

    }, error => {
      this.customIntervalStatus = 'error';
      console.log(error)
    }, () => {
      this.customIntervalStatus = 'completed';
    })


    // Example 03 (Random Name)
    const randomNameList = ['Mihir', 'Trivedi', 'Reynsh', 'Hardik', 'Kumar'];
    const randomObject = Observable.create(observer => {
      let count2 = 0;
      setInterval(() => {
        observer.next(randomNameList[count2]);

        // if (count2 >= 3) {
        //   observer.error('error in js')
        // }

        if (count2 >= 4) {
          observer.complete()
        }
        count2++;
      }, 1000);
    })

    randomObject.subscribe(res => {
      console.log(res, 'sd');
      this.currentName = res;
    },error => {
      this.badgeStatus = 'error';
    },()=> {
      this.badgeStatus = 'completed';
    })
  }

  ngOnDestroy() {
    this.subscription2.unsubscribe()
  }

}
