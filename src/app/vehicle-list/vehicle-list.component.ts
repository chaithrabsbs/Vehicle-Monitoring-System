import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  vehicles: any[] = [];
  filteredVehicles: any[] = [];
  customers: any[] = [];
  filterByCustomer: string = '';
  filterByStatus: string = '';
  accessToken: string = '';

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.loadVehicles();
  }
  

  async loadVehicles() {
   
    this.accessToken = await this.getToken();
    if(this.accessToken){
    console.log('Component initialized');
  this.vehicleService.getVehicles(this.accessToken).subscribe((data: any) => {
    console.log('Data received from service:', data);
    this.vehicles = data;
    this.filteredVehicles = data;
    this.customers = Array.from(new Set(data.map((vehicle : any) => JSON.stringify({ id: vehicle.customer.id, name: vehicle.customer.name }))))
  .map((customer : any) => JSON.parse(customer));
    console.log('Data received from this.customers:', this.customers);
    });
  }
}

// Function to apply filters
async getToken(): Promise<string> {
  return new Promise((resolve, reject) => {
    this.vehicleService.getToken('admin', 'password').subscribe(
      (data: any) => {
        const token = data.userToken;
        console.log('Data received from token from load:', token);
        localStorage.setItem('authToken', token);
        resolve(token);
      },
      (error) => {
        reject(error); 
      }
    );
  });
}

  // Function to apply filters
  applyFilters() {
    
    const token = localStorage.getItem('authToken');
    console.log('Data received from token:', token)
    if(token!=null){
      //To Store the token securely in localStorage)
      localStorage.setItem('authToken', token);
    
    if (this.filterByCustomer && this.filterByStatus) {
      // Making two separate API calls to getVehiclesByCustomer and getVehiclesByStatus
      this.vehicleService.getVehiclesByCustomer(this.filterByCustomer, token).subscribe((customerFilteredVehicles: any) => {
        this.vehicleService.getVehiclesByStatus(this.filterByStatus, token).subscribe((statusFilteredVehicles: any) => {
          // Combine the results by finding vehicles that exist in both filtered sets
          this.filteredVehicles = customerFilteredVehicles.filter((vehicle1: any) =>
            statusFilteredVehicles.some((vehicle2: any) => vehicle1.id === vehicle2.id)
          );
        });
      });
    } else if (this.filterByCustomer) {
      this.vehicleService.getVehiclesByCustomer(this.filterByCustomer, token).subscribe((customerFilteredVehicles: any) => {
        this.filteredVehicles = customerFilteredVehicles;
      });
    } else if (this.filterByStatus) {
      this.vehicleService.getVehiclesByStatus(this.filterByStatus, token).subscribe((statusFilteredVehicles: any) => {
        this.filteredVehicles = statusFilteredVehicles;
      });
    } else {
      // No filters, load all vehicles
      this.loadVehicles();
    }
  }
}
}