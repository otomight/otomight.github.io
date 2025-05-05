import styles from "@/app/styles/layout.module.scss"
import { PAGES } from "../lib/contants";

const ContactSection = () => {
	return (
		<section className={styles.section} id={PAGES.contact.id}>
			Contact
		</section>
	)
}

export default ContactSection;
