import { Component } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';
import { IUser } from '../../../core/models/user.interface';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  user: IUser | undefined;

  isOpenMobileMenu = false;
  constructor(private userService: UsersService) {
    this.user = {} as IUser;
    this.getUser();
  }

  getUser() {
    this.userService.getRandomUser().subscribe((user) => {
      console.log(user);
      this.user = user;
    });
  }

  public openMobileMenu() {
    this.isOpenMobileMenu = true;
  }

  public closeMobileMenu() {
    this.isOpenMobileMenu = false;
  }
}
