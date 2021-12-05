import { Component, OnInit } from '@angular/core';
import { from, of, Subscription } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';
import { toArray,take } from 'rxjs/operators'

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {
  sub?: Subscription;
  users = [ 
    {name:'Mihir',skill:'Angular'},
    {name:'Laskhman',skill:'DB Loader'},
    {name:'Jenish',skill:'.Net Dev'},
    {name:'Hardik',skill:'Html,Css Developer'},
  ]
  constructor() { }

  ngOnInit(): void {
    // Example 1
    const source = interval(1000);

    this.sub = source.pipe(take(5), toArray()).subscribe(res => {
      console.log(res);
    })
    // EX 02
    const Source2 = from(this.users)

    Source2.pipe(toArray()).subscribe(res => {
      console.log(res,'asd');
    })

    const source3 = of('Mihir','Kumar','Trivedi');

    source3.pipe(toArray()).subscribe(res => {
      console.log(res,'res');
      
    })
  }

}
