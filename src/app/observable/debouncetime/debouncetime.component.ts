import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounce, debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.scss']
})
export class DebouncetimeComponent implements OnInit, AfterViewInit {
  @ViewChild('inputBox') inputBox: ElementRef;

  public reqData: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const search = fromEvent(this.inputBox.nativeElement, 'keyup').pipe(
      map(event => event['target']['value']),
      debounceTime(500),
      distinctUntilChanged()
    );


    search.subscribe(res => {
      console.log(res, 'res');
      this.reqData = res;

      setTimeout(() => {
        this.reqData = null;
      }, 2000);
    })
  }




}
