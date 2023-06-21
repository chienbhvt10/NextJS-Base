import { Typography } from '@mui/material';

export const metadata = {
  title: 'Home Page',
  description: 'Home Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
