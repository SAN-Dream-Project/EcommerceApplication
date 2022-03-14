import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { throwError } from "rxjs";

@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.less']
})
export class UserSectionComponent implements OnInit {

  URL: string = "https://localhost:5001/api/v1/User/GetAllUser";
  UTL_TOGET_BEARER_TOKEN: any = "https://localhost:5001/api/v1/TokenAuthentication/authentication";
  userCredentials:object = {
    userName: "nitingodase",
    password: "123qwe"
  };
  bearerToken: any = '';
  httpOptions: object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: ''
    })
  };
  users: any = [];
  error: any;

  constructor(private HttpClient: HttpClient) { }

  ngOnInit(): void {
    /*Promise.resolve(() => {
      return this.getBearerToken();
    }).
    then(() => {
      return this.getAllUsers();
    });*/
    this.getBearerToken();
    setTimeout(() => {
      this.getAllUsers();
    }, 1000);
  }
  getBearerToken() {
    return this.HttpClient.post(this.UTL_TOGET_BEARER_TOKEN, this.userCredentials).subscribe((token) => {
      //console.log(token)
      //this.bearerToken = token;
    }, (error) => {
      //console.log(error);
      this.bearerToken = this.handleError(error);
    });
  }
  getAllUsers() {
    this.HttpClient.get(this.URL, { headers: new HttpHeaders().set('Authorization', 'Bearer '+this.bearerToken) }).subscribe((responseData) => {
      console.table(responseData);
      this.users = responseData;
    }, (error) => {
      console.log(error);
      this.error = this.handleError(error);
    });
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.error.text);
    return error.error.text;
    /*if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      return 'An error occurred:'+ error.error.text;
    } else if (error.status === 401){
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      return `You are unauthorized :`+ error.error.text;
    }
    else {
      // Return an observable with a user-facing error message.
      return error.error.text//throwError(() => new Error('Something bad happened; please try again later.'));
    }*/
  }

}
