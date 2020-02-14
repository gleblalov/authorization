import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`

  constructor(
    private http: HttpClient, 
    public afAuth: AngularFireAuth,
    ) { }

  get access(): string{
    return localStorage.getItem('token') || localStorage.getItem('email')
  }

  login(user): Observable<any>{
    return this.http.post(this.url, user)
  }

  loginSocial(socialType): Promise<any>{
    let provider;
    if(socialType === 'google') {
      provider = new auth.GoogleAuthProvider(); 
    }

    return this.afAuth.auth.signInWithPopup(provider)
  }

  isAuth(): boolean{
    return !!this.access
  }

  logout(): void{
    localStorage.clear()
  }
}
