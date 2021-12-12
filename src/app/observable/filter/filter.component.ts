import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  public userData = [
    { id: 1, name: 'Mihir', gender: 'Male' },
    { id: 2, name: 'Jeel', gender: 'Female' },
    { id: 3, name: 'Anup', gender: 'Male' },
    { id: 4, name: 'Divya', gender: 'Female' },
    { id: 5, name: 'Vivek', gender: 'Male' },
    { id: 6, name: 'Ram', gender: 'Male' },
    { id: 7, name: 'Om', gender: 'Male' },
    { id: 8, name: 'Riddhi', gender: 'Female' },
    { id: 9, name: 'Janvi', gender: 'Female' },
    { id: 10, name: 'Ravi', gender: 'Male' },
    { id: 11, name: 'Jenish', gender: 'Male' },
    { id: 12, name: 'Hardik', gender: 'Male' },
    { id: 13, name: 'Bharti', gender: 'Female' },
    { id: 14, name: 'Sirin', gender: 'Female' }
  ]

  public filterByLength: any;
  public filterByGender: any;
  public filterByNth: any;

  constructor() { }

  ngOnInit(): void {
    // console.log('userData',this.userData);

    const dataSource = from(this.userData);

    // Ex 01 Filter by Length

    dataSource.pipe(
      filter(data => data.name.length > 5),
      toArray()
    ).subscribe(res => {
      this.filterByLength = res;
    })


    // Ex 02 Filter by Gender

    dataSource.pipe(
      filter(data => data.gender === 'Female'),
      toArray()
    ).subscribe(res => {
      this.filterByGender = res;
    })

    // Ex 03 Filter by nth Item

    dataSource.pipe(
      filter(data => data.id < 6),
      toArray()
    ).subscribe(res => {
      this.filterByNth = res;
    })

  }

}
