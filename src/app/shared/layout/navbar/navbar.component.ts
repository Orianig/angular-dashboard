import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/core/services/users.service';
import { IUser } from '../../../core/models/user.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnDestroy {
  user: IUser | undefined;
  isOpenMobileMenu = false;
  private userSubscription: Subscription | undefined;
  private interval: any;

  constructor(private userService: UsersService) {
    this.user = {} as IUser;
    this.getUser(); // Llamada a getUser() al comenzar para obtener el primer usuario
    this.resetInterval();
  }

  get userFullName() {
    // optional chainning producía un error extranio en el template
    return `${this.user?.name?.first}  ${this.user?.name?.last}`;
  }

  ngOnDestroy(): void {
    this.clearInterval();
    // Cancelar la suscripción al observable para evitar problemas de suscripción múltiple
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  public openMobileMenu() {
    this.isOpenMobileMenu = true;
  }

  public closeMobileMenu() {
    this.isOpenMobileMenu = false;
  }

  getUser() {
    this.userSubscription = this.userService
      .getRandomUser()
      .subscribe((user) => {
        this.user = user;
      });
  }

  public onPhotoClick() {
    this.getUser();
    this.resetInterval();
  }

  private resetInterval() {
    this.clearInterval();
    // Establecer el intervalo de 10 segundos nuevamente
    this.interval = setInterval(() => {
      this.getUser();
      console.log('new request time:', new Date());
    }, 10000);
  }

  private clearInterval() {
    clearInterval(this.interval);
    this.interval = undefined;
  }
}
