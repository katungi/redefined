import type { ReactElement } from "react";

import { ContentEntry } from "../entries/ContentEntry";

export interface Track {
	albumName: string;
	artistName: string;
	playedAt: string;
	trackName: string;
	trackUrl: string;
}

interface TrackEntryProps {
	track: Track;
}

export function TrackEntry({ track }: TrackEntryProps): ReactElement {
	return (
		<ContentEntry
			url={track.trackUrl}
			title={track.trackName}
			subtitle={`${track.artistName} - ${track.albumName}`}
			widths="full"
			image={{
				alt: `Album cover for ${track.albumName}`,
				src: track.albumImageUrl,
				variant: "square"
			}}
		/>
	);
}