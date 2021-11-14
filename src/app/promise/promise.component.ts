import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  public promiseValue:any;

  constructor() { }

  dellLaptop() {
    return false;
  }

  hpLaptop() {
    return true;
  }

  ngOnInit(): void {
    // available
    let buyLaptop = new Promise((resolve, rejects) => {
      // resolve('Promise is resolved');
      // rejects('Promise is rejects');
      if (this.dellLaptop()) {
        setTimeout(() => {
          resolve('Dell Laptop Purchased');
        }, 3000);
      } else if (this.hpLaptop()) {
        setTimeout(() => {
          resolve('Hp Laptop Purchased');
        }, 3000);
      } else {
        setTimeout(() => {
          rejects('Laptop not Available');
        }, 2000);
      }
    })

    buyLaptop.then(res => {
      this.promiseValue = res;
      console.log('then code =>', res);
    }).catch(res => {
      this.promiseValue = res;
      console.log('catch code =>', res);
    })
  }

}
