import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-dashboard-right-rail',
  templateUrl: './admin-dashboard-right-rail.component.html',
  styleUrls: ['./admin-dashboard-right-rail.component.less']
})
export class AdminDashboardRightRailComponent implements OnInit {

  URL: string = "http://localhost:5000/api/v1/User/GetAllUser";
  headerOptions: object = {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im5pdGluZ29kYXNlIiwibmJmIjoxNjQ3MDY0NjcwLCJleHAiOjE2NDcwNjgyNzAsImlhdCI6MTY0NzA2NDY3MH0.-BN_QVjYcJleIZA-5YppVtzneRaEyNvZ6twlIsSp49k'
  };
  users: any = [];

  constructor(private HttpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.HttpClient.get(this.URL, this.headerOptions).subscribe(responseData => {
      console.table(responseData);
      this.users = responseData;
    });
  }

}
