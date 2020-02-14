import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`

  constructor(private http: HttpClient) { }

  get token(): string{
    return localStorage.getItem('token')
  }

  login(user): Observable<any>{
    return this.http.post(this.url, user)
  }

  logout(): void{
    localStorage.clear()
  }
}
