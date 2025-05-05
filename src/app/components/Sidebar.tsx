"use client";

import styles from "@/app/styles/layout.module.scss";
import { Dispatch, SetStateAction, useState } from "react";
import { PAGE_IDS } from "../lib/contants";

interface SidebarProps {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = (props: SidebarProps) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleSidebar = () => {
		props.setIsOpen(prev => !prev);
	}

	const toggleDropdown = () => {
		setIsDropdownOpen(prev => !prev);
	};

	return (
		<>
			<button className={styles.toggleSidebar} onClick={toggleSidebar}>
				☰
			</button>
			<nav className={`${styles.sidebar} ${props.isOpen ? styles.openSidebar : styles.closedSidebar}`}>
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
