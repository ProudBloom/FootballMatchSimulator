import Head from 'next/head';
import SimulationCard from '@/components/simulation-card/SimulationCard';

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
        <section className='flex h-[100vh] justify-center items-center'>
          <SimulationCard />
        </section>
      </main>
    </>
  );
}
