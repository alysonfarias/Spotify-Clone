import { IArtist } from '../interfaces/IArtist';
import { IPlaylist } from '../interfaces/IPlaylist';
import { IUser } from './../interfaces/IUser';

export function SpotifyUserToAppUser(user: SpotifyApi.CurrentUsersProfileResponse): IUser{
  return {
    id: user.id,
    name: user.display_name,
    imageUrl: user.images[0]?.url
  }
}

export function SpotifyPlaylistToPlaylist(playlist: SpotifyApi.PlaylistObjectSimplified): IPlaylist{
  return {
    id: playlist.id,
    name: playlist.name,
    imageUrl: playlist.images.pop()?.url
  }
}


export function SpotifyArtistToArtist(artist: SpotifyApi.ArtistObjectFull): IArtist{
  return {
    id: artist.id,
    name: artist.name,
    imageUrl: artist.images.sort((a,b) => a.width - b.width)?.pop()?.url
  }
}

