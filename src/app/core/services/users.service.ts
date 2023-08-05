import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) {}

  getRandomUser(): Observable<IUser> {
    return this.http
      .get<{ results: IUser[] }>(this.apiUrl)
      .pipe(map((data) => data.results[0]));
  }
}
