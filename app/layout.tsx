import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import 'remixicon/fonts/remixicon.css';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';

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
    <html lang="en" suppressHydrationWarning className="h-full">
      <head />
      <body
        className={`${firaCode.className} antialiased flex flex-col min-h-dvh`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
