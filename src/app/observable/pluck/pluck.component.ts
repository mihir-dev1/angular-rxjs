import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs/internal/observable/from';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  public userList = [
    {
      name: 'Mihir',
      skill: 'Angular',
      job: {
        title:'Angular Developer',
        exp:'3 Years'
      }
    },
    {
      name: 'Shive',
      skill: 'Veue js',
      job: {
        title:'Veue js Developer',
        exp:'6 Years'
      }
    },
    {
      name: 'Kirshna',
      skill: 'Java',
      job: {
        title:'Java Developer',
        exp:'12 Years'
      }
    },
    {
      name: 'Ram',
      skill: 'Javascript',
      job: {
        title:'Javascript Developer',
        exp:'10 Years'
      }
    },
    {
      name: 'Hardik',
      skill: 'Html & Css',
      job: {
        title:'Designer',
        exp:'5 Years'
      }
    }
  ]

  nameList:any;
  jobDes:any;

  constructor() { }

  ngOnInit(): void {
    // Ex 01

    from(this.userList).pipe(
      pluck('name'),
      // map(data => data.name),
      toArray()).subscribe(res => {
        this.nameList = res;
        console.log(this.nameList);
        
    })

    // Ex  02

    from(this.userList).pipe(
      pluck('job','title'),
      // map(data => data.name),
      toArray()).subscribe(res => {
        this.jobDes = res;
        console.log(this.jobDes);
        
    })


  }

}
