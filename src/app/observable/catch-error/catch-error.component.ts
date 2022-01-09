import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/core/error.service';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss'],
})
export class CatchErrorComponent implements OnInit {
  public productList: any;
  public loader: boolean = false;
  public errorMsg: any = '';

  constructor(
    private _errorServer: ErrorService
  ) {}

  ngOnInit(): void {}

  getProductList() {
    this.loader = true;
    this._errorServer.getAllProduct().subscribe(
      (res) => {
        this.productList = res;
        this.loader = false;
      },
      (error) => {
        this.errorMsg = error;
        this.loader = false;
      }
    );
  }
}
