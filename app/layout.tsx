import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';

import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const firaCode = Fira_Code({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Alexander Skvorchevskiy | Portfolio',
  description:
    'I am a web developer who uses modern technologies such as React, NextJS and others.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${firaCode.variable} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
