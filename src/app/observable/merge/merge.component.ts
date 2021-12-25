import { Component, OnInit } from '@angular/core';
import { concat, interval, merge } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

  constructor(private _common: CommonService) {

  }

  ngOnInit(): void {
    const sourceTech = interval(3000).pipe(
      map(video => 'Tech Video#' + (video + 1)),
      take(5)
    )

    const sourceComedy = interval(6000).pipe(
      map(video => 'Comedy Video#' + (video + 1)),
      take(3)
    )

    const sourceNews = interval(3500).pipe(
      map(video => 'News Video#' + (video + 1)),
      take(4)
    )

    const finalData = merge(sourceTech, sourceComedy, sourceNews)

    finalData.subscribe(res => {
      console.log(res)
      this._common.addElement(res, 'elementContainer');
      // elementContainer
    })
  }

}
