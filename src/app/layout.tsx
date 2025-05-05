import "@/app/styles/globals.scss";
import styles from "@/app/styles/layout.module.scss";
import Sidebar from "./components/Sidebar";

export const metadata = {
	title:	"otomight",
	icons: {
		icon: "/diablo.ico"
	}
}

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
					<main className={styles.mainLayout}>
						<div className={styles.mainContent}>
							{children}
						</div>
					</main>
				</div>
			</body>
		</html>
	);
}
