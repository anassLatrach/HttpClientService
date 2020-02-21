import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  usersData: any;
  constructor(
    public apiService: ApiService
  ) {
    this.usersData = [];
  }

ngOnInit() {
    this.getAllUsers();
  }

 getAllUsers() {
    //Get saved list of students
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.usersData = response;
    })
  }


  delete(item) {
    //Delete item in Student data
    this.apiService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllUsers();
    });
  }

}
