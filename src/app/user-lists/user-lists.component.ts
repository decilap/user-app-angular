import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../services/loader-service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.scss'],
})
export class UserListsComponent implements OnInit {
  users: any;
  constructor(
    private userService: UserService,
    private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.loadDataUser();

   
  } 


  loadDataUser(){
    this.userService.getUsers().subscribe((response:any) => {
      this.users = response.results;
    });
  }
}
