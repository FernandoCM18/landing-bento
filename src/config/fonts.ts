import { Rubik, Inter, Hanken_Grotesk } from 'next/font/google';

export const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600']
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700']
});

export const grotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['500']
});