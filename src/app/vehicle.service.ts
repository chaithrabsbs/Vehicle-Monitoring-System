import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClient: HttpClient) { }
  
  private apiBaseUrl: string = `https://localhost:44338/api`;
  getToken(loginID: string, password: string) {
    const requestBody = {
      loginID: loginID,
      password: password,
      userMessage: "defaultstring",
      userToken: "defaultString"
    };
    return this.httpClient.post(`${this.apiBaseUrl}/Id/Token`, requestBody);
  }
  getVehicles(token: string) {

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get(`${this.apiBaseUrl}/Vehicle`,{ headers });
}
  getVehiclesByCustomer(customerId: string, token: string | null) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get(`${this.apiBaseUrl}/Vehicle/customer/${customerId}`, { headers });
}
  getVehiclesByStatus(status: string, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get(`${this.apiBaseUrl}/Vehicle/status/${status}`, { headers });
  
}
  
}