import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Match Sim</title>
        <meta name='description' content='Application for SportRadar interview' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <span className='text-red-500 underline'>Hello!</span>
      </main>
    </>
  );
}
