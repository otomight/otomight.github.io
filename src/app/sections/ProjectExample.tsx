import styles from "@/app/styles/layout.module.scss"
import { PAGE_IDS } from "../lib/contants";

const ProjectExampleSection = () => {
	return (
		<section className={styles.section} id={PAGE_IDS.projectExample}>
			Project example
		</section>
	)
}

export default ProjectExampleSection;
