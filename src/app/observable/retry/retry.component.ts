import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, retry, retryWhen, scan } from 'rxjs/operators';
@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss'],
})
export class RetryComponent implements OnInit {
  constructor(private http: HttpClient) {}

  public loader = false;
  public userDetail: any = null;
  public statusData = 'No Data';

  ngOnInit(): void {
    // this.getUserList();
  }

  getUserDetail() {
    this.loader = true;
    this.statusData = 'Fetching Data';
    this.http
      .get('https://jsonplaceholder.typicode.com/users/1')
      .pipe(
        // retry(3)
        retryWhen((error) =>
          error.pipe(
            delay(3000),
            scan((retryCount) => {
              if (retryCount >= 5) {
                throw error;
              } else {
                retryCount = retryCount + 1;
                console.log('retry count =>' + retryCount);
                this.statusData = 'retry Attempt #' + retryCount;
                return retryCount;
              }
            }, 0)
          )
        )
      )
      .subscribe(
        (res) => {
          this.userDetail = res;
          this.statusData = 'Fetched Data';
          console.log(this.userDetail, 'sd');
          this.loader = false;
        },
        (error) => {
          this.statusData = 'Problem In Data Fetching';
          this.userDetail = null;
          this.loader = false;
        }
      );
  }
}
