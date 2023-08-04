import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NavbarMobileMenuComponent } from './navbar-mobile-menu/navbar-mobile-menu.component';

@NgModule({
  declarations: [SidebarComponent, NavbarComponent, NavbarMobileMenuComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent, NavbarComponent],
})
export class LayoutModule {}
