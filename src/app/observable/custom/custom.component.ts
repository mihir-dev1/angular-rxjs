import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {

  public listStatus: any;
  public subscription2: Subscription;
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
      }, 5000);
      setTimeout(() => {
        observer.next('Jquery');
        observer.complete();
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



    // Example 03 (Random Name)
  }

}
