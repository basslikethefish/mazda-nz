import { DM_Serif_Text, Inter, Roboto_Mono } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-family-inter',
});

export const dmSerifText = DM_Serif_Text({
  display: 'swap',
  subsets: ['latin'],
  weight: '400',
  variable: '--font-family-dm-serif-text',
});

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-family-roboto-mono',
});
export const mazdaType = localFont({
  src: [
    {
      path: '../public/fonts/MazdaType-Regular.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/MazdaType-Medium.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/MazdaType-Bold.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/MazdaType-BoldItalic.woff2',
      weight: '500',
      style: 'italic',
    },
  ],
  variable: '--font-family-mazda-type',
  display: 'swap',
});

export const fonts = [inter, dmSerifText, robotoMono, mazdaType];
