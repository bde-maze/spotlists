var SpotifyWebApi = require('spotify-web-api-node')

// credentials are optional
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_ID,
  redirectUri: `${process.env.BASE_URL}/api/auth/callback/spotify`,
})

const params = {
  scopes: [
    'user-read-email',
    'playlist-read-private',
    'ugc-image-upload',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'user-read-private',
    'user-read-email',
    'user-follow-modify',
    'user-follow-read',
    'user-library-modify',
    'user-library-read',
    'app-remote-control',
    'user-read-playback-position',
    'user-top-read',
    'user-read-recently-played',
    'playlist-read-collaborative',
    'playlist-read-private',
  ].join(','),
}

const queryParamsString = new URLSearchParams(params).toString()
const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamsString}`

export default spotifyApi
export { LOGIN_URL }
