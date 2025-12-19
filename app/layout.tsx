import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'IMS Games',
  description: 'IMS Games is a modern game development studio where technical excellence meets creative vision, crafting meaningful interactive experiences through innovation, craft, and editorial storytelling.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
