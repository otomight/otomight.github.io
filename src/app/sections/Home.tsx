import styles from "@/app/styles/layout.module.scss"
import { PAGES } from "../lib/contants";

const HomeSection = () => {
	return (
		<section className={styles.section} id={PAGES.home.id}>
			Home
		</section>
	)
}

export default HomeSection;
