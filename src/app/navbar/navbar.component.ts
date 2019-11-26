import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private loggedInFlag: string = '1';
  text: string;

  constructor(private userService: UserService) {
    
  }

  ngOnInit() {
    this.loggedInFlag = this.userService.isLoggedIn();
    console.log(this.loggedInFlag);
  }

}
