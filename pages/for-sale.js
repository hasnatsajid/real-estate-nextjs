import Head from 'next/head';
import AdvanceSearch from '../components/AdvanceSearch';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>Property for Sale | My Property Asia </title>
        <meta name="description" content="Built by My Property Asia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <AdvanceSearch />
      </Layout>
    </div>
  );
}
