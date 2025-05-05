import styles from "@/app/styles/layout.module.scss"
import { PAGE_IDS } from "../lib/contants";

const HomeSection = () => {
	return (
		<section className={styles.section} id={PAGE_IDS.home}>
			Home
		</section>
	)
}

export default HomeSection;
