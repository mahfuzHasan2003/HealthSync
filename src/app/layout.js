import { Katibeh, Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';

const poppinsSans = Poppins({
  variable: '--font-poppins-sans',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const katibehSerif = Katibeh({
  variable: '--font-katibeh-serif',
  subsets: ['latin'],
  weight: ['400']
});

export const metadata = {
  title: 'HealthSync',
  // TODO: update the description
  description: '.....',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning={true} >
      <body
        className={`${poppinsSans.variable} ${katibehSerif.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}