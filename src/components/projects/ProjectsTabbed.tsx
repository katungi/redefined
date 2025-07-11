import type { Project } from "~/lib/projects";

import { For } from "solid-js";

import { EntryList } from "../entries/EntryList";
import { TabbedEntryCategories } from "../tabs/TabbedEntryCategories";
import { ProjectEntry } from "./ProjectEntry";

export interface ProjectsTabbedProps {
	categories: Record<string, Project[]>;
}

export function ProjectsTabbed(props: ProjectsTabbedProps) {
	return (
		<TabbedEntryCategories
			collection="project"
			initialCategories={props.categories}
			renderCategory={(projects) => (
				<EntryList>
					<For each={projects.sort((a, b) => {
						const aName = a.name ?? a.repo ?? "Untitled";
						const bName = b.name ?? b.repo ?? "Untitled";
						return aName.localeCompare(bName);
					})}>
						{(project) => <ProjectEntry project={project} />}
					</For>
				</EntryList>
			)}
		/>
	);
}
