import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {

  public ProductUrl = "https://fakestoreapi.com/products/z";

  constructor(private http:HttpClient) {}

  getAllProduct() {
    return this.http.get(this.ProductUrl).pipe(catchError(this.handleError));
  }

  handleError(error) {
    let errorMsg = '';
    if (!error.error || !error.error) {
      errorMsg = 'Some Problem in Server';
    } else {
      if (error.error.error == 'Permission denied') {
        errorMsg = 'You Dont have permission';
      } else {
        errorMsg = 'Interval Server Error';
      }
    }

    return throwError(errorMsg);
  }
}
