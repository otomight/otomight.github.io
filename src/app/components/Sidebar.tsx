"use client";

import styles from "@/app/styles/layout.module.scss";
import { useState } from "react";

const Sidebar = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(prev => !prev);
	};

	return (
		<nav className={styles.sidebar}>
			<ul>
				<li><a href="#home">Home</a></li>
				<li className={styles.dropdown}>
					<button className={styles.dropdownTitle} onClick={toggleDropdown}>
						Projects ▾
					</button>
					{isDropdownOpen && (
						<ul className={styles.submenu}>
							<li><a href="#project-example">Project Example</a></li>
							<li><a href="#project2">Project 2</a></li>
						</ul>
					)}
				</li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>
	);
};

export default Sidebar;
