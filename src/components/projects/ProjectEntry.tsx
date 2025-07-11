import type { Project, ProjectBase } from "~/lib/projects";

import { For } from "solid-js";

import { ContentEntry } from "../entries/ContentEntry";
import styles from "./ProjectEntry.module.css";
import { ProjectSubEntry } from "./ProjectSubEntry";

export interface ProjectEntryProps {
	project: Project;
}

function projectUrl({ owner = "katungi", repo, url }: ProjectBase) {
	return url ?? (repo ? `https://github.com/${owner}/${repo}` : "#");
}

function projectTitle(project: ProjectBase) {
	return project.name ?? project.repo ?? "Untitled Project";
}

export function ProjectEntry(props: ProjectEntryProps) {
	const fallbackImage = "https://www.joshuakgoldberg.com/images/fullscreenmario.png";
	const projectImage = props.project.image || fallbackImage;

	return (
		<ContentEntry
			description={props.project.description}
			image={{
				alt: `${projectTitle(props.project)} logo`,
				src: projectImage,
				variant: "square",
			}}
			links={[
				...(props.project.repo ? [["Repo", projectUrl(props.project)] as [string, string]] : []),
				...Object.entries(props.project.links ?? []),
			]}
			subtitle={props.project.role ?? "Creator & Maintainer"}
			title={projectTitle(props.project)}
			url={projectUrl(props.project)}
			widths="half"
		>
			{props.project.more && (
				<li>
					<ul class={styles.subList}>
						<For each={props.project.more}>
							{(more) => (
								<ProjectSubEntry
									description={more.description}
									href={projectUrl(more)}
									title={projectTitle(more)}
								/>
							)}
						</For>
					</ul>
				</li>
			)}
		</ContentEntry>
	);
}
