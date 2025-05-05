"use client"

import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar"
import styles from "@/app/styles/layout.module.scss";

interface LayoutProps {
	children: ReactNode;
}

const Layout = (props: LayoutProps) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	return (
		<>
			<Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
			<main className={`${styles.mainLayout} ${isSidebarOpen ? styles.darkened : ""}`}>
				<div className={styles.mainContent}>
					{props.children}
				</div>
			</main>
		</>
	)
}

export default Layout;
