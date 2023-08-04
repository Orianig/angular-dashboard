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
    // Buscamos el menú correspondiente por su nombre
    const menuItem = this.menuItemsList.find((item) => item.name === section);

    if (
      this.activeMenu === section ||
      !menuItem ||
      !menuItem.items ||
      menuItem.items.length === 0
    ) {
      // Si hacemos clic en el mismo menú, cerramos el submenú, o si el menú no tiene items
      this.activeMenu = null;
    } else {
      // Si hacemos clic en otro menú con items, abrimos el submenú correspondiente
      this.activeMenu = section;
      this.subMenuItemsList = menuItem.items;
    }
  }
}
