import Layout from '../../components/UI/Layout';
import ListingDetail from '../../components/ListingDetail';

const Detail = () => {
  return (
    <div className="detail-page">
      <Layout>
        <ListingDetail
          galleryID="my-test-gallery"
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
