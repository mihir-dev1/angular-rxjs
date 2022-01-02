import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { concatMap, debounce, debounceTime, distinctUntilChanged, filter, map, pluck, switchMap } from 'rxjs/operators';
import { CommonService } from 'src/app/core/common.service';
import { Search } from 'src/app/interface/search';

@Component({
  selector: 'app-switch-map-search',
  templateUrl: './switch-map-search.component.html',
  styleUrls: ['./switch-map-search.component.scss']
})
export class SwitchMapSearchComponent implements OnInit, AfterViewInit {

  @ViewChild('searchForm') searchForm: NgForm;
  searchResult: any;
  constructor(private _common:CommonService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      const formValue = this.searchForm.valueChanges;
      formValue.pipe(
        // map(data => data['searchTerm']),
        filter(() => this.searchForm.valid),
        pluck('searchTerm'),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(data => this._common.getSearchResult(data))
      )
      .subscribe(res => {
        this.searchResult = res;
      })
  }

}
