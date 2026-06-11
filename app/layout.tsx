import { Poppins } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Skilline – Studying Online is now much easier',
  description:
    'Skilline is an interesting platform that will teach you in a more interactive way. All-in-one cloud software for schools and educators.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.className}>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
