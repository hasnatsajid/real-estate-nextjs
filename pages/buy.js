import Head from 'next/head';
import AdvanceSearch from '../components/AdvanceSearch';
import Layout from '../components/UI/Layout';
import Listing from '../components/Listing';

import house1 from '../public/houses/house1.jpg';
import house2 from '../public/houses/house2.jpg';

import Agent1 from '../public/realestates/newdoor.jpg';
import Agent2 from '../public/realestates/penhomes.jpg';

export default function Buy() {
  return (
    <div className="buy">
      <Head>
        <title>Property for Sale | My Property Asia </title>
        <meta name="description" content="Built by My Property Asia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <AdvanceSearch />
        <div className="listings">
          <div className="listings__container">
            <div className="category-info">
              <h3 className="mt-4">158,427 Results of Property For Sale in Thailand</h3>
              <Listing img={house1} Agent={Agent1} />
              <Listing img={house2} Agent={Agent2} />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
