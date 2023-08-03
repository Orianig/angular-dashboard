import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
public default= "light";
// para mas info del behaviorSubject https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject
public themeChanged: BehaviorSubject<string> = new BehaviorSubject(this.theme);

  constructor() { }

  public get theme(): string {
    return localStorage.getItem('theme') ?? this.default;
  }

   // se almacena en localStorage y se emite el cambio al themeChanged
  public set theme(value: string) {
    this.themeChanged.next(value);
    localStorage.setItem('theme', value)
  }
}
