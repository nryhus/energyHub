export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className="flex">
        <aside className="w-64 border-r">Sidebar</aside>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
