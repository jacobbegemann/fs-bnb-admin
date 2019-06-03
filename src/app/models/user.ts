export class User {

  private numBookings: number;

  constructor(private username: string, 
    private password: string,
    private email: string,
    private firstName: string,
    private lastName: string,
    private birthday: string,
    private phone: string,
    private location: string) {
      this.numBookings = 0;
    }

    getUsername() { return this.username; }

    getPassword() { return this.password; }
    
    getFirstName() { return this.firstName; }

    getLastName() { return this.lastName; }

    getBirthday() { return this.birthday; }

    getPhone() { return this.phone; }

    getNumBookings() { return this.numBookings; }

    getLocation() { return this.location; }

    getEmail() { return this.email; }

}