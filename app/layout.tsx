import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';

import './globals.css';

const firaCode = Fira_Code({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Alexander Skvorchevsky's Portfolio",
    default: 'Home',
  },
  description: 'My portfolio to showcase my Frontend skills',
  applicationName: 'Portfolio',
  keywords: ['Next.js', 'React', 'Typescript', 'Portfolio'],
  creator: 'Alexander Skvorchevsky',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.className} antialiased`}>{children}</body>
    </html>
  );
}
