import { Component, OnDestroy } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';
import { IUser } from '../../../core/models/user.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnDestroy {
  user: IUser | undefined;
  isOpenMobileMenu = false;
  private userSubscription: Subscription | undefined;
  private intervalId: number | undefined;

  constructor(private userService: UsersService) {
    this.user = {} as IUser;
    this.getUser(); // Recuperar un usuario al inicio

    // Establecer el intervalo de 10 segundos para recuperar un nuevo usuario aleatorio
    this.intervalId = Number(
      setInterval(() => {
        this.getUser();
      }, 10000)
    );
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
        console.log(user);
        this.user = user;
      });
  }

  public onPhotoClick() {
    this.getUser(); // Recuperar un nuevo usuario aleatorio al hacer clic en la foto
    this.resetInterval();
  }

  private resetInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    // Establecer el intervalo de 10 segundos nuevamente
    this.intervalId = Number(
      setInterval(() => {
        this.getUser();
      }, 10000)
    );
  }

  private clearInterval() {
    // Limpiar el intervalo cuando sea necesario
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }
}
