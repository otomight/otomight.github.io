"use client";

import styles from "@/app/styles/layout.module.scss";
import { useState } from "react";
import { PAGE_IDS } from "../lib/contants";

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(prev => !prev);
	}

	const toggleDropdown = () => {
		setIsDropdownOpen(prev => !prev);
	};

	return (
		<>
			<button className={styles.toggleSidebar} onClick={toggleSidebar}>
				☰
			</button>
			<nav className={`${styles.sidebar} ${isSidebarOpen ? styles.openSidebar : styles.closedSidebar}`}>
				<ul>
					<li><a href={`#${PAGE_IDS.home}`}>Home</a></li>
					<li className={styles.dropdown}>
						<button className={styles.dropdownTitle} onClick={toggleDropdown}>
							Projects ▾
						</button>
						{isDropdownOpen && (
							<ul className={styles.submenu}>
								<li><a href={`#${PAGE_IDS.projectExample}`}>Project Example</a></li>
								<li><a href="#project2">Project 2</a></li>
							</ul>
						)}
					</li>
					<li><a href={`#${PAGE_IDS.contact}`}>Contact</a></li>
				</ul>
			</nav>
		</>
	);
};

export default Sidebar;
