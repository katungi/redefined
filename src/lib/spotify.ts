import type { Track } from "~/components/music/TrackEntry";

const SPOTIFY_API_URL = "https://api.spotify.com/v1";
const RECENTLY_PLAYED_ENDPOINT = "/me/player/recently-played";

interface SpotifyResponse {
	items: SpotifyTrack[];
}

interface SpotifyTrack {
	played_at: string;
	track: {
		album: {
			name: string;
		};
		artists: {
			name: string;
		}[];
		external_urls: {
			spotify: string;
		};
		name: string;
	};
}

export async function getRecentTracks(): Promise<Track[]> {
	const response = await fetch(
		`${SPOTIFY_API_URL}${RECENTLY_PLAYED_ENDPOINT}?limit=5`,
		{
			headers: {
				Authorization: `Bearer ${ACCESS_TOKEN}`,
			},
		},
	);

	if (!response.ok) {
		throw new Error(`Failed to fetch recent tracks: ${response.statusText}`);
	}

	const data: SpotifyResponse = await response.json();

	return data.items.map((item) => ({
		albumName: item.track.album.name,
		artistName: item.track.artists[0].name,
		playedAt: item.played_at,
		trackName: item.track.name,
		trackUrl: item.track.external_urls.spotify,
	}));
}

// Replace this with your personal access token from Spotify Developer Dashboard
const ACCESS_TOKEN = "BQC6wIy_60_XjJCNwv7TzNXyRRAkpiE0oB3AJKjSYBpjqgVB2wownAcu9clMtjcJ7uIjuX1Lom_ic_t0jM0S9FaYgLQaufow7anHCZDRQPXGGlisj4c1aGNBlBRa9hvQhj1vgTga-og";
