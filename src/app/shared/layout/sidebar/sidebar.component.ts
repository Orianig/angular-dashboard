import { Component } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';
import { IMenuItem } from 'src/app/core/models/menu.interface';
import { MENU_LIST } from 'src/app/core/constants/menu.constant';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public activeMenu: string | null = null;
  public menuItemsList: IMenuItem[] = MENU_LIST;
  public subMenuItemsList: IMenuItem[] = [];
  public isDarkMode = this.themeService.theme == 'dark' ? true : false;

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    const currentTheme = this.themeService.theme;
    this.themeService.theme = currentTheme == 'dark' ? 'light' : 'dark';
    this.isDarkMode = this.themeService.theme == 'dark' ? true : false;
  }

  toggleSubmenu(section: string | null) {
    if (this.activeMenu === section) {
      // Si hacemos clic en el mismo menú, cerramos el submenú
      this.activeMenu = null;
      this.subMenuItemsList = [];
    } else {
      // Si hacemos clic en otro menú, abrimos el submenú correspondiente
      this.activeMenu = section;
      this.subMenuItemsList =
        this.menuItemsList.find((item) => item.name === section)?.items || [];
    }
  }
}
