import styles from "@/app/styles/layout.module.scss"
import { PAGE_IDS } from "../lib/contants";

const ContactSection = () => {
	return (
		<section className={styles.section} id={PAGE_IDS.contact}>
			Contact
		</section>
	)
}

export default ContactSection;
