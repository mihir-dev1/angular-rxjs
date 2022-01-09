import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { combineLatest, fromEvent } from 'rxjs';
import { map, pluck, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss'],
})
export class CombineLatestComponent implements OnInit, AfterViewInit {

  // Source

  nameSource = ['Mihir', 'Ram', 'Shiva', 'Kirshna', 'Hunuman', 'Resyesh'];

  colorSource = ['red', 'green', 'blue', 'yellow', 'violet', 'purple'];

  // Template Reference

  @ViewChild('name') name: ElementRef;
  @ViewChild('color') color: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
  const nameObs =  fromEvent<any>(this.name.nativeElement, 'change').pipe(
      map((data) => data.target.value)
    );

    const colorObs =  fromEvent(this.color.nativeElement, 'change').pipe(
      pluck('target', 'value')
    );

    // Ex 01 combine latest

    combineLatest(nameObs,colorObs).subscribe(([name,color]) => {
      // console.log(name,color);
      this.createElement(name,color,'elementId')
    })

    // Ex 02 withLatestForm
    // Master nameObs
    // Slave colorObs

    nameObs.pipe(withLatestFrom(colorObs)).subscribe(([name,color]) => {
      this.createElement(name,color,'elementId2')
    })


  }

  createElement(name,color,containerId) {
    let ele = document.createElement('div');
    ele.innerText = name;
    ele.setAttribute("class",color);
    document.getElementById(containerId).appendChild(ele);
  }
}
