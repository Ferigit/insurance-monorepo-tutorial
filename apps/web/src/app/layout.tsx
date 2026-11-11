import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'نمونه بیمه | پروژه آموزشی',
  description: 'نمونه آموزشی رابط بیمه',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <a className="skip-link" href="#main">
          رفتن به محتوای اصلی
        </a>
        {children}
      </body>
    </html>
  );
}
