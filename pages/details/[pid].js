import Layout from '../../components/UI/Layout';
import ListingDetail from '../../components/ListingDetail';
import { useRouter } from 'next/router';

const Detail = ({ listing }) => {
  console.log(listing);

  return (
    <div className="detail-page">
      <Layout>
        <ListingDetail
          galleryID="my-test-gallery"
          listing={listing}
          images={[
            {
              largeURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
              thumbnailURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg',
              width: 1875,
              height: 2500,
            },
            {
              largeURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
              thumbnailURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
              width: 1669,
              height: 2500,
            },
            {
              largeURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
              thumbnailURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
              width: 2500,
              height: 1666,
            },
            {
              largeURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
              thumbnailURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
              width: 2500,
              height: 1666,
            },
            {
              largeURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
              thumbnailURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
              width: 2500,
              height: 1666,
            },
          ]}
        />
      </Layout>
    </div>
  );
};

export default Detail;

export async function getServerSideProps(context) {
  const req = await fetch(`${process.env.NEXTAUTH_URL}/api/listings/${context.params.pid}`);
  const response = await req.json();

  return {
    props: {
      listing: response.data,
    }, // will be passed to the page component as props
  };
}
