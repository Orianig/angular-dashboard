import { Component } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    const currentTheme = this.themeService.theme;
    this.themeService.theme = currentTheme == 'dark' ? 'light' : 'dark'
    // Otro camino, yo prefiero usar el operador ternario
    // if (currentTheme == 'dark') {
    //   this.themeService.theme = 'light'
    // } else {
    //   this.themeService.theme = 'dark'
    // }
  }
}
