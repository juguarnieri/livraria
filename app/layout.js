import "../styles/globals.css";
			export const metadata = {
				title: "Livraria Virtual",
			};
			export default function RootLayout({ children }) {
				return (
					<html>
						<body>{children}</body>
					</html>
    );
      }