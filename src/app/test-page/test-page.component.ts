import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout()
    this.router.navigate(['/login'])
  }

}
