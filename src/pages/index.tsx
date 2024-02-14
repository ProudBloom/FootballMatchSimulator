import Head from 'next/head';
import SimulationCard from '@/components/simulation-card/SimulationCard';
import { useSimulationContext } from '@/hooks/useSimulationContext';

export default function Home() {
  const { matches } = useSimulationContext();

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
          {matches ? <SimulationCard matchesData={matches} /> : <span>Loading Data...</span>}
        </section>
      </main>
    </>
  );
}
