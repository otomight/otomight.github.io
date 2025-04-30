interface HomeSectionProps {
	styleClass: string;
	id: string;
}

const HomeSection = ({styleClass, id}: HomeSectionProps) => {
	return (
		<section className={styleClass} id={id}>
			Home
		</section>
	)
}

export default HomeSection;
