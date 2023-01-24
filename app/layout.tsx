import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>
          <nav className="relative w-full flex flex-wrap items-center justify-start py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
            <Link className="m-0.5 mr-2 text-xl" href="/">
              Home
            </Link>
            <Link className="m-0.5 text-xl" href="/notes">
              Notes
            </Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
