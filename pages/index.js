import Head from 'next/head';
import Image from 'next/image';
import LatestProjects from '../components/LatestProjects';
import Layout from '../components/UI/Layout';
import Showcase from '../components/UI/Showcase';

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

/* Retrieves pet(s) data from mongodb database */
// export async function getServerSideProps() {
//   await dbConnect();

//   /* find all the data in our database */
//   const result = await Listing.find({});
//   const listings = result.map((doc) => {
//     const pet = doc.toObject();
//     pet._id = pet._id.toString();
//     return pet;
//   });

//   return { props: { pets: pets } };
// }
