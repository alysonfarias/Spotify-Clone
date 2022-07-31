import { SpotifyService } from './../../services/spotify.service';
import { IPlaylist } from './../../interfaces/IPlaylist';
import { Component, OnInit } from '@angular/core';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';

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

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.getPlaylists();
  }

  clickButton(button: string){
    this.selectedMenu = button;
  }

  async getPlaylists(){
    console.log('getPlaylists');
   this.playlists = await this.spotifyService.getUserPlaylists();
   console.log('getPlaylists2');
   console.log(this.playlists);


  }
}
