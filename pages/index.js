import Head from 'next/head';
import Image from 'next/image';
import LatestProjects from '../components/LatestProjects';
import Layout from '../components/Layout';
import Showcase from '../components/Showcase';

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>My Property Asia </title>
        <meta name="description" content="Built by My Property Asia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Showcase />
        <LatestProjects />
      </Layout>
    </div>
  );
}
