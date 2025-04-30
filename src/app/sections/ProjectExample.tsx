interface ProjectExampleSectionProps {
	styleClass: string;
	id: string;
}

const ProjectExampleSection = ({styleClass, id}: ProjectExampleSectionProps) => {
	return (
		<section className={styleClass} id={id}>
			Project example
		</section>
	)
}

export default ProjectExampleSection;
