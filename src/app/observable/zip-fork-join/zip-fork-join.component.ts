import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { forkJoin, fromEvent, zip } from 'rxjs';
import { map, pluck, take } from 'rxjs/operators';

@Component({
  selector: 'app-zip-fork-join',
  templateUrl: './zip-fork-join.component.html',
  styleUrls: ['./zip-fork-join.component.scss']
})
export class ZipForkJoinComponent implements OnInit, AfterViewInit {

    // Source

    nameSource = ['Mihir', 'Ram', 'Shiva', 'Kirshna', 'Hunuman', 'Resyesh'];

    colorSource = ['red', 'green', 'blue', 'yellow', 'violet', 'purple'];

    // Template Reference

    @ViewChild('name') name: ElementRef;
    @ViewChild('color') color: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const nameObs =  fromEvent<any>(this.name.nativeElement, 'change').pipe(
      map((data) => data.target.value),
      take(4)
    );

    const colorObs =  fromEvent(this.color.nativeElement, 'change').pipe(
      pluck('target', 'value'),
      take(3)
    );

    // Ex 01 ZIP

    zip(nameObs,colorObs).subscribe(([name,color]) => {
      this.createElement(name,color,'elementId')
    });

    // Ex 02 ForkJoin

    forkJoin(nameObs,colorObs).subscribe(([name,color]) => {
      this.createElement(name,color,'elementId2')
    });
  }

  createElement(name,color,containerId) {
    let ele = document.createElement('div');
    ele.innerText = name;
    ele.setAttribute("class",color);
    document.getElementById(containerId).appendChild(ele);
  }

}
