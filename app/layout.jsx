import { Poppins } from 'next/font/google';
import './globals.css';

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
