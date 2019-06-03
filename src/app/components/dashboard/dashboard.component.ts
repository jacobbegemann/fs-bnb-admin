import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/models/user';
import { Rental } from 'src/app/models/rental';

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

  constructor(private dataService: DataService) {
    this.navItems.push(new NavItem("Users"));
    this.navItems.push(new NavItem("Listings"));
    this.navItems.push(new NavItem("Booking Requests"));
    this.users = dataService.getData().getUsers();
    this.listings = dataService.getData().getRentals();
  }

  ngOnInit() {
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
