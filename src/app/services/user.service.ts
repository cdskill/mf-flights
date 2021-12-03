import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class UserService {
  id;
  constructor() {
    this.id = Math.random();
  }

  getCurrentUser(): { lastName: string; firstName: string } {
    return {firstName: 'Ahmed', lastName: 'ARIGUI'}
  }
}
