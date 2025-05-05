import styles from "@/app/styles/layout.module.scss"
import { PAGES } from "../lib/contants";
import BackgroundVideo from "../components/Video";

const ProjectExampleSection = () => {
	return (
		<section className={styles.section} id={PAGES.kappaJourney.id}>
			Kappa Journey
			<BackgroundVideo src="https://res.cloudinary.com/dv3gmvi18/video/upload/v1746455965/Kappa_Journey_kq7j0u.mp4"/>
		</section>
	)
}

export default ProjectExampleSection;
