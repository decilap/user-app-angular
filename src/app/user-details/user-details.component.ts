import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  pageName = "PROFILE";
  user$:Observable<any>;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit(): void {
    this.loadDataUser();
  }

  loadDataUser(){
    const routeParams = this.route.snapshot.paramMap;
    const userId = routeParams.get('userId');
    this.user$ = this.userService.getUser(userId);
  }

}
