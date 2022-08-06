import { SpotifyService } from './../../services/spotify.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMusic } from 'src/app/interfaces/IMusic';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { PlayerService } from 'src/app/services/player.service';
import { newMusic } from 'src/app/common/factory';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  musics: IMusic[] = [];
  iconPlay = faPlay;
  currentMusic: IMusic = newMusic();

  subs: Subscription[] = [];

  constructor(
    private playService: PlayerService,
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.getMusics();
    this.getCurrentMusic();
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }


  async getMusics(){
    this.musics = await this.spotifyService.getMusics();
    console.log(this.musics);
  }

  getArtists(music: IMusic){
    return music.artists.map(artist => artist.name).join(', ');
  }

  getCurrentMusic(){
    const sub = this.playService.currentMusic.subscribe(music => {
      this.currentMusic = music;
      console.log( this.currentMusic);
    });

    this.subs.push(sub);

  }

  async playMusic(music: IMusic){
   await this.spotifyService.playMusic(music.id);
   this.playService.setCurrentMusic(music);
  }
}
