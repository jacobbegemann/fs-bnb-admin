import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/models/user';
import { Rental } from 'src/app/models/rental';
import { Trip } from 'src/app/models/trip';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public navItems: Array<NavItem> = new Array();
  public onUsers: boolean = false;
  public onListings: boolean = false;
  public onBookingRequests: boolean = false;
  public users: Array<User>;
  public listings: Array<Rental>;
  public bookings: Array<Trip>;

  constructor(private dataService: DataService) {
    this.navItems.push(new NavItem("Users"));
    this.navItems.push(new NavItem("Listings"));
    this.navItems.push(new NavItem("Booking Requests"));
  }

  async ngOnInit() {
    this.users = await this.dataService.getData().getUsers();
    this.listings = await this.dataService.getData().getRentals();
    this.bookings = await this.dataService.getData().getTrips();
  }

  navTo(item: NavItem) {
    switch (item.name) {
      case "Users":
        this.onUsers = true;
        this.onListings = false;
        this.onBookingRequests = false;
        break;
      case "Listings":
        this.onUsers = false;
        this.onListings = true;
        this.onBookingRequests = false;
        break;
      case "Booking Requests":
        this.onUsers = false;
        this.onListings = false;
        this.onBookingRequests = true;
        break;
    }
  }

}

export class NavItem {

  constructor(public name: string) { }

}
