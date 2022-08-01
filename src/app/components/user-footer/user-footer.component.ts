import { Component, OnInit } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { IUser } from 'src/app/interfaces/IUser';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-user-footer',
  templateUrl: './user-footer.component.html',
  styleUrls: ['./user-footer.component.scss']
})
export class UserFooterComponent implements OnInit {

  signOutIcon = faSignOutAlt;
  user: IUser = null;

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.user = this.spotifyService.user;
  }

  logOut(){
    this.spotifyService.logOut();
  }

}
