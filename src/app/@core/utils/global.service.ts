import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public transparentNav = new BehaviorSubject(true);
  constructor() { }
}
