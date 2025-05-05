import "@/app/styles/globals.scss";
import styles from "@/app/styles/layout.module.scss";
import Layout from "./components/Layout";

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
					<Layout children={children}/>
				</div>
			</body>
		</html>
	);
}
