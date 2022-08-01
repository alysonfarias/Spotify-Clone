import { IArtist } from './../../interfaces/IArtist';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { newArtist } from 'src/app/common/factory';

@Component({
  selector: 'app-top-artist',
  templateUrl: './top-artist.component.html',
  styleUrls: ['./top-artist.component.scss']
})
export class TopArtistComponent implements OnInit {

  myTopArtist: IArtist = newArtist();

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.getTopArtist();
  }


  async getTopArtist(){
    const artists = await this.spotifyService.getMyTopArtists(1);

    if(!!artists)
      this.myTopArtist = artists.pop();
  }
}
