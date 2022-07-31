import { IUser } from './../interfaces/IUser';
import { SpotifyConfiguration } from './../../environments/environment';
import { Injectable } from '@angular/core';
import Spotify from 'spotify-web-api-js';
import { SpotifyPlaylistToPlaylist, SpotifyUserToAppUser } from '../common/spotifyHelper';
import { IPlaylist } from '../interfaces/IPlaylist';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyApi: Spotify.SpotifyWebApiJs = null;
  user: IUser;

  constructor() {
    this.spotifyApi = new Spotify();

  }

  async initializeService(){
    if(!!this.user)
      return true;

    const token = localStorage.getItem('token');

    if(!token)
      return false;

    try {
      this.setAccessToken(token);
      await this.getUserSpotify();
      return !!this.user;

    } catch (error) {
      return false;
    }
  }

  async getUserSpotify(){
    const userInfo = await this.spotifyApi.getMe();
    this.user = SpotifyUserToAppUser(userInfo);
  }


  getLoginUrl(): string {
    const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType;
  }

  getAuthTokenUrlCallBack(): string{
    if(!window.location.hash){
      return '';
    }
    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
  }

  setAccessToken(token: string){
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
  }

  async getUserPlaylists(offset = 0, limit = 50): Promise<IPlaylist[]>{
    const playlists = await this.spotifyApi.getUserPlaylists(this.user.id, { offset, limit});
    console.log(playlists);
    return playlists.items.map(SpotifyPlaylistToPlaylist);
  }
}
