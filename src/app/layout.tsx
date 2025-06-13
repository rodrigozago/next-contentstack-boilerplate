import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

import './globals.css';

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Next JS ContentStack Boilerplate',
  description: 'Boilerplate',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={raleway.className}
      >
        {children}
      </body>
    </html>
  );
}
