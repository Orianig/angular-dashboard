import { Component } from '@angular/core';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-dashboard';
  public isDarkMode = false;

  constructor(private themeService: ThemeService) {
    this.getThemeMode();
  }

  private getThemeMode() {
    this.themeService.themeChanged.subscribe((theme) => {
      this.isDarkMode = theme == 'dark' ? true : false;
    });
  }
}
