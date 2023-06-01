import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(data){
    console.log()

    this.http.post('https://d449-59-93-146-158.in.ngrok.io/login', data).subscribe(
      (response) => {
        // Handle the response here
        console.log(response);
      },
      (error) => {
        // Handle any errors that occur during the subscription
        console.error(error);
      }
    );
    // return this.http.post('https://61af-59-93-146-158.in.ngrok.io/login', data);
  }
}








