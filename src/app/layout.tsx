import "@/app/styles/globals.scss";
import styles from "@/app/styles/layout.module.scss";
import Sidebar from "./components/Sidebar";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<div className={styles.container}>
					<Sidebar />
					<main className={styles.mainContent}>{children}</main>
				</div>
			</body>
		</html>
	);
}
