import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {throwError} from "rxjs";

@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.less']
})
export class UserSectionComponent implements OnInit {

  URL: string = "https://localhost:5001/api/v1/User/GetAllUser";
  /*httpOptions: object = new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im5pdGluZ29kYXNlIiwibmJmIjoxNjQ3MjMyODcwLCJleHAiOjE2NDcyMzY0NzAsImlhdCI6MTY0NzIzMjg3MH0.fo6uUO1BwJ-EIE_ejH_XLIgsf5DqhYt4FH4lm9VJ798'});
  httpOptions: object = {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im5pdGluZ29kYXNlIiwibmJmIjoxNjQ3MjMyODcwLCJleHAiOjE2NDcyMzY0NzAsImlhdCI6MTY0NzIzMjg3MH0.fo6uUO1BwJ-EIE_ejH_XLIgsf5DqhYt4FH4lm9VJ798'
  };*/
  httpOptions: object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im5pdGluZ29kYXNlIiwibmJmIjoxNjQ3MjM0MjU2LCJleHAiOjE2NDcyMzc4NTYsImlhdCI6MTY0NzIzNDI1Nn0.SSZAJP6_g15ykwlcre5nD41HZjmr7X7bfVeb94kth5g'
    })
  };
  users: any = [];
  error: any;

  constructor(private HttpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.HttpClient.get(this.URL, this.httpOptions).subscribe(responseData => {
      console.table(responseData);
      this.users = responseData;
    }, error => {
      console.log(error);
      this.error = this.handleError(error);
    });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      return 'An error occurred:'+ error.error;
    } else if (error.status === 401){
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      return `You are unauthorized :`+ error.error;
    }
    else {
      // Return an observable with a user-facing error message.
      return throwError(() => new Error('Something bad happened; please try again later.'));
    }
  }

}
