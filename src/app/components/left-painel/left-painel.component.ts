import { SpotifyService } from './../../services/spotify.service';
import { IPlaylist } from './../../interfaces/IPlaylist';
import { Component, OnInit } from '@angular/core';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-painel',
  templateUrl: './left-painel.component.html',
  styleUrls: ['./left-painel.component.scss']
})
export class LeftPainelComponent implements OnInit {

  selectedMenu = 'Home';
  playlists: IPlaylist[] = [];

  homeIcon = faHome;
  searchIcon = faSearch;
  artistIcon = faGuitar;
  playlistIcon = faMusic;

  constructor(
    private spotifyService: SpotifyService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPlaylists();
  }

  clickButton(button: string){
    this.selectedMenu = button;
    this.router.navigateByUrl(`/player/${button}`);
  }

  async getPlaylists(){
   this.playlists = await this.spotifyService.getUserPlaylists();
  }
}
