import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { Rental } from './rental';
import { Trip } from './trip';

export class Data {

  constructor(private client: HttpClient) {
  }

  getUsers(): Promise<User[]> { 
    return new Promise((resolve) => {
      this.client.get(`http://localhost:3000/users`).subscribe(
        (response: User[]) => resolve(response)
      );
    });
  }

  getRentals(): Promise<Rental[]> { 
    return new Promise((resolve) => {
      this.client.get(`http://localhost:3000/rentals`).subscribe(
        (response: Rental[]) => resolve(response)
      );
    });
  }

  getTrips(): Promise<Trip[]> { 
    return new Promise((resolve) => {
      this.client.get(`http://localhost:3000/trips`).subscribe(
        (response: Trip[]) => resolve(response)
      );
    });
  }

}