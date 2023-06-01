import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router:Router) { }

  login(data){
    this.http.post('http://localhost:3000/login', data).subscribe(
      (response:any) => {
        localStorage.setItem("Token", response.token)
        this.router.navigate(['/admin/dashboard'])
        return response
      },
      (error) => {
        console.error(error);
      }
    );
  }
}








