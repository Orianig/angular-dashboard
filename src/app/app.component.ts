import { Component } from '@angular/core';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-dashboard';
  public isDark = false;

  constructor(private themeService: ThemeService) {
    this.getThemeMode();
  }

  private getThemeMode() {
    this.themeService.themeChanged.subscribe((theme) => {
      this.isDark = theme == 'dark' ? true : false;
    });
  }
}
