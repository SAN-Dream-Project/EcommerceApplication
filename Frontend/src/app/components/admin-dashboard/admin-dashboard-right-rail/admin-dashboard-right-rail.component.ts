import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {throwError} from "rxjs";

@Component({
  selector: 'app-admin-dashboard-right-rail',
  templateUrl: './admin-dashboard-right-rail.component.html',
  styleUrls: ['./admin-dashboard-right-rail.component.less']
})
export class AdminDashboardRightRailComponent implements OnInit {

  URL: string = "http://localhost:5000/api/v1/User/GetAllUser";
  headerOptions: object = {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im5pdGluZ29kYXNlIiwibmJmIjoxNjQ3MTAxNTgyLCJleHAiOjE2NDcxMDUxODIsImlhdCI6MTY0NzEwMTU4Mn0.B-gaKSS7VlGpiRm00W0Vzy932pMCOcI1B9LmrvwQMS8'
  };
  users: any = [];
  error: any;

  constructor(private HttpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.HttpClient.get(this.URL, this.headerOptions).subscribe(responseData => {
      console.table(responseData);
      this.users = responseData;
    }, error => {
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
