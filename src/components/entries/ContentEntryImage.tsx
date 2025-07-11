import clsx from "clsx";
import { createSignal, onMount } from "solid-js";

import styles from "./ContentEntryImage.module.css";

const variants = {
	round: styles.round,
	square: styles.square,
};

export type ContentEntryImageVariant = keyof typeof variants;

export interface ContentEntryImageProps {
	alt: string;
	src: string;
	variant: ContentEntryImageVariant;
}

export function ContentEntryImage(props: ContentEntryImageProps) {
	const [isLoaded, setIsLoaded] = createSignal(false);
	const [isError, setIsError] = createSignal(false);

	return (
		<img
			alt={props.alt}
			class={clsx(
				styles.contentEntryImage,
				variants[props.variant],
				{
					[styles.loading]: !isLoaded() && !isError(),
					[styles.loaded]: isLoaded(),
					[styles.error]: isError()
				}
			)}
			loading="lazy"
			onLoad={() => setIsLoaded(true)}
			onError={() => setIsError(true)}
			src={props.src}
		/>
	);
}
