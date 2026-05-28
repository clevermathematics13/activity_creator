import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Activity Creator',
  description: 'Generate Overleaf-ready LaTeX math packets for IB and Grade 9 students',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
