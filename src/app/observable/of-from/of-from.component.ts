import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs/internal/observable/from';
import { of } from 'rxjs/internal/observable/of';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  public list = {a:'Mihir',b:'Kumar', c:'Trivedi'};
  public obsMsg:any;
  public arrayObj =['Mihir','Kumar','Trivedi']
  constructor(private _common:CommonService) { }

  ngOnInit(): void {
    // Of Example
    let obj = of('Mihir','Kumar', 'Trivedi');

    obj.subscribe(res => {
      // consol e.log(res)
      this._common.addElement(res,'containerEle')
    })

    // Of example 2 with object

    let obj2 = of(this.list);

    obj2.subscribe(res => {
      this.obsMsg = res;
      // console.log(res)
      // this._common.addElement(res,'containerEle')
    })

    // From ex 
    const ObjFrom = from(this.arrayObj);

    ObjFrom.subscribe(res => {
      // console.log(res,'df')
      this._common.addElement(res,'containerArray');
      // console.log(this.arrayObj,'asd')
    })

    // From with Promise

    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('Promise resolved')
      }, 2000);
    })

    const obj4 = from(promise);
    obj4.subscribe(res => {
      console.log(res,'res');
      
      this._common.addElement(res,'containerPromise');
    })

    // from with string

    const obj5 = from('Welcome to Home');

    obj5.subscribe(res=>{ 
      this._common.addElement(res,'containerString');
    })

  }

}
