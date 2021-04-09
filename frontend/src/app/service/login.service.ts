import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private apiUrl: string = environment.apiUrl;
  
  constructor(private http: HttpClient) {
    
  }
  
  public authenticate(username: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders(
      {Authorization: "Basic " + btoa(username + ":" + password)}
    );
    return this.http.get<boolean>(this.apiUrl + "/employees/display-projects/2", {headers}); // hardcoded employeeId
  }
  
  
  
}
