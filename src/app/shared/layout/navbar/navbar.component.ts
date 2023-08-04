import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isOpenMobileMenu = false;
  constructor() {}

  public openMobileMenu() {
    this.isOpenMobileMenu = true;
  }

  public closeMobileMenu() {
    this.isOpenMobileMenu = false;
  }
}
