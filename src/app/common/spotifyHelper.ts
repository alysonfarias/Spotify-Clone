import { IUser } from './../interfaces/IUser';

export function SpotifyUserToAppUser(user: SpotifyApi.CurrentUsersProfileResponse): IUser{
  return {
    id: user.id,
    name: user.display_name,
    imageUrl: user.images[0].url
  }
}


