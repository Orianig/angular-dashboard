import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-user-menu',
  templateUrl: './navbar-user-menu.component.html',
  styleUrls: ['./navbar-user-menu.component.scss'],
})
export class NavbarUserMenuComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
