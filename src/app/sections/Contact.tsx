interface ContactSectionProps {
	styleClass: string;
	id: string;
}

const ContactSection = ({styleClass, id}: ContactSectionProps) => {
	return (
		<section className={styleClass} id={id}>
			Contact
		</section>
	)
}

export default ContactSection;
