"use client";

import styles from "@/app/styles/layout.module.scss"
import { useEffect } from "react";
import ContactSection from "./sections/Contact";
import HomeSection from "./sections/Home";
import ProjectExampleSection from "./sections/ProjectExample";

export default function Page() {
	useEffect(() => {
		if (!window.location.hash) {
			window.location.replace("#home");
		}
	}, []);
	return (
		<>
			<HomeSection styleClass={styles.section} id="home"/>
			<ProjectExampleSection styleClass={styles.section} id="project-example"/>
			<ContactSection styleClass={styles.section} id="contact"/>
		</>
	);
}
