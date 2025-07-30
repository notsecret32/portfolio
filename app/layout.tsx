import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';

import { ThemeProvider } from '@/components/theme-provider';

import { Header } from '@/components/header';
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
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${firaCode.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
