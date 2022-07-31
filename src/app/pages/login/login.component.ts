import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private spotifyService: SpotifyService,
    private router: Router) { }

  ngOnInit(): void {
    this.verifyAuthTokenUrlCallBack();
  }

  verifyAuthTokenUrlCallBack(){
    const token = this.spotifyService.getAuthTokenUrlCallBack();
    if(!!token){
      this.spotifyService.setAccessToken(token);
      this.router.navigate(['/player']);
    }
  }

  openLoginPage(){
    window.location.href = this.spotifyService.getLoginUrl();
  }

}
