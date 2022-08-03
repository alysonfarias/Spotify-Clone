import { IArtist } from '../interfaces/IArtist';
import { IMusic } from '../interfaces/IMusic';
import { IPlaylist } from '../interfaces/IPlaylist';
import { IUser } from './../interfaces/IUser';
import { addMilliseconds, format } from 'date-fns';

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

export function SpotifyTrackToMusic(spotifyTrack: SpotifyApi.TrackObjectFull): IMusic{

  const msToMinutes = (ms: number) => {
    const data = addMilliseconds(new Date(0), ms);
    return format(data, 'mm:ss');
  }

  return {
    id: spotifyTrack.uri,
    title: spotifyTrack.name,
    album: {
      id: spotifyTrack.id,
      imageUrl: spotifyTrack.album.images.shift()?.url,
      name: spotifyTrack.album.name
    },
    artists: spotifyTrack.artists.map(artist => ({
      id: artist.id,
      name: artist.name,
    })),
    time: msToMinutes(spotifyTrack.duration_ms)
  }
}

