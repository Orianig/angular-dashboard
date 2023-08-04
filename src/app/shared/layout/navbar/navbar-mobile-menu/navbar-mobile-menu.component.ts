import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';
import { MENU_LIST } from 'src/app/core/constants/menu.constant';
import { IMenuItem } from 'src/app/core/models/menu.interface';

@Component({
  selector: 'app-navbar-mobile-menu',
  templateUrl: './navbar-mobile-menu.component.html',
  styleUrls: ['./navbar-mobile-menu.component.scss'],
})
export class NavbarMobileMenuComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter();
  public menuItemsList: IMenuItem[] = MENU_LIST;
  public isDarkMode = this.themeService.theme == 'dark' ? true : false;

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    const currentTheme = this.themeService.theme;
    this.themeService.theme = currentTheme == 'dark' ? 'light' : 'dark';
    this.isDarkMode = this.themeService.theme == 'dark' ? true : false;
  }

  closeMenu() {
    this.close.emit();
  }
}
