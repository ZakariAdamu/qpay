export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>
			AuthLayout
			{children}
		</main>
	);
}
